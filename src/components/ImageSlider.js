// ImageSlider.js
import React, { useState, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Handle touch events for swiping on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setShowControls(true); // Show controls on touch
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - go to next slide
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right - go to prev slide
      prevSlide();
    }

    // Hide controls after a delay
    setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div
      className="relative w-full max-w-full mx-auto"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main image container */}
      <div className="relative lg:h-[500px] h-64 overflow-hidden bg-gray-50">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={image}
              alt={`Product slide ${index + 1}`}
              className="w-full h-full object-contain p-4 lg:p-0"
            />
          </div>
        ))}

        {/* Favorite button 
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 z-10 rounded-full bg-white bg-opacity-80 p-2 hover:bg-opacity-100 transition-colors"
        >
          <HeartIcon
            className={`h-6 w-6 ${
              isFavorite ? "fill-current text-pink-500" : "text-gray-600"
            }`}
          />
        </button>*/}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next buttons - visible on hover (desktop) or after tap (mobile) */}
      <div
        className={`absolute inset-y-0 left-0 flex items-center transition-opacity duration-300 ${
          showControls || images.length <= 1
            ? "opacity-100"
            : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white/90 rounded-full p-1 ml-2 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      <div
        className={`absolute inset-y-0 right-0 flex items-center transition-opacity duration-300 ${
          showControls || images.length <= 1
            ? "opacity-100"
            : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        <button
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white/90 rounded-full p-1 mr-2 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
