import Image from "next/image"
import React from "react"

const CommunitySection = () => {
  return (
    <section className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20">
      <div className="grid gap-6 lg:max-w-[34rem]">
        <h2 className="text-2xl font-bold leading-snug tracking-tighter text-neutral-900 md:text-4xl lg:max-w-[34rem]">
          More than just data structures and algorithms
          <span className="relative inline-block">
            {/* <Image
              src="/images/pattern-circle.png"
              alt=""
              className="absolute -z-10 -translate-y-[2.5rem] scale-[1.4] select-none md:-translate-y-[3.5rem]"
              width={100}
              height={100}
            /> */}
          </span>
        </h2>
        <p className="font-inter text-gray-700 dark:text-gray-200">
          As a front-end or full-stack developer, your strengths go beyond
          solving abstract puzzles, you build real features, debug tricky UI
          bugs, and make user experiences shine.
        </p>
        <p className="font-inter text-gray-700 dark:text-gray-200">
          Instead of focusing only on algorithms, we help you sharpen the skills
          that matter in real jobs: building features, fixing bugs, and
          practicing interviews that reflect your actual day-to-day as a
          developer.
        </p>
      </div>

      <Image
        src="/images/image-not-average-desktop.webp"
        alt="Old man and two women readings books in a library."
        className="rounded-2xl"
        width={700}
        height={700}
      />
    </section>
  )
}

export default CommunitySection
