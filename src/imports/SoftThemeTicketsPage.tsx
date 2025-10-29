import svgPaths from "./svg-2j31nsqm1d";

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

function LogoContainer() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="logo_container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[84px] items-center justify-between pl-[24px] pr-[16px] py-0 relative w-full">
          <Logo />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2065_4848)" id="Icon">
          <path d={svgPaths.p1d0d6f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2065_4848">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <Icon1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Favorites</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pc348680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 4.1665V5.83317" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 14.1665V15.8332" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 9.1665V10.8332" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">My Open Tickets</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.094px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[29.094px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon2 />
          <Text />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container />
    </div>
  );
}

function KixSideNavItem() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-[224px]" data-name="KIXSideNavItem">
      <Container1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 14.1665V4.1665" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 14.1665V11.6665" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Weekly Report</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon3 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function KixSideNavItem1() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-[224px]" data-name="KIXSideNavItem">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[128px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <KixSideNavItem />
      <KixSideNavItem1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[188px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Work</p>
      <Icon4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative w-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon5 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function KixSideNavItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p373a5680} id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 4.16667V5.83333" id="Vector_2" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V15.8333" id="Vector_3" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 9.16667V10.8333" id="Vector_4" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#407a3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">Tickets</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.656px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[36.656px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">856</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon6 />
          <Text3 />
          <Badge1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem3() {
  return (
    <div className="absolute bg-[#eaf5e6] content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container8 />
      <div className="absolute bg-[#407a3f] h-[44px] left-0 top-1/2 translate-y-[-50%] w-[4px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] w-[4px]" />
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pc348680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 4.1665V5.83317" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 14.1665V15.8332" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 9.1665V10.8332" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">My Tickets</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.094px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[29.094px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon8 />
      <Text4 />
      <Badge2 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container11() {
  return (
    <div className="h-[44px] overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function KixSideNavItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container11 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p338f2df0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Watched tickets</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[27.047px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[27.047px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">12</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[216.531px]" data-name="Container">
      <Icon9 />
      <Text5 />
      <Badge3 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container14() {
  return (
    <div className="h-[44px] overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function KixSideNavItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container14 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Locked tickets</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[21.641px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[21.641px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">6</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon10 />
      <Text6 />
      <Badge4 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container17() {
  return (
    <div className="h-[44px] overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function KixSideNavItem6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container17 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ec0ab80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d205a80} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbc07580} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p5b139f0} id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Team Tickets</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[35.25px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[35.25px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">134</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[203.688px]" data-name="Container">
      <Icon11 />
      <Text7 />
      <Badge5 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[44px] overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function KixSideNavItem7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container20 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2065_4863)" id="Icon">
          <path d={svgPaths.p24a16680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b07f500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2065_4863">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Unassigned</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] w-[29.219px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">42</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon12 />
      <Text8 />
      <Badge6 />
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container23() {
  return (
    <div className="h-[44px] overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function KixSideNavItem8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem4 />
      <KixSideNavItem5 />
      <KixSideNavItem6 />
      <KixSideNavItem7 />
      <KixSideNavItem8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="Container">
      <SlotClone />
      <Container24 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon13 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function KixSideNavItem9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container27 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66602 1.6665V4.99984" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 1.6665V4.99984" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon14 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function KixSideNavItem10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="container">
      <KixSideNavItem2 />
      <Container25 />
      <KixSideNavItem9 />
      <KixSideNavItem10 />
    </div>
  );
}

function KixSideNavSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button1 />
      <Container30 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[188px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Records</p>
      <Icon15 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative w-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[188px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Knowledge</p>
      <Icon16 />
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative w-full">
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[188px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Insights</p>
      <Icon17 />
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative w-full">
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button4 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[188px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Communication</p>
      <Icon18 />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph5 />
    </div>
  );
}

function KixSideNavSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[80px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container4 />
          <KixSideNavSection />
          <KixSideNavSection1 />
          <KixSideNavSection2 />
          <KixSideNavSection3 />
          <KixSideNavSection4 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[793px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function KixSideNav() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col h-full items-start relative rounded-[24px] shrink-0 w-[256px]" data-name="KIXSideNav">
      <LogoContainer />
      <Container32 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%_12.49%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[69.42%_12.49%_12.5%_69.42%]" data-name="Vector">
        <div className="absolute inset-[-23.041%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.pabcbe00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2b443300} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 content-stretch flex grow h-[24px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-500 text-nowrap whitespace-pre">Search tickets</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[360px]" data-name="Container">
      <Container33 />
      <TextInput />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[40px] items-start relative rounded-[12px] shrink-0 w-[360px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container34 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p873b300} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1434ab00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2065_4804)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe224900} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.0075" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2065_4804">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-center relative w-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center relative shrink-0 w-[156px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function KixTopBar() {
  return (
    <div className="bg-[#f7f7f7] h-[84px] relative rounded-[24px] shrink-0 w-[1259px]" data-name="KIXTopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[84px] items-center justify-between px-[16px] py-[22px] relative w-[1259px]">
        <Input />
        <Container35 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pbe20170} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 2.91667V4.08333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 9.91667V11.0833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 6.41667V7.58333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function KixWorkTabs() {
  return (
    <div className="relative shrink-0" data-name="KIXWorkTabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">TD-T-066</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip rounded-[inherit] size-[16px]" />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f7f7f7] h-[32px] relative rounded-[3.35544e+07px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-[5px] relative">
        <Icon24 />
        <KixWorkTabs />
        <Frame />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pbe20170} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 2.91667V4.08333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 9.91667V11.0833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 6.41667V7.58333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function KixWorkTabs1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.766px]" data-name="KIXWorkTabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[72.766px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-0 whitespace-pre">HR-A-024</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip rounded-[inherit] size-[16px]" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#f7f7f7] h-[32px] relative rounded-[3.35544e+07px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-[5px] relative">
        <Icon25 />
        <KixWorkTabs1 />
        <Frame1 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pbe20170} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 2.91667V4.08333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 9.91667V11.0833" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 6.41667V7.58333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function KixWorkTabs2() {
  return (
    <div className="relative shrink-0" data-name="KIXWorkTabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Ticket #202509...</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip rounded-[inherit] size-[16px]" />
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="tab">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-[4px] relative">
        <Icon26 />
        <KixWorkTabs2 />
        <Frame2 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] w-full">
        <Tab />
        <Tab1 />
        <Tab2 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#407a3f] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative">
        <Icon27 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">New Ticket</p>
        <Icon28 />
      </div>
    </div>
  );
}

function KixWorkTabs3() {
  return (
    <div className="relative shrink-0 w-full" data-name="KIXWorkTabs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Container36 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function KixWorkTabsBar() {
  return (
    <div className="bg-[#eaf5e6] relative rounded-[12px] shrink-0 w-[1259px]" data-name="KIXWorkTabsBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[1259px]">
        <KixWorkTabs3 />
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[22px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">856</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#407a3f] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">All Tickets</p>
        <Badge7 />
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#eaf5e6] h-[22px] relative rounded-[12px] shrink-0 w-[33.094px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.094px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">My Tickets</p>
        <Badge8 />
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#eaf5e6] h-[22px] relative rounded-[12px] shrink-0 w-[40.656px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[40.656px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">12</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Watched</p>
        <Badge9 />
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#eaf5e6] h-[22px] relative rounded-[12px] shrink-0 w-[25.578px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[25.578px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">6</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Locked</p>
        <Badge10 />
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#eaf5e6] h-[22px] relative rounded-[12px] shrink-0 w-[25.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[25.453px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">134</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Team</p>
        <Badge11 />
      </div>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#eaf5e6] h-[22px] relative rounded-[12px] shrink-0 w-[33.219px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.219px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">42</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Unassigned</p>
        <Badge12 />
      </div>
    </div>
  );
}

function KixTicketViewsTabs() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[32px] items-center min-h-px min-w-px relative shrink-0" data-name="KIXTicketViewsTabs">
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function KixTicketsPageHeader() {
  return (
    <div className="bg-[#f7f7f7] relative shrink-0 w-full" data-name="KIXTicketsPageHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start p-[16px] relative w-full">
          <KixTicketViewsTabs />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.359px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Teams</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[49px] relative shrink-0 w-[319px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49px] items-center justify-between pb-px pt-0 px-[16px] relative w-[319px]">
        <Heading />
        <Button17 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[16px] relative rounded-[12px] shrink-0 w-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-center justify-center relative w-[20px]">
        <Icon30 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-slate-900">[TD-TEAM-001] 1st level team</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative w-full">
        <Text11 />
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#eaf5e6] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">48|57</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Button18 />
          <Container38 />
          <Badge13 />
        </div>
      </div>
    </div>
  );
}

function TreeNodeComponent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TreeNodeComponent">
      <Container39 />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-slate-900">[TD-TEAM-004] READ Team</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative w-full">
        <Text12 />
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#eaf5e6] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">0|0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center pl-0 pr-[8px] py-[6px] relative w-full">
          <Container40 />
          <Badge14 />
        </div>
      </div>
    </div>
  );
}

function TreeNodeComponent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TreeNodeComponent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[32px] pr-0 py-0 relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-slate-900">[TD-TEAM-004] WRITE Team</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative w-full">
        <Text13 />
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#eaf5e6] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">0|0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center pl-0 pr-[8px] py-[6px] relative w-full">
          <Container42 />
          <Badge15 />
        </div>
      </div>
    </div>
  );
}

function TreeNodeComponent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TreeNodeComponent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[32px] pr-0 py-0 relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[16px] relative rounded-[12px] shrink-0 w-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-center justify-center relative w-[20px]">
        <Icon31 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-slate-900">Service Desk</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative w-full">
        <Text14 />
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#eaf5e6] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">2|2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Button19 />
          <Container44 />
          <Badge16 />
        </div>
      </div>
    </div>
  );
}

function TreeNodeComponent3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TreeNodeComponent">
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <TreeNodeComponent />
          <TreeNodeComponent1 />
          <TreeNodeComponent2 />
          <TreeNodeComponent3 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[319px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[319px]">
        <Container46 />
      </div>
    </div>
  );
}

function KixFilterTree() {
  return (
    <div className="bg-[#f7f7f7] h-full relative shrink-0 w-[320px]" data-name="KIXFilterTree">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pl-0 pr-px py-0 relative w-[320px]">
        <Container37 />
        <Container47 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-0 py-[4px] relative shrink-0" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[36px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon32 />
      <Input1 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Today</p>
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36bb6c80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon34 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Filters</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Sort</p>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee11f80} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon35 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Export CSV</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function KixDataTableToolbar() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="KIXDataTableToolbar">
      <Container51 />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">TicketID</p>
    </div>
  );
}

function Sort() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort />
    </div>
  );
}

function Icon36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper />
    </div>
  );
}

function PdsButton() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon36 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]" data-name="wrapper">
      <ContentFrame />
      <PdsButton />
    </div>
  );
}

