import Select from "@/components/Select";
import Slider from "@/components/Sliders/DarkSlider";
import Share from "@/components/Share";
import GoogleMapReact from "google-map-react";
import ButtonMap from "@/components/Buttons/ButtonMap";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };

  return (
    <>
      <div className="p-2">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="lg:p-0 p-4 p-0">
              <Select />
            </div>
            <div className="py-4 px-0 lg:px-4">
              <Slider />
            </div>
            <div className="pb-2 animate-delay-[.6s] animate-fade animate-once">
              <ButtonMap />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-2">
        <Share />
      </div>
    </>
  );
}
