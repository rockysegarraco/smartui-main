import Select from "@/components/Select";
import Slider from "@/components/Slider";
import Map from "@/components/Map";

export default function Page() {
  return (
    <>
      {/* WRAP */}
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2">
          <div className="col-span-1 p-4">
            <Select />
            <Slider />
          </div>
          <div className="col-span-1">MAP HERE</div>
        </div>
      </div>
    </>
  );
}
