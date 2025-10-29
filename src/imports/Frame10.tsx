import svgPaths from "./svg-juwcaquona";

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

function Container1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[80px] items-start justify-center px-[32px] py-[16px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2011_1680)" id="Icon">
          <path d={svgPaths.p1d0d6f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2011_1680">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <Icon />
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Favorites</p>
    </div>
  );
}

function Icon1() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">My Open Tickets</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.094px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.094px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon1 />
          <Text />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function KixSideNavItem() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-[36px] w-[224px]" data-name="KIXSideNavItem">
      <Container3 />
    </div>
  );
}

function Icon2() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Weekly Report</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon2 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function KixSideNavItem1() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-[84px] w-[224px]" data-name="KIXSideNavItem">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <KixSideNavItem />
      <KixSideNavItem1 />
    </div>
  );
}

function Icon3() {
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Work</p>
      <Icon3 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph1 />
    </div>
  );
}

function Icon4() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon4 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function KixSideNavItem2() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container8 />
    </div>
  );
}

function Icon5() {
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

function Text3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Tickets</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.656px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.656px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">856</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon5 />
          <Text3 />
          <Badge1 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container10 />
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

function Icon7() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">My Tickets</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.094px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.094px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon7 />
      <Text4 />
      <Badge2 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function KixSideNavItem4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container13 />
    </div>
  );
}

function Icon8() {
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

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Team Tickets</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[35.25px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[35.25px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">134</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[203.688px]" data-name="Container">
      <Icon8 />
      <Text5 />
      <Badge3 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function KixSideNavItem5() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container16 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2011_1717)" id="Icon">
          <path d={svgPaths.p24a16680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b07f500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2011_1717">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Unassigned</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.219px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">42</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon9 />
      <Text6 />
      <Badge4 />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function KixSideNavItem6() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem4 />
      <KixSideNavItem5 />
      <KixSideNavItem6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[184px] items-start relative shrink-0 w-full" data-name="Container">
      <SlotClone />
      <Container20 />
    </div>
  );
}

function Icon10() {
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

function Text7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon10 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function KixSideNavItem7() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container23 />
    </div>
  );
}

function Icon11() {
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

function Text8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon11 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function KixSideNavItem8() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container25 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[328px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <KixSideNavItem2 />
      <Container21 />
      <KixSideNavItem7 />
      <KixSideNavItem8 />
    </div>
  );
}

function KixSideNavSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[364px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button />
      <PrimitiveDiv />
    </div>
  );
}

function Icon12() {
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Records</p>
      <Icon12 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M18.3327 10H1.66602" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p31a0b500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 13.3335H8.34232" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Assets</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[42.516px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[42.516px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">1203</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon13 />
          <Text9 />
          <Badge5 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem9() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container27 />
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem9 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M18.3327 10H1.66602" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p31a0b500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 13.3335H8.34232" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Computers</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.922px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.922px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">456</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon15 />
      <Text10 />
      <Badge6 />
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container30() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function KixSideNavItem10() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container30 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M18.3327 10H1.66602" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p31a0b500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 13.3335H8.34232" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Servers</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.219px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">89</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon16 />
      <Text11 />
      <Badge7 />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function KixSideNavItem11() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container33 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M18.3327 10H1.66602" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p31a0b500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 13.3335H8.34232" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Network Devices</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.938px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.938px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">234</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[233.406px]" data-name="Container">
      <Icon17 />
      <Text12 />
      <Badge8 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container36() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function KixSideNavItem12() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem10 />
      <KixSideNavItem11 />
      <KixSideNavItem12 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[184px] items-start relative shrink-0 w-full" data-name="Container">
      <SlotClone1 />
      <Container37 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e4dcf80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Locations</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.219px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">89</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon18 />
          <Text13 />
          <Badge9 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function KixSideNavItem13() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container40 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p27523280} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3362af00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33268 7.5H6.66602" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3327 10.8335H6.66602" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3327 14.1665H6.66602" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Service contracts</p>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[34.969px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[34.969px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">145</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon19 />
          <Text14 />
          <Badge10 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function KixSideNavItem14() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container42 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3bec3580} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V15H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 5H6.67435" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 5H13.3423" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5H10.0083" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 8.33333H10.0083" id="Vector_6" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 11.6667H10.0083" id="Vector_7" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 8.3335H13.3423" id="Vector_8" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 11.6665H13.3423" id="Vector_9" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 8.3335H6.67435" id="Vector_10" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 11.6665H6.67435" id="Vector_11" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Organizations</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.938px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.938px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">342</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon20 />
          <Text15 />
          <Badge11 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem15() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container44 />
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem15 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3bec3580} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V15H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 5H6.67435" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 5H13.3423" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5H10.0083" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 8.33333H10.0083" id="Vector_6" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 11.6667H10.0083" id="Vector_7" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 8.3335H13.3423" id="Vector_8" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 11.6665H13.3423" id="Vector_9" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 8.3335H6.67435" id="Vector_10" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 11.6665H6.67435" id="Vector_11" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Customers</p>
      </div>
    </div>
  );
}

