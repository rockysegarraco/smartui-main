import React from "react";

const RotatingPill = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="text-4xl md:text-6xl lg:text-7xl text-white">More</div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="order-2 lg:order-1 p-[3px] rounded-full lg:text-start text-center">
              <div className="rounded-full px-8 py-4 bg-[#1C2358]">
                <span className="text-2xl md:text-6xl lg:text-7xl font-normal text-[#4363F9]/25">
                  Data
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2 p-[3px] rounded-full bg-gradient-to-r from-orange-400 to-red-500">
              <div className="rounded-full px-8 py-4 bg-[#1C2358] lg:text-start text-center">
                <span className="text-2xl md:text-6xl lg:text-7xl font-normal bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-center">
                  products in carts
                </span>
                <div className="absolute top-[134px] bottom-0 left-[600px] right-0 h-32 flex items-center justify-center">
                  <span className="text-6xl animate-bounce">👇</span>
                </div>
              </div>
            </div>
            <div className="order-3 lg:order-3 p-[3px] rounded-full lg:text-start text-center">
              <div className="rounded-full px-8 py-4 bg-[#1C2358]">
                <span className="text-2xl md:text-6xl lg:text-7xl font-normal text-[#4363F9]/25">
                  Volume
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingPill;
