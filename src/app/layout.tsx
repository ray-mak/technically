import type { Metadata } from "next"
import "./globals.css"
import { IBM_Plex_Mono, Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import { Providers } from "@/providers"

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Technically - Real-World Coding Challenges",
  description: "Real-world coding challenges to sharpen and test your skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} ${inter.variable} font-ibm`}>
        <Providers>
          <Navbar />
          <main className="mt-20">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
