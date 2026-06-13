import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../../imports/IconContainer/svg-9kqwkiafdn";
import { BlueprintDecoLines } from "./Blueprintdecolines.tsx";

const NAV_ITEMS = [
  { id: "logos", label: "Logos" },
  { id: "colors", label: "Brand" },
  { id: "palette", label: "Palette" },
  { id: "typography", label: "Typography" },
  { id: "patterns", label: "Patterns" },
  { id: "layout", label: "Layout" },
  { id: "motion", label: "Motion" },
  { id: "illustrations", label: "Illustrations" },
];

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0"
      aria-label="Go to top"
      style={{ width: 40, height: 40 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="block"
      >
        <path d={svgPaths.p1da615f0} fill="#633DAB" />
      </svg>
    </button>
  );
}

export function Navbar() {
  const [active, setActive] = useState("logos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Active section tracking
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id),
      ).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]!;
        if (section.getBoundingClientRect().top <= 100) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }

      // Mobile hide-on-scroll-down (only below md breakpoint)
      if (window.innerWidth < 768) {
        if (currentY > lastScrollY.current + 8) {
          setMobileVisible(false);
          setMenuOpen(false);
        } else if (currentY < lastScrollY.current - 5) {
          setMobileVisible(true);
        }
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    document.getElementById(id)?.scrollIntoView({ behavior });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating pill */}
      <div
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none w-full"
        style={{
          transform: mobileVisible ? "translateY(0)" : "translateY(-160%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <BlueprintDecoLines dashed />
        {/* md:transform-none keeps desktop always visible */}
        <div
          className="pointer-events-auto relative rounded-[38px] w-full lg:mx-0 lg:w-full md:![transform:none] max-w-[880px] mx-2"
          style={{
            backdropFilter: "blur(5.1px)",
            WebkitBackdropFilter: "blur(5.1px)",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.12)",
          }}
        >
          <div className="flex items-center justify-between px-3 py-1 gap-1 overflow-hidden">
            <Logo onClick={() => scrollTo("logos")} />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0 flex-1 justify-center min-w-0">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-1.5 lg:px-2.5 py-1.5 whitespace-nowrap transition-all duration-150"
                  style={
                    active === item.id
                      ? {
                          fontFamily: "var(--font-raleway)",
                          fontWeight: 700,
                          fontSize: "0.8125rem",
                          color: "var(--brand-dark)",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                        }
                      : {
                          fontFamily: "var(--font-raleway)",
                          fontWeight: 500,
                          fontSize: "0.8125rem",
                          color: "#374151",
                        }
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA — hidden on tablet, visible on lg+ */}
            <button
              className="hidden lg:flex items-center shrink-0 px-4 py-2 rounded-full transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: "var(--brand-dark)",
                color: "white",
                fontFamily: "var(--font-raleway)",
                fontWeight: 700,
                fontSize: "0.875rem",
                border: "2px solid var(--brand-light)",
                boxShadow: "0 2px 8px rgba(53,89,199,0.25)",
              }}
            >
              Get a Quote
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: "#374151" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none w-full rounded-[38px]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
          />
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-[80px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
          <BlueprintDecoLines dashed />
          <div
            className="pointer-events-auto w-full rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(5.1px)",
              WebkitBackdropFilter: "blur(5.1px)",
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <div className="floating-menu w-full px-4 py-3 flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-2.5 rounded-xl transition-colors"
                  style={
                    active === item.id
                      ? {
                          fontFamily: "var(--font-raleway)",
                          fontWeight: 700,
                          fontSize: "0.9375rem",
                          color: "var(--brand-dark)",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                        }
                      : {
                          fontFamily: "var(--font-raleway)",
                          fontWeight: 500,
                          fontSize: "0.9375rem",
                          color: "#374151",
                        }
                  }
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 pb-1 flex justify-center">
                <button
                  className="px-6 py-2.5 rounded-full"
                  style={{
                    background: "var(--brand-dark)",
                    color: "white",
                    fontFamily: "var(--font-raleway)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    border: "2px solid var(--brand-light)",
                    boxShadow: "0 2px 8px rgba(53,89,199,0.25)",
                  }}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
