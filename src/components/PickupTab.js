import React from "react";
import Button from "./Button";
import ButtonMap from "@/components/Buttons/ButtonMap";
import ScrollButton from "@/components/ScrollButton";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const PickupTab = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 px-6 pt-4 pb-6">
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/walmartgrocery_usa_dark.svg"
          bg="bg-[#0071DC]"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/target_bopis_usa_dark.svg"
          bg="bg-[#CC0000]"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg"
          bg="bg-[#000000]"
          textColor="text-white"
        />
        <Button
          title="Add to Cart"
          ImageUrl="https://click2cart.com/img/supers/sc/us/small/publix_usa_dark.svg"
          bg="bg-[#3F8F2C]"
          textColor="text-white"
        />
        {/* MAP BTN */}
        <ButtonMap />
      </div>
    </>
  );
};

export default PickupTab;
