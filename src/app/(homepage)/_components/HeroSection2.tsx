import Image from "next/image"
import Link from "next/link"
import LinkStyled from "./LinkStyled"

export default function HeroSection2() {
  return (
    <section className="grid gap-16 pb-20 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="grid gap-8 lg:max-w-[36rem]">
        <div className="grid gap-6">
          <h1 className="bg-gradient-text bg-clip-text font-martian-mono text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-7xl">
            Nail Your Next Tech Interview
          </h1>
          <p className="font-sans text-lg text-neutral-900 font-semibold">
            Practice full-stack technical interviews with{" "}
            <strong>real-world</strong> coding challenges, not brain teasers.
            Improve your interview process with AI powered mock interviews and
            feedback.
          </p>
        </div>

        <div className="grid max-w-[25rem] gap-5">
          {/* <Link
            href="/interview"
            className="font-bold mt-8 inline-flex justify-center items-center rounded-lg border-2  px-6 py-5 uppercase border-neutral-900 bg-light-salmon-50 text-neutral-900 outline-neutral-700 hover:from-light-salmon-100 hover:to-light-salmon-50"
          >
            <span>Get Started</span>
          </Link> */}
          <LinkStyled
            href="/interview"
            theme="primary"
            className="group text-lg font-bold"
          >
            Get Started
          </LinkStyled>
          {/* 
          <div className="grid grid-cols-[auto_1fr] items-center justify-items-start gap-x-3 gap-y-1">
            <Image src={avatars} alt="" className="row-span-2 max-w-28" />
            <FiveStarIcons />
            <p className="col-start-2 font-martian-mono text-xs leading-tight tracking-tight">
              200+ developers joined already
            </p>
          </div> */}
        </div>
      </div>

      <Image
        src="/images/image-not-average-desktop.webp"
        width={500}
        height={500}
        alt="Three people looking at the contents of a book inside a library."
        className="rounded-2xl"
      />
    </section>
  )
}
