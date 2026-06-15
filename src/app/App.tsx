import { MotionConfig } from "motion/react";
import { Navbar } from "./components/Navbar";
import { BannerSection } from "./components/BannerSection";
import { LogosSection } from "./components/LogosSection";
import { BrandColorsSection } from "./components/BrandColorsSection";
import { ColorPaletteSection } from "./components/ColorPaletteSection";
import { ColorRatioSection } from "./components/ColorRatioSection";
import { TypographySection } from "./components/TypographySection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { PatternsSection } from "./components/PatternsSection";
import { LayoutSection } from "./components/LayoutSection";
import { MotionSection } from "./components/MotionSection";
import { IllustrationsSection } from "./components/IllustrationsSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="min-h-screen w-full max-w-[100vw] overflow-x-hidden"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        <Navbar />
        <main className="w-full max-w-[100vw] overflow-x-hidden">
          <Hero />
          <BannerSection />
          <LogosSection />
          <BrandColorsSection />
          <ColorPaletteSection />
          <ColorRatioSection />
          <CtaBannerSection />
          <TypographySection />
          <PatternsSection />
          <LayoutSection />
          <MotionSection />
          <IllustrationsSection />
          <CtaBannerSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
