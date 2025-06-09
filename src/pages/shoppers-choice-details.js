import Head from "next/head";
import PriceCarousel from "@/components/Carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

export default function CarouselPage() {
  const [activeTab, setActiveTab] = useState("products");
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for elements we want to animate
  const imageRef = useRef(null);
  const carouselRef = useRef(null);
  const storeItemRefs = useRef([]);

  // Add scroll event listener to track when to apply sticky positioning
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check visibility and apply animations
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount to animate elements that are already visible
    setTimeout(() => {
      checkVisibility();
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if elements are visible and apply animations
  const checkVisibility = () => {
    const checkElement = (element, delay = 0) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on element's position in viewport
      // This gives us a value between 0 (not in view) to 1 (fully in view)
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const elementHeight = rect.height;
      const visibleRatio = Math.min(
        Math.max(visibleHeight / elementHeight, 0),
        1
      );

      // Only apply animations if at least partially visible
      if (visibleRatio > 0) {
        // Apply partial opacity based on visibility
        const opacity = Math.min(0.2 + visibleRatio * 0.8, 1); // Scale from 0.2 to 1.0
        const translateY = Math.max(0, 8 - visibleRatio * 8); // 8px to 0px as it becomes more visible

        // When element is significantly visible (over 60% visible)
        if (visibleRatio > 0.6) {
          setTimeout(() => {
            element.classList.add("opacity-100", "translate-y-0");
            element.classList.remove("opacity-0", "translate-y-8");
            // Remove any inline styles that might have been added
            element.style.opacity = "";
            element.style.transform = "";
          }, delay);
        } else {
          // Apply partial visibility with inline styles for smoother transition
          element.style.opacity = opacity.toString();
          element.style.transform = `translateY(${translateY}px)`;
        }
      } else {
        // Reset the element if it's not visible at all
        element.classList.remove("opacity-100", "translate-y-0");
        element.classList.add("opacity-0", "translate-y-8");
        element.style.opacity = "";
        element.style.transform = "";
      }
    };

    // Check main image
    checkElement(imageRef.current, 0);

    // Check carousel
    checkElement(carouselRef.current, 100);

    // Check each store item with staggered delay
    storeItemRefs.current.forEach((item, index) => {
      if (item) {
        checkElement(item, 150 + index * 75);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Price Comparison Carousel</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          .fade-up {
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
        `}</style>
      </Head>

      {/* Main content wrapper with padding for the fixed footer */}
      <div className="lg:pb-0 pb-2">
        {/* Main content area - will be scrollable */}
        <div className="bg-gray-600 min-h-screen">
          <main className="p-0 sm:p-16 sm:pt-0 lg:pt-0 w-full">
            <div className="mx-auto">
              {/* Tabs - Full width on small screens, centered on larger screens */}
              <div
                className={`flex justify-center p-4 sm:px-0 ${
                  isScrolled
                    ? "sticky top-0 z-40 bg-gray-600/95 backdrop-blur-sm py-3"
                    : ""
                } transition-all duration-300`}
              >
                <div className="bg-white inline-flex rounded-full p-1 shadow-md w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab("products")}
                    className={`${
                      activeTab === "products"
                        ? "bg-gray-100 text-gray-900"
                        : "bg-white text-gray-500"
                    } rounded-full px-6 py-2 text-sm font-medium transition-all flex-1 sm:flex-initial`}
                  >
                    Shop
                  </button>
                  <button
                    onClick={() => setActiveTab("prices")}
                    className={`${
                      activeTab === "prices"
                        ? "bg-gray-100 text-gray-900"
                        : "bg-white text-gray-500"
                    } rounded-full px-6 py-2 text-sm font-medium transition-all flex-1 sm:flex-initial`}
                  >
                    Explore
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white/10">
                {/* First Column */}
                <div className="pl-8 pr-8 pt-8 pb-0 sm:pl-12 sm:pr-12 sm:pt-12 sm:pb-0 lg:pl-12 lg:pr-12 lg:pt-12 lg:pb-12">
                  <div className="items-center">
                    <div
                      ref={imageRef}
                      className="w-full h-full bg-white rounded-md shadow flex items-center justify-center mr-4 fade-up opacity-0 translate-y-8"
                    >
                      <img
                        src="/img/16-9.jpg"
                        alt="Product"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-semibold mt-6">
                    The quick brown fox jumps over the lazy dog
                  </h2>
                </div>

                {/* Second Column */}
                <div className="pl-8 pr-8 pt-8 pb-8 sm:pl-8 sm:pr-8 sm:pt-12 sm:pb-8">
                  <div
                    ref={carouselRef}
                    className="fade-up opacity-0 translate-y-8"
                  >
                    <PriceCarousel />
                  </div>

                  <div className="mx-auto max-w-lg mt-6 lg:mb-0 mb-24 grid grid-cols-1 sm:grid-cols-1 gap-2">
                    {/* Animate the text with fade-up effect */}
                    <div
                      className="text-center mb-2 fade-up opacity-0 translate-y-8"
                      ref={(el) => (storeItemRefs.current[7] = el)} // Adding to refs with index after store items
                    >
                      Choose your favorite store below
                    </div>

                    {/* Find Near Me Button - with animation */}
                    <button
                      className="flex items-center justify-center gap-x-2 bg-gray-900 text-white py-3 px-4 rounded-full w-full mb-3 hover:bg-[#3a56de] transition-colors fade-up opacity-0 translate-y-8"
                      ref={(el) => (storeItemRefs.current[8] = el)} // Adding to refs with index after store items and text
                    >
                      {/* Map/Directions Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                        />
                      </svg>
                      <span className="font-medium">Find Near Me</span>
                    </button>

                    {Array(7)
                      .fill()
                      .map((_, index) => (
                        <div
                          key={index}
                          ref={(el) => (storeItemRefs.current[index] = el)}
                          className="flex gap-x-4 bg-white border border-gray-200 pl-2 pr-6 py-2 rounded-full items-center fade-up opacity-0 translate-y-8"
                        >
                          <div className="flex-none">
                            <img
                              src="/img/1-1.jpg"
                              alt="Product"
                              className="h-16 w-16 object-contain rounded-full"
                            />
                          </div>
                          <div className="flex-grow uppercase">
                            <div className="uppercase font-bold">
                              WALMART.COM
                            </div>
                            <div className="uppercase text-xs sm:text-sm">
                              12 fl oz can 8 Pack, $5.97
                            </div>
                          </div>
                          <div className="flex-none">
                            <ChevronRightIcon className="h-6 w-6" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white lg:bg-white/90 text-[#4363F9] z-50">
          <div className="px-8 lg:px-16 py-4 justify-between flex items-center">
            <div className="flex flex-row justify-between items-center">
              {/* Location - Left aligned */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="text-lg text-[#4363F9]">32724</p>
              </div>
            </div>
            <div>
              <img
                src="/img/c2c-logo-dark.svg"
                alt="Logo"
                className="lg:h-6 h-4"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
