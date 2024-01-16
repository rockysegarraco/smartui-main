import { XMarkIcon } from "@heroicons/react/24/solid";
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
        className={`bg-white shadow p-0 transition-all
          ${
            open
              ? "scale-100 opacity-100 animate-fade-up animate-once"
              : "scale-100 opacity-0 "
          }
        `}
      >
        <div className="border-b p-4 uppercase font-bold">
          Find Your Product
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
