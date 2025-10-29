import svgPaths from "./svg-hizjwtp65a";

function Logo() {
  return (
    <div className="h-[23.742px] relative shrink-0 w-[64px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 24">
        <g clipPath="url(#clip0_2065_2870)" id="logo">
          <path clipRule="evenodd" d={svgPaths.p321e8f00} fill="var(--fill-0, #407A3F)" fillRule="evenodd" id="logo_2" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2870">
            <rect fill="white" height="23.7419" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p128dbc60} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

export default function LogoContainer() {
  return (
    <div className="relative size-full" data-name="logo_container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[24px] pr-[16px] py-0 relative size-full">
          <Logo />
          <Button />
        </div>
      </div>
    </div>
  );
}