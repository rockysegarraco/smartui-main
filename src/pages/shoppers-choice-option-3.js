/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Pills from "@/components/Buttons/Pills";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Share from "@/components/Share";
import LoadingScreen from "@/components/LoadingScreen";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="flex flex-col pt-0 lg:p-8">
        <div className="mx-auto max-w-full lg:max-w-sm bg-[#f2f1ed] shadow-sm">
          {/* HERO */}
          <img
            className="w-full mb-4"
            src="/img/starbucks-300-300.jpg"
            alt="Smart"
          />
          {/* TEXT */}
          <div className="pt-0 pb-2">
            <div className="text-center px-8 text-2xl font-semibold text-[#006241] pb-4 animate-delay-[.2s] animate-fade-up animate-once">
              Never Miss a Cup.
            </div>
          </div>
          {/* BUTTONS */}
          <div className="flex flex-row px-6 mb-1 gap-x-2 animate-delay-[1.2s] animate-fade-up animate-once">
            <div className="basis-1/2 py-2 px-4 border border-[#006241] text-[#006241] rounded-full text-center hover:bg-[#006241] hover:text-white cursor-pointer">
              Ship it
            </div>
            <div className="basis-1/2 py-2 px-4 border border-[#006241] text-[#006241] rounded-full text-center hover:bg-[#006241] hover:text-white cursor-pointer">
              Delivery/Pickup
            </div>
          </div>
          <div className="pt-2">
            <Pills />
          </div>
          <div className="px-6 pb-4 animate-delay-[1.2s] animate-fade animate-onc">
            {" "}
            <ButtonMap />
          </div>
          {/* SHARE */}
          <Share />
        </div>
      </div>
    </>
  );
}
