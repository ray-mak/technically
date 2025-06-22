"use client"
import Link from "next/link"
import React from "react"
import Modal from "./Modal"

export const plans = [
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aFafZj5DjaDGa4a2Ct7AI01"
        : "",
    priceId:
      process.env.NODE_ENV === "development" ? "prod_SXzAEyO9OlHSnV" : "",
    name: "Premium Plan",
    price: 7.99,
    duration: "monthly",
  },
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aFa3cx6Hn4fifougtj7AI02"
        : "",
    priceId:
      process.env.NODE_ENV === "development" ? "prod_SXzCmYKo5yVQxw" : "",
    name: "Pro Plan",
    price: 24.99,
    duration: "monthly",
  },
]
const PricingComponent = ({ email }: { email: string | null | undefined }) => {
  const [userModal, setUserModal] = React.useState(false)
  const [emailModal, setEmailModal] = React.useState(false)

  function handlePremiumUpdgrade() {
    if (!email) {
      setUserModal(true)
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailModal(true)
    } else {
      window.location.href = plans[0].link + `?prefilled_email=` + email
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
          {/* <div className="border mt-4 bg-blue-600 text-white">
            {email ? (
              <Link
                href={plans[0].link + `?prefilled_email=` + email}
                className="px-4 "
              >
                Upgrade Now
              </Link>
            ) : (
              <button onClick={() => setUserModal(true)}>Upgrade Now</button>
            )}
          </div> */}
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
    </div>
  )
}

export default PricingComponent
