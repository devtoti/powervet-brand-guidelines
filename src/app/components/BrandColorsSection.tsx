import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";
interface ColorChipProps {
  name: string;
  hex: string;
  rgb: string;
  height?: string;
  dimmed?: boolean;
  onHoverStart?: () => void;
}

function ColorChip({
  name,
  hex,
  rgb,
  height = "h-20",
  dimmed = false,
  onHoverStart,
}: ColorChipProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: select text */
    }
  };

  const isLight =
    parseInt(hex.slice(1, 3), 16) * 0.299 +
      parseInt(hex.slice(3, 5), 16) * 0.587 +
      parseInt(hex.slice(5, 7), 16) * 0.114 >
    186;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col rounded-xl overflow-visible border transition-transform duration-200 hover:-translate-y-1 cursor-pointer group"
      style={{ borderColor: "var(--gray-brand-200)" }}
      onClick={handleCopy}
      onMouseEnter={onHoverStart}
    >
      <div
        className="flex flex-col transition-opacity duration-[5000ms]"
        style={{ opacity: dimmed ? 0.5 : 1 }}
      >
        <BlueprintDecoLines />
        {/* Color swatch */}
        <div
          className={`${height} flex items-end justify-end p-3 relative rounded-t-xl`}
          style={{
            background: hex,
            boxShadow: "0 5px 7.5px -1.5px rgba(0,0,0,0.1)",
          }}
        >
        <AnimatePresence>
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: isLight
                  ? "rgba(0,0,0,0.15)"
                  : "rgba(255,255,255,0.2)",
              }}
            >
              <Check size={14} color={isLight ? "#000" : "#fff"} />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center group-hover:opacity-100 transition-opacity"
              style={{
                background: isLight
                  ? "rgba(0,0,0,0.15)"
                  : "rgba(255,255,255,0.2)",
              }}
            >
              <Copy size={14} color={isLight ? "#000" : "#fff"} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Color info */}
      <div className="p-4 bg-white flex flex-col gap-0.5">
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#101828",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "var(--gray-brand-800)",
          }}
        >
          {hex}
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            color: "var(--gray-brand-600)",
          }}
        >
          {rgb}
        </span>
      </div>
      </div>
    </motion.div>
  );
}

const BRAND_COLORS = [
  { name: "Brand Light", hex: "#728BD8", rgb: "RGB: 114, 139, 216" },
  { name: "Brand", hex: "#4163CA", rgb: "RGB: 65, 99, 202" },
  { name: "Brand Dark", hex: "#3559C7", rgb: "RGB: 53, 89, 199" },
  { name: "Accent", hex: "#633DAB", rgb: "RGB: 99, 61, 171" },
  { name: "Primary Purple", hex: "#401298", rgb: "RGB: 64, 18, 152" },
  { name: "Teal", hex: "#3CC0A6", rgb: "RGB: 60, 192, 166" },
  { name: "Cyan", hex: "#28BBE8", rgb: "RGB: 40, 187, 232" },
  { name: "Dark Text", hex: "#2D3341", rgb: "RGB: 45, 51, 65" },
];

export function BrandColorsSection() {
  const [hoveredHex, setHoveredHex] = useState<string | null>(null);

  return (
    <section id="colors" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Brand Colors"
          subtitle="Our color system is built around trust, clarity, and innovation. Click any color to copy its hex code."
        />

        <div
          className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 overflow-visible"
          onMouseLeave={() => setHoveredHex(null)}
        >
          {BRAND_COLORS.map((color) => (
            <ColorChip
              key={color.hex}
              {...color}
              dimmed={hoveredHex !== null && hoveredHex !== color.hex}
              onHoverStart={() => setHoveredHex(color.hex)}
            />
          ))}
        </div>

        {/* Gradient preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl overflow-hidden"
        >
          <div
            className="h-24 w-full"
            style={{
              background:
                "linear-gradient(90deg, #401298 0%, #4163CA 25%, #728BD8 50%, #3CC0A6 75%, #28BBE8 100%)",
            }}
          />
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{
              background: "var(--gray-brand-50)",
              borderTop: "1px solid var(--gray-brand-200)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-raleway)",
                fontWeight: 600,
                color: "var(--gray-brand-900)",
                fontSize: "0.875rem",
              }}
            >
              Brand Gradient Spectrum
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                color: "var(--gray-brand-600)",
              }}
            >
              #401298 → #28BBE8
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
