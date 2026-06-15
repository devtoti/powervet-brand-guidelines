import {
  useRef,
  useState,
  type FC,
  type ReactNode,
  type CSSProperties,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { BlueprintDecoLines } from "./Blueprintdecolines";
import capterraUrl from "@/assets/images/hero/ratings/capterra.png";
import appStoreUrl from "@/assets/images/hero/ratings/app-store.svg";
import googlePlayUrl from "@/assets/images/hero/ratings/google-play.svg";
import PowervetUiUrl from "@/assets/images/hero/provet-ui-screenshot.png";
import whiteSplashUrl from "../../imports/MobileHero/white-splash.svg";
import {
  HeroAnimation,
  type HeroAnimalId,
} from "@/app/components/HeroAnimation";
import { MacWindows } from "@/app/components/MacWindows";
import {
  FriskyCard,
  GladiatorCard,
  BigotesCard,
  NeptunoCard,
} from "@/app/components/PetProfileCard";

const HERO_CARD_FADE_SECONDS = 2;

function FadeInOut({
  show,
  className,
  style,
  children,
}: {
  show: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(show);

  if (show && !mounted) {
    setMounted(true);
  }

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !mounted) return;

      gsap.killTweensOf(el);
      const noMotion = prefersReducedMotion();

      if (show) {
        if (noMotion) {
          gsap.set(el, { autoAlpha: 1, y: 0, scale: 1 });
        } else {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 18, scale: 0.92 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: HERO_CARD_FADE_SECONDS,
              ease: "power3.out",
            },
          );
        }
      } else {
        if (noMotion) {
          gsap.set(el, { autoAlpha: 0 });
          setMounted(false);
        } else {
          gsap.to(el, {
            autoAlpha: 0,
            y: 10,
            scale: 0.96,
            duration: HERO_CARD_FADE_SECONDS * 0.7,
            ease: "power2.in",
            onComplete: () => setMounted(false),
          });
        }
      }
    },
    { dependencies: [show, mounted], scope: ref },
  );

  if (!mounted) return null;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

function HeroHeadline() {
  return (
    <div id="hero-heading" className="relative w-full">
      {/* Mobile headline */}
      <h1
        className="text-center text-[clamp(2.5rem,12vw,3rem)] font-semibold leading-tight text-[#2d3341] md:max-w-[75%] md:mx-auto lg:hidden"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Level-up your vet clinic, save time with{" "}
        <span className="font-extrabold text-[#401298]">Powervet</span>
      </h1>

      {/* Desktop headline */}
      <h1
        className="hidden text-left text-5xl leading-tight text-[#2d3341] lg:block"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <span className="font-semibold">Level-up your vet clinic, </span>
        <span className="font-semibold">save time with </span>
        <span className="font-extrabold text-[#401298]">Powervet</span>
      </h1>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="relative w-full">
      <img
        src={whiteSplashUrl}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[35%] z-0 w-full max-w-md origin-center -translate-x-1/2 -translate-y-1/2 scale-[3] object-contain opacity-75 md:top-1/2 md:max-w-lg md:scale-[3.75] lg:top-[25%] lg:max-w-xl lg:scale-[2.25]"
      />
      <div className="relative z-10 flex flex-col items-center gap-4 lg:items-start">
        <HeroHeadline />
        <HeroDescription />
      </div>
    </div>
  );
}

function HeroDescription() {
  return (
    <p
      className="mx-auto max-w-[324px] text-center text-base font-medium leading-6 text-[#374151] md:max-w-md lg:mx-0 lg:max-w-md lg:text-left lg:text-xl"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      Unlock a more efficient way to manage your practice with{" "}
      <span className="lg:font-bold">AI-enabled features</span> and seamless{" "}
      <span className="lg:font-bold">integrations</span>.
    </p>
  );
}

function HeroActions() {
  return (
    <div className="relative z-10 flex w-full max-w-[260px] flex-col gap-2 lg:max-w-[340px]">
      <div className="relative overflow-visible rounded-[32px] border-2 border-[#4163ca] p-1.5">
        <BlueprintDecoLines />
        <a
          href="#request-demo"
          className="relative z-10 flex h-10 w-full items-center justify-center rounded-[32px] border border-[#2ab1e1] bg-[#3559c7] px-4 py-1.5 text-xl font-bold leading-6 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(53,89,199,0.4)] active:translate-y-0 active:scale-[0.97] active:shadow-[0_1px_2px_rgba(53,89,199,0.3)]"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Request Demo
        </a>
      </div>

      {/* Mobile: Contact | Desktop: Explore Features */}
      <a
        href="https://devtoti.com/contact"
        className="relative flex h-[52px] w-full items-center justify-center overflow-visible rounded-[32px] border-[1.5px] border-[#d4e0f5] bg-[#f9fafb] px-4 py-2 text-xl font-bold leading-6 text-[#374151] shadow-[0_10px_16.4px_rgba(126,58,242,0.1),0_4px_6px_rgba(126,58,242,0.1),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(126,58,242,0.15),0_6px_8px_rgba(126,58,242,0.1)] active:translate-y-0 active:scale-[0.97] active:shadow-[0_4px_6px_rgba(126,58,242,0.1)] lg:hidden"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <BlueprintDecoLines />
        <span className="relative z-10">Contact</span>
      </a>
      <a
        href="#explore"
        className="relative hidden h-[52px] w-full items-center justify-center overflow-visible rounded-[32px] border-[1.5px] border-[#d4e0f5] bg-[#f9fafb] px-4 py-2 text-xl font-bold leading-6 text-[#374151] shadow-[0_10px_16.4px_rgba(126,58,242,0.1),0_4px_6px_rgba(126,58,242,0.1),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(126,58,242,0.15),0_6px_8px_rgba(126,58,242,0.1)] active:translate-y-0 active:scale-[0.97] active:shadow-[0_4px_6px_rgba(126,58,242,0.1)] lg:flex"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <BlueprintDecoLines />
        <span className="relative z-10">Explore Features</span>
      </a>
    </div>
  );
}

