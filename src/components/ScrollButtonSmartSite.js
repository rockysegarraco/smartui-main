import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const cartArray = [
  "https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/target_bopis_usa_light.svg",
  "https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/ca/small/instacart_ca_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/costco_usa_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/bjs_usa_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/giant_usa_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/harristeeter_usa_dark.svg",
];

export default function Button(props) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div>
      <div className="gap-y-2 px-2 pt-4 pb-4">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <ChevronLeftIcon
            onClick={slideLeft}
            className="h-16 p-1 hover:bg-slate-50 text-blue-700 cursor-pointer"
          />
          <div
            id="slider"
            className="flex overflow-x-scroll gap-x-1 scrollbar-hide scroll-smooth whitespace-nowrap"
          >
            {cartArray.map((i) => (
              <div
                key={i}
                className="bg-slate-100 rounded-md px-2 pt-4 pb-4 cursor-pointer hover:scale-105 ease-in-out duration-300"
              >
                <div className="group flex flex-col w-full text-center">
                  <div className="mx-auto mb-1">
                    <img
                      className="h-12 group-hover:animate-bounce ease-in"
                      src={i}
                      alt=""
                    />
                  </div>
                  <div className="text-[12px] mb-1 text-slate-950 font-semibold">
                    $999.99
                  </div>
                  <div className="px-4 py-2 text-[12px] uppercase text-white bg-blue-700 rounded-full">
                    <div className="flex flex-row flex-grow gap-x-1 items-center justify-center h-[10px] w-[45px] text-center">
                      <span className="group-hover:hidden">Cart</span>
                      <PlusCircleIcon className="hidden group-hover:block h-4 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ChevronRightIcon
            onClick={slideRight}
            className="h-16 p-1 hover:bg-slate-50 text-blue-700 cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
