import svgPaths from "./svg-py3sevlazw";

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Open Tickets</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-0.75px] whitespace-pre">856</p>
    </div>
  );
}

function Icon() {
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

function Text() {
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
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[22px] relative rounded-[12px] shrink-0 w-[56.938px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-center justify-center overflow-clip p-px relative w-[56.938px]">
        <KpiTile />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] opacity-75 relative shrink-0 w-[81.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[81.656px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Text1 />
    </div>
  );
}

function KpiTile1() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph />
        <Container />
        <Container1 />
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

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">New (7d)</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[42px] text-nowrap text-slate-900 tracking-[-0.6px] whitespace-pre">124</p>
    </div>
  );
}

function Icon1() {
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

function Text2() {
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
        <Icon1 />
        <Text2 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[64.984px]">
        <KpiTile2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="opacity-75 relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">vs previous 7d</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge1 />
      <Text3 />
    </div>
  );
}

function KpiTile3() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph1 />
        <Container2 />
        <Container3 />
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

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-90 relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Breached SLAs</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[42px] text-nowrap text-slate-900 tracking-[-0.6px] whitespace-pre">8</p>
    </div>
  );
}

function Icon2() {
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

function Text4() {
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
        <Icon2 />
        <Text4 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e7f8f1] h-[26px] relative rounded-[12px] shrink-0 w-[64.984px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[26px] items-center justify-center overflow-clip p-px relative w-[64.984px]">
        <KpiTile4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(15,118,110,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="opacity-75 relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-500 whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge2 />
      <Text5 />
    </div>
  );
}

function KpiTile5() {
  return (
    <div className="relative shrink-0 w-full" data-name="KPITile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph2 />
        <Container4 />
        <Container5 />
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

export default function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}