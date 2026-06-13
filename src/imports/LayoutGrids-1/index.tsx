type LayoutGridsProps = {
  className?: string;
  property1?: "desktop-12-cols" | "laptop-8-cols" | "mobile-4-cols" | "tablet-6-cols";
};

export default function LayoutGrids({ className, property1 = "mobile-4-cols" }: LayoutGridsProps) {
  const isDesktop12Cols = property1 === "desktop-12-cols";
  const isLaptop8Cols = property1 === "laptop-8-cols";
  const isMobile4Cols = property1 === "mobile-4-cols";
  const isTablet6Cols = property1 === "tablet-6-cols";
  return (
    <div className={className || `bg-gradient-to-r from-white relative rounded-[24px] to-white ${isDesktop12Cols ? "h-[832px] w-[1280px]" : isLaptop8Cols ? "h-[744px] w-[1133px]" : isTablet6Cols ? "h-[1133px] w-[744px]" : "h-[874px] w-[402px]"}`}>
      <div className={`content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full ${isDesktop12Cols ? "gap-[16px] px-[24px]" : isLaptop8Cols ? "px-[24px]" : isTablet6Cols ? "" : "gap-[16px] px-[16px]"}`}>
        {isMobile4Cols && (
          <>
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Mobile Col" />
          </>
        )}
        {isTablet6Cols && (
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Tablet Cols">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center px-[20px] relative size-full">
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
                <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Tablet Col" />
              </div>
            </div>
          </div>
        )}
        {isLaptop8Cols && (
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-w-px relative" data-name="Laptop Cols">
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Laptop Col" />
          </div>
        )}
        {isDesktop12Cols && (
          <>
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
            <div className="bg-[#3559c7] flex-[1_0_0] h-full min-w-px opacity-10 relative" data-name="Desktop Col" />
          </>
        )}
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}