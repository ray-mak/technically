import React from "react"
import PriceCard from "./PriceCard"

const PricingSection = () => {
  return (
    <section className="grid w-full gap-6 md:max-w-[60.625rem] md:gap-10 lg:gap-16">
      <h2
        id="membership-options"
        className="text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-5xl lg:justify-self-center"
      >
        Membership Options
      </h2>
      <div className="flex flex-col flex-wrap gap-6 md:flex-row md:items-center">
        <PriceCard
          planName="Starter"
          price={
            <p>
              <span className="font-martian-mono text-2xl font-semibold leading-snug tracking-tight text-neutral-900">
                Free
              </span>{" "}
            </p>
          }
          benefits={["8 Practice Questions", "Access to Free Challenges"]}
          className="md:flex-1 md:basis-[21.25rem] lg:basis-[17rem]"
        />
        <PriceCard
          planName="Lifetime"
          price={
            <p>
              <span className="font-martian-mono text-2xl font-semibold leading-snug tracking-tight text-neutral-900">
                $29
              </span>{" "}
              one-time
            </p>
          }
          benefits={[
            "Unlimited Practice Questions",
            "Access to All Challenges",
          ]}
          className="bg-neutral-100 bg-[url('/images/pattern-glow.svg')] bg-no-repeat md:flex-1 md:basis-[21.25rem] lg:basis-[21rem] lg:py-10"
        />
        <PriceCard
          planName="Pro"
          price={
            <p>
              <span className="font-martian-mono text-2xl font-semibold leading-snug tracking-tight text-neutral-900">
                $3.99
              </span>{" "}
              /month
            </p>
          }
          benefits={["Unlimited Practice Questions", "2 Challenges /Month"]}
          linkText="Talk to Us"
          className="md:flex-1 md:basis-[21.25rem] lg:basis-[17rem]"
        />
      </div>
    </section>
  )
}

export default PricingSection
