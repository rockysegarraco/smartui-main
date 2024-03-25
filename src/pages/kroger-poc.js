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
      <div className="relative mx-auto max-w-full bg-white shadow">
        <img
          className="mb-1 mx-auto max-w-7xl pt-1 lg:px-0 px-4 lg:block hidden"
          src="img/header-cnn.jpg"
        />
        <img
          className="mb-1 mx-auto lg:max-w-7xl max-w-full pt-1 lg:px-0 px-4 lg:hidden block"
          src="img/header-cnn-mobile.jpg"
        />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-9">
          <iframe
            allowtransparency="true"
            style={{ background: "red" }}
            src="https://demo.smartcommerce.co/smartcommerce/forms/lead.html"
            height="475"
            width="100%"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="col-span-3">
          <img src="img/side-cnn.jpg" />
        </div>
      </div>
    </>
  );
}
export default App;
