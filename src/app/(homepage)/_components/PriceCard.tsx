import { twMerge } from "tailwind-merge"

import CheckboxIcon from "./CheckboxIcon"
import LinkStyled from "./LinkStyled"

export default function PriceCard({
  className,
  planName,
  price,
  benefits,
  linkText = "Subscribe Now",
}: {
  className?: string
  planName: string
  price: React.ReactNode
  benefits: string[]
  linkText?: string
}) {
  return (
    <div
      className={twMerge(
        "grid gap-8 rounded-lg border border-neutral-200 p-6",
        className
      )}
    >
      <div className="grid gap-6">
        <h3
          className={`${
            planName == "Lifetime" ? "text-4xl" : `text-2xl`
          } font-bold leading-tighter tracking-tight text-neutral-900`}
        >
          {planName}
        </h3>

        {price}

        <hr className="h-[0.0625rem] border-none bg-neutral-200" />

        <ul className="grid gap-4">
          {benefits?.map((benefit, index) => (
            <li key={index}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <CheckboxIcon className="size-6 text-neutral-700" />
                <p>{benefit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <LinkStyled href="#" theme="primary">
        {linkText}
      </LinkStyled>
    </div>
  )
}
