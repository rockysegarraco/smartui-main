/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Pills from "@/components/Buttons/Pills";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Share from "@/components/Share";
import GoogleMapReact from "google-map-react";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };
  return (
    <>
      <div>
        <div className="flex flex-col justify-center pt-0 lg:pt-8 lg:p-8">
          <div className="mx-auto lg:max-w-sm max-w-full  bg-[#f2f1ed] shadow-sm">
            {/* HERO */}
            <img
              className="w-full mb-4"
              src="/img/starbucks-300-300.jpg"
              alt="Smart"
            />
            {/* TEXT */}
            <div className="pt-0 pb-2">
              {/* TEXT */}
              <div className="text-center px-8 text-2xl font-semibold text-[#006241] pb-4 animate-delay-[.2s] animate-fade-up animate-once">
                You may receive either package while we transition.
              </div>
              <div className="text-center font-semibold text-base text-slate-900 pb-1 animate-delay-[.4s] animate-fade-up animate-once">
                Add to your favorite cart
              </div>
            </div>
            {/* Pills */}
            <Pills />
            <div className="px-6 pb-4 animate-delay-[1.4s] animate-fade animate-once">
              <ButtonMap />
            </div>
            {/* SHARE */}
            <Share />
          </div>
        </div>
      </div>
    </>
  );
}
