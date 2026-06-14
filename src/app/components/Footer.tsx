export function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: "var(--gray-brand-950)", borderTop: "1px solid var(--gray-brand-800)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--brand-dark)" }}
          >
            <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
              <path d="M4 2H12C15.314 2 18 4.686 18 8C18 11.314 15.314 14 12 14H4V2Z" fill="white" />
              <path d="M4 14H8V22H4V14Z" fill="white" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                color: "white",
                fontSize: "0.9375rem",
              }}
            >
              VetAI Brand Guidelines
            </p>
            <p
              style={{
                fontFamily: "var(--font-raleway)",
                fontSize: "0.75rem",
                color: "var(--gray-brand-500)",
              }}
            >
              Design System 2026
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {["Colors", "Typography", "Patterns", "Motion", "Applications"].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "var(--font-raleway)",
                fontSize: "0.875rem",
                color: "var(--gray-brand-500)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            color: "var(--gray-brand-600)",
          }}
        >
          © 2026 VetAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
