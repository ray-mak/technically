import React, { useEffect, useRef } from "react"
import CheckoutForm from "./CheckoutForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

type CheckoutModalProps = {
  closeModal: () => void
  clientSecret: string
  product: string
  plan: string
}

const CheckoutModal = ({
  closeModal,
  clientSecret,
  product,
  plan,
}: CheckoutModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 flex w-full h-full items-center justify-center p-2 sm:px-8">
        <div
          ref={modalRef}
          className="w-full sm:w-auto flex flex-col gap-4 border p-6 bg-white rounded-lg"
        >
          <CheckoutForm
            product={product}
            clientSecret={clientSecret}
            plan={plan}
          />
        </div>
      </div>
      <div className="w-full h-full fixed top-0 left-0 opacity-70 bg-black z-40"></div>
      <button
        className="w-[50px] h-[50px] rounded-full fixed top-5 right-5 bg-white z-50 flex items-center justify-center hover:cursor-pointer"
        onClick={closeModal}
      >
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
    </div>
  )
}

export default CheckoutModal
