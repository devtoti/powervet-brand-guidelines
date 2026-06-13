import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";

import imgBgPattern1 from "../../imports/DesktopGuidelines/bccc7b3c251c604fa8d2f6c14f46c0e3547f1c77.png";
import imgBgPattern2 from "../../imports/DesktopGuidelines/2c74208e2178cecc96d68b62d62f0f562c2b769d.png";
import imgBgPattern3 from "../../imports/DesktopGuidelines/a2fea5b2a3a1fceada2aeb0f9b773079c8a3e444.png";

const PATTERNS = [
  {
    id: "pattern-1",
    name: "Crosses (L)",
    bgColor: "#FFFFFF",
    patternColor: "#401298",
    description: "White background with subtle crosses",
    style: {
      background: "#FFFFFF",
      backgroundImage: `url("${imgBgPattern1}")`,
      backgroundSize: "20px 20px",
      backgroundPosition: "top left",
      opacity: 1,
    },
    patternOpacity: "10%",
  },
  {
    id: "pattern-2",
    name: "Croquettes",
    bgColor: "#FAFAFA",
    patternColor: "#424B5F",
    description: "Off-white with interlocking croquettes",
    style: {
      background: "#FAFAFA",
      backgroundImage: `url("${imgBgPattern2}")`,
      backgroundSize: "30.25px 30.25px",
      backgroundPosition: "top left",
    },
    patternOpacity: "5%",
  },
  {
    id: "pattern-3",
    name: "Bubbles",
    bgColor: "#FAFAFA",
    patternColor: "#8C71C1",
    description: "Soft background with bubbles of varying sizes",
    style: {
      background: "#FAFAFA",
      backgroundImage: `url("${imgBgPattern3}")`,
      backgroundSize: "30.25px 30.25px",
      backgroundPosition: "top left",
    },
    patternOpacity: "8%",
  },
  {
    id: "pattern-4",
    name: "Crosses (S)",
    bgColor: "#F0F0F0",
    patternColor: "#7A5AB7",
    description: "Light gray with smaller cross pattern",
    style: {
      background: "#F0F0F0",
      backgroundImage: `url("${imgBgPattern1}")`,
      backgroundSize: "10px 10px",
      backgroundPosition: "top left",
    },
    patternOpacity: "8%",
  },
];

function PatternCard({
  pattern,
  active,
  onSelect,
}: {
  pattern: (typeof PATTERNS)[0];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="flex cursor-pointer flex-col gap-3 text-left group transition-transform hover:-translate-y-1"
    >
      {/* Preview */}
      <div
        className={`h-36 rounded-xl relative border-2 transition-all duration-200 overflow-visible ${
          active ? "" : "border-transparent"
        }`}
        style={
          active
            ? { borderColor: "var(--brand-dark)" }
            : { borderColor: "var(--gray-brand-200)" }
        }
      >
        <BlueprintDecoLines />
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ background: pattern.bgColor }}
        />
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ ...pattern.style, background: undefined, opacity: 0.12 }}
        />
        {active && (
          <div
            className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "var(--brand-dark)" }}
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L4 7L9 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: active ? "var(--brand-dark)" : "var(--gray-brand-900)",
          }}
        >
          {pattern.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div
            className="w-3 h-3 rounded-sm border"
            style={{
              background: pattern.bgColor,
              borderColor: "var(--gray-brand-300)",
            }}
            title="Background"
          />
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              color: "var(--gray-brand-600)",
            }}
          >
            {pattern.bgColor}
          </span>
          <div
            className="w-3 h-3 rounded-sm"
            style={{ background: pattern.patternColor }}
            title="Pattern"
          />
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              color: "var(--gray-brand-600)",
            }}
          >
            {pattern.patternColor}
          </span>
        </div>
        <p
          className="mt-1 text-xs"
          style={{
            fontFamily: "var(--font-raleway)",
            color: "var(--gray-brand-600)",
          }}
        >
          {pattern.description}
        </p>
      </div>
    </button>
  );
}

export function PatternsSection() {
  const [activePattern, setActivePattern] = useState(0);
  const current = PATTERNS[activePattern];

  return (
    <section
      id="patterns"
      className="py-24 px-6"
      style={{ background: "var(--gray-brand-50)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Patterns"
          subtitle="Background textures that add depth and visual interest while maintaining brand consistency. Click to preview each pattern."
        />

        {/* Live preview */}
        <motion.div
          key={activePattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-10 rounded-2xl overflow-visible border relative"
          style={{ borderColor: "var(--gray-brand-200)", minHeight: "260px" }}
        >
          <BlueprintDecoLines />
          {/* Pattern bg */}
          <div
            className="absolute inset-0"
            style={{ background: current.bgColor }}
          />
          <div
            className="absolute inset-0"
            style={{ ...current.style, background: undefined, opacity: 0.1 }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(53,89,199,0.15) 0%, rgba(205,183,246,0.08) 50%, rgba(53,89,199,0) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center py-16 px-8 gap-4">
            <div
              className="backdrop-blur-md bg-white/60 rounded-2xl px-8 py-5 flex flex-col items-center gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.4)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--gray-brand-950)",
                }}
              >
                {current.name} Preview
              </span>
              <span
                style={{
                  fontFamily: "var(--font-raleway)",
                  color: "var(--gray-brand-700)",
                  fontSize: "0.9rem",
                }}
              >
                {current.description}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pattern selector */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {PATTERNS.map((p, i) => (
            <PatternCard
              key={p.id}
              pattern={p}
              active={i === activePattern}
              onSelect={() => setActivePattern(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
