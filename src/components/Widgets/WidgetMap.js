import Select from "@/components/Select";
import Slider from "@/components/Slider";
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
      <div className="bg-white/5 py-4 px-0 lg:pr-4 pr-0 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-2 place-content-center">
          <div className="col-span-1 lg:col-span-2">
            <div>
              <Slider />
            </div>
          </div>
          <div className="col-span-1 rounded-md pt-4 lg:pt-10 px-4">
            <ButtonMap />
          </div>
        </div>
      </div>
      <Share />
    </>
  );
}
