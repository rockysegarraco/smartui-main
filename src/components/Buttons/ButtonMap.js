import { MapIcon } from "@heroicons/react/24/solid";

export default function ButtonMap() {
  return (
    <div>
      <div className="pt-1">
        <div className="rounded-full p-1.5 hover:bg-opacity-90 cursor-pointer text-center bg-[#006241] hover:bg-[#006241]/75">
          <div className="flex justify-center items-center">
            <img
              className="h-8 pr-1 animate-bounce"
              src="img/map-map-marker-svgrepo-com.svg"
            />

            <div className="font-bold text-sm text-white uppercase">
              Find Near Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
