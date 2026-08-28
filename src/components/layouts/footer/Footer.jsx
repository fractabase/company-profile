export default function Footer() {
  return (
    <>
      <footer className="pt-8 bg-dark-secondary text-dark-text">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-12 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-dark-text">
                Fractabase <span className="text-primary">Interactive</span>
              </h1>
              <p className="text-dark-text-mute">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis omnis impedit error, sit
                exercitationem ducimus optio repellendus rerum beatae explicabo.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-text-faint mb-4">Navigasi</h3>
              <nav className="flex flex-col text-dark-text-mute">
                <a href="#" className="hover:text-primary transition">Layanan</a>
                <a href="#" className="hover:text-primary transition">Portfolio</a>
                <a href="#" className="hover:text-primary transition">Alur Kerja</a>
                <a href="#" className="hover:text-primary transition">Tentang Kami</a>
              </nav>
            </div>

            <div className="flex flex-col text-dark-text-mute">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-text-faint mb-4">Sosial</h3>
              <span className="hover:text-primary transition">Github</span>
              <span className="hover:text-primary transition">LinkedIn</span>
              <span className="hover:text-primary transition">Whatsapp</span>
              <span className="hover:text-primary transition">E-mail</span>
            </div>
          </div>

          <hr className="border-line" />
          <div className="flex justify-between mt-6 pb-8 text-dark-text-faint">
            <p>&copy; Fractabase Interactive 2026 | All rights reserved.</p>

            <div className="flex gap-7">
              <span className="hover:text-primary transition">Policy</span>
              <span className="hover:text-primary transition">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
