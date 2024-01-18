import { useState } from "react";
import { MapIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Modal";

export default function ButtonMap() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="pt-1">
        <div
          className="text-blue-700 border-blue-700 rounded-full py-2 hover:bg-opacity-90 cursor-pointer text-center bg-[#E9E9EE] hover:bg-blue-700 hover:text-white"
          onClick={() => setOpen(true)}
        >
          <div className="flex justify-center items-center">
            <MapIcon className="h-6 pr-1" />
            <div className="text-sm">Find Near Me</div>
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
  );
}
