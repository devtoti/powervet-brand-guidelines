export default function LayoutGrids() {
  return (
    <div className="bg-gradient-to-r from-white relative rounded-[24px] size-full to-white" data-name="Layout Grids">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
        <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
        <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
        <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}