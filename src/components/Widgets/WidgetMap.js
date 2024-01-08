import Select from "@/components/Select";
import DarkSlider from "@/components/Sliders/DarkSlider";
import Share from "@/components/Share";
import ButtonMap from "@/components/Buttons/ButtonMap";
import GoogleMapReact from "google-map-react";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };

  return (
    <>
      <div className=" py-4 px-0 lg:pr-4 pr-0 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 place-content-center">
          <div className="col-span-1 lg:col-span-2">
            <div>
              <DarkSlider />
            </div>
          </div>
          <div className="col-span-1 rounded-md pt-4 lg:pt-0 px-4">
            <div className="pb-2 animate-delay-[.6s] animate-fade animate-once">
              <ButtonMap />
            </div>
            <div className="flex items-center border-t bg-[#E9E9EE] rounded-full">
              <div className="basis-1/2 text-center text-[#E60023] border-r border-[#787878]/30 px-4 py-2">
                <img className="mx-auto h-10" src="img/Group 6.svg" />
              </div>
              <div className="basis-1/2 text-center text-[#E60023] px-4 py-2">
                <img className="mx-auto h-10" src="img/Group 7.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
