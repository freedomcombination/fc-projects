import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'; // Payload CMS'i import ediyoruz
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

export const POST = async (
  req: Request,
) => {
  try {
    const payload = await getPayload({ config })
    const headersList = await headers()
    const body = await req.text()
    const sig = headersList.get('stripe-signature') as string
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    const tempBody = JSON.parse(body)
    console.log({body: {...tempBody, data: JSON.stringify(tempBody.data, null, 2)}})

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent  
      
      await payload.create({
        collection: 'donations',
        data: {
          amount: paymentIntent.amount / 100, // Stripe amounts are in cents
          currency: paymentIntent.currency,
          email: paymentIntent.metadata.email,
          paymentType: paymentIntent.metadata.type,
          stripePaymentIntentId: paymentIntent.id,
          date: new Date(),
          campaign: paymentIntent.metadata.campaignId, // Eğer kampanya ID'si varsa
          message: paymentIntent.metadata.message, // Eğer bağışçı mesajı varsa
        },
      })
    }

    return Response.json({ received: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return Response.json({ received: false, message: (err as Error)?.message }, { status: 400 })
  }
}
