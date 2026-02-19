const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="text-xl font-display font-bold tracking-tight">
          AGE <span className="text-gradient">THIRTY4</span>
        </span>
        <p className="text-sm text-muted-foreground mt-1">Building software that moves industries forward.</p>
      </div>
      <div className="flex gap-8 text-sm text-muted-foreground">
        {["Apps", "About", "Impact", "Services", "Support"].map((item) => (
          <button
            key={item}
            onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
            className="hover:text-primary transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AGE THIRTY4. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
