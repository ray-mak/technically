import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative hero-section flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 p-6 md:p-0 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
            Small Business Web Design &amp; Development
          </h1>
          <p className="md:text-lg">
            We don{"'"}t use page builders like Wix or Wordpress - Every line is
            hand-coded to optimize performance and SEO.
          </p>
          <p className="md:text-lg">
            Achieve better Google rankings with a hand-crafted website built to
            boost your visibility and growth starting at{" "}
            <span className="font-semibold">$50/mo</span>.
          </p>
          <div>
            <Link
              href="#membership"
              className=" mt-8 inline-flex items-center gap-4 rounded-lg border-2 border-neutral-900 bg-light-salmon-50 px-6 py-5 uppercase bg-neutral-300 font-bold hover:bg-neutral-400"
            >
              <span>Review membership options </span>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 w-full h-60"></div>
      </div>
      <div className="pointer-events-none absolute w-full h-full grid lg:grid-cols-4">
        <div className="col-span-2"></div>
        <div className="relative col-span-2 flex">
          <div className="w-full h-full"></div>
          <div className="hidden lg:block w-full h-full bg-slate-600"></div>
          <div className="w-full h-full absolute flex items-center justify-center">
            <Image
              src="/images/hero-img.webp"
              width={500}
              height={500}
              alt="picture of someone getting a massage"
              className="w-1/2 md:w-1/3 lg:w-[65%] rounded-r-3xl rounded-tl-[4rem] md:mb-12"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
