import React from "react";

const LogoWheel = ({ logos, speed = "30s", direction = "left" }) => {
  return (
    <div className="relative w-full overflow-hidden py-6 group">
      {/* Gradient masks for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1C2358] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1C2358] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div className="flex items-center">
        <div
          className={`flex items-center animate-scroll-${direction} group-hover:pause`}
          style={{
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            gap: "4rem", // 64px gap between logos
            minWidth: "200%", // Ensure container is wide enough
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoWheel;
