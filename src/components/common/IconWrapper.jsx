export const IconWrapper = ({
  children,
  className = "w-5 h-5",
  strokeWidth = 2,
}) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    {children}
  </svg>
);
