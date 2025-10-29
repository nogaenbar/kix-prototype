import imgImageKixServiceSoftware from "figma:asset/84cc71845f6ec7714e3045962faa7b220286b259.png";

function ImageKixServiceSoftware() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Image (KIX Service Software)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.95%] left-0 max-w-none top-[-39.47%] w-full" src={imgImageKixServiceSoftware} />
      </div>
      <div className="size-full">
        <div className="h-[38px] w-full" />
      </div>
    </div>
  );
}

export default function LogoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="logo container">
      <ImageKixServiceSoftware />
    </div>
  );
}