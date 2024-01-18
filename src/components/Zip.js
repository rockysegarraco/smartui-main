import { MapPinIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";

export default function Button(props) {
  return (
    <div>
      <div className="flex flex-row justify-between px-4 py-4 gap-y-3 mt-1 border-b border-[#787878]/30">
        <div className="flex text-blue-500 hover:text-blue-700 cursor-pointer item-center  hover:underline underline-offset-4">
          <div className="flex flex-row items-center">
            <div>
              <MapPinIcon className="h-6 pr-1" />
            </div>
            <div className="">32725</div>
          </div>
        </div>
        <div>
          <div className="flex text-blue-500 hover:text-blue-700 cursor-pointer hover:underline underline-offset-4">
            <div>
              <MapIcon className="h-6 pr-1" />
            </div>
            <div className="">Find Near Me</div>
          </div>
        </div>
      </div>
    </div>
  );
}
