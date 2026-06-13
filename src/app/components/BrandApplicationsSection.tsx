import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

// App mockup screenshots — Rectangle series from Figma export
import imgM1  from "../../imports/DesktopGuidelines/f2aca2743cc84a6c8690f764c5fb2e17507f05fe.png";
import imgM2  from "../../imports/DesktopGuidelines/a498a4022d300bcd198efc21fc9040b3b1e9893b.png";
import imgM3  from "../../imports/DesktopGuidelines/af904ce348adfe8da71dc63d6fcbf47a4dd35939.png";
import imgM4  from "../../imports/DesktopGuidelines/66b92592458e9ce27f682c68cad95f81b7933004.png";
import imgM5  from "../../imports/DesktopGuidelines/7ac2f0ae90e91b74b67a081a715a364a01b0c318.png";
import imgM6  from "../../imports/DesktopGuidelines/6a6b9fc12690a3c5eb439c6f0900c3810dc5ee6b.png";
import imgM7  from "../../imports/DesktopGuidelines/0b89cad21b86e5b94c7f0d456a8de28e147f275d.png";
import imgM8  from "../../imports/DesktopGuidelines/8935617d4434f37b69cb8ec48f633afb15b5c5e7.png";
import imgM9  from "../../imports/DesktopGuidelines/5930d3fa7f296e0f7676613a13edafd940f92b12.png";
import imgM10 from "../../imports/DesktopGuidelines/26fa3c5b646f933bcae1c65b0626a2d17f5f94ff.png";
import imgM11 from "../../imports/DesktopGuidelines/bf65ff7a84c3345871e09c126c324a01cc10e6ac.png";
import imgM12 from "../../imports/DesktopGuidelines/6cfe7f22754f0c5e403cdd3e8ace95b98f4f779c.png";

const MOCKUPS = [imgM1, imgM2, imgM3, imgM4, imgM5, imgM6, imgM7, imgM8, imgM9, imgM10, imgM11, imgM12];

export function BrandApplicationsSection() {
  return (
    <section id="applications" className="py-24 px-6" style={{ background: "var(--gray-brand-50)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Brand Applications"
          subtitle="Practical examples of how the brand comes to life across different digital touchpoints and use cases."
        />

        {/* ── Mockup masonry gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div
            className="rounded-2xl overflow-hidden p-4"
            style={{ background: "white", border: "1px solid var(--gray-brand-200)" }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 640: 3, 900: 4 }}>
              <Masonry gutter="8px">
                {MOCKUPS.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`App mockup ${i + 1}`}
                    className="w-full rounded-xl"
                    style={{ display: "block", border: "1px solid var(--gray-brand-100)" }}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
