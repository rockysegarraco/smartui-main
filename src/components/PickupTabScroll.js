import React from "react";
import ButtonMap from "@/components/Buttons/ButtonMap";
import ScrollButton from "@/components/ScrollButton";

const PickupTabScroll = () => {
  return (
    <>
      <ScrollButton />
      {/* MAP BTN */}
      <div className="mb-4 px-8">
        <ButtonMap />
      </div>
    </>
  );
};

export default PickupTabScroll;
