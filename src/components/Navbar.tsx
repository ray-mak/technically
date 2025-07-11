import React from "react"
import Link from "next/link"
import ThemeSwitch from "./Themeswitch"
import HamburgerMenu from "./HamburgerMenu"
import { getCurrentUser } from "@/auth/nextjs/currentUser"

const Navbar = async () => {
  const user = await getCurrentUser({ withFullUser: true })
  return (
    <nav className="navbar fixed top-0 z-20 flex w-full h-20 p-4 md:p-0 items-center justify-center bg-white dark:bg-slate-800 shadow-xl">
      <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl flex items-center justify-center">
        <Link href="/" className={`text-4xl font-bold`}>
          Technically
        </Link>
        <HamburgerMenu userId={user?.id} />
        <ThemeSwitch />
      </div>
    </nav>
  )
}

export default Navbar
