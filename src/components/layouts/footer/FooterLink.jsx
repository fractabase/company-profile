import { Link } from "react-router-dom";

export const FooterLink = ({ href, children, isRoute }) => {
  const linkClass =
    "group inline-flex relative w-fit items-center text-primary-color/80 transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:w-full after:transition-transform after:origin-left after:scale-x-0 hover:after:scale-x-100";

  return isRoute ? (
    <Link to={href} className={linkClass}>
      {children}
    </Link>
  ) : (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
};
