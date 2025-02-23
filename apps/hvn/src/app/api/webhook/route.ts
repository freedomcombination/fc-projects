import { Stripe } from 'stripe';
import { getPayload } from 'payload';
import { headers } from 'next/headers';
import config from '@payload-config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});


async function createOrUpdateDonation(payload: any, data: any, paymentIntentId: string) {
  try {
    await payload.create({
      collection: 'donations',
      data: {
        ...data,
        stripePaymentIntentId: paymentIntentId,
      },
    });
    console.log(`Donation created for Payment Intent: ${paymentIntentId}`);
  } catch (error: any) {
    if (error.message.includes('duplicate key error')) {
      await payload.update({
        collection: 'donations',
        where: {
          stripePaymentIntentId: {
            equals: paymentIntentId,
          },
        },
        data: data,
      });
      console.log(`Donation updated for Payment Intent: ${paymentIntentId}`);
    } else {
      console.error(`Error creating/updating donation for Payment Intent: ${paymentIntentId}`, error);
    }
  }
}

async function updateDonationStatus(payload: any, paymentIntentId: string, status: 'pending' | 'paid') {
  try {
    await payload.update({
      collection: 'donations',
      where: {
        stripePaymentIntentId: {
          equals: paymentIntentId,
        },
      },
      data: {
        status: status,
      },
    });
    console.log(`Donation status updated to '${status}' for Payment Intent: ${paymentIntentId}`);
  } catch (error) {
    console.error(`Error updating donation status for Payment Intent: ${paymentIntentId}`, error);
  }
}


export const POST = async (req: Request) => {
export const POST = async (req: Request) => {
  try {
    const payload = await getPayload({ config });
    const headersList = await headers();
    const body = await req.text();
    const sig = headersList.get('stripe-signature') as string;

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    const paymentIntentId = (event.data.object as any).payment_intent || (event.data.object as any).id;
    if (!paymentIntentId) {
      console.warn('Payment Intent ID not found in event:', event);
      return Response.json({ received: false, message: 'Payment Intent ID not found' }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      const amount = session.amount_total! / 100;
      const currency = session.currency!;
      const email = session.customer_details?.email || (session.metadata?.email as string) || 'unknown';
      const isRecurring = session.subscription !== null;
      const paymentTypeValue = isRecurring ? 'monthly' : 'one-time';

      const donationData = {
        amount,
        currency,
        email,
        paymentType: paymentTypeValue,
        date: new Date(session.created * 1000),
        campaign: session.metadata?.campaignId,
        message: session.metadata?.message,
        status: 'pending',
      };
      await createOrUpdateDonation(payload, donationData, paymentIntentId);
    } else if (event.type === 'payment_intent.succeeded') {
      await updateDonationStatus(payload, paymentIntentId, 'paid');
    } else if (event.type === 'charge.succeeded') {
      await updateDonationStatus(payload, paymentIntentId, 'paid');
    }

    return Response.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ received: false, message: (err as Error)?.message }, { status: 400 });
  }
};
