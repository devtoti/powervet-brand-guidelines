import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";

const FONT_WEIGHTS = {
  Outfit: [
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "SemiBold" },
    { weight: 700, label: "Bold" },
    { weight: 800, label: "ExtraBold" },
  ],
  Raleway: [
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "SemiBold" },
    { weight: 700, label: "Bold" },
  ],
  Inter: [
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "SemiBold" },
    { weight: 700, label: "Bold" },
  ],
};

const FONTS = [
  {
    name: "Outfit",
    role: "Display & Headings",
    cssVar: "var(--font-outfit)",
    description:
      "Outfit is our primary display typeface. Used for hero headings, section titles, and any large-scale display copy that needs personality and presence.",
    specimen: "Run your clinic efficiently with AI",
    sizes: ["48px / Display", "36px / Title", "24px / Heading"],
    accent: "var(--brand-dark)",
  },
  {
    name: "Raleway",
    role: "Body & UI",
    cssVar: "var(--font-raleway)",
    description:
      "Raleway serves as our body typeface for paragraphs, UI labels, buttons, and navigation. Its elegant geometric forms pair well with Outfit.",
    specimen: "Unlock a more efficient way to manage your practice",
    sizes: ["20px / Large Body", "16px / Body", "14px / Small"],
    accent: "var(--brand-accent)",
  },
  {
    name: "Inter",
    role: "Data & Documentation",
    cssVar: "var(--font-inter)",
    description:
      "Inter is used for data-dense UI — tables, labels, code snippets, and documentation. Its high legibility at small sizes makes it ideal for technical content.",
    specimen: "RGB: 53, 89, 199 · #3559C7",
    sizes: ["14px / Label", "12px / Caption", "11px / Micro"],
    accent: "var(--brand-teal)",
  },
];

function TypeScaleRow({ size, font }: { size: string; font: string }) {
  const [px, label] = size.split(" / ");
  return (
    <div
      className="flex items-baseline gap-4 py-3 border-b"
      style={{ borderColor: "var(--gray-brand-100)" }}
    >
      <span
        style={{
          fontFamily: font,
          fontSize: px,
          color: "var(--gray-brand-950)",
          lineHeight: 1.2,
          flex: "1 1 0",
          minWidth: 0,
        }}
      >
        Aa
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.75rem",
          color: "var(--gray-brand-600)",
          whiteSpace: "nowrap",
        }}
      >
        {px}
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.75rem",
          color: "var(--gray-brand-500)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function FontCard({
  name,
  role,
  cssVar,
  description,
  specimen,
  sizes,
  accent,
  index,
}: (typeof FONTS)[0] & { index: number }) {
  const weights = FONT_WEIGHTS[name as keyof typeof FONT_WEIGHTS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-visible border h-full flex flex-col"
      style={{ borderColor: "var(--gray-brand-200)" }}
    >
      {/* Header band */}
      <div
        className="px-6 py-5 flex items-start justify-between gap-4"
        style={{ background: "var(--gray-brand-50)", height: "150px" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#101828",
              }}
            >
              {name}
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-xs"
              style={{
                background: accent,
                color: "white",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              {role}
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-raleway)",
              fontSize: "0.8125rem",
              color: "var(--gray-brand-700)",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Specimen */}
      <div
        className="px-6 py-6 border-y flex items-center"
        style={{ borderColor: "var(--gray-brand-100)", height: "180px" }}
      >
        <p
          style={{
            fontFamily: cssVar,
            fontWeight: 700,
            fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
            color: "var(--gray-brand-950)",
            lineHeight: 1.25,
          }}
        >
          {specimen}
        </p>
      </div>

      {/* Weights */}
      <div
        className="hidden sm:block px-6 py-4 border-b"
        style={{ borderColor: "var(--gray-brand-100)", height: "180px" }}
      >
        <p
          className="mb-3"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--gray-brand-600)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Weights
        </p>
        <div className="flex flex-wrap gap-2">
          {weights.map((w) => (
            <div
              key={w.weight}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg"
              style={{
                background: "var(--gray-brand-50)",
                border: "1px solid var(--gray-brand-200)",
              }}
            >
              <span
                style={{
                  fontFamily: cssVar,
                  fontWeight: w.weight,
                  fontSize: "1.125rem",
                  color: "var(--gray-brand-950)",
                }}
              >
                Aa
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.6875rem",
                  color: "var(--gray-brand-600)",
                }}
              >
                {w.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scale */}
      <div className="px-6 pb-4">
        {sizes.map((s) => (
          <TypeScaleRow key={s} size={s} font={cssVar} />
        ))}
      </div>
    </motion.div>
  );
}

const TYPOGRAPHY_SAMPLES = [
  {
    font: "var(--font-raleway)",
    fontName: "Raleway",
    weight: 400,
    weightLabel: "Regular",
  },
  {
    font: "var(--font-outfit)",
    fontName: "Outfit",
    weight: 400,
    weightLabel: "Regular",
  },
  {
    font: "var(--font-outfit)",
    fontName: "Outfit",
    weight: 500,
    weightLabel: "Medium",
  },
  {
    font: "var(--font-outfit)",
    fontName: "Outfit",
    weight: 600,
    weightLabel: "Semibold",
  },
  {
    font: "var(--font-outfit)",
    fontName: "Outfit",
    weight: 700,
    weightLabel: "Bold",
  },
];

const DOT_COLORS = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151"];

function TypographySampleCard({
  font,
  fontName,
  weight,
  weightLabel,
  dotColor,
  index,
}: {
  font: string;
  fontName: string;
  weight: number;
  weightLabel: string;
  dotColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex flex-col items-center justify-center rounded-lg aspect-square w-full cursor-pointer overflow-visible"
      style={{
        padding: "12px 12px 10px",
        gap: "4px",
      }}
    >
      <BlueprintDecoLines />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 12,
          height: 12,
          top: 5,
          left: 5,
          background: dotColor,
        }}
        whileHover={{ scale: 1.4 }}
      />
      <p
        style={{
          fontFamily: font,
          fontWeight: weight,
          fontSize: "clamp(48px, 12vw, 96px)",
          lineHeight: "normal",
          color: "white",
          WebkitTextStroke: "2.5px var(--gray-brand-300)",
          paintOrder: "stroke fill",
          flexShrink: 0,
        }}
      >
        Aa
      </p>
      <div
        style={{
          width: "100%",
          height: 0,
          borderBottom: "1px solid var(--gray-brand-200)",
          flexShrink: 0,
        }}
      />
      <div
        className="flex items-center justify-between w-full"
        style={{
          flex: "1 0 0",
          minHeight: "1px",
          fontSize: "14px",
          color: "var(--gray-brand-800)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-raleway)",
            fontWeight: 600,
          }}
        >
          {fontName}
        </span>
        <span
          style={{
            fontFamily: "var(--font-raleway)",
            fontWeight: 400,
          }}
        >
          {weightLabel}
        </span>
      </div>
    </motion.div>
  );
}

export function TypographySection() {
  return (
    <section
      id="typography"
      className="py-24 px-6"
      style={{ background: "white" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Typography"
          subtitle="Three complementary typefaces work together to create a clear visual hierarchy across all touchpoints."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-visible"
        >
          {TYPOGRAPHY_SAMPLES.map((sample, i) => (
            <TypographySampleCard
              key={`${sample.fontName}-${sample.weightLabel}`}
              {...sample}
              dotColor={DOT_COLORS[i]}
              index={i}
            />
          ))}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FONTS.map((font, i) => (
            <FontCard key={font.name} {...font} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
