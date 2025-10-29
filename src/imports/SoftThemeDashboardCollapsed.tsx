import svgPaths from "./svg-97tzm184st";

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
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2065_2867)" id="Icon">
          <path d={svgPaths.p1d0d6f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2867">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Paragraph">
      <Icon1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 tracking-[0.6px] uppercase whitespace-pre">Favorites</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative w-full">
          <Paragraph />
        </div>
      </div>
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

function Container1() {
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

function Container2() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center overflow-clip pl-0 py-0 relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function KixSideNavItem() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0" data-name="KIXSideNavItem">
      <Container2 />
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

function Container3() {
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

function Container4() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function KixSideNavItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0" data-name="KIXSideNavItem">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container />
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Work</p>
      <Icon4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#407a3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon5 />
          <Text2 />
          <div className="absolute bg-[#407a3f] bottom-[-10px] left-0 top-[-10px] w-[4px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#ddefd6] content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-[224px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function KixSideNavItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p373a5680} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 4.16667V5.83333" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V15.8333" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 9.16667V10.8333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Tickets</p>
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
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d={svgPaths.p3ec8f700} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon6 />
          <Text3 />
          <Badge1 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="KIXSideNavItem">
      <Container9 />
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
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.5V17.5" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 2.5V17.5" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon8 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function KixSideNavItem4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container11 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon9 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[224px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function KixSideNavItem5() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container13 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <KixSideNavItem2 />
      <SlotClone />
      <KixSideNavItem4 />
      <KixSideNavItem5 />
    </div>
  );
}

function KixSideNavSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[224px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button1 />
      <PrimitiveDiv />
    </div>
  );
}

function Icon10() {
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Records</p>
      <Icon10 />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph2 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button2 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon11() {
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Knowledge</p>
      <Icon11 />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph3 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button3 />
      <PrimitiveDiv2 />
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

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Insights</p>
      <Icon12 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph4 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button4 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Icon13() {
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
      <Icon13 />
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

function PrimitiveDiv4() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button5 />
      <PrimitiveDiv4 />
    </div>
  );
}

function Icon14() {
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Admin</p>
      <Icon14 />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph6 />
    </div>
  );
}

function PrimitiveDiv5() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button6 />
      <PrimitiveDiv5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-0 pt-[16px] px-[16px] relative shrink-0 w-[256px]" data-name="Container">
      <Container5 />
      <KixSideNavSection />
      <KixSideNavSection1 />
      <KixSideNavSection2 />
      <KixSideNavSection3 />
      <KixSideNavSection4 />
      <KixSideNavSection5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function KixSideNav() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col items-start pb-[36px] pt-0 px-0 relative rounded-[24px] shrink-0 w-[256px]" data-name="KIXSideNav">
      <LogoContainer />
      <Container15 />
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

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Container">
      <Icon15 />
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

function Container17() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[360px]" data-name="Container">
      <Container16 />
      <TextInput />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[40px] items-start relative rounded-[12px] shrink-0 w-[360px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container17 />
    </div>
  );
}

