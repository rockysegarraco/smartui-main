import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const cartArray = [
  "https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/target_bopis_usa_light.svg",
  "https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/ca/small/instacart_ca_dark.svg",
];

export default function Button(props) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 398;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 398;
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
            className="flex overflow-x-scroll gap-x-2 scrollbar-hide scroll-smooth whitespace-nowrap"
          >
            {cartArray.map((i) => (
              <div
                key={i}
                className="border rounded-md p-2 cursor-pointer hover:bg-blue-50 ease-in-out duration-300"
              >
                <div className="flex flex-col w-full text-center w-[50px]">
                  <div className="mx-auto">
                    <img className="h-12" src={i} alt="" />
                  </div>
                  <div className="px-4 py-2 text-[12px] uppercase text-white bg-blue-700 rounded-full">
                    <div className="group flex flex-row flex-grow gap-x-1 items-center justify-center w-[52px] h-[20px] text-center">
                      <span className="group-hover:hidden">Cart</span>
                      <Image
                        className="hidden group-hover:block h-[32px]"
                        alt="gif"
                        src="/animatedcart.gif"
                        height={100}
                        width={100}
                      />
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
