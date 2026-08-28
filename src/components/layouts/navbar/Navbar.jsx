export default function Navbar() {
  const linkStyle =
    "mx-4 px-1 relative flex justify-center after:absolute after:border-b-2 after:border-primary after:w-full after:bottom-0 after:left-0 after:origin-right after:scale-x-0 after:transition after:duration-200 after:ease-in hover:after:scale-x-100 hover:after:origin-left text-primary-color hover:text-primary";

  return (
    <>
      <header className="p-4 fixed w-full bg-surface/90 backdrop-blur border-b border-line z-3">
        <div className="section-container flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-primary rounded-xl">Fractabase</span>{" "}
            <span className="text-primary-color">Interactive</span>
          </a>

          <nav className="flex">
            <a href="/#Home" className={linkStyle}>
              Home
            </a>
            <a href="/#Services" className={linkStyle}>
              Services
            </a>
            <a href="/#ValueProposition" className={linkStyle}>
              Why
            </a>
            <a href="/#WorkProcess" className={linkStyle}>
              Process
            </a>
            <a href="/#Portfolio" className={linkStyle}>
              Portfolio
            </a>
          </nav>

          <a
            href="/#Contact"
            className="bg-secondary hover:bg-secondary/80 text-surface py-1.5 px-5 rounded-lg hover:shadow-md transition"
            role="button"
          >
            Contact
          </a>
        </div>
      </header>
    </>
  );
}
