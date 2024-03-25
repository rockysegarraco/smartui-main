/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import PillsComplex from "@/components/Buttons/PillsComplex";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Share from "@/components/Share";
import LoadingScreen from "@/components/LoadingScreen";
import Sidebar from "@/components/Sidebar";
import { MapPinIcon } from "@heroicons/react/24/solid";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Sidebar isOpen={isOpen} closeModal={closeModal} />
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <img
            className="h-12"
            src="https://www.thekrogerco.com/wp-content/uploads/2021/09/FreshCart_Kroger_Lockup_-300x112.png"
          />
        </div>
        <div className="text-slate-400">
          Valid Mar 12 - Mar 19 <br />{" "}
          <span className="text-red-600 font-bold">5 Days Left</span>
        </div>
      </div>
      <div className="relative mx-auto bg-[#0E52A1]">
        <div className="bg-[#0E52A1] py-3 px-6 sticky top-0 z-10 ">
          <div className="flex text-white items-center justify-between lg:gap-x-2 gap-x-4">
            <div className="font-medium text-sm lg:text-xl">
              Choose your favorite products to save to your basket.
            </div>
            <div
              className="flex justify-center text-white py-0 px-6 md:py-2 lg:py-3 lg:px-6 rounded-full text-center font-bold bg-white cursor-pointer lg:text-base text-xs"
              onClick={openModal}
            >
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-black text-base">
                  <span className="hidden md:block lg:block font-normal">
                    2 Items
                  </span>
                  <span className="block md:hidden lg:hidden text-base">2</span>
                </div>
                <div>
                  <img
                    className="lg:h-6 h-10 md:h-6"
                    src="https://click2cart.com/assets/img/basket.svg?20240319T050807194229"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="img/flyer_Page_01.jpg" />
        </div>
        <div class="absolute top-[15%] left-[58%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[26%] left-[61%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[31%] left-[23%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[38%] left-[46%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[38%] left-[82%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[49%] left-[23%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[50%] left-[53%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[47%] left-[85%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[63.5%] left-[28%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[62%] left-[59%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
        <div class="absolute top-[58%] left-[84%]">
          <div
            className="flex justify-center text-white px-2 py-1 lg:py-2 lg:px-6 rounded-full text-center font-bold bg-[#1975CF]/95 cursor-pointer lg:text-base text-xs"
            onClick={openModal}
          >
            + <span>Add</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
