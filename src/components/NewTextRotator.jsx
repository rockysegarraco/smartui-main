import React, { useState, useEffect, useRef } from "react";

const NewTextRotator = () => {
  // State to track current word index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Text content to rotate through
  const words = [
    "intelligence",
    "efficiency",
    "data",
    "products in carts",
    "volume",
    "insights",
    "you",
    "everything",
  ];

  // Animation timing references
  const animationRef = useRef(null);
  const isFirstRender = useRef(true);

  // Previous and next indices for display
  const prevIndex = (currentIndex - 1 + words.length) % words.length;
  const nextIndex = (currentIndex + 1) % words.length;

  // Animation timing constants
  const TRANSFORM_DURATION = 800;
  const OPACITY_DURATION = 400;
  const TRANSFORM_EASING = "cubic-bezier(0.23, 1, 0.32, 1)"; // Ease out cubic
  const OPACITY_EASING = "cubic-bezier(0.4, 0, 0.2, 1)"; // Material easing

  // Styles for pills and text
  const pillStyles = {
    container: {
      position: "relative",
      height: "285px",
      display: "flex",
      alignItems: "center",
      overflow: "visible",
      perspective: "1000px", // Add perspective for 3D space
    },
    wrapper: {
      position: "relative",
      height: "85px",
      transformStyle: "preserve-3d", // Preserve 3D transformations
    },
    slider: {
      position: "relative",
      transition: isAnimating
        ? `transform ${TRANSFORM_DURATION}ms ${TRANSFORM_EASING}`
        : "none",
      transform: isAnimating ? "translateY(-109px)" : "translateY(0)",
      willChange: "transform, opacity",
      backfaceVisibility: "hidden", // Optimize rendering
      WebkitBackfaceVisibility: "hidden",
      transformStyle: "preserve-3d", // Maintain 3D space
    },
    pill: {
      padding: "2px",
      borderRadius: "9999px",
      display: "inline-block",
      whiteSpace: "nowrap",
      transition: `opacity ${OPACITY_DURATION}ms ${OPACITY_EASING}`,
      willChange: "opacity",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    },
    pillInner: {
      height: "95px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0 40px",
      borderRadius: "9999px",
      background: "#1C2358",
    },
    gradientBorder: {
      background:
        "linear-gradient(90deg, #4F46E5 0%, #7C3AED 25%, #F59E0B 50%, #EF4444 75%, #FF6B35 100%)",
      backgroundSize: "200% 200%",
      transition: `all ${OPACITY_DURATION}ms ${OPACITY_EASING}`,
    },
    text: {
      fontSize: "4.5rem",
      fontWeight: "600",
      lineHeight: "1",
      textAlign: "left",
      transition: "none", // Prevent color transitions
    },
    whiteText: {
      color: "#FFFFFF",
      transition: "none", // Ensure no color transitions
    },
    blueText: {
      color: "#4363F9",
      transition: "none", // Ensure no color transitions
    },
    gradientText: {
      background:
        "linear-gradient(90deg, #fb923c 0%, #f97316 50%, #ef4444 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      transition: "none", // Prevent gradient transitions
    },
    topPill: {
      position: "absolute",
      left: "0",
      top: "-109px",
      opacity: isAnimating ? 0 : 0.3, // Fade out when animating
    },
    centerPill: {
      position: "absolute",
      left: "0",
      top: "0",
      opacity: 1, // Always fully visible
      transform: "translateZ(1px)", // Slight 3D positioning for better layering
    },
    bottomPill: {
      position: "absolute",
      left: "0",
      top: "109px",
      opacity: isAnimating ? 1 : 0.3, // Fade in when animating
    },
  };

  // Function to rotate words
  const rotateWords = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // After animation completes
    animationRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, TRANSFORM_DURATION); // Match transition time
  };

  // Set up auto-rotation
  useEffect(() => {
    // Skip initial animation
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const interval = setInterval(rotateWords, 3000);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [currentIndex]);

  // Helper to check if text should use gradient
  const isGradientWord = (word) => word === "products in carts";

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

          {/* Rotator container */}
          <div style={pillStyles.container}>
            <div style={pillStyles.wrapper}>
              <div style={pillStyles.slider}>
                {/* Top pill (inactive) */}
                <div style={{ ...pillStyles.pill, ...pillStyles.topPill }}>
                  <div style={pillStyles.pillInner}>
                    <span
                      style={{
                        ...pillStyles.text,
                        ...pillStyles.blueText,
                        ...(isGradientWord(words[prevIndex])
                          ? pillStyles.gradientText
                          : {}),
                      }}
                    >
                      {words[prevIndex]}
                    </span>
                  </div>
                </div>

                {/* Center pill (active) */}
                <div
                  style={{
                    ...pillStyles.pill,
                    ...pillStyles.centerPill,
                    ...pillStyles.gradientBorder,
                  }}
                >
                  <div style={pillStyles.pillInner}>
                    <span
                      style={{
                        ...pillStyles.text,
                        ...pillStyles.whiteText,
                        ...(isGradientWord(words[currentIndex])
                          ? pillStyles.gradientText
                          : {}),
                      }}
                    >
                      {words[currentIndex]}
                    </span>
                  </div>
                </div>

                {/* Bottom pill (inactive) */}
                <div style={{ ...pillStyles.pill, ...pillStyles.bottomPill }}>
                  <div style={pillStyles.pillInner}>
                    <span
                      style={{
                        ...pillStyles.text,
                        ...pillStyles.blueText,
                        ...(isGradientWord(words[nextIndex])
                          ? pillStyles.gradientText
                          : {}),
                      }}
                    >
                      {words[nextIndex]}
                    </span>
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

export default NewTextRotator;
