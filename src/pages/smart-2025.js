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
        <style>{`body { background-color: #f5f5f7; }`}</style>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto">
          {/* Feature Slider Component */}
          <div className="mb-12">
            <FeatureSlider />
          </div>
        </div>
      </div>
    </>
  );
}
