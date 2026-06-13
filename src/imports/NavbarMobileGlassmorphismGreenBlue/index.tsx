import svgPaths from "./svg-ea1yyfb8hb";

function IconContainer() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Icon Container">
      <div className="absolute left-[5.04px] overflow-clip size-[30px] top-[5px]" data-name="Navbar Icon">
        <div className="absolute inset-[16.03%_31.83%_28.47%_27.46%]" data-name="bg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="bg" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_16.4%_9.46%_16.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1295 24.3483">
            <path d={svgPaths.p5b3c800} fill="var(--fill-0, #401298)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DropdownItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Dropdown-Item">
      <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Solutions</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Navbar Solutions Dropdown Icon">
        <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.p39be5970} fill="var(--fill-0, #1F2A37)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DropdownItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Dropdown-Item">
      <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Navbar Services Dropdown Icon">
        <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.p39be5970} fill="var(--fill-0, #1F2A37)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DropdownItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Dropdown-Item">
      <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Resources</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Navbar Resources Dropdown Icon">
        <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.p39be5970} fill="var(--fill-0, #1F2A37)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavbarSignInContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navbar Sign In Container">
      <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1e429f] text-[16px] whitespace-nowrap">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[24px] underline">Sign In</p>
      </div>
      <div className="bg-[#3559c7] h-[32px] relative rounded-[22px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[7.4px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Raleway:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Book Demo</p>
        </div>
        <div aria-hidden className="absolute border border-[#4163ca] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)]" />
      </div>
    </div>
  );
}

export default function NavbarMobileGlassmorphismGreenBlue() {
  return (
    <div className="backdrop-blur-[5.1px] bg-[rgba(255,255,255,0.5)] relative rounded-[38px] size-full" data-name="Navbar-Mobile/Glassmorphism-Green-Blue">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
        <IconContainer />
        <DropdownItem />
        <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">AI Tools</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Raleway:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Plans</p>
        </div>
        <DropdownItem1 />
        <DropdownItem2 />
        <NavbarSignInContainer />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none rounded-[38px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}