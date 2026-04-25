import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Apps", "About", "Services", "Packages", "Areas", "Support"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase();

    if (location.pathname !== "/") {
      setOpen(false);
      navigate(`/#${sectionId}`);
      return;
    }

    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo + wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img
            src="/Logo.jpg"
            alt="AGE THIRTY4 logo"
            className="h-16 w-auto object-contain mix-blend-screen"
          />
          <span className="text-2xl font-display font-bold tracking-tight">
            AGE <span className="text-gradient">THIRTY4</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("support")}
            className="px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Help
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-foreground hover:text-primary transition-colors py-3 border-b border-border/30 last:border-0 text-base font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("support")}
                className="mt-4 w-full py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Help
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