function Icon16() {
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

function Button7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Button8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2065_2856)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe224900} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.0075" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2856">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Button10() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-center relative w-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center relative shrink-0 w-[156px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function KixTopBar() {
  return (
    <div className="bg-[#f7f7f7] h-[84px] relative rounded-[24px] shrink-0 w-[1259px]" data-name="KIXTopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[84px] items-center justify-between px-[16px] py-[22px] relative w-[1259px]">
        <Input />
        <Container18 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-[208.641px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[208.641px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[40px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Icon20() {
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

function Icon21() {
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

function Button11() {
  return (
    <div className="bg-[#407a3f] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative">
        <Icon20 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">New Ticket</p>
        <Icon21 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Heading />
      <Button11 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[87.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[87.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Open Tickets</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[79.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[79.125px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[42px] text-nowrap text-white top-0 tracking-[-0.6px] whitespace-pre">856</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 8.5H11V5.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p10ae5c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-white top-0 w-[23px]">-5%</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[38.938px]">
        <Icon22 />
        <Text6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[26px] relative rounded-[12px] shrink-0 w-[64.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[64.938px]">
        <Container19 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[70px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[70px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container20 />
        <Text7 />
      </div>
    </div>
  );
}

function KpiTile() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph7 />
        <Paragraph8 />
        <Container21 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow h-[158px] min-h-px min-w-px relative rounded-[16.4px] shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[158px] items-start pl-[24px] pr-0 py-[24px] relative w-full">
          <KpiTile />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[60.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[60.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-0 whitespace-pre">New (7d)</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[71.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[71.828px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#0f172b] text-[42px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">124</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00786F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00786F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#00786f] text-[12px] top-0 w-[31px]">+12%</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[46.984px]">
        <Icon23 />
        <Text8 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[72.984px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[72.984px]">
        <Container22 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[81.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[81.688px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">vs previous 7d</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container23 />
        <Text9 />
      </div>
    </div>
  );
}

function KpiTile1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph9 />
        <Paragraph10 />
        <Container24 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pl-[24px] pr-0 py-[24px] relative w-[372.359px]">
        <KpiTile1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[158px] items-start min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <CardContent />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[101.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[101.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-0 whitespace-pre">Breached SLAs</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[26.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[26.547px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#0f172b] text-[42px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00786F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00786F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#00786f] text-[12px] top-0 w-[23px]">-2%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[38.5px]">
        <Icon24 />
        <Text10 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[64.5px]">
        <Container25 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[70px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[70px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container26 />
        <Text11 />
      </div>
    </div>
  );
}

function KpiTile2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph11 />
        <Paragraph12 />
        <Container27 />
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pl-[24px] pr-0 py-[24px] relative w-[372.359px]">
        <KpiTile2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[158px] items-start min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <CardContent1 />
    </div>
  );
}

function ChartCardsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="chart cards container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function KixChartCard() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by Priority</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[16px] relative w-full">
          <KixChartCard />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[160px] relative shrink-0 w-[255px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.2%] right-[-0.2%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 160">
          <g id="Group">
            <path d="M0.5 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M43 0V160" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M85.5 0V160" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M128 0V160" id="Vector_4" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M170.5 0V160" id="Vector_5" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M213 0V160" id="Vector_6" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M255.5 0V160" id="Vector_7" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[19.12%] right-[5.88%] top-[calc(50%-15px)] translate-y-[-50%]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">0</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.259%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[9px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">0.5</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[32.7%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[3px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.958%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[8px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">1.5</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.639%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[78.897%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[9px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">2.5</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[96.958%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[17.94%] right-[4.71%] top-[calc(50%+77.02px)] translate-y-[-50%]" data-name="Frame">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.439%] mt-[88.889%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[40px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Critical</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34.146%] mt-[59.259%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[27px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">High</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[29.63%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[41px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Normal</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[41.463%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[24px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Low</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[calc(50%-142.039px)] top-[calc(50%-15.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <Group14 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="bg-white h-[200px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Icon">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-start relative rounded-[12px] shrink-0 w-[340px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[306px] items-center justify-center min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <CardHeader />
      <CardContent2 />
    </div>
  );
}

function KixChartCard1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by State Type</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[16px] relative w-full">
          <KixChartCard1 />
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[62.163px] ml-[65.736%] mt-[11.148%] relative w-[54.822px]" data-name="Group">
      <div className="absolute inset-[-1.13%_-0.91%_-0.8%_-1.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 64">
          <g id="Group">
            <path d={svgPaths.p3ae8e000} fill="var(--fill-0, #13452D)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] h-[141.85px] ml-0 mt-0 relative w-[128.156px]" data-name="Group">
      <div className="absolute inset-[-0.35%_-0.55%_-0.5%_-0.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 144">
          <g id="Group">
            <path d={svgPaths.p332445a0} fill="var(--fill-0, #227D53)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[59.315px] ml-[19.656%] mt-[62.928%] relative w-[117.023px]" data-name="Group">
      <div className="absolute inset-[-1.16%_-0.59%_-0.84%_-0.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 61">
          <g id="Group">
            <path d={svgPaths.p1db54100} fill="var(--fill-0, #CBD5E1)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] h-[37.56px] ml-[71.836%] mt-[50.873%] relative w-[45.014px]" data-name="Group">
      <div className="absolute inset-[-1.38%_-1.15%_-1.81%_-1.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 39">
          <g id="Group">
            <path d={svgPaths.p4ea5d00} fill="var(--fill-0, #5FBD92)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group19 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[12px] shrink-0" data-name="Icon">
      <Group20 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2065_2797)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #227D53)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2797">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[39.453px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Closed</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[18px] left-[35.05px] top-0 w-[57.453px]" data-name="List Item">
      <Icon27 />
      <Text12 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2065_2773)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #13452D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2773">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[25.781px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">New</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[18px] left-[102.5px] top-0 w-[43.781px]" data-name="List Item">
      <Icon28 />
      <Text13 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2065_2817)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #5FBD92)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2817">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[30.469px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Open</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[18px] left-[156.28px] top-0 w-[48.469px]" data-name="List Item">
      <Icon29 />
      <Text14 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2065_2908)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #CBD5E1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2065_2908">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[46.203px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Pending</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[18px] left-[214.75px] top-0 w-[64.203px]" data-name="List Item">
      <Icon30 />
      <Text15 />
    </div>
  );
}

function Legend() {
  return (
    <div className="h-[18px] relative shrink-0 w-[324px]" data-name="Legend">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center relative rounded-[12px] shrink-0" data-name="Container">
      <Icon26 />
      <Legend />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[306px] items-center justify-center min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <CardHeader1 />
      <CardContent3 />
    </div>
  );
}

function KixChartCard2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by State Type</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[16px] relative w-full">
          <KixChartCard2 />
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[2.5%_1.71%_17.5%_7.68%]" data-name="Group">
      <div className="absolute bottom-[-0.31%] left-0 right-0 top-[-0.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 161">
          <g id="Group">
            <path d="M0 160.5H270" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 120.5H270" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 80.5H270" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 40.5H270" id="Vector_4" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 0.5H270" id="Vector_5" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[2.5%_1.71%_17.5%_7.68%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[84.76%_81.65%_7.74%_9.96%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_81.65%_7.74%_9.96%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Mon</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[84.76%_69.38%_7.74%_23.58%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_69.38%_7.74%_23.58%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Tue</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[84.76%_55.59%_7.74%_35.68%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_55.59%_7.74%_35.68%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Wed</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[84.76%_43.32%_7.74%_49.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_43.32%_7.74%_49.3%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Thu</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[84.76%_31.55%_7.74%_63.41%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_31.55%_7.74%_63.41%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Fri</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[84.76%_17.94%_7.74%_75.69%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_17.94%_7.74%_75.69%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sat</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[84.76%_4.49%_7.74%_88.13%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[84.76%_4.49%_7.74%_88.13%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sun</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[84.76%_4.49%_7.74%_9.96%]" data-name="Group">
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[84.76%_4.49%_7.74%_9.96%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[78.63%_95%_13.87%_2.31%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[78.63%_95%_13.87%_2.31%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">0</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[58.63%_95%_33.87%_2.31%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.63%_95%_33.87%_2.31%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">8</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[38.63%_95%_53.87%_0.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38.63%_95%_53.87%_0.3%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">16</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[18.63%_95%_73.87%_-0.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[18.63%_95%_73.87%_-0.03%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">24</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[0.63%_95%_91.87%_-0.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.63%_95%_91.87%_-0.03%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">32</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[0.63%_95%_13.87%_-0.03%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[0.63%_95%_13.87%_-0.03%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[17.5%] left-[8.98%] right-[80.95%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 115">
        <g id="Group">
          <path d={svgPaths.p246b0200} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[37.5%_68.01%_17.5%_21.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 90">
        <g id="Group">
          <path d={svgPaths.pb7f7900} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[5%_55.07%_17.5%_34.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 155">
        <g id="Group">
          <path d={svgPaths.p344e2d80} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[20%_42.12%_17.5%_47.81%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 125">
        <g id="Group">
          <path d={svgPaths.p205e8980} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[35%_29.18%_17.5%_60.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 95">
        <g id="Group">
          <path d={svgPaths.p27477f0} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[67.5%_16.24%_17.5%_73.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path d={svgPaths.p376d4200} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[77.5%_3.29%_17.5%_86.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 10">
        <g id="Group">
          <path d={svgPaths.p15c73b00} fill="var(--fill-0, #407A3F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[5%_3.29%_17.5%_8.98%]" data-name="Group">
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[5%_3.29%_17.5%_8.98%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function RechartsBarR17S() {
  return (
    <div className="absolute contents inset-[5%_3.29%_17.5%_8.98%]" data-name="recharts-bar-:r17s:">
      <Group47 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="bg-white h-[200px] overflow-clip relative rounded-[12px] shrink-0 w-[298px]" data-name="Icon">
      <Group22 />
      <Group31 />
      <Group38 />
      <RechartsBarR17S />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-start relative rounded-[12px] shrink-0 w-[298px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[306px] items-center justify-center min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <CardHeader2 />
      <CardContent4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="container">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[146.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[146.5px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">My Open Tickets</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">12 tickets</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[32px] relative shrink-0 w-[100.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[100.891px]">
        <Text16 />
        <Button12 />
      </div>
    </div>
  );
}

function KixDataTable() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="KIXDataTable">
      <Heading1 />
      <Container32 />
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[64px] items-start justify-center px-[24px] py-[6px] relative w-full">
          <KixDataTable />
        </div>
      </div>
    </div>
  );
}

function Icon33() {
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

function Container33() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[36px] items-center px-[12px] py-[10px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon33 />
      <Input1 />
    </div>
  );
}

function Icon34() {
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

function Button13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Last 30 days</p>
      <Icon34 />
    </div>
  );
}

function Icon35() {
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

function Button14() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Priority</p>
      <Icon35 />
    </div>
  );
}

function Icon36() {
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

function Button15() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon36 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Filter</p>
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

function Button16() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Sort</p>
    </div>
  );
}

function Icon37() {
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

function Button17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon37 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Export CSV</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function KixDataTableToolbar() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="KIXDataTableToolbar">
      <Container35 />
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

function Icon38() {
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
      <Icon38 />
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

function Icon39() {
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
      <Icon39 />
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

function Icon40() {
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
      <Icon40 />
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

function Icon41() {
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
      <Icon41 />
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

function Icon42() {
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
      <Icon42 />
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

function Icon43() {
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
      <Icon43 />
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

function Icon44() {
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
        <Icon44 />
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

function Text17() {
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
      <Text17 />
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

function Button18() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame4 />
    </div>
  );
}

function BuildingBlocksTable13() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button18 />
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
        <Icon45 />
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

function Text18() {
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
      <Text18 />
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

function Button19() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame5 />
    </div>
  );
}

function BuildingBlocksTable20() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button19 />
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

function Icon46() {
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
        <Icon46 />
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

function Text19() {
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
      <Text19 />
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

function Button20() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame6 />
    </div>
  );
}

function BuildingBlocksTable27() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button20 />
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

function Icon47() {
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
        <Icon47 />
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

function Text20() {
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
      <Text20 />
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

function Button21() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame7 />
    </div>
  );
}

function BuildingBlocksTable34() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button21 />
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

function Icon48() {
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
        <Icon48 />
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

function Text21() {
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
      <Text21 />
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

function Button22() {
  return (
    <div className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <Frame8 />
    </div>
  );
}

function BuildingBlocksTable41() {
  return (
    <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]" data-name=".BuildingBlocks/Table">
      <Button22 />
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

function Container36() {
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

function KixDataTable1() {
  return (
    <div className="content-stretch flex flex-col h-[529px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[189px]">Showing 1 to 10 of 10 results</p>
      </div>
    </div>
  );
}

function Button23() {
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

function Button24() {
  return (
    <div className="bg-[#407a3f] relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-px relative size-[32px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-px relative size-[32px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button23 />
        <Button24 />
        <Button25 />
        <Button26 />
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
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <KixDataTableHeader />
      <KixDataTable1 />
      <KixDataTableFooter />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[724px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[724px] items-start p-[16px] relative w-full">
          <KixDataTableToolbar />
          <CardContent5 />
        </div>
      </div>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-full">
        <Container39 />
      </div>
    </div>
  );
}

function MyOpenTickets() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="My open tickets">
      <CardHeader3 />
      <CardContent6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[107.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[107.531px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">New Tickets</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">4 tickets • Collapsed</p>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-px relative size-[32px]">
        <Icon49 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative">
        <Text22 />
        <Button27 />
      </div>
    </div>
  );
}

function KixDataTable2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="KIXDataTable">
      <Heading2 />
      <Container40 />
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
          <KixDataTable2 />
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <CardHeader4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[107.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[107.531px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">My Teams</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">2 tickets • Collapsed</p>
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-px relative size-[32px]">
        <Icon50 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative">
        <Text23 />
        <Button28 />
      </div>
    </div>
  );
}

function KixDataTable3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="KIXDataTable">
      <Heading3 />
      <Container41 />
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="CardHeader">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
          <KixDataTable3 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="container">
      <ChartCardsContainer />
      <Container31 />
      <MyOpenTickets />
      <Card6 />
      <CardHeader5 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Header />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f7f7f7] h-[2315.16px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[2315.16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <KixTopBar />
      <Container45 />
    </div>
  );
}

function KixAppShell() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="KIXAppShell">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <KixSideNav />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="App">
      <KixAppShell />
    </div>
  );
}

export default function SoftThemeDashboardCollapsed() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Soft theme - Dashboard collapsed">
      <App />
    </div>
  );
}