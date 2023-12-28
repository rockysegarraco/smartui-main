import Select from "@/components/Select";
import Slider from "@/components/Slider";
import Map from "@/components/Map";
import Share from "@/components/Share";

export default function Page() {
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
          <div className="col-span-1">MAP HERE</div>
        </div>
      </div>
    </>
  );
}
