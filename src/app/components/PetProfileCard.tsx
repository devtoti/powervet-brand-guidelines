import type { CSSProperties } from "react";
import dogIconUrl from "@/assets/images/hero/dog-icon.svg";
import catIconUrl from "@/assets/images/hero/cat-icon.svg";
import rabbitIconUrl from "@/assets/images/hero/rabbit-icon.svg";
import syringeIconUrl from "@/assets/images/hero/syringe-icon.svg";
import heartRateChartUrl from "@/assets/images/hero/heart-rate-chart.svg";
import { cn } from "@/app/components/ui/utils";

type CardProps = { className?: string; style?: CSSProperties };

const cardBase =
  "flex w-full max-w-[18.5rem] min-w-0 flex-col rounded-[9px] border border-[#8c8c8c]/40 bg-[#fdfdfd] px-3 py-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.05)] sm:max-w-xs";

const raleway = { fontFamily: "Raleway, sans-serif" } as const;
const outfit = { fontFamily: "Outfit, sans-serif" } as const;

function CardHeader({
  name,
  breed,
  iconUrl,
  iconAlt,
  iconSize = "h-[26px] w-[29px]",
}: {
  name: string;
  breed: string;
  iconUrl: string;
  iconAlt: string;
  iconSize?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="text-[22px] font-bold leading-none text-[#111928]" style={outfit}>
          {name}
        </p>
        <img src={iconUrl} alt={iconAlt} aria-hidden className={`shrink-0 ${iconSize}`} />
      </div>
      <p className="text-[13px] font-medium leading-none text-[#4b5563]" style={raleway}>
        {breed}
      </p>
    </div>
  );
}

function StatusBadge({
  label,
  dotColor,
  bgColor,
  textColor = "text-[#4b5563]",
  borderColor,
}: {
  label: string;
  dotColor: string;
  bgColor: string;
  textColor?: string;
  borderColor?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5",
        borderColor && "border border-solid",
      )}
      style={{
        backgroundColor: bgColor,
        ...(borderColor ? { borderColor } : {}),
      }}
    >
      <span aria-hidden className="size-3 shrink-0 rounded-full" style={{ backgroundColor: dotColor }} />
      <span className={`text-[13px] font-medium leading-none ${textColor}`} style={raleway}>
        {label}
      </span>
    </span>
  );
}

/* ─── Frisky ─── dog-1 ─── */

