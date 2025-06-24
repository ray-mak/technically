"use client"
import React from "react"
import Modal from "./Modal"
import CheckoutModal from "./CheckoutModal"

type PricingComponentProps = {
  email: string | null | undefined
  product: string
  clientSecret: string
  plan: string
}

const PricingComponent = ({
  email,
  product,
  clientSecret,
  plan,
}: PricingComponentProps) => {
  const [userModal, setUserModal] = React.useState(false)
  const [emailModal, setEmailModal] = React.useState(false)
  const [checkoutModal, setCheckoutModal] = React.useState(false)

  function handlePremiumUpdgrade() {
    if (!email) {
      setUserModal(true)
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailModal(true)
    } else {
      setCheckoutModal(true)
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex gap-2">
        <div className="border p-4">
          <p>Premium Plan</p>
          <button
            onClick={handlePremiumUpdgrade}
            className="mt-4 bg-blue-600 text-white px-4 py-2"
          >
            Upgrade Now
          </button>
        </div>
        <div className="border p-4">
          <p>Pro Plan</p>
        </div>
      </div>
      {userModal && (
        <Modal
          closeModal={() => setUserModal(false)}
          title="Oops!"
          description="You need to be logged in to do that!"
          link="/login"
          linkText="Log In"
        />
      )}
      {emailModal && (
        <Modal
          closeModal={() => setEmailModal(false)}
          title="Oops!"
          description="You need to have a valid email in to do that!"
          link="/dashboard"
          linkText="Edit Email"
        />
      )}
      {checkoutModal && (
        <CheckoutModal
          closeModal={() => setCheckoutModal(false)}
          clientSecret={clientSecret}
          product={product}
          plan={plan}
        />
      )}
    </div>
  )
}

export default PricingComponent
