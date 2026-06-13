import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import colorRatioChartUrl from "@/assets/images/color-ratio-chart.svg";
import purpleActiveUrl from "@/assets/images/color-ratio-purple-active.png";
import blueActiveUrl from "@/assets/images/color-ratio-blue-active.png";
import cyanActiveUrl from "@/assets/images/color-ratio-cyan-active.png";
import grayActiveUrl from "@/assets/images/color-ratio-gray-active.png";

const COLOR_RATIOS = [
  { name: "White / Off-White", hex: "#F0F0F0", percent: 60, description: "Primary backgrounds & surfaces", activeImg: grayActiveUrl },
  { name: "Brand Purple", hex: "#401298", percent: 10, description: "Primary CTA, headings, focus elements", activeImg: purpleActiveUrl },
  { name: "Brand Blue", hex: "#3559C7", percent: 20, description: "Interactive states, links, secondary CTAs", activeImg: blueActiveUrl },
  { name: "Brand Cyan", hex: "#28BBE8", percent: 10, description: "Accents, highlights, gradients", activeImg: cyanActiveUrl },
];

function ColorRatioChart({ activeIndex }: { activeIndex: number | null }) {
  return (
    <motion.div
      className="relative shrink-0 w-[300px] h-[300px]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={colorRatioChartUrl}
        alt="Color ratio donut chart"
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
        style={{ opacity: activeIndex === null ? 1 : 0.3 }}
      />
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.img
            key={activeIndex}
            src={COLOR_RATIOS[activeIndex].activeImg}
            alt={`${COLOR_RATIOS[activeIndex].name} active`}
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ColorRatioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Color Ratio"
          subtitle="Recommended usage ratios for the primary brand palette across digital touchpoints."
        />

        <div className="mt-12 flex flex-col md:flex-row items-center gap-16">
          <ColorRatioChart activeIndex={activeIndex} />

          <div className="flex flex-col gap-4 flex-1">
            {COLOR_RATIOS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 cursor-pointer rounded-xl px-3 py-2 -mx-3 transition-colors duration-200"
                style={{
                  background: activeIndex === i ? "var(--gray-brand-50)" : "transparent",
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div
                  className="w-10 h-10 rounded-lg shrink-0 border transition-transform duration-200"
                  style={{
                    background: c.hex,
                    borderColor: "var(--gray-brand-200)",
                    transform: activeIndex === i ? "scale(1.15)" : "scale(1)",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--gray-brand-900)",
                      }}
                    >
                      {c.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--brand-dark)",
                      }}
                    >
                      {c.percent}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--gray-brand-200)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: c.hex === "#F0F0F0" ? "var(--brand-dark)" : c.hex }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <p
                    className="mt-1 text-xs"
                    style={{ fontFamily: "var(--font-raleway)", color: "var(--gray-brand-600)" }}
                  >
                    {c.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
