import { useState } from "react";
import Select from "@/components/Select";
import Slider from "@/components/Slider";
import Share from "@/components/Share";
import GoogleMapReact from "google-map-react";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Modal from "@/components/Modal";
import { CheckIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-2">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="">
              {/* BUTTONS */}
              <div className="mb-4 font-bold">Select Size</div>
              <div className="flex flex-row flex-wrap px-0 mb-2 gap-x-2 animate-delay-[1.2s] animate-fade animate-once gap-y-2">
                <div className="text-sm py-2 px-4 border border-[#936E2A] text-black rounded-full text-center cursor-pointer hover:bg-[#936E2A] hover:text-white">
                  12.0 oz
                </div>
                <div className="text-sm py-2 px-4 bg-[#936E2A] text-white rounded-full text-center hover:text-white cursor-pointer">
                  <div className="flex flex-row items-center font-bold">
                    10.4 oz
                  </div>
                </div>
                <div className="text-sm py-2 px-4 border border-[#936E2A] text-black rounded-full text-center cursor-pointer hover:bg-[#936E2A] hover:text-white">
                  17.0 oz
                </div>
                <div className="text-sm py-2 px-4 border border-[#936E2A] text-black rounded-full text-center cursor-pointer hover:bg-[#936E2A] hover:text-white">
                  17.9 oz
                </div>
                <div className="text-sm py-2 px-4 border border-[#936E2A] text-black rounded-full text-center cursor-pointer hover:bg-[#936E2A] hover:text-white">
                  23.6 oz
                </div>
                <div className="text-sm py-2 px-4 border border-[#936E2A] text-black rounded-full text-center cursor-pointer hover:bg-[#936E2A] hover:text-white">
                  27.7 oz
                </div>
              </div>
            </div>
            <div className="py-4 px-0 lg:px-4">
              <Slider />
            </div>
            <div className="flex flex-row flex-wrap px-0 mb-1 gap-x-2 animate-delay-[1.2s] animate-fade animate-once gap-y-2 justify-center lg:justify-start">
              <div className="pb-2 animate-delay-[.6s] animate-fade animate-once">
                <div
                  className="text-sm py-2 px-6 border border-[#936E2A] text-black rounded-full text-center hover:text-white hover:bg-[#936E2A] cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <div className="flex justify-center items-center">
                    <MapPinIcon className="h-6 pr-1" />
                    <div className="text-sm">Find Near Me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-full">
            <img className="hidden lg:block" src="/./img/locator-desk.jpg" />
            <img className="block lg:hidden" src="/./img/mobile-locator.jpg" />
          </div>
        </Modal>
      </div>
    </>
  );
}
