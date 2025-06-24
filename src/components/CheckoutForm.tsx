"use client"
import React, { FormEvent, useEffect, useState } from "react"
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

type CheckoutFormProps = {
  product: string
  clientSecret: string
  plan: string
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
)

const CheckoutForm = ({ product, clientSecret, plan }: CheckoutFormProps) => {
  return (
    <div className="max-w-2xl w-full mx-auto space-y-8 sm:p-4 bg-white rounded">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Premium</h1>
        <p className="text-gray-600 text-sm sm:text-lg sm:font-semibold">
          $24.99
        </p>
        <p className="text-sm sm:text-base">
          Description for premium product. One time purchase
        </p>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form plan={plan} product={product} />
      </Elements>
    </div>
  )
}

function Form({ product, plan }: { product: string; plan: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const [paymentElementOptions, setPaymentElementOptions] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [orderExists, setOrderExists] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768 // or use your own breakpoint
    const layout = isMobile
      ? { type: "accordion", default: "card", defaultCollapsed: true }
      : { type: "tabs", default: "card", defaultCollapsed: false }

    setPaymentElementOptions({ layout })
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    //check if user already purchased this
    if (plan === "premium") {
      setOrderExists(true)
      setErrorMessage("You already own the premium plan.")
      setIsLoading(false)
      return
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message)
        } else {
          setErrorMessage("An unexpected error occurred")
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={paymentElementOptions} />
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 w-full rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={stripe == null || elements == null || isLoading}
      >
        {isLoading ? "Purchasing..." : "Purchase"}
      </button>
    </form>
  )
}

export default CheckoutForm