function BuildingBlocksTable() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Subject</p>
    </div>
  );
}

function Sort1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort1 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper1 />
    </div>
  );
}

function PdsButton1() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon37 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]" data-name="wrapper">
      <ContentFrame1 />
      <PdsButton1 />
    </div>
  );
}

function BuildingBlocksTable1() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper1 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Priority</p>
    </div>
  );
}

function Sort2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort2 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper2 />
    </div>
  );
}

function PdsButton2() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon38 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]" data-name="wrapper">
      <ContentFrame2 />
      <PdsButton2 />
    </div>
  );
}

function BuildingBlocksTable2() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Assignee</p>
    </div>
  );
}

function Sort3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort3 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper3 />
    </div>
  );
}

function PdsButton3() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon39 />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]" data-name="wrapper">
      <ContentFrame3 />
      <PdsButton3 />
    </div>
  );
}

function BuildingBlocksTable3() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper3 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Status</p>
    </div>
  );
}

function Sort4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort4 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper4 />
    </div>
  );
}

function PdsButton4() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon40 />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]" data-name="wrapper">
      <ContentFrame4 />
      <PdsButton4 />
    </div>
  );
}

function BuildingBlocksTable4() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper4 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Date created</p>
    </div>
  );
}

function Sort5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p193c4180} id="stroke" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="IconWrapper">
      <Sort5 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]" data-name=".Icon">
      <IconWrapper5 />
    </div>
  );
}

