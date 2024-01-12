import { MapIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function ButtonMap() {
  return (
    <div>
      <div className="pt-1">
        <div className="text-blue-700 border border-blue-700 rounded-full py-1 hover:bg-opacity-90 cursor-pointer text-center bg-[#E9E9EE] hover:bg-blue-700 hover:text-white">
          <div className="flex justify-center items-center">
            <MapPinIcon className="h-6 pr-1" />

            <div className="text-sm">Find Near Me</div>
          </div>
        </div>
      </div>
    </div>
  );
}
