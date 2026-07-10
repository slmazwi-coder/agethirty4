import ClientBelt from "./ClientBelt";

const Footer = () => (
  <footer className="border-t border-border">
    {/* ── Scrolling client logo belt ── */}
    <ClientBelt />

    {/* ── Footer content ── */}
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo + tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src="/Logo.png?v=2"
            alt="AGE THIRTY4"
            className="h-20 w-auto object-contain"
          />
          <p className="text-sm text-muted-foreground text-center sm:text-left max-w-xs">
            Building software that moves industries forward.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {["Apps", "About", "Services", "Packages", "Areas", "Support"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} AGE THIRTY4. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
