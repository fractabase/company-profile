export const Card = ({ children, variant = "default", hoverable = true, className = "", onClick, ...props }) => {
  const baseClasses = "rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between";

  const variants = {
    default: "bg-surface border border-line shadow-sm",
    outlined: "bg-transparent border-2 border-line",
    ghost: "bg-base/60 border border-transparent",
    gradient: "bg-gradient-to-br from-primary/10 via-surface to-secondary/10 border border-line",
    glass: "bg-surface/70 backdrop-blur-md border border-line shadow-xl",
  };

  const hoverClasses = hoverable
    ? "hover:-translate-y-1.5 hover:shadow-xl hover:border-secondary/40 cursor-pointer"
    : "";

  return (
    <>
      <article
        className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </article>
    </>
  );
};

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`p-6 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", as: Component = "h3", ...props }) => (
  <Component className={`text-2xl lg:text-3xl font-bold text-primary-color tracking-tight ${className}`} {...props}>
    {children}
  </Component>
);

export const CardDescription = ({ children, className = "", as: Component = "p", ...props }) => (
  <Component className={`mt-1.5 text-secondary-color leading-relaxed ${className}`} {...props}>
    {children}
  </Component>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-3 lg:px-6 py-2 flex-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-4 mt-auto border-t border-line flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export const CardBadge = ({ children, variant = "primary", className = "" }) => {
  const badgeVariants = {
    primary: "bg-primary/15 text-primary border-primary/40",
    secondary: "bg-secondary/15 text-secondary border-secondary/40",
    tertiary: "bg-tertiary text-tertiary-ink border-tertiary-ink/40",
    neutral: "bg-base text-secondary-color border-line",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
