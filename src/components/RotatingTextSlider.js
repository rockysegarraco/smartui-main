import React, { useState, useEffect, useRef } from "react";

const RotatingTextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // TEXT CONTENT
  const numbers = [
    "intelligence",
    "efficiency",
    "data",
    "products in carts",
    "volume",
    "insights",
    "you",
    "everything",
  ];

  const animationRef = useRef(null);

  // Calculate adjacent numbers
  const prevIndex = (currentIndex - 1 + numbers.length) % numbers.length;
  const nextIndex = (currentIndex + 1) % numbers.length;

  // Simple CSS for animations
  useEffect(() => {
    const styleEl = document.createElement("style");
    const keyframes = `
      .wheel-container {
        transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .wheel-container.animating {
        transform: translateY(-109px);
      }
      .pill {
        transition: opacity 0.6s ease;
      }
      .pill.fade-out {
        opacity: 0;
      }
      .pill.fade-in {
        opacity: 1;
      }
      .pill.visible {
        opacity: 0.3;
      }
    `;
    styleEl.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Static styles
  const gradientBorder = {
    background:
      "linear-gradient(90deg, #4F46E5 0%, #7C3AED 25%, #F59E0B 50%, #EF4444 75%, #FF6B35 100%)",
    backgroundSize: "200% 200%",
  };

  const solidBorder = {
    background: "transparent",
    border: "2px solid transparent",
  };

  // Get pill style based on animation phase
  const getPillStyle = (phase, isActive) => {
    return isActive ? gradientBorder : solidBorder;
  };

  // Simplified rotation function
  const rotateNumbers = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // After animation duration, update index and reset
    animationRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % numbers.length);
      setIsAnimating(false);
    }, 800);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      rotateNumbers();
    }, 3000);

    return () => {
      clearInterval(interval);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <div className="bg-[#1C2358] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* "More" text */}
          <div className="md:mr-6 mb-10 md:mb-0">
            <h2 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text leading-none">
              More
            </h2>
          </div>

          {/* Number wheel container */}
          <div className="relative h-[285px] flex items-center overflow-visible">
            <div className="relative h-[85px]">
              <div
                id="pills-container"
                className={`wheel-container ${isAnimating ? "animating" : ""}`}
                style={{
                  position: "relative",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
              >
                {/* Top pill */}
                <div
                  className={`pill absolute ${
                    isAnimating ? "fade-out" : "visible"
                  }`}
                  style={{
                    left: "0",
                    top: "-109px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      padding: "2px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      ...solidBorder,
                    }}
                  >
                    <div
                      style={{
                        height: "95px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        borderRadius: "9999px",
                        background: "#1C2358",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "4.5rem",
                          fontWeight: "600",
                          lineHeight: "1",
                          textAlign: "left",
                          color: "#4363F9",
                        }}
                      >
                        {numbers[prevIndex]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center pill */}
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    opacity: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      padding: "2px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      ...getPillStyle(isAnimating, !isAnimating),
                    }}
                  >
                    <div
                      style={{
                        height: "95px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        borderRadius: "9999px",
                        background: "#1C2358",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "4.5rem",
                          fontWeight: "600",
                          lineHeight: "1",
                          textAlign: "left",
                          color: "#FFFFFF",
                        }}
                      >
                        {numbers[currentIndex]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom pill */}
                <div
                  className={`pill absolute ${
                    isAnimating ? "fade-in" : "visible"
                  }`}
                  style={{
                    left: "0",
                    top: "109px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      padding: "2px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      ...getPillStyle(isAnimating, isAnimating),
                    }}
                  >
                    <div
                      style={{
                        height: "95px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        borderRadius: "9999px",
                        background: "#1C2358",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "4.5rem",
                          fontWeight: "600",
                          lineHeight: "1",
                          textAlign: "left",
                          color: isAnimating ? "#FFFFFF" : "#4363F9",
                        }}
                      >
                        {numbers[nextIndex]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom-most pill */}
                <div
                  className="pill absolute"
                  style={{
                    left: "0",
                    top: "218px",
                    opacity: isAnimating ? 0.3 : 0,
                    transition: "opacity 0.4s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      padding: "2px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      ...solidBorder,
                    }}
                  >
                    <div
                      style={{
                        height: "95px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        borderRadius: "9999px",
                        background: "#1C2358",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "4.5rem",
                          fontWeight: "600",
                          lineHeight: "1",
                          textAlign: "left",
                          color: "#4363F9",
                        }}
                      >
                        {numbers[(nextIndex + 1) % numbers.length]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingTextSlider;
