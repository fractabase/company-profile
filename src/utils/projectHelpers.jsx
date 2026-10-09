/**
 * Category -> Brand Token Color & Style Mapping
 * Uses 60-30-10 compliant design tokens (primary cyan, secondary violet, tertiary amber).
 */
export const CATEGORY_STYLES = {
  web: {
    pill: "bg-cyan-900 text-primary border-primary/30",
    thumbBg: "bg-primary/5",
  },
  mobile: {
    pill: "bg-indigo-900 text-secondary border-secondary/30",
    thumbBg: "bg-secondary/5",
  },
  landing: {
    pill: "bg-amber-900 text-tertiary border-tertiary/30",
    thumbBg: "bg-tertiary/5",
  },
  game: {
    pill: "bg-sky-900 text-primary border-primary/40",
    thumbBg: "bg-primary/5",
  },
  custom: {
    pill: "bg-violet-900 text-secondary border-secondary/40",
    thumbBg: "bg-secondary/5",
  },
  system: {
    pill: "bg-dark-secondary/20 dark:bg-dark-surface-alt text-primary-color dark:text-primary border-line-strong",
    thumbBg: "bg-dark-secondary/5",
  },
};

export function getCategoryStyle(category) {
  return (
    CATEGORY_STYLES[category] || {
      pill: "bg-secondary/10 text-secondary border-secondary/30",
      thumbBg: "bg-secondary/5",
    }
  );
}

/**
 * Bold numbers and percentages in result string automatically
 */
export function renderHighlight(text) {
  const words = (text || "").split(" ");
  return words.map((word, i) => (
    <span key={i}>
      {/[%0-9]/.test(word) ? <strong className="font-bold">{word}</strong> : word}
      {i < words.length - 1 ? " " : ""}
    </span>
  ));
}
