"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React, { use, useEffect, useRef } from "react"

type ModalProps = {
  title: string
  description: string
  closeModal: () => void
  link: string
  linkText: string
}

const Modal = ({
  title,
  description,
  closeModal,
  link,
  linkText,
}: ModalProps) => {
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
      <div className="relative z-50 flex w-full h-full items-center justify-center px-8">
        <div
          ref={modalRef}
          className="w-full sm:w-auto flex flex-col gap-4 border p-6 bg-white rounded-lg"
        >
          <div className="flex flex-col gap-8 items-center py-2">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-center">{description}</p>
            <Link
              href={link}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              {linkText}
            </Link>
          </div>
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

export default Modal
