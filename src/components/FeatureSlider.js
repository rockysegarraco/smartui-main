import React, { useState } from "react";

const FeatureSlider = () => {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const content = {
    features: [
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
        name: "Centralized Product Information",
        description:
          "Skip complex PIM integrations and endless spreadsheets. We manage your product data for you, keeping everything current and synchronized so your ads just work.",
      },
    ],
  };

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative mx-auto max-w-2xl py-24 z-10 h-full flex flex-col justify-center">
        {/* Feature List - Accordion Style */}
        <div className="space-y-1">
          {content.features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Conditional Gradient Border - only show when expanded */}
              {expandedFeature === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-400 rounded-2xl p-[4px] transition-all duration-500 ease-out">
                  <div className="w-full h-full bg-gray-800 rounded-xl"></div>
                </div>
              )}

              {/* Accordion Content */}
              <div
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out ${
                  expandedFeature === index ? "bg-gray-700/30 px-16 py-12" : ""
                }`}
              >
                <button
                  onClick={() => toggleFeature(index)}
                  className={`w-full flex items-center text-white/80 transition-all duration-500 ease-out text-left ${
                    expandedFeature === index ? "px-0 pt-0" : "p-4"
                  }`}
                >
                  {/* Bullet - only show when NOT expanded */}
                  <div
                    className={`mr-2 flex-shrink-0 transition-all duration-500 ease-out ${
                      expandedFeature === index
                        ? "w-0 opacity-0 scale-0"
                        : "w-3 opacity-100 scale-100"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-orange-400 transition-all duration-500 ease-out"></div>
                  </div>

                  {/* Title - bigger when expanded */}
                  <span
                    className={`font-medium flex-grow transition-all duration-500 ease-out ${
                      expandedFeature === index
                        ? "text-xl lg:text-5xl text-white transform scale-100"
                        : "text-xl lg:text-4xl transform scale-100"
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
                      expandedFeature === index ? "px-2 pt-4 pb-2" : "px-0 pb-0"
                    }`}
                  >
                    <p className="text-white/70 text-lg leading-relaxed transition-all duration-500 ease-out">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Container Border - keeping this */}
      <div className="absolute inset-0 opacity-100">
        <div className="w-full h-full bg-gray-800"></div>
      </div>
    </div>
  );
};

export default FeatureSlider;
