import { useState } from "react";
import Select from "@/components/Select";
import DarkSlider from "@/components/Sliders/DarkSlider";
import Share from "@/components/Share";
import ButtonMap from "@/components/Buttons/ButtonMap";
import GoogleMapReact from "google-map-react";
import { MapIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Modal";

export default function Page() {
  const [open, setOpen] = useState(false);
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };

  return (
    <>
      <div className=" py-4 px-0 lg:pr-4 pr-0 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 place-content-center">
          <div className="col-span-1 lg:col-span-2">
            <div>
              <DarkSlider />
            </div>
          </div>
          <div className="col-span-1 rounded-md pt-4 lg:pt-12 px-4">
            <div className="pb-2 animate-delay-[.6s] animate-fade animate-once">
              <div className="pt-1">
                <div
                  className="text-white border border border-[#006241] rounded-full py-2 hover:bg-opacity-90 cursor-pointer text-center hover:bg-blue-700 hover:text-white"
                  onClick={() => setOpen(true)}
                >
                  <div className="flex justify-center items-center">
                    <MapPinIcon className="h-6 pr-1" />
                    <div className="text-sm">Find Near Me</div>
                  </div>
                </div>
              </div>
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-full">
                  <img
                    className="hidden lg:block"
                    src="/./img/locator-desk.jpg"
                  />
                  <img
                    className="block lg:hidden"
                    src="/./img/mobile-locator.jpg"
                  />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
