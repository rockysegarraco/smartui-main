import React from "react";
import ButtonMap from "@/components/Buttons/ButtonMap";
import ScrollButtonSmartSite from "@/components/ScrollButtonSmartSite";

const SmartSiteTabScrollPickup = () => {
  return (
    <>
      <ScrollButtonSmartSite />
      {/* MAP BTN */}
      <div className="mb-4 px-12">
        <ButtonMap />
      </div>
    </>
  );
};

export default SmartSiteTabScrollPickup;
