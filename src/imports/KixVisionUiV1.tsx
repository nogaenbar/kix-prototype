import svgPaths from "./svg-ivxo5qe4qy";
import imgImageKixServiceSoftware from "figma:asset/84cc71845f6ec7714e3045962faa7b220286b259.png";

function ImageKixServiceSoftware() {
  return (
    <div className="h-[37px] relative shrink-0 w-[68px]" data-name="Image (KIX Service Software)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[183.78%] left-0 max-w-none top-[-41.89%] w-full" src={imgImageKixServiceSoftware} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37px] w-[68px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[100px] items-center justify-between pl-[28px] pr-0 py-0 relative w-full">
          <ImageKixServiceSoftware />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_1160)" id="Icon">
          <path d={svgPaths.p1d0d6f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1160">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-0 relative w-full">
          <Icon />
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 tracking-[0.6px] uppercase whitespace-pre">Favorites</p>
        </div>
      </div>
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
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">23</p>
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
          <Icon1 />
          <Text />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center overflow-clip pl-0 py-0 relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function KixSideNavItem() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container2 />
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

function Container3() {
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

function Container4() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function KixSideNavItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <KixSideNavItem />
      <KixSideNavItem1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#407a3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Container6() {
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

function Container7() {
  return (
    <div className="bg-[#ebf5e6] content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
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
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">856</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d="M1 9L5 5L1 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
        <Icon6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon5 />
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
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container9 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem3 />
    </div>
  );
}

function Icon7() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon7 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
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

function Icon8() {
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

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon8 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function KixSideNavItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container13 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[188px] items-start relative shrink-0 w-full" data-name="Primitive.div">
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
      <Button />
      <PrimitiveDiv />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Records</p>
      <Icon9 />
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

function PrimitiveDiv1() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button1 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Knowledge</p>
      <Icon10 />
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

function PrimitiveDiv2() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button2 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Insights</p>
      <Icon11 />
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

function PrimitiveDiv3() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button3 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Communication</p>
      <Icon12 />
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

function PrimitiveDiv4() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button4 />
      <PrimitiveDiv4 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[187px] size-[12px] top-[2px]" data-name="Icon">
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
    <div className="absolute h-[16px] left-[12px] top-[8px] w-[199px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-0 tracking-[0.6px] uppercase whitespace-pre">Admin</p>
      <Icon13 />
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

function PrimitiveDiv5() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button5 />
      <PrimitiveDiv5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[708px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[708px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container5 />
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

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[14px] top-px" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2001_1104)" id="Icon">
          <path d={svgPaths.p2cfc8f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p7b90880} fill="var(--fill-0, #64748B)" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p33893800} fill="var(--fill-0, #64748B)" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f386100} fill="var(--fill-0, #64748B)" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p14ab3d00} fill="var(--fill-0, #64748B)" id="Vector_5" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1104">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.75px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[61.75px]">
        <Icon14 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[22px] not-italic text-[12px] text-nowrap text-slate-500 top-0 whitespace-pre">Theme</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Deep</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Primitive.span">
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

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[23.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[23.516px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Soft</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18.391px] relative shrink-0 w-[101.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[18.391px] items-center relative w-[101.438px]">
        <Text6 />
        <PrimitiveButton />
        <Text7 />
      </div>
    </div>
  );
}

function KixThemeToggle() {
  return (
    <div className="content-stretch flex h-[18.391px] items-center justify-between relative shrink-0 w-full" data-name="KIXThemeToggle">
      <PrimitiveLabel />
      <Container16 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[103.5px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2640de40} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Icon15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-slate-500">KIX v18.0.5</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[135.391px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[135.391px] items-start pb-0 pt-[17px] px-[16px] relative w-full">
          <KixThemeToggle />
          <Button6 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function KixSideNav() {
  return (
    <div className="basis-0 bg-[#f7f7f7] content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="KIXSideNav">
      <Container />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[968px] items-center pl-[12px] pr-0 py-[12px] relative shrink-0 w-[266px]">
      <KixSideNav />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex h-[24px] items-center px-[16px] py-0 relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-neutral-500 text-nowrap whitespace-pre">Search tickets</p>
        </div>
      </div>
    </div>
  );
}

function KixSearchExpandable() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 w-[360px]" data-name="KIXSearchExpandable">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-[360px]">
        <Icon16 />
        <TextInput />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p167c8100} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pb516100} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[44px] rounded-[12px] size-[36px] top-[2px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Icon18() {
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
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[84px] rounded-[12px] size-[36px] top-[2px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2001_1163)" id="Icon">
          <path d={svgPaths.pf88ab00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27099280} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.0075" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1163">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[124px] rounded-[12px] size-[36px] top-[2px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p30702300} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p9f90980} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[164px] rounded-[12px] size-[36px] top-[2px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[40px] relative shrink-0 w-[200px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] items-center relative">
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <KixSearchExpandable />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function KixTopBar() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col h-[84px] items-start pb-px pt-0 px-0 relative rounded-[24px] shrink-0 w-full" data-name="KIXTopBar">
      <Container21 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-start pl-0 pr-[12px] py-[12px] relative w-full">
          <KixTopBar />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[135.38px] size-[16px] top-[10px]" data-name="Icon">
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
    <div className="bg-[#407a3f] h-[36px] relative rounded-[16px] shrink-0 w-[163.375px]" data-name="Button">
      <Icon21 />
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">New Ticket</p>
      <Icon22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-none not-italic relative shrink-0 text-[40px] text-nowrap text-slate-900 whitespace-pre">Dashboard</p>
      <Button11 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Open Tickets</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-0.75px] whitespace-pre">856</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 8.5H11V5.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p10ae5c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-white top-0 w-[23px]">-5%</p>
      </div>
    </div>
  );
}

function KpiTile() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.938px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[38.938px]">
        <Icon23 />
        <Text8 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[22px] relative rounded-[12px] shrink-0 w-[56.938px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-center justify-center overflow-clip p-px relative w-[56.938px]">
        <KpiTile />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] opacity-75 relative shrink-0 w-[81.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[81.656px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge2 />
      <Text9 />
    </div>
  );
}

function KpiTile1() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph7 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Card">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <KpiTile1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">New (7d)</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[42px] text-nowrap text-slate-900 tracking-[-0.6px] whitespace-pre">124</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-teal-700 top-0 w-[31px]">+12%</p>
      </div>
    </div>
  );
}

