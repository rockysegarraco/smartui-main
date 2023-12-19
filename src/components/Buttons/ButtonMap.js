import { MapPinIcon } from "@heroicons/react/24/solid";

export default function ButtonMap() {
  return (
    <div>
      <div className="pt-1">
        <div className="rounded-full p-1.5 hover:bg-opacity-90 cursor-pointer text-center bg-blue-50 hover:bg-blue-100">
          <div className="flex justify-center items-center">
            <MapPinIcon className="h-8 pr-1 animate-bounce text-blue-700" />
            <div className="font-medium text-sm text-blue-700">
              Find Nearby{" "}
              <span className="underline underline-offset-2">32724</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
