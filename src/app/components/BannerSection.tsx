import imgImage2 from "../../imports/BannerSection/cad65de5128c4371b10ee281d0c670e98d8edbf1.png";
import imgImage3 from "../../imports/BannerSection/609015cae4734a3a11e6bb36fc30e66a33e62c41.png";

export function BannerSection() {
  return (
    <>
      <style>{`
        @keyframes banner-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-track { animation-play-state: paused !important; }
        }
      `}</style>

      <div
        className="w-full overflow-hidden relative"
        style={{
          height: "76px",
          background:
            "linear-gradient(to right, rgba(53,89,199,0.25), rgba(64,18,152,0.6) 50%, rgba(53,89,199,0.25))",
        }}
      >
        {/* Two copies so the loop is seamless: animate 0 → -50% */}
        <div
          className="banner-track flex h-full w-[200%]"
          style={{
            animation: "banner-marquee 60s linear infinite",
            willChange: "transform",
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="relative h-full w-1/2 shrink-0"
            >
              <img
                src={imgImage2}
                alt=""
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mixBlendMode: "plus-lighter",
                }}
              />
              <img
                src={imgImage3}
                alt=""
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mixBlendMode: "plus-lighter",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