function Badge12() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.938px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.938px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">234</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon22 />
      <Text16 />
      <Badge12 />
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container47() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function KixSideNavItem16() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container47 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3bec3580} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V15H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 5H6.67435" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 5H13.3423" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5H10.0083" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 8.33333H10.0083" id="Vector_6" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 11.6667H10.0083" id="Vector_7" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 8.3335H13.3423" id="Vector_8" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.334 11.6665H13.3423" id="Vector_9" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 8.3335H6.67435" id="Vector_10" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 11.6665H6.67435" id="Vector_11" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Suppliers</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[35px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[35px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">108</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon23 />
      <Text17 />
      <Badge13 />
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container50() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function KixSideNavItem17() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem16 />
      <KixSideNavItem17 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[136px] items-start relative shrink-0 w-full" data-name="Container">
      <SlotClone2 />
      <Container51 />
    </div>
  );
}

function Icon24() {
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

function Text18() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Contacts</p>
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[42.047px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[42.047px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">1847</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon24 />
          <Text18 />
          <Badge14 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function KixSideNavItem18() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container54 />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[468px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <Container38 />
      <KixSideNavItem13 />
      <KixSideNavItem14 />
      <Container52 />
      <KixSideNavItem18 />
    </div>
  );
}

function KixSideNavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[504px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button1 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon25() {
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Knowledge</p>
      <Icon25 />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph3 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 5.83333V17.5" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pfd8cbf0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Knowledge base</p>
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[33.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[33.984px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">127</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon26 />
          <Text19 />
          <Badge15 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem19() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container56 />
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem19 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p27523280} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3362af00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33268 7.5H6.66602" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3327 10.8335H6.66602" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3327 14.1665H6.66602" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Articles</p>
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.219px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">89</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon28 />
      <Text20 />
      <Badge16 />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container59() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function KixSideNavItem20() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container59 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2011_1717)" id="Icon">
          <path d={svgPaths.p24a16680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b07f500} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2011_1717">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">FAQs</p>
      </div>
    </div>
  );
}

function Badge17() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.313px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.313px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">38</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon29 />
      <Text21 />
      <Badge17 />
    </div>
  );
}

function Container61() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container62() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function KixSideNavItem21() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem20 />
      <KixSideNavItem21 />
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="content-stretch flex flex-col h-[136px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <SlotClone3 />
      <Container63 />
    </div>
  );
}

function KixSideNavSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[172px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button2 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Icon30() {
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Insights</p>
      <Icon30 />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph4 />
    </div>
  );
}

function Icon31() {
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

function Text22() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Reports</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon31 />
          <Text22 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem22() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container65 />
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem22 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f172080} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b3f2180} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">SLA performance</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon33 />
      <Text23 />
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container68() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function KixSideNavItem23() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container68 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 14.167V4.16699" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 14.167V11.667" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Ticket trends</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon34 />
      <Text24 />
    </div>
  );
}

function Container70() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container71() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function KixSideNavItem24() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container71 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M18.3327 10H1.66602" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p394cbe80} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 13.333H5.00833" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 13.333H8.34232" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Asset Reports</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon35 />
      <Text25 />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function KixSideNavItem25() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem23 />
      <KixSideNavItem24 />
      <KixSideNavItem25 />
    </div>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="content-stretch flex flex-col h-[184px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <SlotClone4 />
      <Container75 />
    </div>
  );
}

function KixSideNavSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[220px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button3 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Icon36() {
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
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Communication</p>
      <Icon36 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph5 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p9375500} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1d503ec0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 5V11.6667" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Announcements</p>
      </div>
    </div>
  );
}

function Badge18() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[21.734px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[21.734px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon37 />
          <Text26 />
          <Badge18 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container76 />
    </div>
  );
}

function KixSideNavItem26() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container77 />
    </div>
  );
}

function KixSideNavSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[80px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button4 />
      <KixSideNavItem26 />
    </div>
  );
}

function Icon38() {
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

function Paragraph6() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Admin</p>
      <Icon38 />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph6 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p96b3700} id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#407a3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">Administration</p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d="M1 1L5 5L9 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon40 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon39 />
          <Text27 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem27() {
  return (
    <div className="absolute bg-[#ddefd6] content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container79 />
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem27 />
    </div>
  );
}

function Icon41() {
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

function Text28() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">User Management</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon41 />
      <Text28 />
    </div>
  );
}

function Container81() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container82() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function KixSideNavItem28() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container82 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p96b3700} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Role Management</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon42 />
      <Text29 />
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container85() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function KixSideNavItem29() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container85 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcecc680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">System Config</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[24px] items-center left-[24px] px-[12px] py-0 top-[10px] w-[200px]" data-name="Container">
      <Icon43 />
      <Text30 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-slate-300 h-[44px] left-[16px] top-0 w-px" data-name="Container" />;
}

function Container88() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function KixSideNavItem30() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <KixSideNavItem28 />
      <KixSideNavItem29 />
      <KixSideNavItem30 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col h-[184px] items-start relative shrink-0 w-full" data-name="Container">
      <SlotClone5 />
      <Container89 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcecc680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon44 />
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container91 />
    </div>
  );
}

function KixSideNavItem31() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container92 />
    </div>
  );
}

function PrimitiveDiv4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[232px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <Container90 />
      <KixSideNavItem31 />
    </div>
  );
}

function KixSideNavSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[268px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button5 />
      <PrimitiveDiv4 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[1912px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[1912px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container6 />
          <KixSideNavSection />
          <KixSideNavSection1 />
          <KixSideNavSection2 />
          <KixSideNavSection3 />
          <KixSideNavSection4 />
          <KixSideNavSection5 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[254px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative w-[254px]">
        <Container93 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2010_5186)" id="Icon">
          <path d={svgPaths.p102d9f80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pf302400} fill="var(--fill-0, #64748B)" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2e495600} fill="var(--fill-0, #64748B)" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p8b93a00} fill="var(--fill-0, #64748B)" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p359ce080} fill="var(--fill-0, #64748B)" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5186">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.75px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[65.75px]">
        <Icon45 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[12px] text-nowrap text-slate-500 top-px whitespace-pre">Theme</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Deep V2</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="bg-[#f8fafb] relative rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="h-[13.793px] relative rounded-[3.35544e+07px] shrink-0 w-[24px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.793px] items-center pl-[0.75px] pr-px py-px relative w-[24px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[23.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[23.516px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Soft</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[18.391px] relative shrink-0 w-[120.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[18.391px] items-center relative w-[120.188px]">
        <Text32 />
        <PrimitiveButton />
        <Text33 />
      </div>
    </div>
  );
}

function KixThemeToggle() {
  return (
    <div className="content-stretch flex h-[18.391px] items-center justify-between relative shrink-0 w-full" data-name="KIXThemeToggle">
      <PrimitiveLabel />
      <Container95 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[102px] size-[18px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 2.25V15.75" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 11.25L9.75001 9L12 6.75" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Icon46 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-slate-500">KIX v18.0.5</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[135.391px] relative shrink-0 w-[254px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[135.391px] items-start pb-0 pt-[17px] px-[16px] relative w-[254px]">
        <KixThemeToggle />
        <Button6 />
        <Container96 />
      </div>
    </div>
  );
}

function KixSideNav() {
  return (
    <div className="bg-[#f1f2f6] box-border content-stretch flex flex-col h-[2315px] items-start pl-0 pr-px py-0 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full" data-name="KIXSideNav">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
      <Container94 />
      <Container97 />
    </div>
  );
}

export default function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Container1 />
      <KixSideNav />
    </div>
  );
}