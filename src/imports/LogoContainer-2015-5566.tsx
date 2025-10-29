import svgPaths from "./svg-xjrppdowwb";

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="logo">
      <div className="h-[26.71px] relative shrink-0 w-[72px]" data-name="logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 27">
          <path clipRule="evenodd" d={svgPaths.p2beac940} fill="var(--fill-0, #407A3F)" fillRule="evenodd" id="logo" />
        </svg>
      </div>
    </div>
  );
}

export default function LogoContainer() {
  return (
    <div className="relative size-full" data-name="logo_container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[28px] py-0 relative size-full">
          <Logo />
        </div>
      </div>
    </div>
  );
}