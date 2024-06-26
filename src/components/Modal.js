import { XMarkIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center lg:items-center transition-colors pt-8 lg:p-16 z-50
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white shadow p-0 transition-all z-50
          ${
            open
              ? "scale-100 opacity-100 lg:animate-fade animate-fade-up animate-once"
              : "scale-100 opacity-0 "
          }
        `}
      >
        <div className="border-b p-4 uppercase">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="font-bold">Find Your Product</div>
              <div className="px-4 text-slate-300">|</div>
              <div>
                <MapPinIcon className="h-6 pr-1" />
              </div>
              <div>32725</div>
            </div>
            <div>
              <XCircleIcon className="h-[20px] pl-8 text-slate-600" />
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 py-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
