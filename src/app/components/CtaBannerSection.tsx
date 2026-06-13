import svgPaths from "../../imports/CtaBannerSection/svg-ai3k6za6mf";
import imgPattern from "../../imports/CtaBannerSection/17543ba66d203a9ca6d0436c922f497fef49d717.png";
import imgDots from "../../imports/CtaBannerSection/753038a81da1deacd0adae81407be07503497b47.png";

function RadialDeco() {
  const arc = svgPaths.p2d3aa000;
  const C = 60.5;
  const r1 = 42;
  const r2 = 21;
  const gap = r1 + 2;

  return (
    <svg width="121" height="121" viewBox="0 0 121 121" fill="none" aria-hidden style={{ opacity: 0.85 }}>
      <circle cx={C} cy={C} r={r1} stroke="#E6F7FF" strokeWidth="2.16" />
      <circle cx={C} cy={C} r={r2} stroke="#E6F7FF" strokeWidth="1.08" />
      <line x1="0"       y1={C}   x2={C - gap} y2={C}   stroke="#E6F7FF" strokeWidth="1.05" />
      <line x1={C + gap} y1={C}   x2="121"     y2={C}   stroke="#E6F7FF" strokeWidth="1.05" />
      <line x1={C}       y1="0"   x2={C}   y2={C - gap} stroke="#E6F7FF" strokeWidth="1.05" />
      <line x1={C}   y1={C + gap} x2={C}       y2="121" stroke="#E6F7FF" strokeWidth="1.05" />
      <g transform="translate(6,6)"><path d={arc} stroke="#E6F7FF" strokeWidth="0.648" /></g>
      <g transform={`translate(${121 - 6},6) scale(-1,1)`}><path d={arc} stroke="#E6F7FF" strokeWidth="0.648" /></g>
      <g transform={`translate(6,${121 - 6}) scale(1,-1)`}><path d={arc} stroke="#E6F7FF" strokeWidth="0.648" /></g>
      <g transform={`translate(${121 - 6},${121 - 6}) scale(-1,-1)`}><path d={arc} stroke="#E6F7FF" strokeWidth="0.648" /></g>
      <text x={C} y={C + 8} textAnchor="middle" fontSize="21.6" fill="#E6F7FF" fontFamily="serif" opacity="0.7">ø</text>
    </svg>
  );
}

export function CtaBannerSection() {
  return (
    <section className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(53,89,199,0.5), #401298 50%, rgba(53,89,199,0.5))",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("${imgPattern}")`, backgroundSize: "100px 100px" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url("${imgDots}")`, backgroundSize: "80px 80px" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 max-w-3xl w-full text-center">
        <RadialDeco />

        <h2
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          EXPLORE MY OTHER PROJECTS
        </h2>

        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", color: "white", lineHeight: 1.6, maxWidth: "640px" }}>
          <strong style={{ fontWeight: 700 }}>I am a Design Engineer specialized in improving brand perception</strong>
          {`. I leverage design systems and AI Tools for rapid and efficient frontend implementations. `}
        </p>

        <div className="flex flex-col items-center gap-2 w-full max-w-sm">
          <button
            className="w-full flex items-center justify-center"
            style={{
              height: "52px",
              borderRadius: "32px",
              background: "#F9FAFB",
              border: "1.5px solid #D4E0F5",
              boxShadow: "0px 10px 16.4px rgba(126,58,242,0.1), 0px 4px 6px rgba(126,58,242,0.1), 0px 1px 3px rgba(0,0,0,0.1)",
              fontFamily: "var(--font-raleway)",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#374151",
              cursor: "pointer",
            }}
          >
            Visit devtoti.com
          </button>
          <button
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "white",
              textDecoration: "underline",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            LinkedIn Profile
          </button>
        </div>
      </div>
    </section>
  );
}
