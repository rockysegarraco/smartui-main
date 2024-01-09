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
      <div className="flex flex-col pt-0 lg:p-8">
        <div className="mx-auto max-w-full lg:max-w-sm bg-[#f2f1ed] shadow-sm">
          {/* HERO */}
          <img
            className="w-full mb-4"
            src="/img/starbucks-300-300.jpg"
            alt="Smart"
          />
          {/* TEXT */}
          <div className="pt-0 pb-0">
            <div className="text-center px-8 text-2xl font-semibold text-[#006241] pb-4 animate-delay-[.2s] animate-fade-up animate-once">
              Never Miss a Cup.
            </div>
          </div>
          {/* BUTTONS */}
          <div className="flex flex-col pt-0 pb-6 px-4 gap-y-2">
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