function PdsButton5() {
  return (
    <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]" data-name="pds-Button">
      <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <Icon41 />
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="wrapper">
      <ContentFrame5 />
      <PdsButton5 />
    </div>
  );
}

function BuildingBlocksTable5() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Wrapper5 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content-frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Actions</p>
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="wrapper">
      <ContentFrame6 />
    </div>
  );
}

function BuildingBlocksTable6() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Wrapper6 />
    </div>
  );
}

function KixDataTableHeader() {
  return (
    <div className="bg-slate-50 relative shrink-0 w-full" data-name="KIXDataTableHeader">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable />
          <BuildingBlocksTable1 />
          <BuildingBlocksTable2 />
          <BuildingBlocksTable3 />
          <BuildingBlocksTable4 />
          <BuildingBlocksTable5 />
          <BuildingBlocksTable6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BadgeLg() {
  return (
    <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0" data-name="Badge/LG">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202509...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BuildingBlocksTable7() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveButton />
          <BadgeLg />
        </div>
      </div>
    </div>
  );
}

function ContentFrame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[17.5px]">Testing neuer Artikel und E-Mail-Versand</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable8() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame7 />
        </div>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-teal-700 whitespace-pre">P4</p>
      </div>
    </div>
  );
}

function Prio() {
  return (
    <div className="bg-[#e7f8f1] h-[24px] relative rounded-[8px] shrink-0" data-name="Prio">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon42 />
        <PriorityBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable9() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Prio />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JS</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]" data-name="Primitive.span">
      <Text15 />
    </div>
  );
}

