import { forwardRef } from "react";

/**
 * Standard Card Component
 */
export const Card = forwardRef(function Card(
  {
    children,
    variant = "default",
    hoverable = true,
    padding = "none",
    as: Component = "article",
    className = "",
    onClick,
    ...props
  },
  ref,
) {
  const baseClasses = "rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group";

  const variants = {
    default: "bg-surface border border-line/70 dark:border-line/60 shadow-sm",
    glass: "bg-surface/80 dark:bg-dark-surface/80 backdrop-blur-xl border border-line/70 dark:border-line/60 shadow-xl",
    outlined: "bg-transparent border-2 border-line/80 dark:border-line/60",
    ghost: "bg-surface/40 dark:bg-dark-surface/40 border border-transparent",
    flat: "bg-surface dark:bg-dark-surface border border-line/50",
  };

  const paddings = {
    none: "",
    xs: "p-3 sm:p-4 md:p-5 lg:p-6",
    sm: "p-4 sm:p-5 md:p-6 lg:p-7",
    md: "p-6 sm:p-7 md:p-8 lg:p-9",
    lg: "p-7 sm:p-8 md:p-9 lg:p-10",
    xl: "p-8 sm:p-9 md:p-10 lg:p-11",
  };

  const hoverClasses = hoverable
    ? "hover:border-secondary-soft/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <Component
      ref={ref}
      className={`${baseClasses} ${variants[variant] || variants.default} ${paddings[padding] || ""} ${hoverClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
});

/**
 * CardHeader Component
 * Renders top section with optional hairline bottom divider
 */
export const CardHeader = ({ children, hasDivider = true, className = "", ...props }) => (
  <div
    className={`flex items-center justify-between ${
      hasDivider ? "border-b border-line/60 pb-5 mb-6 sm:mb-7" : "mb-4"
    } ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * CardTag Component
 * Monospace category/status indicator on the top-left of the card header.
 */
export const CardTag = ({ children, variant = "primary", icon = "✦", className = "", ...props }) => {
  const tagColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    neutral: "text-secondary-color",
  };

  return (
    <div
      className={`flex items-center gap-2 font-mono text-xs font-bold tracking-wider ${
        tagColors[variant] || "text-primary"
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};

/**
 * CardTitle Component
 * Heading with typography hierarchy and subtle group-hover color accent.
 */
export const CardTitle = ({ children, size = "default", as: Component = "h3", className = "", ...props }) => {
  const sizes = {
    sm: "text-lg lg:text-xl font-bold",
    default: "text-xl lg:text-2xl font-extrabold",
    lg: "text-2xl lg:text-3xl font-extrabold",
  };

  return (
    <Component
      className={`text-primary-color tracking-tight mb-2 group-hover:text-primary transition-colors ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * CardSummary Component
 * Monospace commentary prefix (`// ...`) directly underneath the title.
 */
export const CardSummary = ({
  children,
  variant = "primary",
  prefix = "// ",
  className = "",
  as: Component = "p",
  ...props
}) => {
  const variantColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    neutral: "text-secondary-color",
  };

  return (
    <Component
      className={`text-xs sm:text-sm font-mono font-medium mb-4 ${
        variantColors[variant] || "text-primary"
      } ${className}`}
      {...props}
    >
      {prefix}
      {children}
    </Component>
  );
};

export const CardSubtitle = CardSummary;

/**
 * CardDescription Component
 * Body paragraph for descriptive narrative.
 */
export const CardDescription = ({ children, className = "", as: Component = "p", ...props }) => (
  <Component
    className={`text-sm sm:text-base text-secondary-color leading-relaxed font-normal ${className}`}
    {...props}
  >
    {children}
  </Component>
);

/**
 * CardContent / CardBody Component
 * Inner flex container slot for card body elements.
 */
export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`flex-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody = CardContent;

/**
 * CardFooter Component
 * Bottom slot with hairline divider for telemetry metrics and metadata.
 */
export const CardFooter = ({ children, hasDivider = true, className = "", ...props }) => (
  <div
    className={`flex items-center justify-between text-xs font-mono ${
      hasDivider ? "border-t border-line/60 pt-6 mt-8 sm:mt-10" : "mt-6"
    } ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * CardBadge Component
 * Pill or tag badge supporting 60-30-10 semantic variants.
 */
export const CardBadge = ({ children, variant = "primary", icon, className = "", ...props }) => {
  const badgeVariants = {
    primary: "bg-primary/15 text-primary border-primary/40",
    secondary: "bg-secondary/15 text-secondary border-secondary/40",
    tertiary: "bg-tertiary/15 text-tertiary border-tertiary/40",
    neutral: "bg-surface dark:bg-dark-surface text-secondary-color border-line",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
        badgeVariants[variant] || badgeVariants.primary
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
};
