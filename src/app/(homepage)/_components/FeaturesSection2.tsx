import Image from "next/image"
import React from "react"

const FeaturesSection2 = () => {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
      <div className="grid gap-6 md:gap-[2.125rem] lg:col-start-2 lg:max-w-[34rem]">
        <h2 className="text-2xl font-bold leading-snug tracking-tighter text-neutral-900 md:text-4xl lg:max-w-[32rem]">
          Build Features Instead of Solving Puzzles
        </h2>
        <ul className="grid gap-4 md:gap-6">
          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  Realistic Coding Challenges
                </p>
                <p className="mt-1 font-inter text-gray-700 dark:text-gray-200">
                  Add features, fix bugs, and improve code just like you would
                  on the job.
                </p>
              </div>
            </div>
          </li>

          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <div className="check-box relative p-4">
              <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                AI-Powered Mock Interview
              </p>
              <p className="mt-1 font-inter text-gray-700 dark:text-gray-200">
                Practice technical and behavioral interviews with AI feedback
                tailored to the job and your experience.
              </p>
            </div>
          </li>

          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <div className="check-box relative p-4">
              <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                Debugging Drills
              </p>
              <p className="mt-1 font-inter text-gray-700 dark:text-gray-200">
                Sharpen your problem-solving skills with targeted bug hunts
                inside complex, realistic front-end and full-stack apps.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <Image
        src="/images/image-read-together-desktop.webp"
        alt="people seated in a circle happily reading books"
        className="rounded-2xl lg:col-start-1 lg:row-start-1"
        width={600}
        height={600}
      ></Image>
    </section>
  )
}

export default FeaturesSection2
