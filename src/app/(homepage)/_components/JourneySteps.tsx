import React from "react";

const JourneySteps = () => {
  return (
    <section className="bg-custom grid gap-8 rounded-xl bg-neutral-100 px-4 py-16 font-martian-mono text-neutral-900 md:gap-12 md:px-8 md:py-20 lg:justify-items-center lg:gap-16 lg:px-16">
      <h2 className="text-2xl font-bold leading-snug tracking-tighter md:text-5xl lg:max-w-[32rem] lg:text-center">
        Your tech reading journey
      </h2>
      <ol className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:gap-12">
        <li className="grid gap-5 text-sm font-semibold leading-snug tracking-tight md:gap-6 md:text-lg lg:flex-1 lg:basis-[14rem]">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-neutral-900 md:size-10">
            1
          </span>
          <p>Choose your membership tier</p>
        </li>

        <li className="grid gap-5 text-sm font-semibold leading-snug tracking-tight md:gap-6 md:text-lg lg:flex-1 lg:basis-[14rem]">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-neutral-900 md:size-10">
            2
          </span>
          <p>Get your monthly book selection</p>
        </li>

        <li className="grid gap-5 text-sm font-semibold leading-snug tracking-tight md:gap-6 md:text-lg lg:flex-1 lg:basis-[14rem]">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-neutral-900 md:size-10">
            3
          </span>
          <p>Join our discussion forums</p>
        </li>

        <li className="grid gap-5 text-sm font-semibold leading-snug tracking-tight md:gap-6 md:text-lg lg:flex-1 lg:basis-[14rem]">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-neutral-900 md:size-10">
            4
          </span>
          <p>Attend exclusive meetups</p>
        </li>
      </ol>
    </section>
  );
};

export default JourneySteps;
