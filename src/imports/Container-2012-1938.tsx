import svgPaths from "./svg-km4xa2a7p3";

function Container() {
  return (
    <div className="h-[27px] relative shrink-0 w-[72px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 27">
        <g clipPath="url(#clip0_2010_5210)" id="Container">
          <path clipRule="evenodd" d={svgPaths.p120aa700} fill="var(--fill-0, #F8FAFB)" fillRule="evenodd" id="logo" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5210">
            <rect fill="white" height="27" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[32px] py-[16px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}