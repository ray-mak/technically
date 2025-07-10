import Link from "next/link";

import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const LinkStyles = tv({
  base: "flex flex-wrap items-center justify-center gap-3 rounded-lg border-2 px-6 py-5 font-martian-mono text-sm font-semibold uppercase leading-snug tracking-tight hover:bg-gradient-to-r active:opacity-80 md:text-md",
  variants: {
    theme: {
      primary:
        "border-neutral-900 bg-light-salmon-50 text-neutral-900 outline-neutral-700 hover:from-light-salmon-100 hover:to-light-salmon-50",
      alternate:
        "border-neutral-0 bg-transparent text-neutral-0 outline-neutral-200 hover:from-neutral-700 hover:to-neutral-900",
    },

    uppercase: {
      true: "uppercase",
    },
  },
});

type LinkVariants = VariantProps<typeof LinkStyles>;

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"a"> &
  LinkVariants;

export default function LinkStyled({
  href,
  children,
  className,
  theme,
  ...props
}: LinkProps) {
  return (
    <Link href={href} {...props} className={LinkStyles({ theme, className })}>
      {children}
    </Link>
  );
}
