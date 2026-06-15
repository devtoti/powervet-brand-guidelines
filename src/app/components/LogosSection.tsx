import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";
import logo1Url from "@/assets/images/logo-1.svg";
import logo2Url from "@/assets/images/logo-2.svg";
import logo3Url from "@/assets/images/logo-3.svg";

function LogoCard({
  logoSrc,
  title,
  description,
  bg,
}: {
  logoSrc: string;
  title: string;
  description: string;
  bg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col gap-6 rounded-2xl overflow-visible border"
      style={{ borderColor: "var(--gray-brand-200)" }}
    >
      <BlueprintDecoLines />
      {/* Logo preview */}
      <div
        className="flex items-center justify-center p-12 rounded-t-2xl"
        style={{ background: bg }}
      >
        <img
          src={logoSrc}
          alt={title}
          className="h-full max-h-40 w-auto object-contain"
        />
      </div>
      {/* Card info */}
      <div className="px-6 pb-6">
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            color: "var(--gray-brand-900)",
          }}
        >
          {title}
        </p>
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-raleway)",
            color: "var(--gray-brand-700)",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function LogosSection() {
  return (
    <section
      id="logos"
      className="py-24 px-6"
      style={{ background: "#F8F8F8" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Logos"
          subtitle="The Powervet logo represents trust, care, and innovation in veterinary practice management. Use these approved logo variants across all branded touchpoints."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 overflow-visible">
          <LogoCard
            logoSrc={logo1Url}
            title="Primary — Light"
            description="Use on white or light-colored backgrounds for maximum clarity."
            bg="white"
          />
          <LogoCard
            logoSrc={logo2Url}
            title="Primary — Draft Mode"
            description="Use on white or light-colored backgrounds for maximum clarity."
            bg="#f4f4f4"
          />
          <LogoCard
            logoSrc={logo3Url}
            title="Primary — Proposal"
            description="Use on dark, purple, or high-contrast backgrounds."
            bg="white"
          />
        </div>
      </div>
    </section>
  );
}
