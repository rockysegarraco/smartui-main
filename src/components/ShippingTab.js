import React from "react";
import Button from "./Button";

const ShippingTab = () => {
  return (
    <div className="flex flex-col gap-y-2 px-6 pt-4 pb-6">
      <Button
        title="Add to Cart"
        ImageUrl="https://click2cart.com/img/supers/sc/us/small/walmart_usa_dark.svg"
        bg="bg-[#0071DC]"
        textColor="text-white"
      />
      <Button
        title="Add to Cart"
        ImageUrl="https://click2cart.com/img/supers/sc/us/small/target_usa_dark.svg"
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
    </div>
  );
};

export default ShippingTab;