function KpiTile2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.984px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[46.984px]">
        <Icon24 />
        <Text10 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[64.984px]">
        <KpiTile2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="opacity-75 relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">vs previous 7d</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge3 />
      <Text11 />
    </div>
  );
}

function KpiTile3() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph8 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Card">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <KpiTile3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Breached SLAs</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[42px] text-nowrap text-slate-900 tracking-[-0.6px] whitespace-pre">8</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-teal-700 top-0 w-[31px]">-2%</p>
      </div>
    </div>
  );
}

function KpiTile4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.984px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[46.984px]">
        <Icon25 />
        <Text12 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[64.984px]">
        <KpiTile4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="opacity-75 relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge4 />
      <Text13 />
    </div>
  );
}

function KpiTile5() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph9 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Card">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <KpiTile5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function KixChartCard() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="KIXChartCard">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Open by Priority</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[24px_minmax(0px,_1fr)] h-[63px] pb-[23px] pt-[16px] px-[24px] relative w-full">
          <KixChartCard />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.5%_5.99%_17.5%_19.46%]" data-name="Group">
      <div className="absolute inset-[2.5%_80.54%_17.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_68.11%_17.5%_31.89%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_55.69%_17.5%_44.31%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_43.26%_17.5%_56.74%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_30.84%_17.5%_69.16%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_18.41%_17.5%_81.59%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_5.99%_17.5%_94.01%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 160">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.5%_5.99%_17.5%_19.46%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[84.76%_79.34%_7.74%_18.26%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_79.34%_7.74%_18.26%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">0</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[84.76%_65.42%_7.74%_29.19%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_65.42%_7.74%_29.19%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">0.5</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[84.76%_54.79%_7.74%_43.41%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_54.79%_7.74%_43.41%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">1</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[84.76%_40.87%_7.74%_54.34%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_40.87%_7.74%_54.34%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">1.5</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[84.76%_29.64%_7.74%_67.96%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_29.64%_7.74%_67.96%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">2</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[84.76%_15.72%_7.74%_78.89%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_15.72%_7.74%_78.89%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">2.5</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[84.76%_4.79%_7.74%_92.81%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_4.79%_7.74%_92.81%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">3</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[84.76%_4.79%_7.74%_18.26%]" data-name="Group">
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

function Group10() {
  return (
    <div className="absolute contents inset-[84.76%_4.79%_7.74%_18.26%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[68.63%_82.93%_23.87%_5.09%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[68.63%_82.93%_23.87%_5.09%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">Critical</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[48.63%_82.93%_43.87%_8.98%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[48.63%_82.93%_43.87%_8.98%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">High</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[28.63%_82.93%_63.87%_4.79%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[28.63%_82.93%_63.87%_4.79%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">Normal</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[8.63%_82.93%_83.87%_9.88%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[8.63%_82.93%_83.87%_9.88%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">Low</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[8.63%_82.93%_23.87%_4.79%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[8.63%_82.93%_23.87%_4.79%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
      <Group10 />
      <Group16 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start relative shrink-0 w-[334px]" data-name="CardContent">
      <Icon26 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] h-full items-center p-px relative rounded-[12px] shrink-0 w-[384px]" data-name="Card">
      <CardHeader />
      <CardContent />
    </div>
  );
}

function KixChartCard1() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="KIXChartCard">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Open by State Type</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[24px_minmax(0px,_1fr)] h-[63px] left-px pb-[23px] pt-[16px] px-[24px] top-px w-[382px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <KixChartCard1 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[14.42%_26.05%_54.5%_57.54%]" data-name="Group">
      <div className="absolute inset-[-1.13%_-0.91%_-0.8%_-1.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 64">
          <g id="Group">
            <path d={svgPaths.p3a8cfa00} fill="var(--fill-0, #13452D)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[5.5%_35.58%_23.57%_26.05%]" data-name="Group">
      <div className="absolute inset-[-0.35%_-0.55%_-0.5%_-0.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 144">
          <g id="Group">
            <path d={svgPaths.p1cfa3b00} fill="var(--fill-0, #227D53)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[55.84%_29.5%_14.5%_35.46%]" data-name="Group">
      <div className="absolute inset-[-1.16%_-0.59%_-0.84%_-0.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 61">
          <g id="Group">
            <path d={svgPaths.p14395a70} fill="var(--fill-0, #CBD5E1)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[46.2%_26.06%_35.02%_60.46%]" data-name="Group">
      <div className="absolute inset-[-1.38%_-1.15%_-1.81%_-1.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 40">
          <g id="Group">
            <path d={svgPaths.p17bac200} fill="var(--fill-0, #5FBD92)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[5.5%_26.05%_14.5%_26.05%]" data-name="Group">
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[5.5%_26.05%_14.5%_26.05%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute h-[200px] left-0 overflow-clip top-0 w-[334px]" data-name="Icon">
      <Group22 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2001_1211)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #227D53)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1211">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[39.453px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Closed</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[18px] left-[35.05px] top-0 w-[57.453px]" data-name="List Item">
      <Icon28 />
      <Text14 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2001_1119)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #13452D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1119">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[25.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">New</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[18px] left-[102.5px] top-0 w-[43.781px]" data-name="List Item">
      <Icon29 />
      <Text15 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2001_1245)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #5FBD92)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1245">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[30.469px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Open</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[18px] left-[156.28px] top-0 w-[48.469px]" data-name="List Item">
      <Icon30 />
      <Text16 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.73px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2001_1221)" id="Icon">
          <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #CBD5E1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1221">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[18px] top-px w-[46.203px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">Pending</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[18px] left-[214.75px] top-0 w-[64.203px]" data-name="List Item">
      <Icon31 />
      <Text17 />
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[18px] left-[5px] top-[177px] w-[324px]" data-name="Legend">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute h-[200px] left-[25px] top-[112px] w-[334px]" data-name="CardContent">
      <Icon27 />
      <Legend />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[337px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Card">
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function KixChartCard2() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="KIXChartCard">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Created Last 7 Days</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[24px_minmax(0px,_1fr)] h-[63px] left-px pb-[23px] pt-[16px] px-[24px] top-px w-[382px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <KixChartCard2 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[2.5%_1.5%_17.5%_19.46%]" data-name="Group">
      <div className="absolute inset-[82.5%_1.5%_17.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 2">
            <path d="M0 1H264" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_1.5%_37.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 2">
            <path d="M0 1H264" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.5%_1.5%_57.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 2">
            <path d="M0 1H264" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22.5%_1.5%_77.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 2">
            <path d="M0 1H264" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_1.5%_97.5%_19.46%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 2">
            <path d="M0 1H264" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[2.5%_1.5%_17.5%_19.46%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[84.76%_71.15%_7.74%_21.36%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_71.15%_7.74%_21.36%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Mon</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[84.76%_60.46%_7.74%_33.26%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_60.46%_7.74%_33.26%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Tue</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[84.76%_48.42%_7.74%_43.8%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_48.42%_7.74%_43.8%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Wed</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[84.76%_37.73%_7.74%_55.69%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_37.73%_7.74%_55.69%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Thu</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[84.76%_27.48%_7.74%_68.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_27.48%_7.74%_68.03%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Fri</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[84.76%_15.59%_7.74%_78.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_15.59%_7.74%_78.72%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sat</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[84.76%_3.85%_7.74%_89.56%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_3.85%_7.74%_89.56%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sun</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[84.76%_3.85%_7.74%_21.36%]" data-name="Group">
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[84.76%_3.85%_7.74%_21.36%]" data-name="Group">
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[78.63%_82.93%_13.87%_14.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[78.63%_82.93%_13.87%_14.67%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">0</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[58.63%_82.93%_33.87%_14.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[58.63%_82.93%_33.87%_14.67%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">8</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[38.63%_82.93%_53.87%_12.87%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[38.63%_82.93%_53.87%_12.87%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">16</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[18.63%_82.93%_73.87%_12.57%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[18.63%_82.93%_73.87%_12.57%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">24</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[0.63%_82.93%_91.87%_12.57%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[0.63%_82.93%_91.87%_12.57%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">32</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[0.63%_82.93%_13.87%_12.57%]" data-name="Group">
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[0.63%_82.93%_13.87%_12.57%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute bottom-[17.5%] contents left-[20.59%] right-[70.43%] top-1/4" data-name="Group">
      <div className="absolute bottom-[17.5%] left-[20.59%] right-[70.43%] top-1/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 115">
          <path d={svgPaths.p1f559700} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[37.5%_59.14%_17.5%_31.88%]" data-name="Group">
      <div className="absolute inset-[37.5%_59.14%_17.5%_31.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 90">
          <path d={svgPaths.pb7f7900} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[5%_47.84%_17.5%_43.17%]" data-name="Group">
      <div className="absolute inset-[5%_47.84%_17.5%_43.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 155">
          <path d={svgPaths.p344e2d80} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[20%_36.55%_17.5%_54.47%]" data-name="Group">
      <div className="absolute inset-[20%_36.55%_17.5%_54.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 125">
          <path d={svgPaths.p205e8980} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[35%_25.26%_17.5%_65.76%]" data-name="Group">
      <div className="absolute inset-[35%_25.26%_17.5%_65.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 95">
          <path d={svgPaths.p27477f0} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[67.5%_13.97%_17.5%_77.05%]" data-name="Group">
      <div className="absolute inset-[67.5%_13.97%_17.5%_77.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p376d4200} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[77.5%_2.68%_17.5%_88.34%]" data-name="Group">
      <div className="absolute inset-[77.5%_2.68%_17.5%_88.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 10">
          <path d={svgPaths.p3e647700} fill="var(--fill-0, #407A3F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[5%_2.68%_17.5%_20.59%]" data-name="Group">
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[5%_2.68%_17.5%_20.59%]" data-name="Group">
      <Group48 />
    </div>
  );
}

function RechartsBarR29I() {
  return (
    <div className="absolute contents inset-[5%_2.68%_17.5%_20.59%]" data-name="recharts-bar-:r29i:">
      <Group49 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group24 />
      <Group33 />
      <Group40 />
      <RechartsBarR29I />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-start left-[25px] top-[112px] w-[334px]" data-name="CardContent">
      <Icon32 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[337px] relative rounded-[12px] shrink-0 w-[384px]" data-name="Card">
      <CardHeader2 />
      <CardContent2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Card3 />
      </div>
      <Card4 />
      <Card5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[146.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[146.5px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">My Open Tickets</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[56.891px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">4 tickets</p>
      </div>
    </div>
  );
}

function KixDataTable() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[25px] top-[25px] w-[1150px]" data-name="KIXDataTable">
      <Heading3 />
      <Text18 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-gray-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input />
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.3335V4.00016" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.3335V4.00016" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26da5900} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66664H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon34 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b121080} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon35 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V14" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon36 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p936d880} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon37 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[739.91px] top-[2px] w-[426.094px]" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function TableToolbar() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container28 />
      <Container29 />
    </div>
  );
}

function KixDataTable1() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-[16px] px-[16px] relative w-full">
          <TableToolbar />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[14px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[17.89px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-[163.75px] top-[12px] w-[131.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">ID</p>
      <Icon38 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-[54.97px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-[311.5px] top-[12px] w-[279.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Subject</p>
      <Icon39 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[65.69px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[20px] left-[607px] top-[12px] w-[131.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Assignee</p>
      <Icon40 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[40.58px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-[754.75px] top-[12px] w-[131.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Team</p>
      <Icon41 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[52.25px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[20px] left-[902.5px] top-[12px] w-[131.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Priority</p>
      <Icon42 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[95.17px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-[1050.25px] top-[12px] w-[131.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">{`Status & Date`}</p>
      <Icon43 />
    </div>
  );
}

function KixDataTable2() {
  return (
    <div className="bg-gray-50 h-[45px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton1 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202590</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[163.75px] top-[22px] w-[90.953px]" data-name="SlotClone">
      <Badge5 />
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_1132)" id="Icon">
          <path d={svgPaths.p1d0d6f00} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1132">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon46() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] overflow-clip relative w-full">
        <div className="absolute inset-[8.33%_9.77%_8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p2fe21980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[12px] relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[12px] items-center relative w-[28px]">
        <Icon45 />
        <Icon46 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[243.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[198px]">Email server not responding - urgent fix needed</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[75px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[75px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">TD-T-066</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container37 />
        <Badge6 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[311.5px] top-[12px] w-[279.5px]" data-name="Container">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[62.922px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">John Doe</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JD</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text20 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[24px] left-[607px] top-[23px] w-[94.922px]" data-name="Container">
      <Text19 />
      <PrimitiveSpan1 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[754.75px] rounded-[12px] top-[22px] w-[69.266px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[69.266px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3c7a1600} id="Vector" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.031px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[57.031px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b42318] text-[12px] text-nowrap whitespace-pre">P1 Critical</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-red-100 h-[26px] left-[902.5px] rounded-[12px] top-[22px] w-[91.031px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[91.031px]">
        <Icon47 />
        <PriorityBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,35,24,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.844px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[30.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[48.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[48.844px]">
        <StatusBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[32px] relative shrink-0 w-[82.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[82.906px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 14:30</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex h-[46px] items-center justify-between left-[1050.25px] top-[12px] w-[131.75px]" data-name="Container">
      <Badge9 />
      <Text21 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2237f200} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ce35600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.75px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon48 />
    </div>
  );
}

function TicketRow() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton2 />
      <SlotClone1 />
      <Container39 />
      <Container40 />
      <Badge7 />
      <Badge8 />
      <Container41 />
      <Button16 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge10() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202589</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[163.75px] top-[22px] w-[90.781px]" data-name="SlotClone">
      <Badge10 />
      <Icon49 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[271.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[250px]">User account access request for new employee</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[76.938px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[76.938px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">HR-A-024</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container43 />
        <Badge11 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[311.5px] top-[12px] w-[279.5px]" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[73.719px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Jane Smith</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JS</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text23 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[24px] left-[607px] top-[23px] w-[105.719px]" data-name="Container">
      <Text22 />
      <PrimitiveSpan2 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[754.75px] rounded-[12px] top-[22px] w-[96.891px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[96.891px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">HR-SUPPORT</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.813px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[59.813px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">P3 Normal</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#ddefd6] h-[26px] left-[902.5px] rounded-[12px] top-[22px] w-[93.813px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[93.813px]">
        <Icon50 />
        <PriorityBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.891px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[46.891px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[64.891px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[64.891px]">
        <StatusBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.859px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 13:15</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[46px] items-center justify-between left-[1050.25px] top-[12px] w-[131.75px]" data-name="Container">
      <Badge14 />
      <Text24 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2237f200} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ce35600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.75px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon51 />
    </div>
  );
}

function TicketRow1() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton3 />
      <SlotClone2 />
      <Container45 />
      <Container46 />
      <Badge12 />
      <Badge13 />
      <Container47 />
      <Button17 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge15() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202588</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[163.75px] top-[22px] w-[90.734px]" data-name="SlotClone">
      <Badge15 />
      <Icon52 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] overflow-clip relative w-full">
        <div className="absolute inset-[8.33%_9.77%_8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p2fe21980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[12px]">
        <Icon53 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[259.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[218px]">VPN connection issues affecting remote workers</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[84.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[84.203px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">NET-C-089</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container49 />
        <Badge16 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[311.5px] top-[12px] w-[279.5px]" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[91.438px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Mike Johnson</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">MJ</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text26 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[24px] left-[607px] top-[23px] w-[123.438px]" data-name="Container">
      <Text25 />
      <PrimitiveSpan3 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[754.75px] rounded-[12px] top-[22px] w-[78.25px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[78.25px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">NETWORK</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon54() {
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
    <div className="h-[16px] relative shrink-0 w-[44.734px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[44.734px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b76e00] text-[12px] text-nowrap whitespace-pre">P2 High</p>
      </div>
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute bg-amber-100 h-[26px] left-[902.5px] rounded-[12px] top-[22px] w-[78.734px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[78.734px]">
        <Icon54 />
        <PriorityBadge2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64.547px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[64.547px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p777e000} id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p251d5d80} id="Vector_2" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-[#ddefd6] h-[26px] relative rounded-[12px] shrink-0 w-[102.547px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[26px] items-center justify-center overflow-clip p-px relative w-[102.547px]">
        <StatusBadge2 />
        <Icon55 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 11:45</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[1050.25px] pl-0 py-0 top-[12px] w-[131.75px]" data-name="Container">
      <Badge19 />
      <Text27 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2237f200} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ce35600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.75px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon56 />
    </div>
  );
}

function TicketRow2() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton4 />
      <SlotClone3 />
      <Container51 />
      <Container52 />
      <Badge17 />
      <Badge18 />
      <Container53 />
      <Button18 />
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[20px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge20() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202587</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[163.75px] top-[15px] w-[90.094px]" data-name="SlotClone">
      <Badge20 />
      <Icon57 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Software license renewal notification</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[311.5px] top-[12px] w-[279.5px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[85.938px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Sarah Wilson</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">SW</p>
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text29 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[24px] left-[607px] top-[16px] w-[117.938px]" data-name="Container">
      <Text28 />
      <PrimitiveSpan4 />
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[754.75px] rounded-[12px] top-[15px] w-[110.062px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[110.062px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">PROCUREMENT</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[42.406px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[42.406px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-teal-700 whitespace-pre">P4 Low</p>
      </div>
    </div>
  );
}

function Badge22() {
  return (
    <div className="absolute bg-[#e7f8f1] h-[26px] left-[902.5px] rounded-[12px] top-[15px] w-[76.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[76.406px]">
        <Icon58 />
        <PriorityBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.844px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[30.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge23() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[48.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[48.844px]">
        <StatusBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[32px] relative shrink-0 w-[82.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[82.906px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 10:20</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[1050.25px] top-[12px] w-[131.75px]" data-name="Container">
      <Badge23 />
      <Text30 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2237f200} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ce35600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.75px] opacity-0 rounded-[12px] size-[32px] top-[60px]" data-name="Button">
      <Icon59 />
    </div>
  );
}

function TicketRow3() {
  return (
    <div className="h-[105px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton5 />
      <SlotClone4 />
      <Container56 />
      <Container57 />
      <Badge21 />
      <Badge22 />
      <Container58 />
      <Button19 />
    </div>
  );
}

function KixDataTable3() {
  return (
    <div className="content-stretch flex flex-col h-[384px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow />
      <TicketRow1 />
      <TicketRow2 />
      <TicketRow3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[175.797px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[176px]">Showing 1 to 4 of 4 results</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button20 />
        <Button21 />
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function KixDataTable4() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[57px] items-center justify-between pb-0 pt-px px-[16px] relative w-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[579px] items-start left-px top-[83px] w-[1198px]" data-name="CardContent">
      <KixDataTable1 />
      <KixDataTable2 />
      <KixDataTable3 />
      <KixDataTable4 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[663px] relative rounded-[16.4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <KixDataTable />
      <CardContent3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[107.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[107.531px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">New Tickets</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[56.813px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">3 tickets</p>
      </div>
    </div>
  );
}

function KixDataTable5() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[25px] top-[25px] w-[538px]" data-name="KIXDataTable">
      <Heading4 />
      <Text31 />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-gray-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon60() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input1 />
      <Icon60 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb52d00} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66699H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon61 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b121080} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon62 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V14" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon63 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36830700} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon64 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[256px] top-[2px] w-[426.094px]" data-name="Container">
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
    </div>
  );
}

function TableToolbar1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container61 />
      <Container62 />
    </div>
  );
}

function KixDataTable6() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-[16px] px-[16px] relative w-full">
          <TableToolbar1 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[24px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon65() {
  return (
    <div className="absolute left-[17.89px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[40px] left-[87.25px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">ID</p>
      <Icon65 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="absolute left-[54.97px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[40px] left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Subject</p>
      <Icon66 />
    </div>
  );
}

function Icon67() {
  return (
    <div className="absolute left-[40.58px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[40px] left-[372.25px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Team</p>
      <Icon67 />
    </div>
  );
}

function Icon68() {
  return (
    <div className="absolute left-[52.25px] size-[3px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g clipPath="url(#clip0_2001_1047)" id="Icon">
          <path d="M2.625 2L2.125 2.5L1.625 2" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M2.125 2.5V0.5" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M0.375 1L0.875 0.5L1.375 1" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M0.875 0.5V2.5" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1047">
            <rect fill="white" height="3" width="3" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[40px] left-[443.5px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Priority</p>
      <Icon68 />
    </div>
  );
}

function Icon69() {
  return (
    <div className="absolute left-[49.3px] size-[5.953px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_2001_1041)" id="Icon">
          <path d={svgPaths.p374ea700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d="M4.2168 4.96094V0.992188" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d={svgPaths.p35b1d900} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d="M1.73633 0.992188V4.96094" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1041">
            <rect fill="white" height="5.95312" width="5.95312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[40px] left-[514.75px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 w-[45px]">{`Status & Date`}</p>
      <Icon69 />
    </div>
  );
}

function KixDataTable7() {
  return (
    <div className="bg-gray-50 h-[65px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton6 />
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge24() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202594</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[87.25px] top-[22px] w-[91.063px]" data-name="SlotClone">
      <Badge24 />
      <Icon70 />
    </div>
  );
}

function Icon71() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] overflow-clip relative w-full">
        <div className="absolute inset-[8.34%_8.34%_8.33%_8.32%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p300b4600} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[8px]">
        <Icon71 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[110.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[76px]">Printer not working in conference room A</p>
    </div>
  );
}

function Badge25() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[77.813px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[77.813px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">FAC-P-112</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container69 />
        <Badge25 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <Container68 />
      <Container70 />
    </div>
  );
}

function Badge26() {
  return (
    <div className="absolute h-[26px] left-[301px] rounded-[12px] top-[22px] w-[85.844px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Badge27() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[372.25px] rounded-[12px] top-[22px] w-[80.016px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[80.016px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">FACILITIES</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.813px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[59.813px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-nowrap whitespace-pre">P3 Normal</p>
      </div>
    </div>
  );
}

function Badge28() {
  return (
    <div className="absolute bg-[#ddefd6] h-[26px] left-[443.5px] rounded-[12px] top-[22px] w-[93.813px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[93.813px]">
        <Icon72 />
        <PriorityBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.906px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[25.906px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge29() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[43.906px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[43.906px]">
        <StatusBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 16:45</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[514.75px] pl-0 py-0 top-[12px] w-[55.25px]" data-name="Container">
      <Badge29 />
      <Text32 />
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32572100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da01e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p141ad600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[39.25px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon73 />
    </div>
  );
}

function TicketRow4() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton7 />
      <SlotClone5 />
      <Container71 />
      <Badge26 />
      <Badge27 />
      <Badge28 />
      <Container72 />
      <Button28 />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge30() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202593</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon74() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[87.25px] top-[22px] w-[90.938px]" data-name="SlotClone">
      <Badge30 />
      <Icon74 />
    </div>
  );
}

function Icon75() {
  return (
    <div className="basis-0 grow h-[8px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] overflow-clip relative w-full">
        <div className="absolute inset-[8.34%_8.34%_8.33%_8.32%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p300b4600} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[8px]">
        <Icon75 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[110.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[104px]">Request for additional storage space on shared drive</p>
    </div>
  );
}

function Badge31() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[69.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[69.453px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">IT-S-087</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container74 />
        <Badge31 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <Container73 />
      <Container75 />
    </div>
  );
}

function Badge32() {
  return (
    <div className="absolute h-[26px] left-[301px] rounded-[12px] top-[22px] w-[85.844px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Badge33() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[372.25px] rounded-[12px] top-[22px] w-[69.266px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[69.266px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[42.406px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[42.406px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-teal-700 whitespace-pre">P4 Low</p>
      </div>
    </div>
  );
}

function Badge34() {
  return (
    <div className="absolute bg-[#e7f8f1] h-[26px] left-[443.5px] rounded-[12px] top-[22px] w-[76.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[76.406px]">
        <Icon76 />
        <PriorityBadge5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.906px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[25.906px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge35() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[43.906px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[43.906px]">
        <StatusBadge5 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 16:20</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[514.75px] pl-0 py-0 top-[12px] w-[55.25px]" data-name="Container">
      <Badge35 />
      <Text33 />
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32572100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da01e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p141ad600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[39.25px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon77 />
    </div>
  );
}

function TicketRow5() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton8 />
      <SlotClone6 />
      <Container76 />
      <Badge32 />
      <Badge33 />
      <Badge34 />
      <Container77 />
      <Button29 />
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge36() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202592</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[87.25px] top-[22px] w-[90.563px]" data-name="SlotClone">
      <Badge36 />
      <Icon78 />
    </div>
  );
}

function Icon79() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] overflow-clip relative w-full">
        <div className="absolute inset-[8.33%_9.77%_8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p2fe21980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon80() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_2001_1031)" id="Icon">
          <path d={svgPaths.p32236480} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1031">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[12px] items-center relative w-[24px]">
        <Icon79 />
        <Icon80 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[94.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[92px]">Database performance degradation - investigation needed</p>
    </div>
  );
}

function Badge37() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[75.906px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[75.906px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">DB-P-045</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container80() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container79 />
        <Badge37 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <Container78 />
      <Container80 />
    </div>
  );
}

function Badge38() {
  return (
    <div className="absolute h-[26px] left-[301px] rounded-[12px] top-[22px] w-[85.844px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Badge39() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[372.25px] rounded-[12px] top-[22px] w-[79.891px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[79.891px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">DATABASE</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon81() {
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

function PriorityBadge6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[44.734px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[44.734px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b76e00] text-[12px] text-nowrap whitespace-pre">P2 High</p>
      </div>
    </div>
  );
}

function Badge40() {
  return (
    <div className="absolute bg-amber-100 h-[26px] left-[443.5px] rounded-[12px] top-[22px] w-[78.734px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[78.734px]">
        <Icon81 />
        <PriorityBadge6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.906px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[25.906px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge41() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[43.906px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[43.906px]">
        <StatusBadge6 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 15:55</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[514.75px] pl-0 py-0 top-[12px] w-[55.25px]" data-name="Container">
      <Badge41 />
      <Text34 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32572100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da01e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p141ad600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[39.25px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon82 />
    </div>
  );
}

function TicketRow6() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton9 />
      <SlotClone7 />
      <Container81 />
      <Badge38 />
      <Badge39 />
      <Badge40 />
      <Container82 />
      <Button30 />
    </div>
  );
}

function KixDataTable8() {
  return (
    <div className="content-stretch flex flex-col h-[357px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow4 />
      <TicketRow5 />
      <TicketRow6 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[175.641px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[176px]">Showing 1 to 3 of 3 results</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button31 />
        <Button32 />
        <Button33 />
        <Button34 />
      </div>
    </div>
  );
}

function KixDataTable9() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[57px] items-center justify-between pb-0 pt-px px-[16px] relative w-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[572px] items-start left-px top-[83px] w-[586px]" data-name="CardContent">
      <KixDataTable6 />
      <KixDataTable7 />
      <KixDataTable8 />
      <KixDataTable9 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[656px] relative rounded-[16.4px] shrink-0 w-[588px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <KixDataTable5 />
      <CardContent4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[88.656px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[88.656px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 whitespace-pre">My Teams</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[56.375px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">2 tickets</p>
      </div>
    </div>
  );
}

function KixDataTable10() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[25px] top-[25px] w-[538px]" data-name="KIXDataTable">
      <Heading5 />
      <Text35 />
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-gray-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon83() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20b9d480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input2 />
      <Icon83 />
    </div>
  );
}

function Icon84() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.33398V4.00065" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.33398V4.00065" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb52d00} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66699H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon84 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon85() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b121080} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button36() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon85 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon86() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V14" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon86 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon87() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36830700} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon87 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[256px] top-[2px] w-[426.094px]" data-name="Container">
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
    </div>
  );
}

function TableToolbar2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container85 />
      <Container86 />
    </div>
  );
}

function KixDataTable11() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-[16px] px-[16px] relative w-full">
          <TableToolbar2 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[24px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon88() {
  return (
    <div className="absolute left-[17.89px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[40px] left-[87.25px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">ID</p>
      <Icon88 />
    </div>
  );
}

function Icon89() {
  return (
    <div className="absolute left-[54.97px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[40px] left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Subject</p>
      <Icon89 />
    </div>
  );
}

function Icon90() {
  return (
    <div className="absolute left-[40.58px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 8L8.5 10L6.5 8" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10V2" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4L3.5 2L5.5 4" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 2V10" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[40px] left-[372.25px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Team</p>
      <Icon90 />
    </div>
  );
}

function Icon91() {
  return (
    <div className="absolute left-[52.25px] size-[3px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g clipPath="url(#clip0_2001_1047)" id="Icon">
          <path d="M2.625 2L2.125 2.5L1.625 2" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M2.125 2.5V0.5" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M0.375 1L0.875 0.5L1.375 1" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
          <path d="M0.875 0.5V2.5" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1047">
            <rect fill="white" height="3" width="3" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[40px] left-[443.5px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Priority</p>
      <Icon91 />
    </div>
  );
}

function Icon92() {
  return (
    <div className="absolute left-[49.3px] size-[5.953px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_2001_1041)" id="Icon">
          <path d={svgPaths.p374ea700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d="M4.2168 4.96094V0.992188" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d={svgPaths.p35b1d900} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
          <path d="M1.73633 0.992188V4.96094" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.496094" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1041">
            <rect fill="white" height="5.95312" width="5.95312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[40px] left-[514.75px] top-[12px] w-[55.25px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 w-[45px]">{`Status & Date`}</p>
      <Icon92 />
    </div>
  );
}

function KixDataTable12() {
  return (
    <div className="bg-gray-50 h-[65px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton10 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge42() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202591</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon93() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[87.25px] top-[22px] w-[88.875px]" data-name="SlotClone">
      <Badge42 />
      <Icon93 />
    </div>
  );
}

function Icon94() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_1132)" id="Icon">
          <path d={svgPaths.p1d0d6f00} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1132">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon95() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] overflow-clip relative w-full">
        <div className="absolute inset-[8.33%_9.77%_8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p2fe21980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[12px] relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[12px] items-center relative w-[28px]">
        <Icon94 />
        <Icon95 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[90.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[77px]">Security audit compliance review</p>
    </div>
  );
}

function Badge43() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[83.172px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[83.172px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">SEC-A-078</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container93 />
        <Badge43 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <Container92 />
      <Container94 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[67.047px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">AC</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text37 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[24px] left-[301px] top-[23px] w-[99.047px]" data-name="Container">
      <Text36 />
      <PrimitiveSpan5 />
    </div>
  );
}

function Badge44() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[372.25px] rounded-[12px] top-[22px] w-[77.641px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[77.641px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">SECURITY</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon96() {
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

function PriorityBadge7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[44.734px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[44.734px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b76e00] text-[12px] text-nowrap whitespace-pre">P2 High</p>
      </div>
    </div>
  );
}

function Badge45() {
  return (
    <div className="absolute bg-amber-100 h-[26px] left-[443.5px] rounded-[12px] top-[22px] w-[78.734px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[78.734px]">
        <Icon96 />
        <PriorityBadge7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.844px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[30.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge46() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[48.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[48.844px]">
        <StatusBadge7 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 14:00</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[514.75px] pl-0 py-0 top-[12px] w-[55.25px]" data-name="Container">
      <Badge46 />
      <Text38 />
    </div>
  );
}

function Icon97() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32572100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da01e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p141ad600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[39.25px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon97 />
    </div>
  );
}

function TicketRow7() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton11 />
      <SlotClone8 />
      <Container95 />
      <Container96 />
      <Badge44 />
      <Badge45 />
      <Container97 />
      <Button39 />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[16px] rounded-[4px] size-[16px] top-[27px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge47() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[26px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">#202590</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon98() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2001_1090)" id="Icon" opacity="0">
          <path d={svgPaths.p23fe4800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p99a3180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1090">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[87.25px] top-[22px] w-[90.953px]" data-name="SlotClone">
      <Badge47 />
      <Icon98 />
    </div>
  );
}

function Icon99() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2001_1132)" id="Icon">
          <path d={svgPaths.p1d0d6f00} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2001_1132">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon100() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] overflow-clip relative w-full">
        <div className="absolute inset-[8.33%_9.77%_8.34%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p2fe21980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[12px] relative shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[12px] items-center relative w-[28px]">
        <Icon99 />
        <Icon100 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip top-0 w-[90.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[86px]">Email server not responding - urgent fix needed</p>
    </div>
  );
}

function Badge48() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[24px] w-[75px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[75px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">TD-T-066</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="basis-0 grow h-[46px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <Container99 />
        <Badge48 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[46px] items-center left-[158.5px] top-[12px] w-[126.5px]" data-name="Container">
      <Container98 />
      <Container100 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[20px] left-[32px] overflow-clip top-[2px] w-[62.922px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">John Doe</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JD</p>
      </div>
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text40 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[24px] left-[301px] top-[23px] w-[94.922px]" data-name="Container">
      <Text39 />
      <PrimitiveSpan6 />
    </div>
  );
}

function Badge49() {
  return (
    <div className="absolute bg-slate-100 h-[26px] left-[372.25px] rounded-[12px] top-[22px] w-[69.266px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[69.266px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon101() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3c7a1600} id="Vector" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PriorityBadge8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.031px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[57.031px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#b42318] text-[12px] text-nowrap whitespace-pre">P1 Critical</p>
      </div>
    </div>
  );
}

function Badge50() {
  return (
    <div className="absolute bg-red-100 h-[26px] left-[443.5px] rounded-[12px] top-[22px] w-[91.031px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip p-px relative w-[91.031px]">
        <Icon101 />
        <PriorityBadge8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,35,24,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatusBadge8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.844px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[30.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge51() {
  return (
    <div className="h-[26px] relative rounded-[12px] shrink-0 w-[48.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[48.844px]">
        <StatusBadge8 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[32px] relative shrink-0 w-[66.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[66.719px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[67px]">12/12/2024, 14:30</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute box-border content-stretch flex h-[46px] items-center justify-between left-[514.75px] pl-0 py-0 top-[12px] w-[55.25px]" data-name="Container">
      <Badge51 />
      <Text41 />
    </div>
  );
}

function Icon102() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32572100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3da01e00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p141ad600} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[39.25px] opacity-0 rounded-[12px] size-[32px] top-[74px]" data-name="Button">
      <Icon102 />
    </div>
  );
}

function TicketRow8() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <PrimitiveButton12 />
      <SlotClone9 />
      <Container101 />
      <Container102 />
      <Badge49 />
      <Badge50 />
      <Container103 />
      <Button40 />
    </div>
  );
}

function KixDataTable13() {
  return (
    <div className="content-stretch flex flex-col h-[238px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow7 />
      <TicketRow8 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[174.766px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[175px]">Showing 1 to 2 of 2 results</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="bg-slate-50 h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button41 />
        <Button42 />
        <Button43 />
        <Button44 />
      </div>
    </div>
  );
}

function KixDataTable14() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[57px] items-center justify-between pb-0 pt-px px-[16px] relative w-full">
          <Container104 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[453px] items-start left-px top-[83px] w-[586px]" data-name="CardContent">
      <KixDataTable11 />
      <KixDataTable12 />
      <KixDataTable13 />
      <KixDataTable14 />
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-white h-[537px] left-[612px] rounded-[16.4px] top-[1224px] w-[588px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <KixDataTable10 />
      <CardContent5 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame6 />
      <Frame7 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Container107() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[36px] px-[24px] relative size-full">
          <Frame8 />
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[2112px] items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Frame4 />
      <Container107 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[2112px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Container108 />
    </div>
  );
}

function KixAppShell() {
  return (
    <div className="basis-0 grow h-[2112px] min-h-px min-w-px relative shrink-0" data-name="KIXAppShell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[2112px] items-start overflow-clip relative w-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Icon103() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button45() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-[47px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[47px]">
        <Icon103 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex h-[2112px] items-start overflow-clip relative shrink-0 w-full" data-name="App">
      <KixAppShell />
      <Button45 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[7.406px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-nowrap text-slate-900 top-0 whitespace-pre">8</p>
    </div>
  );
}

export default function KixVisionUiV1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="KIX Vision UI V1">
      <App />
      <Text42 />
    </div>
  );
}