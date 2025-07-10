import React, { useState, useEffect, useRef } from "react";

// Individual Pill Component
const Pill = ({ text, position, isAnimating, isGradientText }) => {
  // Determine styling based on position and animation state
  const getTextClass = () => {
    if (isGradientText) return "gradient-text";
    return position === "center" ? "white-pill-text" : "blue-pill-text";
  };

  // Handle border styling
  const getBorderStyle = () => {
    const isActive = position === "center" || (position === "bottom" && isAnimating);
    
    return isActive 
      ? {
          background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 25%, #F59E0B 50%, #EF4444 75%, #FF6B35 100%)",
          backgroundSize: "200% 200%",
        }
      : {
          background: "transparent",
          border: "2px solid transparent",
        };
  };

  // Calculate opacity based on position and animation
  const getOpacity = () => {
    if (position === "center") return 1;
    if (position === "top") return isAnimating ? 0 : 0.3;
    if (position === "bottom") return isAnimating ? 1 : 0.3;
    return 0; // Hidden for any other position
  };
  
  return (
    <div
      className="absolute hardware-accelerated"
      style={{
        left: "0",
        top: position === "top" ? "-109px" : position === "center" ? "0" : "109px",
        opacity: getOpacity(),
        transition: "none !important",
        whiteSpace: "nowrap",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div
        style={{
          padding: "2px",
          borderRadius: "9999px",
          display: "inline-block",
          ...getBorderStyle()
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
            className={getTextClass()}
            style={{
              fontSize: "4.5rem",
              fontWeight: "600",
              lineHeight: "1",
              textAlign: "left",
              transition: "none !important",
            }}
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Rotating Pill Component
const RotatingPill = ({ words = [], initialIndex = 0, interval = 3000 }) => {
  // State
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Refs for animation control
  const animationTimerRef = useRef(null);
  const resetTimerRef = useRef(null);
  const intervalRef = useRef(null);
  const isResetting = useRef(false);
  
  // Calculate adjacent indices
  const prevIndex = (currentIndex - 1 + words.length) % words.length;
  const nextIndex = (currentIndex + 1) % words.length;
  
  // Helper to check if text needs gradient styling
  const isGradientText = (word) => word === "products in carts";

  // CSS for text styling
  useEffect(() => {
    const styleEl = document.createElement("style");
    const styles = `
      /* Pill text classes */
      .blue-pill-text {
        color: #4363F9 !important;
        -webkit-text-fill-color: #4363F9 !important;
        transition: none !important;
      }
      
      .white-pill-text {
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        transition: none !important;
      }
      
      /* Special gradient case */
      .gradient-text {
        background: linear-gradient(90deg, #fb923c 0%, #f97316 50%, #ef4444 100%) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        color: transparent !important;
        -webkit-text-fill-color: transparent !important;
        transition: none !important;
      }
      
      /* Hardware acceleration */
      .hardware-accelerated {
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        will-change: transform;
      }
    `;
    
    styleEl.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  
  // Clean up timers
  const clearAllTimers = () => {
    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  // Rotate to next word
  const rotateWords = () => {
    if (isAnimating || isResetting.current) return;
    
    clearAllTimers();
    isResetting.current = true;
    setIsAnimating(true);
    
    // After animation completes
    animationTimerRef.current = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
      
      // Reset animation state
      resetTimerRef.current = setTimeout(() => {
        setIsAnimating(false);
        isResetting.current = false;
      }, 50);
    }, 800); // Animation duration
  };
  
  // Auto-rotation effect
  useEffect(() => {
    if (!isAnimating && !isResetting.current) {
      intervalRef.current = setInterval(rotateWords, interval);
    }
    
    return clearAllTimers;
  }, [isAnimating, interval]);
  
  return (
    <div className="relative h-[285px] flex items-center overflow-visible">
      <div className="relative h-[85px]">
        <div
          className="hardware-accelerated"
          style={{
            transform: isAnimating ? "translateY(-109px)" : "translateY(0)",
            transition: isAnimating ? "transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            position: "relative",
            willChange: "transform",
          }}
        >
          {/* Top pill */}
          <Pill 
            text={words[prevIndex]}
            position="top"
            isAnimating={isAnimating}
            isGradientText={isGradientText(words[prevIndex])}
          />
          
          {/* Center pill */}
          <Pill 
            text={words[currentIndex]}
            position="center"
            isAnimating={isAnimating}
            isGradientText={isGradientText(words[currentIndex])}
          />
          
          {/* Bottom pill */}
          <Pill 
            text={words[nextIndex]}
            position="bottom"
            isAnimating={isAnimating}
            isGradientText={isGradientText(words[nextIndex])}
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingPill;
