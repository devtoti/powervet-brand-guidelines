export function BlueprintDecoLines({ dashed = false }: { dashed?: boolean }) {
  const hLine = dashed
    ? "h-0 border-t border-dashed border-[#CED1D7]"
    : "h-px bg-[#CED1D7]";
  const vLine = dashed
    ? "w-0 border-l border-dashed border-[#CED1D7]"
    : "w-px bg-[#CED1D7]";

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 z-50">
      {/* Edge lines */}
      <span className={`absolute left-0 top-0 w-full ${hLine}`} />
      <span className={`absolute left-0 bottom-0 w-full ${hLine}`} />
      <span className={`absolute left-0 top-0 h-full ${vLine}`} />
      <span className={`absolute right-0 top-0 h-full ${vLine}`} />

      {/* Vertical tick marks beyond corners */}
      <span
        className={`absolute left-0 top-0 h-2 -translate-y-full ${vLine}`}
      />
      <span
        className={`absolute right-0 top-0 h-2 -translate-y-full ${vLine}`}
      />
      <span
        className={`absolute left-0 bottom-0 h-2 translate-y-full ${vLine}`}
      />
      <span
        className={`absolute right-0 bottom-0 h-2 translate-y-full ${vLine}`}
      />

      {/* Horizontal tick marks beyond corners */}
      <span
        className={`absolute top-0 left-0 w-2 -translate-x-full ${hLine}`}
      />
      <span
        className={`absolute top-0 right-0 w-2 translate-x-full ${hLine}`}
      />
      <span
        className={`absolute bottom-0 left-0 w-2 -translate-x-full ${hLine}`}
      />
      <span
        className={`absolute bottom-0 right-0 w-2 translate-x-full ${hLine}`}
      />
    </span>
  );
}
