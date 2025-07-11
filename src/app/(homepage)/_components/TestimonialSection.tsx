import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TestimonialSection() {
  return (
    <section className="my-4 grid max-w-[60.625rem] justify-items-start gap-8 lg:justify-items-center">
      {/* Font awesome start icon */}
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
      </div>

      <blockquote className="font-martian-mono text-xl font-semibold leading-tighter tracking-tight text-neutral-900 md:text-2xl md:leading-snug lg:text-center">
        <p>
          &quot;This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!&quot;
        </p>
      </blockquote>
      <p className="lg:text-center">Sarah Chen, Software Architect</p>
    </section>
  )
}
