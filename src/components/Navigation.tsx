import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "linear-gradient(180deg, hsl(0 0% 5% / 0.97) 0%, hsl(0 0% 7% / 0.95) 100%)"
            : "linear-gradient(180deg, hsl(0 0% 5% / 0.9) 0%, transparent 100%)",
          borderBottom: scrolled ? "1px solid hsl(0 0% 50% / 0.25)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="relative group"
            >
              <div
                className="flex items-center gap-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
              >
                <div
                  className="w-7 h-7 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 50%), hsl(0 0% 55%))",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    boxShadow: "0 0 15px hsl(0 0% 50% / 0.5)",
                  }}
                >
                  <span style={{ fontSize: "0.65rem", color: "white", fontWeight: 900 }}>P3</span>
                </div>
                <span
                  className="text-xl"
                  style={{
                    color: "hsl(0 0% 65%)",
                    textShadow: "0 0 15px hsl(0 0% 55% / 0.6)",
                  }}
                >
                  AHM
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="p3-nav-link"
                    style={{
                      color: isActive ? "hsl(0 0% 65%)" : "hsl(0 0% 55%)",
                      textShadow: isActive ? "0 0 10px hsl(0 0% 55% / 0.5)" : "none",
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className="absolute bottom-[-2px] left-0 w-full h-[2px]"
                        style={{
                          background: "linear-gradient(90deg, hsl(0 0% 50%), hsl(0 0% 55%))",
                          boxShadow: "0 0 8px hsl(0 0% 50% / 0.6)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-[2px] transition-all duration-300"
                  style={{
                    width: i === 1 ? (isOpen ? 20 : 14) : 20,
                    background: "hsl(0 0% 60%)",
                    boxShadow: "0 0 6px hsl(0 0% 55% / 0.5)",
                    transform: isOpen
                      ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                      : "scaleX(0)"
                      : "none",
                    opacity: isOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "hsl(0 0% 5% / 0.98)", backdropFilter: "blur(20px)" }}
        >
          {/* Decorative lines */}
          <div
            className="absolute inset-0 p3-diagonal-lines"
            style={{ opacity: 0.4 }}
          />
          <div className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => { scrollTo(item.href); setIsOpen(false); }}
                className="text-3xl transition-all duration-300"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.25em",
                  color: "hsl(0 0% 65%)",
                  textShadow: "0 0 15px hsl(0 0% 55% / 0.4)",
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.textShadow = "0 0 25px hsl(0 0% 55% / 0.8)";
                  (e.target as HTMLElement).style.color = "hsl(0 0% 65%)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.textShadow = "0 0 15px hsl(0 0% 55% / 0.4)";
                  (e.target as HTMLElement).style.color = "hsl(0 0% 65%)";
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
