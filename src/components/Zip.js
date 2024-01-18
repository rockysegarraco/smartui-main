import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Modal";

export default function Button(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between px-6 py-4 gap-y-3 mt-1 border-b border-[#787878]/30">
        <div className="text-blue-500 hover:text-blue-700 cursor-pointer item-center  hover:underline underline-offset-4">
          <div className="flex flex-row items-center">
            <div>
              <MapPinIcon className="h-6 pr-1" />
            </div>
            <div className="">32725</div>
          </div>
        </div>
        <div
          className="flex text-blue-500 hover:text-blue-700 cursor-pointer hover:underline underline-offset-4"
          onClick={() => setOpen(true)}
        >
          <div>
            <MapIcon className="h-6 pr-1" />
          </div>
          <div className="">Find Near Me</div>
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