function RatingsBar() {
  return (
    <div className="relative z-10 h-16 flex w-full items-center justify-center gap-6 md:gap-12 lg:justify-start lg:gap-8 md:w-[420px]">
      <img
        src={capterraUrl}
        alt="Capterra 5 stars"
        className="h-6 w-auto shrink-0"
      />
      <img
        src={appStoreUrl}
        alt="App Store 5 stars"
        className="h-6 w-auto shrink-0"
      />
      <img
        src={googlePlayUrl}
        alt="Google Play 5 stars"
        className="h-6 w-auto shrink-0"
      />
    </div>
  );
}

const CARD_SHADOW =
  "0 25px 50px -12px rgba(0,0,0,0.25), 0 12px 24px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)";

const PET_CARDS: {
  id: HeroAnimalId;
  Card: FC<{ className?: string; style?: CSSProperties }>;
  placement: string;
}[] = [
  {
    id: "dog-1",
    Card: FriskyCard,
    placement: "justify-self-center origin-top-right mr-2 lg:mr-4",
  },
  {
    id: "dog-2",
    Card: GladiatorCard,
    placement: "justify-self-center origin-top-right mr-2 lg:mr-16",
  },
  {
    id: "cat-1",
    Card: NeptunoCard,
    placement: "justify-self-center origin-top-left ml-2 lg:ml-4",
  },
  {
    id: "rabbit-1",
    Card: BigotesCard,
    placement: "justify-self-center origin-top-left ml-2 lg:ml-4",
  },
];

export const Hero = () => {
  const [activeAnimal, setActiveAnimal] = useState<HeroAnimalId | null>(null);

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: `linear-gradient(180deg, #fafafa 0%, #fdfdfd 100%)`,
      }}
    >
      {/* Grid dot pattern (decorative overlay) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #9CA3AF 1px, transparent 1px), linear-gradient(to bottom, #9CA3AF 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.2,
          maskImage: "linear-gradient(180deg, #000 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 60%)",
        }}
      />

      {/* Gradient overlay (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(179.25deg, rgba(53,89,199,0.3) 0%, rgba(205,183,246,0.15) 25%, transparent 70%)",
        }}
      />

      {/* Vertical edge lines (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-2 w-px bg-[#9CA3AF]/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-2 w-px bg-[#9CA3AF]/50"
      />

      {/* Main content — mobile: stacked rows, desktop: two columns */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-rows-[auto_1fr] px-4 pt-24 md:pt-28 pb-4 lg:min-h-svh lg:grid-rows-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-x-10 lg:px-8 lg:pt-6 lg:pb-6">
        {/* Mobile row 1 / Desktop col 1: headlines */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 pb-0 lg:items-start lg:gap-6 lg:py-0">
          <HeroCopy />
          <HeroActions />
          <RatingsBar />
        </div>

        {/* Mobile row 2 / Desktop col 2: Hero animation + cards */}
        <div className="relative flex items-start justify-center lg:items-center">
          <div className="grid w-full max-w-5xl [grid-template-areas:'stack']">
            {/* Mac Window (behind) */}
            <div className="z-0 translate-y-1/4 self-start [grid-area:stack] opacity-30 lg:self-start">
              <MacWindows className="w-full min-h-[14rem] lg:min-h-[20rem]">
                <img
                  src={PowervetUiUrl}
                  alt="Powervet Cloud interface"
                  className="size-full rounded object-cover object-left-top"
                />
              </MacWindows>
            </div>

            {/* Hero animation (in front) */}
            <HeroAnimation
              aria-label="Powervet hero illustration"
              className="z-10 h-auto w-full max-w-[85%] self-end justify-self-center [grid-area:stack] lg:max-w-lg"
              onActiveAnimalChange={setActiveAnimal}
            />

            {/* Pet info cards — in front of vet (z-[5]) but behind animals (z-10) */}
            {PET_CARDS.map(({ id, Card, placement }) => (
              <div
                key={id}
                aria-live="polite"
                className={`pointer-events-none z-[5] self-start scale-50 [grid-area:stack] ${placement}`}
              >
                <FadeInOut show={activeAnimal === id}>
                  <Card
                    className="pointer-events-auto"
                    style={{ boxShadow: CARD_SHADOW }}
                  />
                </FadeInOut>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
