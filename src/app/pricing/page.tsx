import { getCurrentUser } from "@/auth/nextjs/currentUser"
import CheckoutForm from "@/components/CheckoutForm"
import PricingComponent from "@/components/PricingComponent"
import React from "react"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const PricingPage = async () => {
  const user = await getCurrentUser({
    withFullUser: true,
    redirectIfNotFound: true,
  })
  console.log(user)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "USD",
    metadata: { userId: user.id, productId: "premium" },
  })

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent")
  }

  // return (
  //   <div className="p-4">
  //     <CheckoutForm
  //       product="Product"
  //       clientSecret={paymentIntent.client_secret}
  //     />
  //   </div>
  // )

  return (
    <div>
      <PricingComponent
        email={user?.email}
        product="premium"
        clientSecret={paymentIntent.client_secret}
        plan={user.plan}
      />
    </div>
  )
}

export default PricingPage
