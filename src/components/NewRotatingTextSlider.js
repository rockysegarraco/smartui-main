import React, { useState, useEffect, useRef } from "react";

const rotatingTexts = [
  "intelligence",
  "efficiency",
  "data",
  "products in carts",
  "volume",
  "insights",
  "you",
  "everything",
];
const DISPLAY_DURATION = 2000; // ms
const ANIMATION_DURATION = 500; // keep wheel speed
const FADE_DURATION = 200; // new, for fade in/out speed
const PILL_HEIGHT = 100; // px

const NewRotatingTextSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reset, setReset] = useState(false);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    setFade(true); // Fade in on new main pill
    timeoutRef.current = setTimeout(() => {
      setFade(false); // Start fade out before animating
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          setReset(true);
          setIndex((prev) => (prev + 1) % rotatingTexts.length);
          setTimeout(() => setReset(false), 20);
        }, ANIMATION_DURATION);
      }, FADE_DURATION); // <-- use FADE_DURATION here
    }, DISPLAY_DURATION);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const prevIdx = (index - 1 + rotatingTexts.length) % rotatingTexts.length;
  const nextIdx = (index + 1) % rotatingTexts.length;
  const nextNextIdx = (index + 2) % rotatingTexts.length;

  return (
    <div className="bg-[#1C2358] min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* "More" text */}
          <div className="md:mr-6 mb-10 md:mb-0">
            <h2 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text leading-none">
              More
            </h2>
          </div>
          {/* Wheel Pills */}
          <div className="relative h-[300px] w-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${isAnimating ? -PILL_HEIGHT : 0}px)`,
                transition: reset
                  ? "none"
                  : `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
                height: `${PILL_HEIGHT * 4}px`,
              }}
            >
              {/* Previous pill */}
              <div className="flex items-center h-[100px] px-10 text-6xl font-bold opacity-20 rounded-[500px] bg-[#1C2358] text-white">
                {rotatingTexts[prevIdx]}
              </div>
              {/* Main pill */}
              <div
                className="flex items-center h-[100px] px-10 text-6xl font-extrabold border-4 border-gradient-to-r from-indigo-600 via-purple-600 via-yellow-400 via-red-400 to-orange-500 rounded-[500px] bg-[#1C2358] text-white transition-opacity duration-700 ease-out"
                style={{ opacity: fade ? 1 : 0.2 }}
              >
                {rotatingTexts[index]}
              </div>
              {/* Next pill */}
              <div className="flex items-center h-[100px] px-10 text-6xl font-bold opacity-20 rounded-[500px] bg-[#1C2358] text-white">
                {rotatingTexts[nextIdx]}
              </div>
              {/* Next-next pill */}
              <div className="flex items-center h-[100px] px-10 text-6xl font-bold opacity-20 rounded-[500px] bg-[#1C2358] text-white">
                {rotatingTexts[nextNextIdx]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRotatingTextSlider;
