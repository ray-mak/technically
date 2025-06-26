import Image from "next/image"

const FeaturesSection = () => {
  return (
    <div className="-mt-8 md:-mt-12 lg:-mt-16 pb-12 flex items-center justify-center transition-colors duration-300">
      <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 p-4 md:p-0">
        <div className="relative flex flex-col items-center justify-center gap-4 border border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 hover:border-teal-700 hover:shadow-xl  transition-colors duration-300">
          <div>
            <Image
              src="/images/seo-icon.webp"
              width={70}
              height={70}
              alt="icon of seo"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            Improve SEO
          </h2>
          <p className="text-center text-gray-800 dark:text-gray-200">
            Your website will be built to rank high on search engines. We
            incorporate best-in-class SEO practices to ensure your site is
            easily discoverable.
          </p>
          <div className="absolute -top-3 h-3 bg-lightTeal dark:bg-teal-700 w-5/6 justify-center"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 border border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 hover:border-teal-700 hover:shadow-xl  transition-colors duration-300">
          <div>
            <Image
              src="/images/responsive-icon.webp"
              width={70}
              height={70}
              alt="icon of different devices"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            Fully Responsive
          </h2>
          <p className="text-center text-gray-800 dark:text-gray-200">
            Allow clients to access your website anywhere! It will look great
            and function seamlessly on any device - whether it{"'"}s a
            smartphone, tablet, or desktop.
          </p>
          <div className="absolute -top-3 h-3 bg-lightTeal dark:bg-teal-700 w-5/6 justify-center"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 border border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 hover:border-teal-700 hover:shadow-xl  transition-colors duration-300">
          <div>
            <Image
              src="/images/funnel-icon.webp"
              width={70}
              height={70}
              alt="icon of a funnel"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            User Conversion
          </h2>
          <p className="text-center text-gray-800 dark:text-gray-200">
            Designed with your customers in mind, we map out a strategic user
            journey that guides visitors through the site, turning casual
            browsers into leads.
          </p>
          <div className="absolute -top-3 h-3 bg-lightTeal dark:bg-teal-700 w-5/6 justify-center"></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
