/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Pills from "@/components/Buttons/Pills";
import ButtonMap from "@/components/Buttons/ButtonMap";
import Share from "@/components/Share";
import LoadingScreen from "@/components/LoadingScreen";

export default function Page() {
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
      <LoadingScreen />
    </>
  );
}
