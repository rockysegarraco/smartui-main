import React, { useState } from "react";

const FeatureSlider = () => {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const content = {
    features: [
      {
        name: "Centralized Product Information",
        description:
          "Skip complex PIM integrations and endless spreadsheets. We manage your product data for you, keeping everything current and synchronized so your ads just work.",
      },
      {
        name: "SmartSubstitution™",
        description:
          "Automatically replace out-of-stock products with similar alternatives to maintain campaign performance.",
      },
      {
        name: "Unified Data & Insights",
        description:
          "Consolidate all your product information from multiple sources into a single, reliable database.",
      },
      {
        name: "Unmatched Scale",
        description:
          "Effortlessly manage and scale your product data across multiple channels without the usual headaches.",
      },
    ],
  };

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <>
      {/* Font import */}
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

      <div
        className="relative w-full overflow-hidden pt-24 pb-0 px-8"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Content Container */}
        <h1 className="relative text-3xl lg:text-7xl text-center text-white z-20 lg:mb-16 mb-8">
          Our Data Engine Powers{" "}
        </h1>
        <div className="relative mx-auto max-w-3xl z-10 h-full flex flex-col justify-center items-center ">
          {/* Feature List - Accordion Style */}
          <div className="lg:space-y-2 space-y-1">
            {content.features.map((feature, index) => (
              <div key={index} className="relative">
                {/* Conditional Gradient Border - only show when expanded */}
                {expandedFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-400 rounded-2xl p-[4px] transition-all duration-500 ease-out">
                    <div className="w-full h-full bg-[#1C2358] rounded-xl"></div>
                  </div>
                )}

                {/* Accordion Content */}
                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out ${
                    expandedFeature === index
                      ? "bg-transparent px-16 py-12"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFeature(index)}
                    className={`w-full flex items-center text-white/80 transition-all duration-500 ease-out text-left ${
                      expandedFeature === index ? "px-0 pt-0" : "p-4"
                    }`}
                  >
                    {/* SVG Icon - only show when NOT expanded */}
                    <div
                      className={`mr-3 flex-shrink-0 transition-all duration-500 ease-out ${
                        expandedFeature === index
                          ? "w-0 opacity-0 scale-0"
                          : "w-6 opacity-100 scale-100"
                      }`}
                    >
                      <img
                        src="new/new-ellipse.svg"
                        alt="Bullet"
                        className="w-8 h-8 transition-all duration-500 ease-out"
                      />
                    </div>

                    {/* Title - bigger when expanded */}
                    <span
                      className={`font-medium flex-grow transition-all duration-500 ease-out ${
                        expandedFeature === index
                          ? "text-3xl lg:text-5xl text-white transform scale-100"
                          : "text-3xl lg:text-4xl text-white/50 hover:text-white transform scale-100"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedFeature === index
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`transition-all duration-500 ease-out ${
                        expandedFeature === index
                          ? "px-2 pt-4 pb-2"
                          : "px-0 pb-0"
                      }`}
                    >
                      <p className="text-white/100 text-lg leading-relaxed transition-all duration-500 ease-out">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src="/new/smart-39277.png"
            alt="Smart 2025"
            className="mt-24 w-full max-w-xl rounded-lg shadow-lg"
          />
        </div>

        {/* Main Container Border - keeping this */}
        <div className="absolute inset-0 opacity-100">
          <div className="w-full h-full bg-[#1C2358]"></div>
        </div>
      </div>
    </>
  );
};

export default FeatureSlider;
