import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Stages", href: "#stages" },
  { label: "Characters", href: "#characters" },
  { label: "Media", href: "#media" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-lg font-bold tracking-widest">
          <span className="text-gradient-rgb">RAINBOW</span>
          <span className="text-foreground ml-1">ROBIN</span>
        </a>
        
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
