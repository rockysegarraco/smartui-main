import React, { useState } from "react";

const FeatureSlider = () => {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const features = [
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
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const isExpanded = (index) => expandedFeature === index;

  return (
    <>
      {/* Google Fonts */}
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

      <div className="relative w-full overflow-hidden pt-24 pb-0 px-8 font-['Poppins',sans-serif]">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1C2358]" />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <h1 className="text-3xl lg:text-6xl text-center text-white mb-8 lg:mb-16">
            Our Data Engine Powers
          </h1>

          {/* Features Container */}
          <div className="mx-auto max-w-3xl">
            {/* Feature List */}
            <div className="space-y-1 lg:space-y-2">
              {features.map((feature, index) => (
                <FeatureAccordion
                  key={index}
                  feature={feature}
                  index={index}
                  isExpanded={isExpanded(index)}
                  onToggle={() => toggleFeature(index)}
                />
              ))}
            </div>

            {/* Bottom Image */}
            <img
              src="/new/smart-39277.png"
              alt="Smart 2025"
              className="mt-24 w-full max-w-xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Separate component for better organization
const FeatureAccordion = ({ feature, index, isExpanded, onToggle }) => {
  return (
    <div className="relative">
      {/* Gradient Border - only visible when expanded */}
      {isExpanded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#4363F9] to-[#F26B21] rounded-2xl p-[4px] transition-all duration-500 ease-out">
          <div className="w-full h-full bg-[#1C2358] rounded-xl" />
        </div>
      )}

      {/* Accordion Content */}
      <div
        className={`
          relative rounded-xl overflow-hidden transition-all duration-500 ease-out
          ${isExpanded ? "bg-transparent px-16 py-12" : ""}
        `}
      >
        {/* Accordion Button */}
        <button
          onClick={onToggle}
          className={`
            w-full flex items-center text-white/80 transition-all duration-500 ease-out text-left
            ${isExpanded ? "px-0 pt-0" : "p-4"}
          `}
        >
          {/* Icon - only visible when collapsed */}
          <AccordionIcon isExpanded={isExpanded} />

          {/* Title */}
          <span
            className={`
              font-medium flex-grow transition-all duration-500 ease-out
              ${
                isExpanded
                  ? "text-3xl lg:text-5xl text-white"
                  : "text-3xl lg:text-4xl text-white/50 hover:text-white"
              }
            `}
          >
            {feature.name}
          </span>
        </button>

        {/* Expandable Content */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-out
            ${isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className={`
              transition-all duration-500 ease-out
              ${isExpanded ? "px-2 pt-4 pb-2" : "px-0 pb-0"}
            `}
          >
            <p className="text-white text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate component for the icon
const AccordionIcon = ({ isExpanded }) => {
  return (
    <div
      className={`
        mr-3 flex-shrink-0 transition-all duration-500 ease-out
        ${isExpanded ? "w-0 opacity-0 scale-0" : "w-6 opacity-100 scale-100"}
      `}
    >
      <img
        src="new/new-ellipse.svg"
        alt="Bullet"
        className="w-8 h-8 transition-all duration-500 ease-out"
      />
    </div>
  );
};

export default FeatureSlider;
