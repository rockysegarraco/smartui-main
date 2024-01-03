/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Slider from "@/components/Slider";
import Select from "@/components/Buttons/Select";
import NavSmartSite from "@/components/NavSmartSite";
import GoogleMapReact from "google-map-react";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center pt-0 lg:pt-8 lg:p-8">
          <div className="mx-auto max-w-full bg-white shadow-sm">
            {/* HERO */}
            <img
              className="w-full mb-4"
              src="https://s3-us-west-2.amazonaws.com/smartcommerce.co/images_sc_background/35/b2295e56-f42e-45ca-b061-743e54cd2fde.png"
              alt="Smart"
            />
            {/* TEXT */}
            <div className="pt-0 pb-2">
              <div className="text-center text-2xl text-slate-900 pb-1 animate-delay-[.1s] animate-fade-up animate-once">
                Milk & Cookies for Santa
              </div>
              <div className="text-center text-base text-slate-900 pb-1 animate-delay-[.2s] animate-fade-up animate-once">
                Add to your favorite cart
              </div>
            </div>
            {/* Pills */}
            <div className="pt-2 pb-0 px-4">
              <Select />
            </div>
            <div className="pt-2 pb-2">
              <div className="px-6 py-2 font-bold">Delivery/Pickup</div>
              <Slider />
            </div>
            <div className="pt-0 pb-4">
              <div className="px-6 py-2 font-bold">Ship It</div>
              <Slider />
            </div>
            <div className="h-24 bg-slate-100 animate-delay-[1.2s] animate-fade animate-once">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                  libraries: ["places"],
                }}
                defaultCenter={location}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
              ></GoogleMapReact>
            </div>
            {/* SHARE BTN */}
            <div className="flex items-center border-t">
              <div className="flex-auto text-center p-4 border-r">
                <div className="flex items-center justify-center">
                  <div>
                    <svg
                      className="pr-2 h-6"
                      viewBox="0 0 50 50"
                      fill="#3b82f6"
                    >
                      <path d="M 35.484375 5.984375 A 1.50015 1.50015 0 0 0 34.439453 8.5605469 L 36.878906 11 L 35.5 11 C 26.83138 11 19.340374 16.1421 15.945312 23.552734 A 1.50015 1.50015 0 1 0 18.671875 24.800781 C 21.590813 18.429415 28.01662 14 35.5 14 L 36.878906 14 L 34.439453 16.439453 A 1.50015 1.50015 0 1 0 36.560547 18.560547 L 41.431641 13.689453 A 1.50015 1.50015 0 0 0 41.423828 11.302734 L 36.560547 6.4394531 A 1.50015 1.50015 0 0 0 35.484375 5.984375 z M 12.5 6 C 8.9280619 6 6 8.9280619 6 12.5 L 6 35.5 C 6 39.071938 8.9280619 42 12.5 42 L 35.5 42 C 39.071938 42 42 39.071938 42 35.5 L 42 27.5 A 1.50015 1.50015 0 1 0 39 27.5 L 39 35.5 C 39 37.450062 37.450062 39 35.5 39 L 12.5 39 C 10.549938 39 9 37.450062 9 35.5 L 9 12.5 C 9 10.549938 10.549938 9 12.5 9 L 20.5 9 A 1.50015 1.50015 0 1 0 20.5 6 L 12.5 6 z M 15.787109 27.941406 A 1.50015 1.50015 0 0 0 14.246094 29.236328 C 14.083729 30.301915 14 31.391492 14 32.5 A 1.50015 1.50015 0 1 0 17 32.5 C 17 31.542508 17.0713 30.603913 17.210938 29.6875 A 1.50015 1.50015 0 0 0 15.787109 27.941406 z"></path>
                    </svg>
                  </div>
                  <div className="uppercase font-medium text-sm text-blue-700">
                    Share & Save
                  </div>
                </div>
              </div>
              <div className="flex-auto text-center p-4">
                <div className="flex items-center justify-center text-[#E60023]">
                  <div>
                    <svg
                      className="pr-2 h-6 text-[#E60023]"
                      viewBox="0 0 50 50"
                      fill="#E60023"
                    >
                      <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path>
                    </svg>
                  </div>
                  <div className="uppercase font-medium text-sm">Pin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
