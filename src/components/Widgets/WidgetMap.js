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
          </div>
        </div>
      </div>
    </>
  );
}
