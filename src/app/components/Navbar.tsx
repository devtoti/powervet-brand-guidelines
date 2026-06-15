import { useState, useEffect, useRef, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../../imports/IconContainer/svg-9kqwkiafdn";
import {
  BlueprintDecoLines,
  BLUEPRINT_DECO_LINES_NAVBAR_COLOR,
} from "./Blueprintdecolines.tsx";

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

const GET_QUOTE_BUTTON_STYLE = {
  background: "var(--brand-dark)",
  color: "white",
  fontFamily: "var(--font-raleway)",
  fontWeight: 700,
  // border: "2px solid var(--brand-light)",
  boxShadow: "0 2px 8px rgba(53,89,199,0.25)",
} as const;

const NAVBAR_GLASS_SHADOW = "0px 4px 4px 0px rgba(0,0,0,0.12)";

const NAVBAR_GLASS_SURFACE_STYLE = {
  backdropFilter: "blur(5.1px)",
  WebkitBackdropFilter: "blur(5.1px)",
  background: "rgba(255,255,255,0.85)",
} as const;

function NavbarGlassPanel({
  className,
  roundedClass,
  children,
}: {
  className: string;
  roundedClass: string;
  children: ReactNode;
}) {
  return (
    <div className={className} style={{ boxShadow: NAVBAR_GLASS_SHADOW }}>
      <div
        className={`relative overflow-hidden ${roundedClass}`}
        style={NAVBAR_GLASS_SURFACE_STYLE}
      >
        {children}
      </div>
    </div>
  );
}

function goToQuote() {
  window.location.href = "https://devtoti.com/contact";
}

function GetQuoteButton({
  className,
  fontSize,
}: {
  className: string;
  fontSize: string;
}) {
  return (
    <button
      className={className}
      style={{ ...GET_QUOTE_BUTTON_STYLE, fontSize }}
      onClick={goToQuote}
    >
      Get a Quote
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
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none w-full max-w-full px-2"
        style={{
          transform: mobileVisible ? "translateY(0)" : "translateY(-160%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* md:transform-none keeps desktop always visible */}
        <NavbarGlassPanel
          className="pointer-events-auto w-full max-w-[880px] rounded-[38px] md:![transform:none]"
          roundedClass="rounded-[38px]"
        >
          <div className="relative z-10 flex items-center justify-between px-3 py-1 gap-1">
            <Logo onClick={() => scrollTo("logos")} />

            <GetQuoteButton
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0 rounded-full px-3 py-1.5 transition-all duration-150 active:scale-[0.97] md:hidden"
              fontSize="0.8125rem"
            />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0 flex-1 justify-center min-w-0">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="cursor-pointer px-1.5 lg:px-2.5 py-1.5 whitespace-nowrap transition-all duration-150"
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
            <GetQuoteButton
              className="hidden lg:flex items-center shrink-0 px-4 py-1 rounded-full transition-all duration-150 hover:-translate-y-0.5"
              fontSize="0.875rem"
            />

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
        </NavbarGlassPanel>
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
        <div className="fixed top-[80px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none max-w-full">
          <NavbarGlassPanel
            className="pointer-events-auto w-full max-w-[880px] rounded-2xl"
            roundedClass="rounded-2xl"
          >
            <BlueprintDecoLines
              dashed
              color={BLUEPRINT_DECO_LINES_NAVBAR_COLOR}
            />
            <div
              className="relative z-10 floating-menu w-full px-4 py-3 flex flex-col gap-0.5 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
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
                <GetQuoteButton
                  className="px-6 py-2.5 rounded-full"
                  fontSize="0.9375rem"
                />
              </div>
            </div>
          </NavbarGlassPanel>
        </div>
      )}
    </>
  );
}