function BuildingBlocksTable10() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveSpan />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Jane Smith</p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="h-[15px] relative shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="h-[24px] relative rounded-[8px] shrink-0" data-name="Status">
      <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <StatusBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable11() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Status />
        </div>
      </div>
    </div>
  );
}

function ContentFrame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable12() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame8 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame4 />
    </div>
  );
}

function BuildingBlocksTable13() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button24 />
    </div>
  );
}

function TicketRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable7 />
          <BuildingBlocksTable8 />
          <BuildingBlocksTable9 />
          <BuildingBlocksTable10 />
          <BuildingBlocksTable11 />
          <BuildingBlocksTable12 />
          <BuildingBlocksTable13 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BadgeLg1() {
  return (
    <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0" data-name="Badge/LG">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202589</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BuildingBlocksTable14() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveButton1 />
          <BadgeLg1 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[17.5px]">Ticket mit vielen Anhängen</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable15() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame9 />
        </div>
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge1() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-teal-700 whitespace-pre">P4</p>
      </div>
    </div>
  );
}

function Prio1() {
  return (
    <div className="bg-[#e7f8f1] h-[24px] relative rounded-[8px] shrink-0" data-name="Prio">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon43 />
        <PriorityBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable16() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Prio1 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JS</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]" data-name="Primitive.span">
      <Text16 />
    </div>
  );
}

function BuildingBlocksTable17() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveSpan1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Jane Smith</p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="bg-amber-100 h-[24px] relative rounded-[8px] shrink-0" data-name="Status">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <StatusBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable18() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Status1 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">14 Sep 2025</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable19() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame10 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame5 />
    </div>
  );
}

function BuildingBlocksTable20() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button25 />
    </div>
  );
}

function TicketRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable14 />
          <BuildingBlocksTable15 />
          <BuildingBlocksTable16 />
          <BuildingBlocksTable17 />
          <BuildingBlocksTable18 />
          <BuildingBlocksTable19 />
          <BuildingBlocksTable20 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BadgeLg2() {
  return (
    <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0" data-name="Badge/LG">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202594</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BuildingBlocksTable21() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveButton2 />
          <BadgeLg2 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[17.5px]">AAA +++ Band 3 steht still</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable22() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame11 />
        </div>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6L6 2.5L9.5 6" id="Vector" stroke="var(--stroke-0, #B76E00)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9.5V2.5" id="Vector_2" stroke="var(--stroke-0, #B76E00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge2() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">P2</p>
      </div>
    </div>
  );
}

function Prio2() {
  return (
    <div className="bg-amber-100 h-[24px] relative rounded-[8px] shrink-0" data-name="Prio">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon44 />
        <PriorityBadge2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable23() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Prio2 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">MJ</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]" data-name="Primitive.span">
      <Text17 />
    </div>
  );
}

function BuildingBlocksTable24() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveSpan2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Mike Johnson</p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#407a3f] text-[11px] text-nowrap whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="bg-[#eaf5e6] h-[24px] relative rounded-[8px] shrink-0" data-name="Status">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <StatusBadge2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable25() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Status2 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">23 Sep 2025</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable26() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame12 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame6 />
    </div>
  );
}

function BuildingBlocksTable27() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button26 />
    </div>
  );
}

function TicketRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable21 />
          <BuildingBlocksTable22 />
          <BuildingBlocksTable23 />
          <BuildingBlocksTable24 />
          <BuildingBlocksTable25 />
          <BuildingBlocksTable26 />
          <BuildingBlocksTable27 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BadgeLg3() {
  return (
    <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0" data-name="Badge/LG">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202587</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BuildingBlocksTable28() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveButton3 />
          <BadgeLg3 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[17.5px]">Todesstern blitzt</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable29() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame13 />
        </div>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge3() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-teal-700 whitespace-pre">P4</p>
      </div>
    </div>
  );
}

