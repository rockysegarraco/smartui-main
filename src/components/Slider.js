import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Slider() {
  return (
    <>
      {/* FLEX WRAP */}
      <div className="flex items-center">
        <div className="shrink-0 px-2">
          <ChevronLeftIcon className="h-8" />
        </div>
        <div className="group flex-auto text-center cursor-pointer">
          <div className="flex items-center w-full gap-x-2">
            <div className="grow bg-slate-50 p-2 rounded-md">
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
            <div className="grow bg-slate-50 p-2 rounded-md">
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
            <div className="grow bg-slate-50 p-2 rounded-md">
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
            <div className="grow bg-slate-50 p-2 rounded-md lg:block hidden">
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
        <div className="shrink-0 px-2">
          <ChevronRightIcon className="h-8" />
        </div>
      </div>
    </>
  );
}
