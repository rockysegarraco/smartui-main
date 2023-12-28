import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Slider() {
  return (
    <>
      {/* FLEX WRAP */}
      <div class="flex items-center">
        <div class="shrink-0 px-2">
          <ChevronLeftIcon className="h-8" />
        </div>
        <div class="group flex-auto text-center cursor-pointer">
          <div class="flex items-center w-full gap-x-2">
            <div class="grow bg-slate-50 p-2 rounded-md">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-sm">$999.99</div>
                <div className="px-4 py-2 text-sm uppercase text-white bg-blue-700 rounded-full">
                  CART
                </div>
              </div>
            </div>
            <div class="grow bg-slate-50 p-2 rounded-md">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-sm">$999.99</div>
                <div className="px-4 py-2 text-sm uppercase text-white bg-blue-700 rounded-full">
                  CART
                </div>
              </div>
            </div>
            <div class="grow bg-slate-50 p-2 rounded-md">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-sm">$999.99</div>
                <div className="px-4 py-2 text-sm uppercase text-white bg-blue-700 rounded-full">
                  CART
                </div>
              </div>
            </div>
            <div class="grow bg-slate-50 p-2 rounded-md lg:block hidden">
              <div className="flex flex-col gap-y-1">
                <img
                  className="h-12 group-hover:animate-bounce ease-in"
                  src="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
                  alt="Retailer"
                />
                <div className="lg:text-base text-sm">$999.99</div>
                <div className="px-4 py-2 text-sm uppercase text-white bg-blue-700 rounded-full">
                  CART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-2">
          <ChevronRightIcon className="h-8" />
        </div>
      </div>
    </>
  );
}
