import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start"}`}
    >
      <h2
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#101828",
          letterSpacing: "0.01em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-xl"
          style={{
            fontFamily: "var(--font-raleway)",
            fontSize: "1rem",
            color: "var(--gray-brand-800)",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
