import svgPaths from "./svg-qxlcvv8jto";

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

export default function KixSideNav() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col items-start pb-[36px] pt-0 px-0 relative rounded-[24px] size-full" data-name="KIXSideNav">
      <LogoContainer />
      <Container15 />
    </div>
  );
}