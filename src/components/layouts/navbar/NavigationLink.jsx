import { Link } from "react-router-dom";

export const NavigationLink = ({ href, label, isRoute = true, onClick, device = "mobile", delay, menuOpen }) => {
  const mobileLinkClasses =
    "py-3 px-4 text-primary-color hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 ease-(--ease)";
  const desktopLinkClasses =
    "relative text-primary-color hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 hover:after:origin-left";
  const mobileLinkStyle = {
    transitionDelay: `${delay}ms`,
    transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
    opacity: menuOpen ? 1 : 0,
  };

  return isRoute ? (
    <Link
      to={href}
      onClick={onClick}
      className={device === "mobile" ? mobileLinkClasses : desktopLinkClasses}
      {...(device === "mobile" ? { style: mobileLinkStyle } : {})}
    >
      {label}
    </Link>
  ) : (
    <a
      href={href}
      onClick={onClick}
      className={device === "mobile" ? mobileLinkClasses : desktopLinkClasses}
      {...(device === "mobile" ? { style: mobileLinkStyle } : {})}
    >
      {label}
    </a>
  );
};
