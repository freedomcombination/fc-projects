import type { StripeWebhookHandler } from '@payloadcms/plugin-stripe/types'
import { Stripe } from 'stripe'

async function createOrUpdateDonation(payload: any, data: any, paymentIntentId: string) {
  try {
    await payload.create({
      collection: 'donations',
      data: {
        ...data,
        stripePaymentIntentId: paymentIntentId,
      },
    })
    console.log(`Donation created for Payment Intent: ${paymentIntentId}`)
  } catch (error: any) {
    if (error.message.includes('duplicate key error')) {
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

async function updateDonationStatus(payload: any, paymentIntentId: string, status: 'pending' | 'paid') {
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

export const stripeWebhookHandler: StripeWebhookHandler = async ({ event, payload }) => {
  const paymentIntentId = (event.data.object as any).payment_intent || (event.data.object as any).id
  if (!paymentIntentId) {
    console.warn('Payment Intent ID not found in event:', event)
  }
  console.log({ type: event.type, data: event.data.object })

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session

      const amount = session.amount_total! / 100
      const currency = session.currency!
      const email = session.customer_details?.email || (session.metadata?.email as string) || 'unknown'
      const isRecurring = session.subscription !== null
      const paymentTypeValue = isRecurring ? 'monthly' : 'one-time'

      const donationData = {
        amount,
        campaign: session.metadata?.campaignId,
        currency,
        date: new Date(session.created * 1000),
        email,
        message: session.metadata?.message,
        paymentType: paymentTypeValue,
        status: 'pending',
      }
      await createOrUpdateDonation(payload, donationData, paymentIntentId)
      break
    case 'payment_intent.succeeded':
    case 'charge.succeeded':
      await updateDonationStatus(payload, paymentIntentId, 'paid')
      break
  }
}
