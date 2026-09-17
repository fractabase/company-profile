export const Heading = ({
  align = "left",
  hasTagline = false,
  taglineText = "",
  titleClass = "",
  title = "",
  paragraphClass = "",
  paragraph = "",
}) => {
  const tagline = hasTagline ? (
    <span className="text-secondary text-sm font-medium font-mono tracking-wider uppercase">{taglineText}</span>
  ) : (
    <></>
  );

  return (
    <>
      <header
        className={`mb-8 lg:mb-14 border-b border-line-strong ${align === "center" ? "text-center" : "text-left"}`}
      >
        {tagline}
        <h2
          className={`mb-4 text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold tracking-tight leading-tight ${align === "left" ? "max-w-3xl" : ""} ${titleClass}`}
        >
          {title}
        </h2>
        <p className={`mb-5 text-lg lg:text-xl text-secondary-color leading-relaxed ${paragraphClass}`}>{paragraph}</p>
      </header>
    </>
  );
};
