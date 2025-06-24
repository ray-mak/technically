import { db } from "@/lib/db"
import { Plans } from "@prisma/client"
import { NextRequest } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const event = stripe.webhooks.constructEvent(
      await req.text(),
      req.headers.get("stripe-signature") as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    )

    if (
      event.type === "charge.succeeded" ||
      event.type === "payment_intent.succeeded"
    ) {
      const charge = event.data.object
      const productId = charge.metadata.productId as Plans
      const userId = charge.metadata.userId
      const pricePaidInCents = charge.amount

      if (!charge.metadata?.userId || !charge.metadata?.productId) {
        return new Response("Missing metadata", { status: 400 })
      }

      const user = await db.user.findFirst({
        where: {
          id: userId,
        },
      })

      if (!user) {
        return new Response("User not found", { status: 404 })
      }

      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          plan: productId,
        },
      })

      //TODO: Send email confirmation
    }
    return new Response("Webhook processed", { status: 200 })
  } catch (error: any) {
    console.error("Webhook error: ", error)
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }
}
