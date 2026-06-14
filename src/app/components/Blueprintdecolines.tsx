import type { CSSProperties } from "react";

export const BLUEPRINT_DECO_LINES_DEFAULT_COLOR = "#CED1D7";
export const BLUEPRINT_DECO_LINES_NAVBAR_COLOR = "#dddfe3";

function lineStyle(dashed: boolean, color: string): CSSProperties {
  return dashed ? { borderColor: color } : { backgroundColor: color };
}

export function BlueprintDecoLines({
  dashed = false,
  color = BLUEPRINT_DECO_LINES_DEFAULT_COLOR,
}: {
  dashed?: boolean;
  color?: string;
}) {
  const hLine = dashed ? "h-0 border-t border-dashed" : "h-px";
  const vLine = dashed ? "w-0 border-l border-dashed" : "w-px";
  const hStyle = lineStyle(dashed, color);
  const vStyle = lineStyle(dashed, color);

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 z-50">
      {/* Edge lines */}
      <span
        className={`absolute left-0 top-0 w-full ${hLine}`}
        style={hStyle}
      />
      <span
        className={`absolute left-0 bottom-0 w-full ${hLine}`}
        style={hStyle}
      />
      <span
        className={`absolute left-0 top-0 h-full ${vLine}`}
        style={vStyle}
      />
      <span
        className={`absolute right-0 top-0 h-full ${vLine}`}
        style={vStyle}
      />

      {/* Vertical tick marks beyond corners */}
      <span
        className={`absolute left-0 top-0 h-2 -translate-y-full ${vLine}`}
        style={vStyle}
      />
      <span
        className={`absolute right-0 top-0 h-2 -translate-y-full ${vLine}`}
        style={vStyle}
      />
      <span
        className={`absolute left-0 bottom-0 h-2 translate-y-full ${vLine}`}
        style={vStyle}
      />
      <span
        className={`absolute right-0 bottom-0 h-2 translate-y-full ${vLine}`}
        style={vStyle}
      />

      {/* Horizontal tick marks beyond corners */}
      <span
        className={`absolute top-0 left-0 w-2 -translate-x-full ${hLine}`}
        style={hStyle}
      />
      <span
        className={`absolute top-0 right-0 w-2 translate-x-full ${hLine}`}
        style={hStyle}
      />
      <span
        className={`absolute bottom-0 left-0 w-2 -translate-x-full ${hLine}`}
        style={hStyle}
      />
      <span
        className={`absolute bottom-0 right-0 w-2 translate-x-full ${hLine}`}
        style={hStyle}
      />
    </span>
  );
}
