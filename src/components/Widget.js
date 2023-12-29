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
      <div className="bg-white lg:bg-transparent p-2">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="lg:p-0 p-4 p-0">
              <Select />
            </div>
            <div className="py-4 px-0 lg:px-4">
              <Slider />
            </div>
          </div>
          {/*           <div className="col-span-1 h-24">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                libraries: ["places"],
              }}
              defaultCenter={location}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
            ></GoogleMapReact>
          </div> */}
        </div>
      </div>
      <div>
        <Share />
      </div>
    </>
  );
}
