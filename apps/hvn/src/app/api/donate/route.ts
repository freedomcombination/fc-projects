import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
})

export const POST = async (req: Request) => {
  const { amount, cancelUrl, email, successUrl, type } = await req.json()

  const customer = await stripe.customers.list({ email })
  let customerID = customer.data.length > 0 ? customer.data[0]?.id : ''

  if (!customerID) {
    const newCustomer = await stripe.customers.create({ email })
    customerID = newCustomer.id
  }

  const paymentMode = type === 'monthly' ? 'subscription' : 'payment'

  const payment = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    customer: customerID,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Donation',
          },
          recurring: type === 'monthly' ? { interval: 'month' } : undefined,
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      email,
      type: 'donation',
    },
    mode: paymentMode,
    payment_method_types: ['ideal', 'card'],
    success_url: successUrl,
  })

  return Response.json({ url: payment.url }, { status: 200 })
}
