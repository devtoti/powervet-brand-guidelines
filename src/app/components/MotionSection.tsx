import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";

const MOTION_PRINCIPLES = [
  {
    name: "Ease In-Out",
    description: "Used for elements entering and exiting the viewport. Creates smooth, natural-feeling transitions.",
    token: "ease: [0.4, 0, 0.2, 1]",
    duration: "300ms",
    color: "var(--brand-dark)",
  },
  {
    name: "Spring",
    description: "Applied to interactive elements like buttons and cards. Adds playful physicality to interactions.",
    token: "type: spring, stiffness: 260, damping: 20",
    duration: "~500ms",
    color: "var(--brand-accent)",
  },
  {
    name: "Fade",
    description: "Subtle opacity transitions for tooltips, overlays, and secondary UI elements.",
    token: "opacity: 0 → 1",
    duration: "200ms",
    color: "var(--brand-teal)",
  },
  {
    name: "Slide Up",
    description: "Used for modals, drawers, and notification toasts appearing from below the viewport.",
    token: "y: 24px → 0, opacity: 0 → 1",
    duration: "400ms",
    color: "var(--pb-700)",
  },
];

// ── Endless looping demos ────────────────────────────────────────────────────

function EaseDemo() {
  return (
    <div className="h-16 flex items-center px-4 rounded-xl overflow-hidden relative" style={{ background: "var(--pb-50)" }}>
      <motion.div
        className="w-8 h-8 rounded-full absolute left-4"
        style={{ background: "var(--brand-dark)" }}
        animate={{ x: [0, 180, 0] }}
        transition={{
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 6,
        }}
      />
    </div>
  );
}

function SpringDemo() {
  return (
    <div className="h-16 flex items-center justify-center rounded-xl" style={{ background: "var(--lila-50)" }}>
      <motion.div
        className="w-10 h-10 rounded-xl"
        style={{ background: "var(--brand-accent)" }}
        animate={{ scale: [0.5, 1], rotate: [-15, 0] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 7,
        }}
      />
    </div>
  );
}

function FadeDemo() {
  return (
    <div className="h-16 flex items-center justify-center rounded-xl" style={{ background: "var(--cyan-brand-50)" }}>
      <motion.div
        className="px-4 py-2 rounded-lg"
        style={{
          background: "var(--brand-teal)",
          color: "white",
          fontFamily: "var(--font-raleway)",
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.5,
          times: [0, 0.2, 0.72, 1],
          repeat: Infinity,
          repeatDelay: 5.5,
        }}
      >
        Notification
      </motion.div>
    </div>
  );
}

function SlideUpDemo() {
  return (
    <div
      className="h-16 rounded-xl overflow-hidden relative"
      style={{ background: "var(--gray-brand-100)" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-4 py-2"
        style={{
          background: "var(--pb-950)",
          color: "white",
          fontFamily: "var(--font-raleway)",
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
        animate={{
          y: ["100%", "0%", "0%", "100%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          times: [0, 0.18, 0.75, 1],
          ease: [0.4, 0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 5.2,
        }}
      >
        Drawer / Toast
      </motion.div>
    </div>
  );
}

const DEMOS = [EaseDemo, SpringDemo, FadeDemo, SlideUpDemo];

function MotionCard({ principle, index }: { principle: (typeof MOTION_PRINCIPLES)[0]; index: number }) {
  const Demo = DEMOS[index];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex flex-col gap-4 rounded-2xl p-5 border overflow-visible"
      style={{ borderColor: "var(--gray-brand-200)", background: "white" }}
    >
      <BlueprintDecoLines />
      <Demo />

      <div className="flex flex-col gap-2">
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--gray-brand-900)" }}>
            {principle.name}
          </p>
          <p className="mt-1" style={{ fontFamily: "var(--font-raleway)", fontSize: "0.875rem", color: "var(--gray-brand-700)", lineHeight: 1.5 }}>
            {principle.description}
          </p>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-lg" style={{ background: "var(--gray-brand-50)" }}>
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", color: "var(--gray-brand-600)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Token</span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", color: "var(--gray-brand-600)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Duration</span>
          </div>
          <div className="flex items-center justify-between">
            <code style={{ fontFamily: "monospace", fontSize: "0.75rem", color: principle.color }}>{principle.token}</code>
            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.75rem", color: "var(--gray-brand-800)" }}>{principle.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function MotionSection() {
  return (
    <section id="motion" className="py-24 px-6" style={{ background: "var(--gray-brand-50)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Motion Principles"
          subtitle="Consistent motion creates a cohesive experience. Each animation type has a specific semantic purpose."
          centered={false}
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MOTION_PRINCIPLES.map((principle, i) => (
            <MotionCard key={principle.name} principle={principle} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
