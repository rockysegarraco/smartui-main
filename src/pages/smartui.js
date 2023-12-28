import Select from "@/components/Select";
import Slider from "@/components/Slider";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2">
          <div className="col-span-1">
            <Select />
            <Slider />
            <Share />
          </div>
          <div className="col-span-1">
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
    </>
  );
}
