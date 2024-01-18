import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Slider() {
  return (
    <>
      {/* FLEX WRAP */}
      <div className="flex flex-row items-center justify-center gap-x-2">
        <div className="shrink-0 px-2 bg-black/10 py-2 rounded-full">
          <ChevronLeftIcon className="h-8 text-white/50" />
        </div>
        <div className="flex-auto text-center cursor-pointer md:overflow-hidden">
          <div className="flex items-center w-full gap-x-2">
            <div className="basis-1/2 lg:basis-1/3 group grow bg-[#243F38] pt-4 pb-4 px-2 rounded-md shadow-sm animate-delay-[.1s] animate-fade-up animate-once">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmart_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs text-white">$16.98</div>
                <div className="px-4 py-2 text-xs uppercase text-white bg-[#006241] rounded-full font-medium hover:bg-opacity-90">
                  <div className="text-[14px]">Wal-mart</div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/3 group grow bg-[#243F38] pt-4 pb-4 px-2 rounded-md shadow-sm animate-delay-[.2s] animate-fade-up animate-once">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs text-white">$35.82</div>
                <div className="px-4 py-2 text-xs uppercase text-white bg-[#006241] rounded-full font-medium hover:bg-opacity-90">
                  <div className="text-[14px]">Amazon</div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/3 group grow bg-[#243F38] pt-4 pb-4 px-2 rounded-md shadow-sm animate-delay-[.3s] animate-fade-up animate-once lg:block hidden">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/bjs_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs text-white">$41.99</div>
                <div className="px-4 py-2 text-xs uppercase text-white bg-[#006241] rounded-full font-medium hover:bg-opacity-90">
                  <div className="text-[14px]">Bj&lsquo;s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 px-2 bg-black/10 py-2 rounded-full">
          <ChevronRightIcon className="h-8 text-white/50" />
        </div>
      </div>
    </>
  );
}
