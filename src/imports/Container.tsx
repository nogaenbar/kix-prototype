import svgPaths from "./svg-hzn8muhke1";

function Icon() {
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

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16px] shrink-0 w-[600px]" data-name="Input">
      <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[12px] py-[8px] relative w-[600px]">
        <Icon />
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-500 whitespace-pre">Search tickets, contacts...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[10px] relative size-full" data-name="Container">
      <Input />
    </div>
  );
}