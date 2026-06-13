import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 0%, #F2F7FF 100%)",
      }}
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(53,89,199,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Top dashed line */}
      <div className="absolute top-24 left-0 right-0 border-t border-dashed border-gray-400/40 pointer-events-none" aria-hidden />

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm"
          style={{
            borderColor: "var(--pb-300)",
            background: "var(--pb-50)",
            color: "var(--brand-dark)",
            fontFamily: "var(--font-raleway)",
            fontWeight: 600,
          }}
        >
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--brand-teal)" }} />
          Brand Guidelines 2025
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            color: "var(--gray-brand-950)",
            lineHeight: 1.1,
          }}
          className="text-5xl sm:text-6xl md:text-7xl tracking-tight"
        >
          The VetAI
          <br />
          <span style={{ color: "var(--brand-dark)" }}>Design System</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-xl text-lg sm:text-xl"
          style={{
            fontFamily: "var(--font-raleway)",
            color: "var(--gray-brand-800)",
            lineHeight: 1.6,
          }}
        >
          A comprehensive guide to our brand identity — colors, typography, patterns,
          and motion principles that define the VetAI experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => document.getElementById("colors")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: "var(--brand-dark)",
              color: "white",
              fontFamily: "var(--font-raleway)",
              fontWeight: 700,
              border: "2px solid var(--brand-light)",
              boxShadow: "0 2px 0 rgba(0,0,0,0.06)",
            }}
          >
            Explore Colors
          </button>
          <button
            onClick={() => document.getElementById("typography")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-full transition-all duration-200 hover:bg-gray-100"
            style={{
              background: "white",
              color: "var(--gray-brand-900)",
              fontFamily: "var(--font-raleway)",
              fontWeight: 700,
              border: "1.5px solid var(--gray-brand-300)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            Typography
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          {[
            { value: "44+", label: "Color tokens" },
            { value: "3", label: "Typefaces" },
            { value: "4", label: "BG patterns" },
            { value: "∞", label: "Possibilities" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--brand-dark)",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-raleway)",
                  fontSize: "0.8rem",
                  color: "var(--gray-brand-600)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none" aria-hidden>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, var(--brand-dark))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand-dark)" }} />
        </motion.div>
      </div>
    </section>
  );
}
