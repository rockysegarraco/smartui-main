import { MapIcon } from "@heroicons/react/24/solid";

export default function ButtonMap() {
  return (
    <div>
      <div className="pt-1">
        <div className="rounded-full p-1.5 hover:bg-opacity-90 cursor-pointer text-center bg-[#006241] cursor-pointer">
          <div className="flex justify-center items-center">
            <MapIcon className="h-8 pr-1 text-white" />
            <div className="font-medium text-sm text-white uppercase">
              Find Nearby
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
