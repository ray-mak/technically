import React from "react"
import HeroSection2 from "./_components/HeroSection2"
import FeaturesSection2 from "./_components/FeaturesSection2"
import CommunitySection from "./_components/CommunitySection"
import JourneySteps from "./_components/JourneySteps"
import PricingSection from "./_components/PricingSection"
import TestimonialSection from "./_components/TestimonialSection"

const page = () => {
  return (
    <div className="grid grid-cols-[1fr,minmax(0,34rem),1fr] grid-rows-[repeat(3,auto)] gap-x-4 gap-y-12 md:grid-cols-[1fr,minmax(0,48rem),1fr] md:gap-x-8 md:gap-y-16 lg:grid-cols-[1fr,minmax(0,73.125rem),1fr] lg:gap-12 lg:gap-y-20">
      <div className="col-start-1 col-end-4 row-span-2 row-start-1 bg-neutral-100 hero-main-bg"></div>
      <div className="col-start-2 row-span-1 row-start-1 pt-6 md:pt-8"></div>
      <div className="col-start-2 row-span-2 row-start-2 grid grid-rows-subgrid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
        <HeroSection2 />
        <div className="grid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
          <FeaturesSection2 />
          <CommunitySection />
          <JourneySteps />
          <PricingSection />
          <TestimonialSection />
        </div>
      </div>
    </div>
  )
}

export default page
