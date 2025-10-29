import imgImage1 from "figma:asset/e3866dd7b9537ce14b47254036c96d688dd3ea69.png";

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[32px] size-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}