export function FriskyCard({ className, style }: CardProps) {
  const stats = [
    { label: "Age", value: "3y, 2m" },
    { label: "Weight", value: "32kg" },
    { label: "Last Exam", value: "02/03/26" },
  ];

  return (
    <aside aria-label="Patient profile" className={cn(cardBase, "gap-2", className)} style={style}>
      <CardHeader name="Frisky" breed="Canine, Puddle" iconUrl={dogIconUrl} iconAlt="dog" />
      <StatusBadge label="Stable Condition" dotColor="#55c167" bgColor="rgba(85,193,103,0.15)" />
      <div className="grid w-full grid-cols-3 gap-2 rounded bg-[#f0f0f0] p-1.5 text-[13px] text-[#4b5563]">
        {stats.map((s) => (
          <div key={s.label} className="flex min-w-0 flex-col">
            <span className="font-bold leading-none" style={raleway}>{s.label}</span>
            <span className="font-medium leading-none" style={raleway}>{s.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ─── Gladiator ─── dog-2 ─── */

export function GladiatorCard({ className, style }: CardProps) {
  const bpm = [
    { label: "Average", value: "87.5 bpm" },
    { label: "Min", value: "78 bpm" },
    { label: "Max", value: "97 bpm" },
  ];

  return (
    <aside aria-label="Patient vitals preview" className={cn(cardBase, "gap-2", className)} style={style}>
      <CardHeader name="Gladiator" breed="Canine, Doberman" iconUrl={dogIconUrl} iconAlt="dog" />
      <hr className="border-[#d9d9d9]" />
      <StatusBadge label="High Blood Pressure" dotColor="#e3af77" bgColor="rgba(227,175,119,0.2)" />
      <div className="grid w-full grid-cols-3 gap-2 rounded bg-[#f0f0f0] p-1.5 text-[13px] text-[#4b5563]">
        {bpm.map((s) => (
          <div key={s.label} className="flex min-w-0 flex-col">
            <span className="font-bold leading-none" style={raleway}>{s.label}</span>
            <span className="font-medium leading-none" style={raleway}>{s.value}</span>
          </div>
        ))}
      </div>
      <img
        src={heartRateChartUrl}
        alt="Heart rate trend"
        className="h-[50px] w-[184px] max-w-full object-contain object-left"
      />
    </aside>
  );
}

/* ─── Bigotes ─── rabbit-1 ─── */

const DIET_SEGMENTS = [
  { color: "#E8AD3D", label: "Grass Hay", pct: 50 },
  { color: "#45A661", label: "Vegetables", pct: 20 },
  { color: "#C77338", label: "High quality pellets", pct: 15 },
  { color: "#59B8D1", label: "Fruits & treats", pct: 15 },
] as const;

function DietDonut({ size = 80 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 6;
  const strokeWidth = 12;

  const circumference = 2 * Math.PI * r;
  const startOffset = -circumference / 4;

  const cumulativeOffsets = DIET_SEGMENTS.reduce<number[]>((acc, _seg, i) => {
    const prev = i === 0 ? startOffset : acc[i - 1] + (DIET_SEGMENTS[i - 1].pct / 100) * circumference;
    acc.push(prev);
    return acc;
  }, []);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {DIET_SEGMENTS.map((seg, i) => {
        const dash = (seg.pct / 100) * circumference;
        const gap = circumference - dash;
        return (
          <circle
            key={seg.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-cumulativeOffsets[i]}
            strokeLinecap="butt"
          />
        );
      })}
    </svg>
  );
}

export function BigotesCard({ className, style }: CardProps) {
  return (
    <aside aria-label="Patient emergency info" className={cn(cardBase, "gap-2", className)} style={style}>
      <CardHeader
        name="Bigotes"
        breed="Lagomorph, Himalayan Rabbit"
        iconUrl={rabbitIconUrl}
        iconAlt="rabbit"
        iconSize="size-[26px]"
      />
      <hr className="border-[#d9d9d9]" />

      <div className="flex w-full flex-col gap-2 rounded-lg bg-[#f0f0f0]/50 p-1.5">
        <StatusBadge
          label="Emergency visit"
          dotColor="#bc5656"
          bgColor="rgba(227,119,119,0.2)"
          textColor="text-[#771d1d]"
          borderColor="#bc5656"
        />

        <p className="text-[16px] font-bold text-[#1f2a37]" style={raleway}>
          Reason for visit
        </p>
        <p className="text-[13px] font-medium text-[#4b5563]" style={raleway}>
          Not eating for 12 hours
        </p>

        <hr className="border-[#d9d9d9]" />

        <p className="text-[16px] font-bold text-[#1f2a37]" style={raleway}>
          Current regime
        </p>

        <DietDonut size={86} />

        <div className="flex flex-col gap-1">
          {DIET_SEGMENTS.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <span aria-hidden className="size-2 shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-[13px] font-medium text-[#4b5563]" style={raleway}>
                {seg.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ─── Neptuno ─── cat-1 ─── */

type VaccineRow = { vaccine: string; route: string; location: string };

function VaccineInfo({
  data,
  bgClass,
}: {
  data: VaccineRow;
  bgClass: string;
}) {
  return (
    <div className={`flex gap-1.5 items-start rounded p-1.5 ${bgClass}`}>
      <img src={syringeIconUrl} alt="" aria-hidden className="mt-px size-[18px] shrink-0" />
      {(
        [
          ["Vaccine", data.vaccine],
          ["Route", data.route],
          ["Location", data.location],
        ] as const
      ).map(([label, value]) => (
        <div key={label} className="flex min-w-0 flex-1 flex-col text-[13px] text-[#4b5563]">
          <span className="font-bold leading-none" style={raleway}>{label}</span>
          <span className="font-medium leading-tight" style={raleway}>{value}</span>
        </div>
      ))}
    </div>
  );
}

export function NeptunoCard({ className, style }: CardProps) {
  return (
    <aside aria-label="Patient vaccination info" className={cn(cardBase, "gap-2", className)} style={style}>
      <CardHeader
        name="Neptuno"
        breed="Feline, Bengal"
        iconUrl={catIconUrl}
        iconAlt="cat"
      />
      <StatusBadge label="Requires vaccination" dotColor="#e38777" bgColor="rgba(227,135,119,0.2)" />

      <p className="text-[16px] font-bold text-[#1f2a37]" style={raleway}>
        Past due
      </p>
      <VaccineInfo
        data={{ vaccine: "Cerenia 10mg/mL", route: "Subcutaneous (SQ)", location: "Right neck" }}
        bgClass="bg-[rgba(248,229,226,0.42)]"
      />

      <p className="text-[16px] font-bold text-[#1f2a37]" style={raleway}>
        Upcoming
      </p>
      <VaccineInfo
        data={{ vaccine: "Naxcel-Baytril-B12", route: "Intramuscular (IM)", location: "Shoulder area" }}
        bgClass="bg-[#f0f0f0]"
      />
    </aside>
  );
}