function Prio3() {
  return (
    <div className="bg-[#e7f8f1] h-[24px] relative rounded-[8px] shrink-0" data-name="Prio">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon45 />
        <PriorityBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable30() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Prio3 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">SW</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]" data-name="Primitive.span">
      <Text18 />
    </div>
  );
}

function BuildingBlocksTable31() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveSpan3 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Sarah Wilson</p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="bg-amber-100 h-[24px] relative rounded-[8px] shrink-0" data-name="Status">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <StatusBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable32() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Status3 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">23 Sep 2025</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable33() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame14 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame7 />
    </div>
  );
}

function BuildingBlocksTable34() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button27 />
    </div>
  );
}

function TicketRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable28 />
          <BuildingBlocksTable29 />
          <BuildingBlocksTable30 />
          <BuildingBlocksTable31 />
          <BuildingBlocksTable32 />
          <BuildingBlocksTable33 />
          <BuildingBlocksTable34 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BadgeLg4() {
  return (
    <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0" data-name="Badge/LG">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202587</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BuildingBlocksTable35() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveButton4 />
          <BadgeLg4 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
        <p className="leading-[17.5px]">Ungelesene Artikel</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable36() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame15 />
        </div>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pda4c00} id="Vector" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge4() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b42318] text-[11px] text-nowrap whitespace-pre">P1</p>
      </div>
    </div>
  );
}

function Prio4() {
  return (
    <div className="bg-red-100 h-[24px] relative rounded-[8px] shrink-0" data-name="Prio">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-[5px] relative rounded-[inherit]">
        <Icon46 />
        <PriorityBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,35,24,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable37() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Prio4 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">SW</p>
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]" data-name="Primitive.span">
      <Text19 />
    </div>
  );
}

function BuildingBlocksTable38() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <PrimitiveSpan4 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Sarah Wilson</p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="h-[14.656px] relative shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#407a3f] text-[11px] text-nowrap whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="bg-[#eaf5e6] h-[24px] relative rounded-[8px] shrink-0" data-name="Status">
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <StatusBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BuildingBlocksTable39() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
          <Status4 />
        </div>
      </div>
    </div>
  );
}

function ContentFrame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content-frame">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">23 Sep 2025</p>
      </div>
    </div>
  );
}

function BuildingBlocksTable40() {
  return (
    <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0" data-name=".BuildingBlocks/Table">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
          <ContentFrame16 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame8 />
    </div>
  );
}

function BuildingBlocksTable41() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button28 />
    </div>
  );
}

function TicketRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <BuildingBlocksTable35 />
          <BuildingBlocksTable36 />
          <BuildingBlocksTable37 />
          <BuildingBlocksTable38 />
          <BuildingBlocksTable39 />
          <BuildingBlocksTable40 />
          <BuildingBlocksTable41 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TicketRow />
      <TicketRow1 />
      <TicketRow2 />
      <TicketRow3 />
      <TicketRow4 />
      <TicketRow />
      <TicketRow1 />
      <TicketRow2 />
      <TicketRow3 />
      <TicketRow4 />
    </div>
  );
}

function KixDataTable() {
  return (
    <div className="content-stretch flex flex-col h-[529px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[189px]">Showing 1 to 10 of 10 results</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button29 />
        <Button30 />
        <Button31 />
        <Button32 />
      </div>
    </div>
  );
}

function KixDataTableFooter() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="KIXDataTableFooter">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between pb-0 pt-px px-[16px] relative w-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <KixDataTableHeader />
      <KixDataTable />
      <KixDataTableFooter />
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px p-[16px] relative shrink-0 w-[937px]" data-name="Container">
      <KixDataTableToolbar />
      <CardContent />
    </div>
  );
}

function KixTicketsTableCard() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="KIXTicketsTableCard">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function KixTicketsLayout() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="KIXTicketsLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <KixFilterTree />
        <KixTicketsTableCard />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="App">
      <KixTicketsPageHeader />
      <KixTicketsLayout />
    </div>
  );
}

function Container56() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <App />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <KixTopBar />
      <KixWorkTabsBar />
      <Container56 />
    </div>
  );
}

function KixAppShell() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="KIXAppShell">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <KixSideNav />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="App">
      <KixAppShell />
    </div>
  );
}

export default function SoftThemeTicketsPage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Soft theme - Tickets page">
      <App1 />
    </div>
  );
}