import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface PaletteColor {
  shade: string;
  hex: string;
}

interface ColorColumn {
  name: string;
  colors: PaletteColor[];
}

const PALETTE: ColorColumn[] = [
  {
    name: "Lila",
    colors: [
      { shade: "50", hex: "#ECE7F4" },
      { shade: "100", hex: "#E4DEF0" },
      { shade: "200", hex: "#D5CBE8" },
      { shade: "300", hex: "#C6B8E0" },
      { shade: "400", hex: "#B2A0D6" },
      { shade: "500", hex: "#9F88CB" },
      { shade: "600", hex: "#8C71C1" },
      { shade: "700", hex: "#7A5AB7" },
      { shade: "800", hex: "#633DAB" },
      { shade: "900", hex: "#4C209E" },
      { shade: "950", hex: "#401298" },
    ],
  },
  {
    name: "Purple Blue",
    colors: [
      { shade: "50", hex: "#EAEEF9" },
      { shade: "100", hex: "#E2E8F7" },
      { shade: "200", hex: "#D3DBF2" },
      { shade: "300", hex: "#C3CEEE" },
      { shade: "400", hex: "#AEBDE8" },
      { shade: "500", hex: "#9AACE3" },
      { shade: "600", hex: "#869CDE" },
      { shade: "700", hex: "#728BD8" },
      { shade: "800", hex: "#5A77D1" },
      { shade: "900", hex: "#4163CA" },
      { shade: "950", hex: "#3559C7" },
    ],
  },
  {
    name: "Cyan",
    colors: [
      { shade: "50", hex: "#E9F7FC" },
      { shade: "100", hex: "#E1F4FB" },
      { shade: "200", hex: "#D0EEF8" },
      { shade: "300", hex: "#C0E8F6" },
      { shade: "400", hex: "#AAE0F3" },
      { shade: "500", hex: "#94D8F0" },
      { shade: "600", hex: "#7FD0ED" },
      { shade: "700", hex: "#6AC9EA" },
      { shade: "800", hex: "#50BFE6" },
      { shade: "900", hex: "#37B6E3" },
      { shade: "950", hex: "#2AB1E1" },
    ],
  },
  {
    name: "Gray",
    colors: [
      { shade: "50", hex: "#F2F7FF" },
      { shade: "100", hex: "#E9F1FF" },
      { shade: "200", hex: "#E5EEFE" },
      { shade: "300", hex: "#D4E0F5" },
      { shade: "400", hex: "#C2D0EA" },
      { shade: "500", hex: "#ADBAD1" },
      { shade: "600", hex: "#A2ABC0" },
      { shade: "700", hex: "#828EAC" },
      { shade: "800", hex: "#57637F" },
      { shade: "900", hex: "#424B5F" },
      { shade: "950", hex: "#2D3341" },
    ],
  },
];

function PaletteCell({ hex, shade }: { hex: string; shade: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const brightness =
    parseInt(hex.slice(1, 3), 16) * 0.299 +
    parseInt(hex.slice(3, 5), 16) * 0.587 +
    parseInt(hex.slice(5, 7), 16) * 0.114;
  const isLight = brightness > 186;

  return (
    <button
      onClick={handleCopy}
      className="relative w-full h-9 rounded-md flex items-center justify-between px-2.5 group transition-transform hover:scale-105 hover:z-10"
      style={{ background: hex }}
      title={`${hex} — click to copy`}
    >
      <span
        className="text-xs font-medium tabular-nums"
        style={{
          fontFamily: "var(--font-inter)",
          color: isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
        }}
      >
        {shade}
      </span>
      <AnimatePresence>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              color: isLight ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)",
            }}
          >
            <Check size={12} />
          </motion.span>
        ) : (
          <motion.span
            key="hex"
            className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              fontFamily: "var(--font-inter)",
              color: isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            }}
          >
            {hex}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function ColorPaletteSection() {
  return (
    <section
      id="palette"
      className="py-24 px-6"
      style={{ background: "var(--gray-brand-50)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Color Palette"
          subtitle="Full-scale color system across four palettes — each ranging from 50 (lightest) to 950 (darkest)."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {PALETTE.map((column) => (
            <div key={column.name} className="relative flex flex-col gap-2">
              <h3
                className="mb-3 pb-2 border-b"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "var(--gray-brand-900)",
                  borderColor: "var(--gray-brand-300)",
                }}
              >
                {column.name}
              </h3>
              {column.colors.map((c) => (
                <PaletteCell key={c.shade} hex={c.hex} shade={c.shade} />
              ))}
            </div>
          ))}
        </motion.div>

        <p
          className="text-center mt-8"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.875rem",
            color: "var(--gray-brand-600)",
          }}
        >
          Click any color to copy the hex code
        </p>
      </div>
    </section>
  );
}
