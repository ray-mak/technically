import { getCurrentUser } from "@/auth/nextjs/currentUser"
import PricingComponent from "@/components/PricingComponent"
import React from "react"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const PricingPage = async () => {
  const user = await getCurrentUser({
    withFullUser: true,
  })
  console.log(user)

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 1000,
  //   currency: "USD",
  // })

  // if (paymentIntent.client_secret == null) {
  //   throw Error("Stripe failed to create payment intent")
  // }
  return (
    <div>
      <PricingComponent email={user?.email} />
    </div>
  )
}

export default PricingPage
