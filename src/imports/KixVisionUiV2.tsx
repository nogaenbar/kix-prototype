import svgPaths from "./svg-15nzubes4d";

function Container() {
  return (
    <div className="absolute h-[40px] left-0 rounded-[3.35544e+07px] top-0 w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%_12.49%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[69.42%_12.49%_12.5%_69.42%]" data-name="Vector">
        <div className="absolute inset-[-23.041%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.8934 3.8934L1 1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2d9d1f00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[16px] top-[12px]" data-name="Container">
      <Icon />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[42px] overflow-clip top-[8px] w-[302px]" data-name="Text Input">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-500 text-nowrap whitespace-pre">Search tickets</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[360px]" data-name="Container">
      <Container1 />
      <TextInput />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white h-[40px] left-[16px] rounded-[3.35544e+07px] top-[16.5px] w-[360px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function Icon1() {
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

function Button() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
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

function Button1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Button2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-center relative w-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[36px] items-center left-[1041.08px] top-[18.5px] w-[156px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[73px] relative shrink-0 w-[1213.08px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function KixTopBar() {
  return (
    <div className="h-[80px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1233px]" data-name="KIXTopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] h-[80px] items-start justify-center relative w-[1233px]">
        <Container5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[208.641px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[208.641px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[40px] left-0 not-italic text-[40px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
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

function Button4() {
  return (
    <div className="bg-[#407a3f] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative">
        <Icon5 />
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">New Ticket</p>
        <Icon6 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-[1165.08px]" data-name="Header">
      <Heading1 />
      <Button4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[87.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[87.328px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Open Tickets</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[79.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[79.125px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] left-0 not-italic text-[42px] text-nowrap text-white top-0 tracking-[-0.6px] whitespace-pre">856</p>
      </div>
    </div>
  );
}

function Icon7() {
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

function Text() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-white top-0 w-[23px]">-5%</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[38.938px]">
        <Icon7 />
        <Text />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[26px] relative rounded-[12px] shrink-0 w-[64.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[64.938px]">
        <Container6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[70px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[70px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container7 />
        <Text1 />
      </div>
    </div>
  );
}

function KpiTile() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph />
        <Paragraph1 />
        <Container8 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#407a3f] box-border content-stretch flex flex-col h-[158px] items-start overflow-clip pl-[24px] pr-0 py-[24px] relative rounded-[16.4px] shrink-0 w-[372.359px]" data-name="Card">
      <KpiTile />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[60.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[60.125px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-0 whitespace-pre">New (7d)</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[71.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[71.828px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#0f172b] text-[42px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">124</p>
      </div>
    </div>
  );
}

function Icon8() {
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

function Text2() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[#00786f] text-[12px] top-0 w-[31px]">+12%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[46.984px]">
        <Icon8 />
        <Text2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[72.984px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[72.984px]">
        <Container9 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[81.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[81.688px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">vs previous 7d</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container10 />
        <Text3 />
      </div>
    </div>
  );
}

function KpiTile1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph2 />
        <Paragraph3 />
        <Container11 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="CardContent">
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pl-[25px] pr-px py-[25px] relative w-[372.359px]">
        <KpiTile1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[158px] items-start relative rounded-[12px] shrink-0 w-[372.359px]" data-name="Card">
      <CardContent />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-[101.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[101.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-0 whitespace-pre">Breached SLAs</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[26.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[26.547px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#0f172b] text-[42px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Icon9() {
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

function Text4() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[#00786f] text-[12px] top-0 w-[23px]">-2%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center relative w-[38.5px]">
        <Icon9 />
        <Text4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center p-px relative w-[64.5px]">
        <Container12 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] opacity-75 relative shrink-0 w-[70px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[70px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[22px] relative shrink-0 w-[324.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[324.359px]">
        <Container13 />
        <Text5 />
      </div>
    </div>
  );
}

function KpiTile2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[324.359px]" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-start relative w-[324.359px]">
        <Paragraph4 />
        <Paragraph5 />
        <Container14 />
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="CardContent">
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pl-[25px] pr-px py-[25px] relative w-[372.359px]">
        <KpiTile2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[158px] items-start relative rounded-[12px] shrink-0 w-[372.359px]" data-name="Card">
      <CardContent1 />
    </div>
  );
}

function ChartCardsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="chart cards container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function KixChartCard() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by Priority</p>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 160">
          <g id="Group">
            <path d="M1 0V160" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M43.5 0V160" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M86 0V160" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M128.5 0V160" id="Vector_4" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M171 0V160" id="Vector_5" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M213.5 0V160" id="Vector_6" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M256 0V160" id="Vector_7" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[19.12%] right-[5.88%] translate-y-[-50%]" data-name="Frame" style={{ top: "calc(50% - 15px)" }}>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">0</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.259%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[9px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">0.5</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[32.7%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[3px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.958%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[8px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">1.5</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.639%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[78.897%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[9px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">2.5</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[96.958%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[4px] mt-0 not-italic relative text-[12px] text-center text-nowrap text-slate-500 translate-x-[-50%] whitespace-pre">3</p>
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
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[17.94%] right-[4.71%] translate-y-[-50%]" data-name="Frame" style={{ top: "calc(50% + 77.02px)" }}>
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.439%] mt-[88.889%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[40px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Critical</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34.146%] mt-[59.259%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[27px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">High</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[29.63%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[41px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Normal</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[41.463%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[normal] ml-[24px] mt-0 not-italic relative text-[12px] text-nowrap text-right text-slate-500 translate-x-[-100%] whitespace-pre">Low</p>
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
    <div className="absolute content-stretch flex gap-[10px] items-center translate-x-[-50%] translate-y-[-50%]" data-name="Frame" style={{ top: "calc(50% - 15.5px)", left: "calc(50% - 142.039px)" }}>
      <Group14 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="bg-white h-[200px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Icon">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-start relative rounded-[12px] shrink-0 w-[340px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[306px] items-center justify-center p-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader />
      <CardContent2 />
    </div>
  );
}

function KixChartCard1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by State Type</p>
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
            <path d={svgPaths.p3a8cfa00} fill="var(--fill-0, #407A3F)" id="Vector" stroke="var(--stroke-0, white)" />
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
            <path d={svgPaths.p1cfa3b00} fill="var(--fill-0, #64748B)" id="Vector" stroke="var(--stroke-0, white)" />
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
            <path d={svgPaths.p14395a70} fill="var(--fill-0, #CBD5E1)" id="Vector" stroke="var(--stroke-0, white)" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 40">
          <g id="Group">
            <path d={svgPaths.p17bac200} fill="var(--fill-0, #64748B)" id="Vector" stroke="var(--stroke-0, white)" />
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

function Icon11() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[12px] shrink-0" data-name="Icon">
      <Group20 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g clipPath="url(#clip0_2006_1921)">
            <path d={svgPaths.p24e96100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #64748B)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2006_1921">
            <path d={svgPaths.p24e96100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-[39.453px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Closed</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="List Item">
      <Icon12 />
      <Text6 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g clipPath="url(#clip0_2006_1918)">
            <path d={svgPaths.p24e96100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #407A3F)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2006_1918">
            <path d={svgPaths.p24e96100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-[25.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#407a3f] text-[12px] text-center text-nowrap whitespace-pre">New</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="List Item">
      <Icon13 />
      <Text7 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g clipPath="url(#clip0_2006_1921)">
            <path d={svgPaths.p24e96100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #64748B)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2006_1921">
            <path d={svgPaths.p24e96100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-[30.469px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Open</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="List Item">
      <Icon14 />
      <Text8 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <g clipPath="url(#clip0_2006_1915)">
            <path d={svgPaths.p24e96100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f3e12c0} fill="var(--fill-0, #CBD5E1)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2006_1915">
            <path d={svgPaths.p24e96100} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-[46.203px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-300 whitespace-pre">Pending</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="List Item">
      <Icon15 />
      <Text9 />
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[16px] items-center px-[38px] py-0 relative rounded-[12px] shrink-0" data-name="Legend">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center relative rounded-[12px] shrink-0" data-name="Container">
      <Icon11 />
      <Legend />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[306px] items-center justify-center p-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader1 />
      <CardContent3 />
    </div>
  );
}

function KixChartCard2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="KIXChartCard">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-900 whitespace-pre">Open by State Type</p>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 162">
          <g id="Group">
            <path d="M0 161H270" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 121H270" id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 81H270" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 41H270" id="Vector_4" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
            <path d="M0 1H270" id="Vector_5" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
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
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_81.65%_7.74%_9.96%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Mon</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[84.76%_69.38%_7.74%_23.58%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_69.38%_7.74%_23.58%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Tue</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[84.76%_55.59%_7.74%_35.68%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_55.59%_7.74%_35.68%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Wed</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[84.76%_43.32%_7.74%_49.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_43.32%_7.74%_49.3%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Thu</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[84.76%_31.55%_7.74%_63.41%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_31.55%_7.74%_63.41%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Fri</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[84.76%_17.94%_7.74%_75.69%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_17.94%_7.74%_75.69%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sat</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[84.76%_4.49%_7.74%_88.13%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[84.76%_4.49%_7.74%_88.13%] leading-[normal] not-italic text-[12px] text-center text-nowrap text-slate-500 whitespace-pre">Sun</p>
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
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[78.63%_95%_13.87%_2.31%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">0</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[58.63%_95%_33.87%_2.31%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[58.63%_95%_33.87%_2.31%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">8</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[38.63%_95%_53.87%_0.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[38.63%_95%_53.87%_0.3%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">16</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[18.63%_95%_73.87%_-0.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[18.63%_95%_73.87%_-0.03%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">24</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[0.63%_95%_91.87%_-0.03%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[0.63%_95%_91.87%_-0.03%] leading-[normal] not-italic text-[12px] text-nowrap text-right text-slate-500 whitespace-pre">32</p>
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

function Icon16() {
  return (
    <div className="bg-white h-[200px] overflow-clip relative rounded-[12px] shrink-0 w-[298px]" data-name="Icon">
      <Group22 />
      <Group31 />
      <Group38 />
      <RechartsBarR17S />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-start relative rounded-[12px] shrink-0 w-[298px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-full" data-name="CardContent">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[306px] items-center justify-center p-px relative rounded-[12px] shrink-0 w-[372.359px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader2 />
      <CardContent4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="container">
      <Card3 />
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

function Text10() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">4 tickets</p>
      </div>
    </div>
  );
}

function Icon17() {
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

function Button5() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[32px] relative shrink-0 w-[100.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[100.891px]">
        <Text10 />
        <Button5 />
      </div>
    </div>
  );
}

function KixDataTable() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[24px] top-[24px] w-[1117.08px]" data-name="KIXDataTable">
      <Heading3 />
      <Container19 />
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="bg-white h-[62px] relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-[1165.08px]">
        <KixDataTable />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-slate-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon18() {
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

function Container20() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input />
      <Icon18 />
    </div>
  );
}

function Icon19() {
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

function Button6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon19 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon20() {
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

function Button7() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon20 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon21() {
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

function Button8() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon21 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon22() {
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

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon22 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[706.98px] top-[2px] w-[426.094px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableToolbar() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container20 />
      <Container21 />
    </div>
  );
}

function KixDataTable1() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-px pt-[8px] px-[16px] relative w-full">
          <TableToolbar />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton />
    </div>
  );
}

function Icon23() {
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

function Container23() {
  return (
    <div className="absolute h-[40px] left-[107.75px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">ID</p>
      <Icon23 />
    </div>
  );
}

function Icon24() {
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

function Container24() {
  return (
    <div className="absolute h-[40px] left-[203.5px] overflow-clip top-[8px] w-[279.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Subject</p>
      <Icon24 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[65.69px] size-[12px] top-[14px]" data-name="Icon">
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

function Container25() {
  return (
    <div className="absolute h-[40px] left-[490.78px] overflow-clip top-[8px] w-[183.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Assignee</p>
      <Icon25 />
    </div>
  );
}

function Icon26() {
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

function Container26() {
  return (
    <div className="absolute h-[40px] left-[682.28px] overflow-clip top-[8px] w-[87.766px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Team</p>
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[52.25px] size-[12px] top-[14px]" data-name="Icon">
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

function Container27() {
  return (
    <div className="absolute h-[40px] left-[778.05px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Priority</p>
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[95.17px] size-[12px] top-[14px]" data-name="Icon">
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

function Container28() {
  return (
    <div className="absolute h-[40px] left-[873.8px] overflow-clip top-[8px] w-[183.516px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">{`Status & Date`}</p>
      <Icon28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-end left-[1065.31px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Actions</p>
    </div>
  );
}

function KixDataTable2() {
  return (
    <div className="bg-slate-50 h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202590</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5246)" id="Icon" opacity="0">
          <path d={svgPaths.p20a51a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p25ee4000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5246">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.953px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.953px]">
        <Badge />
        <Icon29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5287)" id="Icon">
          <path d={svgPaths.p386dab00} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5287">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5284)" id="Icon">
          <path d={svgPaths.p1ff4d400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5284">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[67px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[10px]">
        <Icon30 />
        <Icon31 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[261.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[245px]">Email server not responding - urgent fix needed</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[71px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[71px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">TD-T-066</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container33 />
        <Badge1 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[62.922px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">John Doe</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JD</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text12 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[90.922px]">
        <Text11 />
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[65px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[65px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge2 />
    </div>
  );
}

function Icon32() {
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
    <div className="h-[14.656px] relative shrink-0 w-[12.234px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[12.234px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b42318] text-[11px] text-nowrap whitespace-pre">P1</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-red-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[46.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[46.234px]">
        <Icon32 />
        <PriorityBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,35,24,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge3 />
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[28.281px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[28.281px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[46.281px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[46.281px]">
        <StatusBadge />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 14:30</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge4 />
      <Text13 />
    </div>
  );
}

function Icon33() {
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

function Button10() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button10 />
    </div>
  );
}

function TicketRow() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
      <Container35 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton2 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202589</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5246)" id="Icon" opacity="0">
          <path d={svgPaths.p20a51a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p25ee4000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5246">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.781px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.781px]">
        <Badge5 />
        <Icon34 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[67px] relative shrink-0 w-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] w-0" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[271.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[250px]">User account access request for new employee</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[72.938px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[72.938px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">HR-A-024</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container45 />
        <Badge6 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[73.719px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Jane Smith</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JS</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text15 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[101.719px]">
        <Text14 />
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24.656px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">HR-SUPPORT</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge7 />
    </div>
  );
}

function Icon35() {
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
    <div className="h-[14.656px] relative shrink-0 w-[14.125px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[14.125px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#407a3f] text-[11px] text-nowrap whitespace-pre">P3</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#ddefd6] h-[24.656px] relative rounded-[8px] shrink-0 w-[48.125px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[48.125px]">
        <Icon35 />
        <PriorityBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge8 />
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[42.984px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[42.984px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[60.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[60.984px]">
        <StatusBadge1 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 13:15</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge9 />
      <Text16 />
    </div>
  );
}

function Icon36() {
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

function Button11() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button11 />
    </div>
  );
}

function TicketRow1() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
      <Container47 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton3 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202588</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5246)" id="Icon" opacity="0">
          <path d={svgPaths.p20a51a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p25ee4000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5246">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.734px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.734px]">
        <Badge10 />
        <Icon37 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone2 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5284)" id="Icon">
          <path d={svgPaths.p1ff4d400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5284">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[67px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[10px]">
        <Icon38 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[261.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[218px]">VPN connection issues affecting remote workers</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[80.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[80.203px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">NET-C-089</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container57 />
        <Badge11 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container56 />
      <Container58 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[91.438px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Mike Johnson</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">MJ</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text18 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[119.438px]">
        <Text17 />
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[73.219px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[73.219px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">NETWORK</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge12 />
    </div>
  );
}

function Icon39() {
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
    <div className="h-[14.656px] relative shrink-0 w-[13.781px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[13.781px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">P2</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-amber-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[47.781px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[47.781px]">
        <Icon39 />
        <PriorityBadge2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge13 />
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[59.172px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[59.172px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#407a3f] text-[11px] text-nowrap whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p20f61600} id="Vector" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p34faee00} id="Vector_2" stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#ddefd6] h-[24.656px] relative rounded-[8px] shrink-0 w-[93.172px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[93.172px]">
        <StatusBadge2 />
        <Icon40 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 11:45</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge14 />
      <Text19 />
    </div>
  );
}

function Icon41() {
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

function Button12() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon41 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button12 />
    </div>
  );
}

function TicketRow2() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container54 />
      <Container55 />
      <Container59 />
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton4 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202587</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5246)" id="Icon" opacity="0">
          <path d={svgPaths.p20a51a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p25ee4000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5246">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.094px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.094px]">
        <Badge15 />
        <Icon42 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone3 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[44.656px] relative shrink-0 w-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44.656px] w-0" />
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">Software license renewal notification</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[52.656px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[85.938px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Sarah Wilson</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">SW</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text21 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[113.938px]">
        <Text20 />
        <PrimitiveSpan3 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function Badge16() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[24.656px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">PROCUREMENT</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge16 />
    </div>
  );
}

function Icon43() {
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
    <div className="h-[14.656px] relative shrink-0 w-[14.234px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[14.234px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-teal-700 whitespace-pre">P4</p>
      </div>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#e7f8f1] h-[24.656px] relative rounded-[8px] shrink-0 w-[48.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[48.234px]">
        <Icon43 />
        <PriorityBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge17 />
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[28.281px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[28.281px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[46.281px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip p-px relative w-[46.281px]">
        <StatusBadge3 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 10:20</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[52.656px] items-start left-[873.8px] overflow-clip px-0 py-[4px] top-[8px] w-[183.516px]" data-name="Container">
      <Badge18 />
      <Text22 />
    </div>
  );
}

function Icon44() {
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

function Button13() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon44 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute box-border content-stretch flex h-[52.656px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button13 />
    </div>
  );
}

function TicketRow3() {
  return (
    <div className="h-[69.656px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container66 />
      <Container67 />
      <Container70 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function KixDataTable3() {
  return (
    <div className="content-stretch flex flex-col h-[345.656px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow />
      <TicketRow1 />
      <TicketRow2 />
      <TicketRow3 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[175.797px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[176px]">Showing 1 to 4 of 4 results</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
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
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[1165.08px]">
        <KixDataTable1 />
        <KixDataTable2 />
        <KixDataTable3 />
        <KixDataTable4 />
      </div>
    </div>
  );
}

function MyOpenTickets() {
  return (
    <div className="bg-white h-[622.656px] relative rounded-[12px] shrink-0 w-full" data-name="My open tickets">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[622.656px] items-start overflow-clip p-px relative w-full">
        <CardHeader3 />
        <CardContent5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Text23() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">3 tickets</p>
      </div>
    </div>
  );
}

function Icon45() {
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

function Button18() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon45 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[32px] relative shrink-0 w-[100.812px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[100.812px]">
        <Text23 />
        <Button18 />
      </div>
    </div>
  );
}

function KixDataTable5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[24px] top-[24px] w-[1117.08px]" data-name="KIXDataTable">
      <Heading4 />
      <Container79 />
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="bg-white h-[62px] relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-[1165.08px]">
        <KixDataTable5 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-slate-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon46() {
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

function Container80() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input1 />
      <Icon46 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.3335V4.00016" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.3335V4.00016" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pb57bfb0} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66671H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon47 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon48() {
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

function Button20() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon48 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon49() {
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

function Button21() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon49 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon50() {
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

function Button22() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon50 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[706.98px] top-[2px] w-[426.094px]" data-name="Container">
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function TableToolbar1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container80 />
      <Container81 />
    </div>
  );
}

function KixDataTable6() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-px pt-[8px] px-[16px] relative w-full">
          <TableToolbar1 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton5 />
    </div>
  );
}

function Icon51() {
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

function Container83() {
  return (
    <div className="absolute h-[40px] left-[107.75px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">ID</p>
      <Icon51 />
    </div>
  );
}

function Icon52() {
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

function Container84() {
  return (
    <div className="absolute h-[40px] left-[203.5px] overflow-clip top-[8px] w-[279.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Subject</p>
      <Icon52 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute left-[65.69px] size-[12px] top-[14px]" data-name="Icon">
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

function Container85() {
  return (
    <div className="absolute h-[40px] left-[490.78px] overflow-clip top-[8px] w-[183.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Assignee</p>
      <Icon53 />
    </div>
  );
}

function Icon54() {
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

function Container86() {
  return (
    <div className="absolute h-[40px] left-[682.28px] overflow-clip top-[8px] w-[87.766px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Team</p>
      <Icon54 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute left-[52.25px] size-[12px] top-[14px]" data-name="Icon">
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
    <div className="absolute h-[40px] left-[778.05px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Priority</p>
      <Icon55 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute left-[95.17px] size-[12px] top-[14px]" data-name="Icon">
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
    <div className="absolute h-[40px] left-[873.8px] overflow-clip top-[8px] w-[183.516px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">{`Status & Date`}</p>
      <Icon56 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-end left-[1065.31px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Actions</p>
    </div>
  );
}

function KixDataTable7() {
  return (
    <div className="bg-slate-50 h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton6 />
    </div>
  );
}

function Badge19() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202594</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5227)" id="Icon" opacity="0">
          <path d={svgPaths.p2940ea80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p7c0e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5227">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[81.063px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[81.063px]">
        <Badge19 />
        <Icon57 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone4 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_2010_5254)" id="Icon">
          <path d={svgPaths.pa2c5b80} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5254">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[67px] relative shrink-0 w-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[6px]">
        <Icon58 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[265.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[261px]">Printer not working in conference room A</p>
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[73.813px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[73.813px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">FAC-P-112</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container93 />
        <Badge20 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container92 />
      <Container94 />
    </div>
  );
}

function Badge21() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-[85.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Badge21 />
    </div>
  );
}

function Badge22() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[74.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[74.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">FACILITIES</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge22 />
    </div>
  );
}

function Icon59() {
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
    <div className="h-[14.656px] relative shrink-0 w-[14.125px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[14.125px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#407a3f] text-[11px] text-nowrap whitespace-pre">P3</p>
      </div>
    </div>
  );
}

function Badge23() {
  return (
    <div className="bg-[#ddefd6] h-[24.656px] relative rounded-[8px] shrink-0 w-[48.125px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[48.125px]">
        <Icon59 />
        <PriorityBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(64,122,63,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge23 />
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[23.75px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[23.75px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge24() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[41.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[41.75px]">
        <StatusBadge4 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 16:45</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge24 />
      <Text24 />
    </div>
  );
}

function Icon60() {
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

function Button23() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon60 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button23 />
    </div>
  );
}

function TicketRow4() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container91 />
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton7 />
    </div>
  );
}

function Badge25() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202593</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5227)" id="Icon" opacity="0">
          <path d={svgPaths.p2940ea80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p7c0e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5227">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.938px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.938px]">
        <Badge25 />
        <Icon61 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone5 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_2010_5254)" id="Icon">
          <path d={svgPaths.pa2c5b80} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5254">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[67px] relative shrink-0 w-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[6px]">
        <Icon62 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[265.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[246px]">Request for additional storage space on shared drive</p>
    </div>
  );
}

function Badge26() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[65.453px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[65.453px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">IT-S-087</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container105() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container104 />
        <Badge26 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container103 />
      <Container105 />
    </div>
  );
}

function Badge27() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-[85.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Badge27 />
    </div>
  );
}

function Badge28() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[65px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[65px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge28 />
    </div>
  );
}

function Icon63() {
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
    <div className="h-[14.656px] relative shrink-0 w-[14.234px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[14.234px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-teal-700 whitespace-pre">P4</p>
      </div>
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-[#e7f8f1] h-[24.656px] relative rounded-[8px] shrink-0 w-[48.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[48.234px]">
        <Icon63 />
        <PriorityBadge5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge29 />
    </div>
  );
}

function StatusBadge5() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[23.75px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[23.75px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge30() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[41.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[41.75px]">
        <StatusBadge5 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 16:20</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge30 />
      <Text25 />
    </div>
  );
}

function Icon64() {
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

function Button24() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon64 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button24 />
    </div>
  );
}

function TicketRow5() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container101 />
      <Container102 />
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
      <Container111 />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton8 />
    </div>
  );
}

function Badge31() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202592</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon65() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5227)" id="Icon" opacity="0">
          <path d={svgPaths.p2940ea80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p7c0e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5227">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.563px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.563px]">
        <Badge31 />
        <Icon65 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone6 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5324)" id="Icon">
          <path d={svgPaths.p9e641c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5324">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_2010_5254)" id="Icon">
          <path d={svgPaths.pa2c5b80} fill="var(--fill-0, #2B7FFF)" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5254">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[67px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[10px]">
        <Icon66 />
        <Icon67 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[261.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[249px]">Database performance degradation - investigation needed</p>
    </div>
  );
}

function Badge32() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[71.906px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[71.906px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">DB-P-045</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container116() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container115 />
        <Badge32 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container114 />
      <Container116 />
    </div>
  );
}

function Badge33() {
  return (
    <div className="h-[22px] relative rounded-[12px] shrink-0 w-[85.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative w-[85.844px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Unassigned</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Badge33 />
    </div>
  );
}

function Badge34() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[74.734px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[74.734px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">DATABASE</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge34 />
    </div>
  );
}

function Icon68() {
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
    <div className="h-[14.656px] relative shrink-0 w-[13.781px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[13.781px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">P2</p>
      </div>
    </div>
  );
}

function Badge35() {
  return (
    <div className="bg-amber-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[47.781px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[47.781px]">
        <Icon68 />
        <PriorityBadge6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge35 />
    </div>
  );
}

function StatusBadge6() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[23.75px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[23.75px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Badge36() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[41.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[41.75px]">
        <StatusBadge6 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 15:55</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge36 />
      <Text26 />
    </div>
  );
}

function Icon69() {
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

function Button25() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon69 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button25 />
    </div>
  );
}

function TicketRow6() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container112 />
      <Container113 />
      <Container117 />
      <Container118 />
      <Container119 />
      <Container120 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function KixDataTable8() {
  return (
    <div className="content-stretch flex flex-col h-[276px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow4 />
      <TicketRow5 />
      <TicketRow6 />
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[175.641px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[176px]">Showing 1 to 3 of 3 results</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button26 />
        <Button27 />
        <Button28 />
        <Button29 />
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
          <Container123 />
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[1165.08px]">
        <KixDataTable6 />
        <KixDataTable7 />
        <KixDataTable8 />
        <KixDataTable9 />
      </div>
    </div>
  );
}

function NewTickets() {
  return (
    <div className="bg-white h-[553px] relative rounded-[12px] shrink-0 w-full" data-name="New Tickets">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[553px] items-start overflow-clip p-px relative w-full">
        <CardHeader4 />
        <CardContent6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Text27() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[57px]">2 tickets</p>
      </div>
    </div>
  );
}

function Icon70() {
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

function Button30() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon70 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[32px] relative shrink-0 w-[100.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[100.375px]">
        <Text27 />
        <Button30 />
      </div>
    </div>
  );
}

function KixDataTable10() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[24px] top-[24px] w-[1117.08px]" data-name="KIXDataTable">
      <Heading5 />
      <Container125 />
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="bg-white h-[62px] relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[62px] relative w-[1165.08px]">
        <KixDataTable10 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-slate-50 h-[36px] left-0 rounded-[12px] top-0 w-[256px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[8px] relative w-[256px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon71() {
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

function Container126() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <Input2 />
      <Icon71 />
    </div>
  );
}

function Icon72() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33398 1.33301V3.99967" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 1.33301V3.99967" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbb52d00} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66699H14" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[86.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.813px]">
        <Icon72 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Today</p>
      </div>
    </div>
  );
}

function Icon73() {
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

function Button32() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[87.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.422px]">
        <Icon73 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon74() {
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

function Button33() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[104.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[104.781px]">
        <Icon74 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

function Icon75() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1658700} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon75 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[14px] text-nowrap text-slate-900 top-[6px] whitespace-pre">Export CSV</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[706.98px] top-[2px] w-[426.094px]" data-name="Container">
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
    </div>
  );
}

function TableToolbar2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="TableToolbar">
      <Container126 />
      <Container127 />
    </div>
  );
}

function KixDataTable11() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-px pt-[8px] px-[16px] relative w-full">
          <TableToolbar2 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton9 />
    </div>
  );
}

function Icon76() {
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

function Container129() {
  return (
    <div className="absolute h-[40px] left-[107.75px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">ID</p>
      <Icon76 />
    </div>
  );
}

function Icon77() {
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

function Container130() {
  return (
    <div className="absolute h-[40px] left-[203.5px] overflow-clip top-[8px] w-[279.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Subject</p>
      <Icon77 />
    </div>
  );
}

function Icon78() {
  return (
    <div className="absolute left-[65.69px] size-[12px] top-[14px]" data-name="Icon">
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

function Container131() {
  return (
    <div className="absolute h-[40px] left-[490.78px] overflow-clip top-[8px] w-[183.5px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Assignee</p>
      <Icon78 />
    </div>
  );
}

function Icon79() {
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

function Container132() {
  return (
    <div className="absolute h-[40px] left-[682.28px] overflow-clip top-[8px] w-[87.766px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Team</p>
      <Icon79 />
    </div>
  );
}

function Icon80() {
  return (
    <div className="absolute left-[52.25px] size-[12px] top-[14px]" data-name="Icon">
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

function Container133() {
  return (
    <div className="absolute h-[40px] left-[778.05px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">Priority</p>
      <Icon80 />
    </div>
  );
}

function Icon81() {
  return (
    <div className="absolute left-[95.17px] size-[12px] top-[14px]" data-name="Icon">
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

function Container134() {
  return (
    <div className="absolute h-[40px] left-[873.8px] overflow-clip top-[8px] w-[183.516px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[10px] whitespace-pre">{`Status & Date`}</p>
      <Icon81 />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-end left-[1065.31px] overflow-clip top-[8px] w-[87.75px]" data-name="Container">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Actions</p>
    </div>
  );
}

function KixDataTable12() {
  return (
    <div className="bg-slate-50 h-[57px] relative shrink-0 w-full" data-name="KIXDataTable">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton10 />
    </div>
  );
}

function Badge37() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202591</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5227)" id="Icon" opacity="0">
          <path d={svgPaths.p2940ea80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p7c0e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5227">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[78.875px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[78.875px]">
        <Badge37 />
        <Icon82 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone7 />
    </div>
  );
}

function Icon83() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5219)" id="Icon">
          <path d={svgPaths.p27c87480} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5219">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon84() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5324)" id="Icon">
          <path d={svgPaths.p9e641c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5324">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[49.5px] items-start pb-0 pt-[2px] px-0 relative w-[10px]">
        <Icon83 />
        <Icon84 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-0 w-[261.281px]" data-name="Container">
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">Security audit compliance review</p>
    </div>
  );
}

function Badge38() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[21.5px] w-[79.172px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[79.172px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">SEC-A-078</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container140() {
  return (
    <div className="basis-0 grow h-[49.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.5px] relative w-full">
        <Container139 />
        <Badge38 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[57.5px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container138 />
      <Container140 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[67.047px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Alex Chen</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">AC</p>
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text29 />
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[20px] relative shrink-0 w-[95.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[95.047px]">
        <Text28 />
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container142 />
    </div>
  );
}

function Badge39() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[72.672px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[72.672px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">SECURITY</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge39 />
    </div>
  );
}

function Icon85() {
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
    <div className="h-[14.656px] relative shrink-0 w-[13.781px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[13.781px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b76e00] text-[11px] text-nowrap whitespace-pre">P2</p>
      </div>
    </div>
  );
}

function Badge40() {
  return (
    <div className="bg-amber-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[47.781px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[47.781px]">
        <Icon85 />
        <PriorityBadge7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(183,110,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge40 />
    </div>
  );
}

function StatusBadge7() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[28.281px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[28.281px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge41() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[46.281px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[46.281px]">
        <StatusBadge7 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 14:00</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[57.5px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge41 />
      <Text30 />
    </div>
  );
}

function Icon86() {
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

function Button35() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon86 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.5px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button35 />
    </div>
  );
}

function TicketRow7() {
  return (
    <div className="h-[74.5px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container136 />
      <Container137 />
      <Container141 />
      <Container143 />
      <Container144 />
      <Container145 />
      <Container146 />
      <Container147 />
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[12px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <PrimitiveButton11 />
    </div>
  );
}

function Badge42() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[36px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[7px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">#202590</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon87() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2010_5227)" id="Icon" opacity="0">
          <path d={svgPaths.p2940ea80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p7c0e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5227">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[80.953px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[80.953px]">
        <Badge42 />
        <Icon87 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[107.75px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <SlotClone8 />
    </div>
  );
}

function Icon88() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5219)" id="Icon">
          <path d={svgPaths.p27c87480} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5219">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon89() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2010_5324)" id="Icon">
          <path d={svgPaths.p9e641c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_5324">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[67px] relative shrink-0 w-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[67px] items-start pb-0 pt-[2px] px-0 relative w-[10px]">
        <Icon88 />
        <Icon89 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[261.281px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[245px]">Email server not responding - urgent fix needed</p>
    </div>
  );
}

function Badge43() {
  return (
    <div className="absolute bg-gray-100 h-[22px] left-0 rounded-[12px] top-[39px] w-[71px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[71px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">TD-T-066</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container152() {
  return (
    <div className="basis-0 grow h-[67px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-full">
        <Container151 />
        <Badge43 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[75px] items-start left-[203.5px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[279.281px]" data-name="Container">
      <Container150 />
      <Container152 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[20px] left-[28px] overflow-clip top-0 w-[62.922px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">John Doe</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">JD</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[20px] top-0" data-name="Primitive.span">
      <Text32 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[90.922px]">
        <Text31 />
        <PrimitiveSpan5 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[490.78px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.5px]" data-name="Container">
      <Container154 />
    </div>
  );
}

function Badge44() {
  return (
    <div className="bg-slate-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[65px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip px-[9px] py-[5px] relative w-[65px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-500 whitespace-pre">IT-INFRA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[682.28px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.766px]" data-name="Container">
      <Badge44 />
    </div>
  );
}

function Icon90() {
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
    <div className="h-[14.656px] relative shrink-0 w-[12.234px]" data-name="PriorityBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[12.234px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#b42318] text-[11px] text-nowrap whitespace-pre">P1</p>
      </div>
    </div>
  );
}

function Badge45() {
  return (
    <div className="bg-red-100 h-[24.656px] relative rounded-[8px] shrink-0 w-[46.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[24.656px] items-center justify-center overflow-clip p-px relative w-[46.234px]">
        <Icon90 />
        <PriorityBadge8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,35,24,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start left-[778.05px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Badge45 />
    </div>
  );
}

function StatusBadge8() {
  return (
    <div className="h-[14.656px] relative shrink-0 w-[28.281px]" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative w-[28.281px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap text-slate-900 whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Badge46() {
  return (
    <div className="h-[24.656px] relative rounded-[8px] shrink-0 w-[46.281px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.656px] items-center justify-center overflow-clip p-px relative w-[46.281px]">
        <StatusBadge8 />
      </div>
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[183.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start overflow-clip relative w-[183.516px]">
        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]">12/12/2024, 14:30</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[75px] items-start left-[873.8px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[183.516px]" data-name="Container">
      <Badge46 />
      <Text33 />
    </div>
  );
}

function Icon91() {
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

function Button36() {
  return (
    <div className="opacity-0 relative rounded-[12px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon91 />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute box-border content-stretch flex h-[75px] items-start justify-end left-[1065.31px] overflow-clip pb-0 pt-[4px] px-0 top-[8px] w-[87.75px]" data-name="Container">
      <Button36 />
    </div>
  );
}

function TicketRow8() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="TicketRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container148 />
      <Container149 />
      <Container153 />
      <Container155 />
      <Container156 />
      <Container157 />
      <Container158 />
      <Container159 />
    </div>
  );
}

function KixDataTable13() {
  return (
    <div className="content-stretch flex flex-col h-[166.5px] items-start overflow-clip relative shrink-0 w-full" data-name="KIXDataTable">
      <TicketRow7 />
      <TicketRow8 />
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[174.766px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 w-[175px]">Showing 1 to 2 of 2 results</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="bg-[#407a3f] h-[32px] relative rounded-[12px] shrink-0 w-[32.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[32.625px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[34.594px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[34.594px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="bg-white h-[32px] relative rounded-[12px] shrink-0 w-[57.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[13px] py-px relative w-[57.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[232.375px]">
        <Button37 />
        <Button38 />
        <Button39 />
        <Button40 />
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
          <Container160 />
          <Container161 />
        </div>
      </div>
    </div>
  );
}

function CardContent7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0 w-[1165.08px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[1165.08px]">
        <KixDataTable11 />
        <KixDataTable12 />
        <KixDataTable13 />
        <KixDataTable14 />
      </div>
    </div>
  );
}

function MyTeams() {
  return (
    <div className="bg-white h-[443.5px] relative rounded-[12px] shrink-0 w-full" data-name="My teams">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-[443.5px] items-start overflow-clip p-px relative w-full">
        <CardHeader5 />
        <CardContent7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0f0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TablesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1165.08px]" data-name="tables container">
      <MyOpenTickets />
      <NewTickets />
      <MyTeams />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="CONTAINER">
      <ChartCardsContainer />
      <Container18 />
      <TablesContainer />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
      <Header />
      <Container162 />
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-white h-[2315.16px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[2315.16px] items-start overflow-clip pb-0 pt-[24px] px-[24px] relative">
        <Container163 />
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2804px] items-start left-[272px] top-[16px] w-[1233px]" data-name="Container">
      <KixTopBar />
      <Container164 />
    </div>
  );
}

function Container166() {
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

function Container167() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[80px] items-start justify-center px-[32px] py-[16px] relative w-full">
          <Container166 />
        </div>
      </div>
    </div>
  );
}

function Icon92() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1f578980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <Icon92 />
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Favorites</p>
    </div>
  );
}

function Icon93() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2f4c7700} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 3.75V5.25" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 12.75V14.25" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 8.25V9.75" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">My Open Tickets</p>
      </div>
    </div>
  );
}

function Badge47() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[29.094px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[29.094px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">23</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container168() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon93 />
          <Text34 />
          <Badge47 />
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center left-0 overflow-clip pl-0 py-0 rounded-[12px] top-0 w-[222px]" data-name="Container">
      <Container168 />
    </div>
  );
}

function KixSideNavItem() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-[38px] w-[222px]" data-name="KIXSideNavItem">
      <Container169 />
    </div>
  );
}

function Icon94() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c193bc0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.5 12.75V6.75" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 12.75V3.75" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 12.75V10.5" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Weekly Report</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon94 />
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[222px]" data-name="Container">
      <Container170 />
    </div>
  );
}

function KixSideNavItem1() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-[86px] w-[222px]" data-name="KIXSideNavItem">
      <Container171 />
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <KixSideNavItem />
      <KixSideNavItem1 />
    </div>
  );
}

function Icon95() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Work</p>
      <Icon95 />
    </div>
  );
}

function Button41() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph7 />
    </div>
  );
}

function Icon96() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pb56cd00} id="Vector" stroke="var(--stroke-0, #609848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3f286700} id="Vector_2" stroke="var(--stroke-0, #609848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[#407a3f] text-[16px] text-nowrap top-[-1px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon96 />
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute bg-[#ddefd6] content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[222px]" data-name="Container">
      <Container173 />
    </div>
  );
}

function KixSideNavItem2() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container174 />
    </div>
  );
}

function Icon97() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p16555400} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 3.74999V5.24999" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 12.75V14.25" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 8.24999V9.74999" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Tickets</p>
      </div>
    </div>
  );
}

function Badge48() {
  return (
    <div className="h-[20px] relative rounded-[12px] shrink-0 w-[36.656px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[7px] py-[3px] relative w-[36.656px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">856</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon98() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d="M1 10L5.5 5.5L1 1" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[18px]">
        <Icon98 />
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon97 />
          <Text37 />
          <Badge48 />
          <Container175 />
        </div>
      </div>
    </div>
  );
}

function KixSideNavItem3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[222px]" data-name="KIXSideNavItem">
      <Container176 />
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="SlotClone">
      <KixSideNavItem3 />
    </div>
  );
}

function Icon99() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 2.25V15.75" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.25 2.25V15.75" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon99 />
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[222px]" data-name="Container">
      <Container177 />
    </div>
  );
}

function KixSideNavItem4() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container178 />
    </div>
  );
}

function Icon100() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.49999V4.49999" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.49999V4.49999" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p38064080} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.50001H15.75" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center px-[12px] py-0 relative w-full">
          <Icon100 />
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-0 overflow-clip rounded-[12px] top-0 w-[222px]" data-name="Container">
      <Container179 />
    </div>
  );
}

function KixSideNavItem5() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="KIXSideNavItem">
      <Container180 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[188px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <KixSideNavItem2 />
      <SlotClone9 />
      <KixSideNavItem4 />
      <KixSideNavItem5 />
    </div>
  );
}

function KixSideNavSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[226px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button41 />
      <PrimitiveDiv />
    </div>
  );
}

function Icon101() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Records</p>
      <Icon101 />
    </div>
  );
}

function Button42() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph8 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[38px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button42 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon102() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Knowledge</p>
      <Icon102 />
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph9 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[38px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button43 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Icon103() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Insights</p>
      <Icon103 />
    </div>
  );
}

function Button44() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph10 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[38px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button44 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Icon104() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Communication</p>
      <Icon104 />
    </div>
  );
}

function Button45() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph11 />
    </div>
  );
}

function PrimitiveDiv4() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[38px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button45 />
      <PrimitiveDiv4 />
    </div>
  );
}

function Icon105() {
  return (
    <div className="absolute left-[180px] size-[18px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[8px] w-[198px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-0 not-italic text-[12px] text-nowrap text-slate-500 top-px tracking-[0.6px] uppercase whitespace-pre">Admin</p>
      <Icon105 />
    </div>
  );
}

function Button46() {
  return (
    <div className="h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Paragraph12 />
    </div>
  );
}

function PrimitiveDiv5() {
  return <div className="h-0 shrink-0 w-full" data-name="Primitive.div" />;
}

function KixSideNavSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[38px] items-start relative shrink-0 w-full" data-name="KIXSideNavSection">
      <Button46 />
      <PrimitiveDiv5 />
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[722px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[722px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container172 />
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

function Container182() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[254px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative w-[254px]">
        <Container181 />
      </div>
    </div>
  );
}

function Icon106() {
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
        <Icon106 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[12px] text-nowrap text-slate-500 top-px whitespace-pre">Theme</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Deep V2</p>
      </div>
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="bg-[#f8fafb] relative rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="h-[13.793px] relative rounded-[3.35544e+07px] shrink-0 w-[24px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.793px] items-center pl-[0.75px] pr-px py-px relative w-[24px]">
        <PrimitiveSpan6 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[23.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[23.516px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">Soft</p>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="h-[18.391px] relative shrink-0 w-[120.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[18.391px] items-center relative w-[120.188px]">
        <Text40 />
        <PrimitiveButton12 />
        <Text41 />
      </div>
    </div>
  );
}

function KixThemeToggle() {
  return (
    <div className="content-stretch flex h-[18.391px] items-center justify-between relative shrink-0 w-full" data-name="KIXThemeToggle">
      <PrimitiveLabel />
      <Container183 />
    </div>
  );
}

function Icon107() {
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

function Button47() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Icon107 />
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-slate-500">KIX v18.0.5</p>
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[135.391px] relative shrink-0 w-[254px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[135.391px] items-start pb-0 pt-[17px] px-[16px] relative w-[254px]">
        <KixThemeToggle />
        <Button47 />
        <Container184 />
      </div>
    </div>
  );
}

function KixSideNav() {
  return (
    <div className="bg-[#f1f2f6] box-border content-stretch flex flex-col h-[968px] items-start pl-0 pr-px py-0 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full" data-name="KIXSideNav">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
      <Container182 />
      <Container185 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[16px] w-[256px]">
      <Container167 />
      <KixSideNav />
    </div>
  );
}

function KixAppShell() {
  return (
    <div className="basis-0 bg-[#365528] grow h-[2411px] min-h-px min-w-px relative shrink-0" data-name="KIXAppShell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[2411px] overflow-clip relative w-full">
        <Container165 />
        <Frame10 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex h-[3010px] items-start left-0 overflow-clip top-0 w-[1551px]" data-name="App">
      <KixAppShell />
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

export default function KixVisionUiV2() {
  return (
    <div className="bg-[#365528] relative size-full" data-name="KIX Vision UI V2">
      <App />
      <Text42 />
    </div>
  );
}