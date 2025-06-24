"use client"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import React from "react"

const PurchaseSuccessPage = () => {
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push("/dashboard")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 text-5xl mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          Purchase Successful
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. A confirmation email has been sent to
          your inbox.
        </p>
        <button
          onClick={handleBackToDashboard}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default PurchaseSuccessPage
