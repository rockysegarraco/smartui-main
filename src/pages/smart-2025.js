import React from "react";
import Head from "next/head";
import FeatureSlider from "@/components/FeatureSlider";
import LogoWheel from "@/components/LogoWheel";
import BuiltBusiness from "@/components/BuiltBusiness";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import NewRotatingTextSlider from "@/components/NewRotatingTextSlider.js";

export default function Smart2025Page() {
  // Define your logos array
  const logos = [
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
    { src: "/new/wheel/spindrift.svg", alt: "Spindrift" },
    { src: "/new/wheel/cottonelle.svg", alt: "Cottonelle" },
  ];

  return (
    <>
      <Head>
        <title>Smart 2025 | Features</title>
        <meta
          name="description"
          content="Discover our advanced features for 2025"
        />
        {/* Add Poppins Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body { 
            background-color: #1C2358; 
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>

      <div
        className="min-h-screen bg-[#1C2358]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="mx-auto">
          <div>
            {/* Rotating Text Slider */}
            <NewRotatingTextSlider />
            {/* First Logo Wheel - scrolls left */}
            <LogoWheel logos={logos} speed="40s" direction="left" />

            {/* Second Logo Wheel - scrolls right (opposite direction) */}
            <LogoWheel logos={logos} speed="40s" direction="right" />

            {/* Built Business Component */}
            <BuiltBusiness />

            {/* Interactive Features Component */}
            <InteractiveFeatures />

            {/* Feature Slider Component */}
            <FeatureSlider />
          </div>
        </div>
      </div>
    </>
  );
}
