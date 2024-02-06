import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Modal";

export default function Button(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between px-6 py-4 gap-y-4 mt-0 border-[#787878]/30">
        <div className="text-[#4363F8] hover:text-blue-700 cursor-pointer item-center  hover:underline underline-offset-4">
          <div className="flex flex-row items-center">
            <div>
              <MapPinIcon className="h-6 pr-1" />
            </div>
            <div className="underline underline-offset-4">32725</div>
          </div>
        </div>
        <div>
          <img
            className="h-6"
            src="https://click2cart.com/assets/img/c2c-logo.svg"
            alt=""
          />
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-full z-50">
          <img className="hidden lg:block" src="/./img/locator-desk.jpg" />
          <img className="block lg:hidden" src="/./img/mobile-locator.jpg" />
        </div>
      </Modal>
    </div>
  );
}