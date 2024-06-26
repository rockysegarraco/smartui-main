import Select from "@/components/Select";
import Slider from "@/components/Slider";
import Share from "@/components/Share";
import GoogleMapReact from "google-map-react";

export default function Page() {
  const location = {
    lat: 26.1188486,
    lng: -80.13108199999999,
  };

  return (
    <>
      {/* WRAP */}
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="p-4">
              <Select />
            </div>
            <div className="pt-2 pb-4 px-4">
              <Slider />
            </div>
            <div className="lg:block hidden">
              <Share />
            </div>
          </div>
          <div className="col-span-1 lg:h-auto h-24">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                libraries: ["places"],
              }}
              defaultCenter={location}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
            ></GoogleMapReact>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <Share />
      </div>
    </>
  );
}
