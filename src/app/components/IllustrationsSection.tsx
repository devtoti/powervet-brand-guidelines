import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "./SectionHeading";
import { BlueprintDecoLines } from "./Blueprintdecolines";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./ui/carousel";
import imgIllustration from "../../imports/DesktopGuidelines/f409b829b58057dd392f557ef5668239577e0431.png";
import imgCat from "../../imports/DesktopGuidelines/cat-illustration.png";
import imgDog1 from "../../imports/DesktopGuidelines/probet-dog-1.svg";
import imgDog2 from "../../imports/DesktopGuidelines/dog-illustration-2.png";
import imgRabbit from "../../imports/DesktopGuidelines/rabbit-illustration.png";
import imgCroquettesPattern from "../../imports/DesktopGuidelines/2c74208e2178cecc96d68b62d62f0f562c2b769d.png";

const ILLUSTRATIONS = [
  { src: imgCat, name: "Cat" },
  { src: imgDog2, name: "Dog (Sitting)" },
  { src: imgDog1, name: "Dog (Standing)" },
  { src: imgRabbit, name: "Rabbit" },
];

const ILLUSTRATION_STYLES = [
  {
    title: "Line Weight",
    description:
      "1.5px outlines with rounded caps and joins for a clean, approachable look.",
    preview: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <path
          d="M20 40 C20 20 40 10 60 30"
          stroke="var(--brand-purple)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="20"
          cy="40"
          r="6"
          fill="var(--pb-50)"
          stroke="var(--brand-purple)"
          strokeWidth="1.5"
        />
        <circle
          cx="60"
          cy="30"
          r="6"
          fill="var(--lila-100)"
          stroke="var(--brand-accent)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Color Fills",
    description:
      "Low-opacity gradient fills from Teal (#3CC0A6) to Lila (#9F88CB) at 30% opacity.",
    preview: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <defs>
          <linearGradient
            id="illus-grad"
            x1="0"
            y1="0"
            x2="80"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3CC0A6" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9F88CB" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect
          x="10"
          y="10"
          width="60"
          height="40"
          rx="8"
          fill="url(#illus-grad)"
          stroke="var(--brand-purple)"
          strokeWidth="1.5"
        />
        <line
          x1="25"
          y1="25"
          x2="55"
          y2="25"
          stroke="var(--brand-accent)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="33"
          x2="45"
          y2="33"
          stroke="var(--gray-brand-400)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="41"
          x2="50"
          y2="41"
          stroke="var(--gray-brand-400)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Measurement Lines",
    description:
      "Dashed annotation lines at 0.365px weight in Gray-600 (#A2ABC0).",
    preview: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <rect
          x="20"
          y="15"
          width="40"
          height="30"
          rx="4"
          fill="var(--gray-brand-50)"
          stroke="var(--gray-brand-400)"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
        <line
          x1="10"
          y1="15"
          x2="10"
          y2="45"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
        <line
          x1="7"
          y1="15"
          x2="13"
          y2="15"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
        <line
          x1="7"
          y1="45"
          x2="13"
          y2="45"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
        <line
          x1="20"
          y1="55"
          x2="60"
          y2="55"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
        <line
          x1="20"
          y1="52"
          x2="20"
          y2="58"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
        <line
          x1="60"
          y1="52"
          x2="60"
          y2="58"
          stroke="var(--gray-brand-600)"
          strokeWidth="0.5"
        />
      </svg>
    ),
  },
  {
    title: "Mascot Characters",
    description:
      "Animals rendered in the signature low-poly style with brand gradient fills.",
    preview: (
      <div className="flex items-center justify-center w-20 h-14">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "var(--pb-50)",
            border: "1px dashed var(--gray-brand-400)",
          }}
        >
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
            <path
              d="M14 2C10 2 7 5 7 9C7 11 8 13 10 14L8 20H12L13 16H15L16 20H20L18 14C20 13 21 11 21 9C21 5 18 2 14 2Z"
              fill="var(--pb-100)"
              stroke="var(--brand-purple)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <circle cx="11" cy="9" r="1.5" fill="var(--brand-purple)" />
            <circle cx="17" cy="9" r="1.5" fill="var(--brand-purple)" />
            <path
              d="M11 12.5 Q14 14 17 12.5"
              stroke="var(--brand-accent)"
              strokeWidth="0.75"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    ),
  },
];

function IllustrationCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="mx-auto w-full max-w-3xl"
      >
        <CarouselContent>
          {ILLUSTRATIONS.map((illus) => (
            <CarouselItem key={illus.name}>
              <div className="flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-10">
                <img
                  src={illus.src}
                  alt={`${illus.name} illustration`}
                  className="h-[36rem] w-auto max-w-full object-contain mix-blend-multiply"
                />
                <span
                  className="mt-3 text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "var(--gray-brand-500)",
                  }}
                >
                  {illus.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="border-none bg-transparent shadow-none"
          style={{ color: "var(--gray-brand-400)" }}
        />
        <CarouselNext
          className="border-none bg-transparent shadow-none"
          style={{ color: "var(--gray-brand-400)" }}
        />
      </Carousel>

      {/* Dot indicators */}
      <div
        className="flex items-center justify-center gap-2 mt-6"
        role="tablist"
        aria-label="Illustration slides"
      >
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={current === i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? 24 : 8,
              height: 8,
              background:
                current === i
                  ? "var(--gray-brand-500)"
                  : "var(--gray-brand-300)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function IllustrationsSection() {
  return (
    <section id="illustrations" className="relative py-24 px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${imgCroquettesPattern}")`,
            backgroundSize: "30.25px 30.25px",
            backgroundPosition: "top left",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          title="Illustrations"
          subtitle="A consistent illustration language built on clean linework, low-poly animal characters, and soft gradient fills that reinforce the Powervet brand voice."
        />

        {/* Character illustrations carousel */}
        <IllustrationCarousel />

        {/* Main illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--gray-brand-200)" }}
        >
          <div
            className="relative p-8 flex items-center justify-center"
            style={{
              background: "transparent",
              minHeight: "300px",
            }}
          >
            <img
              src={imgIllustration}
              alt="Powervet hero illustration"
              className="max-w-full rounded-lg"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div
            className="px-6 py-4 border-t"
            style={{
              background: "white",
              borderColor: "var(--gray-brand-200)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "var(--gray-brand-900)",
              }}
            >
              Hero Illustration — Veterinary Clinic Dashboard Scene
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-raleway)",
                fontSize: "0.8125rem",
                color: "var(--gray-brand-600)",
              }}
            >
              Complex scene illustrations are exported as optimized SVG/PNG
              files for memory efficiency.
            </p>
          </div>
        </motion.div>

        {/* Style principles */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {ILLUSTRATION_STYLES.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col gap-4 p-5 rounded-2xl border overflow-visible"
              style={{
                borderColor: "var(--gray-brand-200)",
                background: "white",
              }}
            >
              <BlueprintDecoLines />
              <div className="flex items-center justify-center h-16">
                {style.preview}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--gray-brand-900)",
                  }}
                >
                  {style.title}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{
                    fontFamily: "var(--font-raleway)",
                    color: "var(--gray-brand-700)",
                    lineHeight: 1.5,
                  }}
                >
                  {style.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
