import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-heading text-xl font-bold tracking-tight">
            JEFFERSON WU
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-link underline-expand"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary transition-colors">
              <span className="sr-only">Menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;