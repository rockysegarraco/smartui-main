import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const cartArray = [
  "https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/target_bopis_usa_light.svg",
  "https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg",
  "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/ca/small/instacart_ca_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg",
  "https://click2cart.com/img/supers/sc/us/small/bjs_usa_dark.svg",
];

export default function ScrollButtonOnly(props) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 360;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 360;
  };

  return (
    <div>
      <div className="gap-y-2 px-2 pt-4 pb-2">
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
                className="border rounded-md p-2 cursor-pointer hover:bg-blue-50 ease-in-out duration-300"
              >
                <div className="flex flex-col text-center w-[73px]">
                  <div className="mx-auto">
                    <img className="h-12" src={i} alt="" />
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
