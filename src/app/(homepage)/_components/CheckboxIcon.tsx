export default function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      className={className}
    >
      <rect
        width="26"
        height="26"
        x="1"
        y="1"
        stroke="currentColor"
        strokeWidth="2"
        rx="3"
      />
      <path
        fill="currentColor"
        d="m19.06 6.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54h-2.6c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
      />
    </svg>
  );
}
