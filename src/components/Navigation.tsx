import { useState, useEffect } from "react";

const navItems = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navigation = () => {
  const [isOpen,        setIsOpen]        = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 30);
      for (const item of [...navItems].reverse()) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? "rgba(5, 45, 65, 0.96)"
            : "rgba(5, 45, 65, 0.75)",
          borderBottom: "1px solid rgba(100, 220, 255, 0.2)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
              <div
                style={{
                  width: 28, height: 28,
                  background: "linear-gradient(135deg, hsl(352,82%,48%), hsl(352,90%,60%))",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  boxShadow: "0 0 12px rgba(200,30,50,0.5)",
                  flexShrink: 0,
                }}
              />
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "1.1rem",
                letterSpacing: "0.2em",
                color: "rgba(220, 245, 255, 0.95)",
                textShadow: "0 0 12px rgba(100,220,255,0.4)",
              }}>
                AHM
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => {
                const id = item.href.replace("#", "");
                const active = activeSection === id;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`p3r-nav-link ${active ? "active" : ""}`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  className="block transition-all duration-300"
                  style={{
                    width: i === 1 ? (isOpen ? 20 : 14) : 20,
                    height: 2,
                    background: "rgba(200, 240, 255, 0.9)",
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

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(5, 40, 60, 0.98)", backdropFilter: "blur(20px)" }}
        >
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => { scrollTo(item.href); setIsOpen(false); }}
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "2.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(220, 248, 255, 0.9)",
                textShadow: "0 0 20px rgba(100,220,255,0.4)",
                background: "none",
                border: "none",
                cursor: "pointer",
                animation: `menuSlideIn 0.4s ${i * 0.06}s ease both`,
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
