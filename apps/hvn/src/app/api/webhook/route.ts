import config from '@payload-config'
import { headers } from 'next/headers'
import { BasePayload, getPayload } from 'payload'
import { Stripe } from 'stripe'

import { Donation } from '../../../../payload-types'

const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2025-02-24.acacia',
})

async function createOrUpdateDonation(
  payload: BasePayload,
  data: Omit<Donation, 'id' | 'createdAt' | 'updatedAt' | 'stripePaymentIntentId'>,
  paymentIntentId: string,
) {
  try {
    await payload.create({
      collection: 'donations',
      data: {
        ...data,
        stripePaymentIntentId: paymentIntentId,
      },
    })
    console.log(`Donation created for Payment Intent: ${paymentIntentId}`)
  } catch (error: unknown) {
    if ((error as { message: string }).message.includes('duplicate key error')) {
      await payload.update({
        collection: 'donations',
        data: data,
        where: {
          stripePaymentIntentId: {
            equals: paymentIntentId,
          },
        },
      })
      console.log(`Donation updated for Payment Intent: ${paymentIntentId}`)
    } else {
      console.error(`Error creating/updating donation for Payment Intent: ${paymentIntentId}`, error)
    }
  }
}

async function updateDonationStatus(payload: BasePayload, paymentIntentId: string, status: 'pending' | 'paid') {
  try {
    await payload.update({
      collection: 'donations',
      data: {
        status: status,
      },
      where: {
        stripePaymentIntentId: {
          equals: paymentIntentId,
        },
      },
    })
    console.log(`Donation status updated to '${status}' for Payment Intent: ${paymentIntentId}`)
  } catch (error) {
    console.error(`Error updating donation status for Payment Intent: ${paymentIntentId}`, error)
  }
}

export const POST = async (req: Request) => {
  try {
    const payload = await getPayload({ config })
    const headersList = await headers()
    const body = await req.text()
    const sig = headersList.get('stripe-signature') as string

    const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)

    const paymentIntentId =
      (event.data.object as { payment_intent: string }).payment_intent || (event.data.object as { id: string }).id
    if (!paymentIntentId) {
      console.warn('Payment Intent ID not found in event:', event)
      return Response.json({ message: 'Payment Intent ID not found', received: false }, { status: 400 })
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      const amount = session.amount_total! / 100
      const currency = session.currency!
      const email = session.customer_details?.email || (session.metadata?.email as string) || 'unknown'
      const isRecurring = session.subscription !== null
      const paymentTypeValue = isRecurring ? 'monthly' : 'one-time'

      const donationData: Omit<Donation, 'id' | 'createdAt' | 'updatedAt' | 'stripePaymentIntentId'> = {
        amount,
        campaign: session.metadata?.campaignId,
        currency,
        date: new Date(session.created * 1000).toISOString(),
        email,
        message: session.metadata?.message,
        paymentType: paymentTypeValue,
        status: 'pending',
      }
      await createOrUpdateDonation(payload, donationData, paymentIntentId)
    } else if (event.type === 'payment_intent.succeeded') {
      await updateDonationStatus(payload, paymentIntentId, 'paid')
    } else if (event.type === 'charge.succeeded') {
      await updateDonationStatus(payload, paymentIntentId, 'paid')
    }

    return Response.json({ received: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return Response.json({ message: (err as Error)?.message, received: false }, { status: 400 })
  }
}
