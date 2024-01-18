import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Slider() {
  return (
    <>
      {/* FLEX WRAP */}
      <div className="flex flex-row items-center justify-center">
        <div className="shrink-0 px-2">
          <ChevronLeftIcon className="h-8" />
        </div>
        <div className="flex-auto text-center cursor-pointer lg:overflow-hidden">
          <div className="flex items-center w-full gap-x-2">
            <div className="md:basis-1/3 lg:basis-1/3 basis-1/2 group grow bg-slate-50 pt-4 pb-4 px-2 rounded-md animate-delay-[.2s] animate-fade-up animate-once">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs">$999.99</div>
                <div className="px-4 py-2 text-xs uppercase text-white bg-[#936E2A] rounded-full w-full">
                  <span className="group-hover:hidden">Wal-Mart</span>
                  <span className="hidden group-hover:block font-bold">
                    Cart it!
                  </span>
                </div>
              </div>
            </div>
            <div className="md:basis-1/3 lg:basis-1/3 basis-1/2 group grow bg-slate-50 pt-4 pb-4 px-2 rounded-md animate-delay-[.4s] animate-fade-up animate-once">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs">$999.99</div>
                <div className="px-4 py-2 text-xs uppercase text-white bg-[#936E2A] rounded-full">
                  <span className="group-hover:hidden">Amazon</span>
                  <span className="hidden group-hover:block font-bold">
                    Cart it!
                  </span>
                </div>
              </div>
            </div>
            <div className="md:basis-1/3 lg:basis-1/3 group grow bg-slate-50 pt-4 pb-4 px-2 rounded-md animate-delay-[.6s] animate-fade-up animate-once lg:block hidden ">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/bjs_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-xs">$999.99</div>
                <div className="px-2 py-2 text-xs uppercase text-white bg-[#936E2A] rounded-full">
                  <span className="group-hover:hidden">Bj&lsquo;s</span>
                  <span className="hidden group-hover:block font-bold">
                    Cart it!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 px-2">
          <ChevronRightIcon className="h-8" />
        </div>
      </div>
    </>
  );
}
