import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const BREAKPOINTS = [
  { name: "Mobile",  width: "402px",  cols: 4,  margin: "16px", gutter: "16px", frameWidth: "35%", maxFrameW: 200,  frameRatio: "402/874"  },
  { name: "Tablet",  width: "744px",  cols: 6,  margin: "20px", gutter: "16px", frameWidth: "50%", maxFrameW: 320,  frameRatio: "744/1133" },
  { name: "Laptop",  width: "1133px", cols: 8,  margin: "24px", gutter: "16px", frameWidth: "85%", maxFrameW: 600,  frameRatio: "1133/744" },
  { name: "Desktop", width: "1280px", cols: 12, margin: "24px", gutter: "16px", frameWidth: "95%", maxFrameW: 700,  frameRatio: "1280/832" },
];

const SPACING_SCALE = [
  { name: "xs", value: "4px", rem: "0.25rem" },
  { name: "sm", value: "8px", rem: "0.5rem" },
  { name: "md", value: "16px", rem: "1rem" },
  { name: "lg", value: "24px", rem: "1.5rem" },
  { name: "xl", value: "32px", rem: "2rem" },
  { name: "2xl", value: "48px", rem: "3rem" },
  { name: "3xl", value: "64px", rem: "4rem" },
  { name: "4xl", value: "80px", rem: "5rem" },
  { name: "5xl", value: "120px", rem: "7.5rem" },
];

export function LayoutSection() {
  const [activeBreakpoint, setActiveBreakpoint] = useState(2);
  const bp = BREAKPOINTS[activeBreakpoint];

  return (
    <section id="layout" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Layout"
          subtitle="A responsive grid system with consistent margins, gutters, and breakpoints that ensures harmony across all screen sizes."
        />

        {/* Breakpoint selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div
            className="flex flex-wrap justify-center rounded-xl p-1 gap-1"
            style={{ background: "var(--gray-brand-100)" }}
          >
            {BREAKPOINTS.map((b, i) => (
              <button
                key={b.name}
                onClick={() => setActiveBreakpoint(i)}
                className="px-4 sm:px-5 py-2 rounded-lg transition-all text-sm"
                style={
                  i === activeBreakpoint
                    ? {
                        background: "white",
                        color: "var(--brand-dark)",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }
                    : {
                        color: "var(--gray-brand-700)",
                        fontFamily: "var(--font-inter)",
                      }
                }
              >
                {b.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid visualization */}
        <motion.div
          key={activeBreakpoint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--gray-brand-200)" }}
        >
          {/* Grid preview */}
          <div
            className="p-6 flex flex-col gap-4"
            style={{ background: "var(--gray-brand-50)" }}
          >
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "var(--gray-brand-900)",
                }}
              >
                {bp.cols}-Column Grid — {bp.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  color: "var(--gray-brand-600)",
                }}
              >
                {bp.width}
              </span>
            </div>
            {/* Device frame — scales with container, capped at max */}
            <div style={{ width: bp.frameWidth, maxWidth: bp.maxFrameW, margin: "0 auto" }}>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: bp.frameRatio,
                  background: "white",
                  border: "1px solid var(--gray-brand-200)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
                }}
              >
                {/* Columns — flex-[1_0_0] matches Figma exactly */}
                <div
                  className="flex h-full"
                  style={{ gap: bp.gutter, paddingLeft: bp.margin, paddingRight: bp.margin }}
                >
                  {Array.from({ length: bp.cols }).map((_, i) => (
                    <div
                      key={i}
                      style={{ flex: "1 0 0", height: "100%", minWidth: "1px", background: "#3559c7", opacity: 0.1 }}
                    />
                  ))}
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: "1px solid var(--gray-brand-200)" }}
                />
              </div>
            </div>
          </div>

          {/* Specs row */}
          <div
            className="grid grid-cols-3"
            style={{ borderTop: "1px solid var(--gray-brand-200)" }}
          >
            {[
              { label: "Columns", value: String(bp.cols) },
              { label: "Margin", value: bp.margin },
              { label: "Gutter", value: bp.gutter },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col items-center py-4 gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--brand-dark)",
                  }}
                >
                  {spec.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    color: "var(--gray-brand-600)",
                  }}
                >
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Spacing scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <h3
            className="mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "1.125rem",
              color: "var(--gray-brand-900)",
            }}
          >
            Spacing Scale
          </h3>
          <div className="flex flex-col gap-2">
            {SPACING_SCALE.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span
                  className="w-12 text-right shrink-0"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "0.8125rem",
                    color: "var(--gray-brand-800)",
                  }}
                >
                  {s.name}
                </span>
                <div
                  className="h-5 rounded-sm shrink-0"
                  style={{
                    width: s.value,
                    maxWidth: "120px",
                    background: "linear-gradient(90deg, var(--brand-dark), var(--pb-600))",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    color: "var(--gray-brand-600)",
                  }}
                >
                  {s.value} / {s.rem}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
