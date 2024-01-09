import React, { useState, useEffect } from "react";
import PillsComplex from "@/components/Buttons/PillsComplex";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import { MapPinIcon } from "@heroicons/react/24/solid";
import LoadingScreen from "@/components/LoadingScreen";

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
      <style>{"body { background-color: #f5f5f7; }"}</style>
      <Sidebar isOpen={isOpen} closeModal={closeModal} />
      <div className="flex flex-col justify-center items-center lg:p-8 shadow-sm">
        <div className="m-auto max-w-lg">
          <img
            src="https://s3-us-west-2.amazonaws.com/stage-smartcommerce.co/images_sc_background/4/616cd4e2-7802-4f4d-8dc4-9d3be3b4c095.jpg"
            alt=""
          />
          <div className="flex flex-col lg:p-8 p-6 gap-y-2 bg-white">
            <div className="text-center py-2 text-xl">
              Select your favorite products <span>and store below</span>
            </div>
            <PillsComplex
              title="Add to Cart"
              ImageUrl="https://click2cart.com/img/supers/sc/ca/small/instacart_ca_dark.svg"
              bg="bg-[#003E29]"
              textColor="text-white"
              openModal={openModal}
            />
            <PillsComplex
              title="Add to Cart"
              ImageUrl="https://s3.us-west-2.amazonaws.com/retailerlogos.stage-smartcommerce.co/img/supers/sc/us/small/target_usa_dark.svg"
              bg="bg-[#CC0000]"
              textColor="text-white"
              openModal={openModal}
            />
            <PillsComplex
              title="View at store"
              ImageUrl="https://click2cart.com/img/supers/sc/us/small/amazon_usa_dark.svg"
              bg="bg-[#000000]"
              textColor="text-white"
              openModal={openModal}
            />
            <PillsComplex
              title="Add to Cart"
              ImageUrl="https://s3.us-west-2.amazonaws.com/retailerlogos.stage-smartcommerce.co/img/supers/sc/us/small/publixinstacart_usa_dark.svg"
              bg="bg-[#3F8F2C]"
              textColor="text-white"
              openModal={openModal}
            />
          </div>
          <div className="flex flex-row justify-between px-8 py-4 gap-y-3 mt-1 bg-white">
            <div className="flex text-blue-500 hover:text-blue-400 cursor-pointer item-center">
              <div className="flex flex-row">
                <div>
                  <MapPinIcon className="h-6 pr-1" />
                </div>
                <div className="underline underline-offset-4 ">32725</div>
              </div>
            </div>
            <div>
              <img
                className="h-6"
                src="https://dev.click2cart.com/assets/img/c2c-logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
