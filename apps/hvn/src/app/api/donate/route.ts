import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

export const POST = async (
  req: Request,
) => {
  const { amount, email, type, successUrl, cancelUrl } = await req.json();

  // Check if customer exists by email
  const customer = await stripe.customers.list({ email });
  let customerID = customer.data.length > 0 ? customer.data[0]?.id : '';

  // Create a new customer if not exists
  if (!customerID) {
    const newCustomer = await stripe.customers.create({ email });
    customerID = newCustomer.id;
  }

  // Define payment mode
  const paymentMode = type === 'monthly' ? 'subscription' : 'payment';

  // Create a Stripe Checkout session
  const payment = await stripe.checkout.sessions.create({
    payment_method_types: ['ideal', 'card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amount * 100, // Convert to cents
          recurring: type === 'monthly' ? { interval: 'month' } : undefined,
        },
        quantity: 1,
      },
    ],
    metadata: {
      email,
      type: 'donation',
    },
    mode: paymentMode,
    customer: customerID,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return Response.json({ url: payment.url }, { status: 200 });
}
