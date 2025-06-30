import React from "react";
import Head from "next/head";
import FeatureSlider from "@/components/FeatureSlider";

export default function Smart2025Page() {
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
            background-color: #f5f5f7; 
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>

      <div
        className="min-h-screen bg-gray-50"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="mx-auto">
          <div>
            {/* Feature Slider Component */}
            <FeatureSlider />
          </div>
        </div>
      </div>
    </>
  );
}
