import { useId } from "react";

export function CornerOverlay({ showBrackets = false }) {
  const id = useId();
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15 dark:opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-secondary-color" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>

      {showBrackets && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-t-2 border-l-2 border-primary/70 z-10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-b-2 border-r-2 border-primary/70 z-10"
          />
        </>
      )}
    </>
  );
}
