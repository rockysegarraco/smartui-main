import React, { useState } from "react";

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Stop Wasting Media Dollars",
      subtitle: "and Eliminate Up to 27% Media Waste",
      description:
        "Optimize your media spend with advanced analytics and real-time insights that prevent budget waste.",
      image: "/images/media-waste.jpg",
      bgColor: "bg-gradient-to-br from-[#4363F9] to-[#0A0C20]",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Join the Industry Leaders",
      subtitle: "Trusted by Leading Brands. Proven Across Portfolio",
      description:
        "Connect with top-tier brands and leverage proven strategies that deliver consistent results.",
      image: "/images/industry-leaders.jpg",
      bgColor: "bg-gradient-to-br from-[#F26B21] to-[#0A0C20]",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
          />
        </svg>
      ),
      title: "Turn Lost Clicks Into",
      subtitle: "Captured Sales with SmartSubstitution™",
      description:
        "Recover lost revenue by automatically redirecting failed clicks to alternative products.",
      image: "/images/smart-substitution.jpg",
      bgColor: "bg-gradient-to-br from-[#8B5CF6] to-[#0A0C20]",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Cut Friction and Boost",
      subtitle: "Conversion with Click2Cart®",
      description:
        "Streamline the customer journey with one-click purchasing that eliminates conversion barriers.",
      image: "/images/click2cart.jpg",
      bgColor: "bg-gradient-to-br from-[#10B981] to-[#0A0C20]",
    },
  ];

  return (
    <div className="bg-[#1C2358] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1">
            <div
              className={`absolute inset-0 ${features[activeFeature].bgColor} transition-all duration-700 ease-out`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${features[activeFeature].image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 lg:p-12">
                <div className="text-white/80 mb-4 lg:mb-6">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-4">
                  Over{" "}
                  <span className="bg-white/20 px-2 lg:px-4 py-1 lg:py-2 rounded-full">
                    $8B
                  </span>{" "}
                  in
                </h3>
                <p className="text-lg lg:text-2xl text-white mb-2">
                  products carted across{" "}
                  <span className="bg-white/20 px-2 lg:px-3 py-1 rounded-full">
                    100M
                  </span>
                </p>
                <p className="text-lg lg:text-2xl text-white">
                  consumers in the last{" "}
                  <span className="bg-white/20 px-2 lg:px-3 py-1 rounded-full">
                    12 months
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Features */}
          <div className="order-2">
            {/* Desktop: Vertical Stack */}
            <div className="hidden lg:block space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`
                    group cursor-pointer p-6 rounded-xl transition-all duration-500 ease-out
                    ${
                      activeFeature === index
                        ? "bg-white/10 border-2 border-white/20 shadow-lg"
                        : "bg-white/5 border-2 border-transparent hover:bg-white/8 hover:border-white/10"
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`
                      flex-shrink-0 p-3 rounded-xl transition-all duration-300
                      ${
                        activeFeature === index
                          ? "bg-white/20 text-white scale-110"
                          : "bg-white/10 text-white/70 group-hover:bg-white/15 group-hover:text-white group-hover:scale-105"
                      }
                    `}
                    >
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3
                        className={`
                        text-xl font-semibold transition-colors duration-300
                        ${
                          activeFeature === index
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }
                      `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`
                        text-lg font-medium transition-colors duration-300
                        ${
                          activeFeature === index
                            ? "text-white/90"
                            : "text-white/60 group-hover:text-white/80"
                        }
                      `}
                      >
                        {feature.subtitle}
                      </p>
                      <p
                        className={`
                        mt-2 text-sm transition-colors duration-300
                        ${
                          activeFeature === index
                            ? "text-white/80"
                            : "text-white/50 group-hover:text-white/70"
                        }
                      `}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`
                      flex-shrink-0 transition-all duration-300
                      ${
                        activeFeature === index
                          ? "translate-x-2 opacity-100"
                          : "translate-x-0 opacity-60 group-hover:translate-x-1 group-hover:opacity-100"
                      }
                    `}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <div
                  className="flex space-x-4 pb-4"
                  style={{ width: "max-content" }}
                >
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`
                        flex-shrink-0 w-80 p-4 rounded-xl transition-all duration-500 ease-out cursor-pointer
                        ${
                          activeFeature === index
                            ? "bg-white/10 border-2 border-white/20 shadow-lg"
                            : "bg-white/5 border-2 border-transparent"
                        }
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        {/* Icon */}
                        <div
                          className={`
                          flex-shrink-0 p-2 rounded-lg transition-all duration-300
                          ${
                            activeFeature === index
                              ? "bg-white/20 text-white scale-105"
                              : "bg-white/10 text-white/70"
                          }
                        `}
                        >
                          {feature.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-grow min-w-0">
                          <h3
                            className={`
                            text-lg font-semibold transition-colors duration-300 truncate
                            ${
                              activeFeature === index
                                ? "text-white"
                                : "text-white/80"
                            }
                          `}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`
                            text-sm font-medium transition-colors duration-300 line-clamp-2
                            ${
                              activeFeature === index
                                ? "text-white/90"
                                : "text-white/60"
                            }
                          `}
                          >
                            {feature.subtitle}
                          </p>
                          <p
                            className={`
                            mt-1 text-xs transition-colors duration-300 line-clamp-2
                            ${
                              activeFeature === index
                                ? "text-white/80"
                                : "text-white/50"
                            }
                          `}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
