import imgImage2 from "./cad65de5128c4371b10ee281d0c670e98d8edbf1.png";
import imgImage3 from "./609015cae4734a3a11e6bb36fc30e66a33e62c41.png";

function Frame() {
  return (
    <div className="h-[75.5px] relative shrink-0 w-[1164.5px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[75.5px] left-0 mix-blend-plus-lighter top-0 w-[1164.5px]" data-name="image 2">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BannerSection() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(53,89,199,0.25)] items-center justify-center relative size-full to-[rgba(53,89,199,0.25)] via-1/2 via-[rgba(64,18,152,0.6)]" data-name="BannerSection">
      <Frame />
    </div>
  );
}