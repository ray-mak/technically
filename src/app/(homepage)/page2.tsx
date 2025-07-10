import { getCurrentUser } from "@/auth/nextjs/currentUser"
import HeroSection from "./_components/HeroSection"
import FeaturesSection from "./_components/FeaturesSection"
import ServicesSection from "./_components/ServicesSection"

export default async function Home() {
  const user = await getCurrentUser({ withFullUser: true })
  console.log(user)

  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
    </div>
  )
}
