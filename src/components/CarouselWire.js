import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const retailers = [
  {
    id: 1,
    name: "The quick brown fox jumps over the lazy dog",
    price: "Grapefruit & Mint",
    logo: "/img/1-1.jpg",
  },
  {
    id: 2,
    name: "The quick brown fox jumps over the lazy dog",
    price: "Lime & Mint",
    logo: "/img/1-1.jpg",
  },
  {
    id: 3,
    name: "The quick brown fox jumps over the lazy dog",
    price: "Sparkling Water Peach",
    logo: "/img/1-1.jpg",
  },
  {
    id: 4,
    name: "The quick brown fox jumps over the lazy dog",
    price: "Strawberry Lemonade",
    logo: "/img/1-1.jpg",
  },
  {
    id: 5,
    name: "The quick brown fox jumps over the lazy dog",
    price: "Orange Mango",
    logo: "/img/1-1.jpg",
  },
  {
    id: 6,
    name: "The quick brown fox jumps over the lazy dog",
    price: "1:1 RatioImage",
    logo: "/img/1-1.jpg",
  },
  {
    id: 7,
    name: "The quick brown fox jumps over the lazy dog",
    price: "4:3 Ratio Image",
    logo: "/img/1-1.jpg",
  },
  {
    id: 8,
    name: "The quick brown fox jumps over the lazy dog",
    price: "16:9 Ratio Image",
    logo: "/img/1-1.jpg",
  },
  {
    id: 9,
    name: "The quick brown fox jumps over the lazy dog",
    price: "9:16 Ratio Image",
    logo: "/img/1-1.jpg",
  },
  // Add more retailers as needed
];

export default function PriceCarousel({ onCardClick }) {
  const [startIndex, setStartIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);

  // Track width reference to ensure exact card widths
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Calculate card width on mount and resize
  useEffect(() => {
    const calculateCardWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.clientWidth;
        setCardWidth(trackWidth / displayCount);
      }
    };

    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, [displayCount]);

  // Responsive display count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(2);
      } else if (window.innerWidth < 900) {
        setDisplayCount(2);
      } else if (window.innerWidth < 1279) {
        setDisplayCount(2);
      } else {
        setDisplayCount(4);
      }
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    if (startIndex > 0 && !isSliding) {
      setIsSliding(true);
      setStartIndex(startIndex - 1);
      setTimeout(() => {
        setIsSliding(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (startIndex < retailers.length - displayCount && !isSliding) {
      setIsSliding(true);
      setStartIndex(startIndex + 1);
      setTimeout(() => {
        setIsSliding(false);
      }, 300);
    }
  };

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isSliding) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Handle swipe if it's significant enough
    if (isLeftSwipe && startIndex < retailers.length - displayCount) {
      handleNext();
    } else if (isRightSwipe && startIndex > 0) {
      handlePrevious();
    }
  };

  // Calculate the offset for sliding
  const translateX = -startIndex * (100 / displayCount);

  // Determine if we can navigate further
  const canGoBack = startIndex > 0;
  const canGoForward = startIndex < retailers.length - displayCount;

  // Add active card state
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="py-0 relative">
      <div className="w-full max-w-6xl mx-auto px-2 lg:px-0">
        {/* Main carousel container with buttons overlaying */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            className="overflow-hidden"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Carousel Track with horizontal sliding */}
            <div
              ref={trackRef}
              className="flex w-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {retailers.map((retailer) => (
                <div
                  key={retailer.id}
                  className="flex-shrink-0 px-1"
                  style={{ width: `${100 / displayCount}%` }}
                >
                  <div
                    className={`bg-white border-2 ${
                      activeCardId === retailer.id
                        ? "border-[#4363F9] shadow-md"
                        : "border-gray-200"
                    } rounded-lg p-1 sm:p-2 flex flex-col items-center h-full transition-colors duration-200 cursor-pointer hover:border-[#4363F9] hover:shadow-md`}
                    onClick={() => {
                      // Set this card as active
                      setActiveCardId(retailer.id);

                      console.log("Card clicked, shuffling store items");
                      if (onCardClick && typeof onCardClick === "function") {
                        onCardClick(retailer.id);
                      }

                      // You can still navigate if needed
                      if (retailer.url) {
                        window.location.href = retailer.url;
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveCardId(retailer.id);

                        if (onCardClick && typeof onCardClick === "function") {
                          onCardClick(retailer.id);
                        }
                        if (retailer.url) {
                          window.location.href = retailer.url;
                        }
                      }
                    }}
                  >
                    <div className="flex items-center justify-center mt-1 mb-2 sm:mb-2">
                      <img
                        src={retailer.logo}
                        alt={`${retailer.name} logo`}
                        className="h-16 w-16 sm:h-24 sm:w-24 object-contain"
                      />
                    </div>
                    <div
                      className={`text-xs sm:text-sm font-bold mb-2 text-center ${
                        activeCardId === retailer.id
                          ? "text-[#4363F9]"
                          : "text-gray-800"
                      }`}
                    >
                      {retailer.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Navigation Button - Only visible when we can go back */}
          {canGoBack && (
            <div className="absolute left-[-20px] top-[0px] bottom-0 flex items-center pointer-events-none">
              <button
                onClick={handlePrevious}
                className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white bg-opacity-80 shadow-lg flex items-center justify-center text-[#2b493f] hover:bg-opacity-100 transition-all"
                disabled={isSliding}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Right Navigation Button - Only visible when we can go forward */}
          {canGoForward && (
            <div className="absolute right-[-20px] top-[0px] bottom-0 flex items-center pointer-events-none">
              <button
                onClick={handleNext}
                className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white bg-opacity-80 shadow-lg flex items-center justify-center text-[#2b493f] hover:bg-opacity-100 transition-all"
                disabled={isSliding}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
