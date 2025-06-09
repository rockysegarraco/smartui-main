import LoadingScreen from "@/components/LoadingScreen";
import Head from "next/head";
import PriceCarousel from "@/components/CarouselLife";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

export default function CarouselPage() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("products");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCarouselSticky, setIsCarouselSticky] = useState(false);
  const [hoveredStoreIndex, setHoveredStoreIndex] = useState(null);

  // Refs for elements we want to animate
  const imageRef = useRef(null);
  const carouselRef = useRef(null);
  const storeItemRefs = useRef([]);

  // Convert storeData to useState so we can update it
  const [storeData, setStoreData] = useState([
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/target_usa_dark.svg",
      name: "TARGET.COM",
      description: "$5.97",
    },
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/walmart_usa_dark.svg",
      name: "WALMART.COM",
      description: "$4.88",
    },
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/kroger_usa_dark.svg",
      name: "KROGER",
      description: "$6.99",
    },
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/safeway_usa_dark.svg",
      name: "SAFEWAY",
      description: "$3.50",
    },
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/costco_usa_dark.svg",
      name: "COSTCO",
      description: "$14.99",
    },
    {
      logo: "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/amazon_usa_dark.svg",
      name: "AMAZON.COM",
      description: "$18.95",
    },
    {
      logo: "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/publixliquorspoweredbyinstacart_usa_dark.svg",
      name: "PUBLIX",
      description: "$7.49",
    },
    {
      logo: "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/sproutsfarmersmarketpoweredbyinstacart_usa_dark.svg",
      name: "SPROUTS",
      description: "$7.49",
    },
  ]);

  // Add a function to shuffle the store data
  const shuffleStoreData = () => {
    // Create a copy of the store data array
    const shuffled = [...storeData];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Update the state with the shuffled array
    setStoreData(shuffled);
  };

  // Add scroll event listener to track when to apply sticky positioning
  useEffect(() => {
    // Show loading screen initially
    setIsLoading(true);

    // Hide loading screen after content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Immediately run checkVisibility to show all elements
      // Add a short delay to ensure DOM is ready after isLoading state change
      setTimeout(() => {
        // Force all elements to be visible regardless of viewport position
        const forceVisible = (element, delay = 0) => {
          if (!element) return;
          setTimeout(() => {
            element.classList.add("opacity-100", "translate-y-0");
            element.classList.remove("opacity-0", "translate-y-8");
          }, delay);
        };

        // Force visibility on all elements with staggered timing
        forceVisible(imageRef.current, 0);
        forceVisible(carouselRef.current, 100);

        // Force visibility on store items with staggered delay
        storeItemRefs.current.forEach((item, index) => {
          if (item) {
            forceVisible(item, 150 + index * 75);
          }
        });
      }, 50);
    }, 2000); // 2 second loading screen

    const handleScroll = () => {
      // Check for the main tabs sticky state
      setIsScrolled(window.scrollY > 10);

      // Check if we should make carousel sticky (only on mobile)
      if (window.innerWidth <= 768) {
        // md breakpoint in Tailwind
        // Get the position of the carousel and tabs
        const tabsHeight =
          document.querySelector(".tabs-container")?.getBoundingClientRect()
            .height || 0;
        // Check if we've scrolled past the tabs + some offset
        setIsCarouselSticky(window.scrollY > 150);
      } else {
        setIsCarouselSticky(false);
      }

      // Check visibility and apply animations
      checkVisibility();
    };

    // Run once on mount to set initial state based on screen size
    // Removed the handleResize function and its event listener

    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    // Run once on mount to animate elements that are already visible
    setTimeout(() => {
      checkVisibility();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer); // Clean up the timer
    };
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
        <title>Comparison Carousel</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          .fade-up {
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
        `}</style>
      </Head>

      {/* Add the LoadingScreen component */}
      {isLoading && <LoadingScreen />}

      {/* Only render the rest when not loading */}
      {!isLoading && (
        <div className="lg:pb-0 pb-2">
          {/* Main content area - will be scrollable */}
          <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/bg-fruit.jpg')" }}
          >
            <div
              className={`flex justify-center p-4 sm:px-0 ${
                isScrolled
                  ? "sticky top-0 z-40 bg-white/40 backdrop-blur-sm py-3"
                  : ""
              } transition-all duration-300`}
            >
              <div className="bg-white inline-flex rounded-full p-1 shadow-md w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab("products")}
                  className={`${
                    activeTab === "products"
                      ? "bg-[#4363F9] text-white"
                      : "bg-white text-gray-500"
                  } rounded-full px-6 py-2 text-sm font-medium transition-all flex-1 sm:flex-initial`}
                >
                  Shop
                </button>
                <button
                  onClick={() => setActiveTab("prices")}
                  className={`${
                    activeTab === "prices"
                      ? "bg-[#4363F9] text-white"
                      : "bg-white text-gray-500"
                  } rounded-full px-6 py-2 text-sm font-medium transition-all flex-1 sm:flex-initial`}
                >
                  Explore
                </button>
              </div>
            </div>
            <div className=" min-h-screen">
              {" "}
              {/* Dark overlay for better readability */}
              <main className="p-0 sm:p-16 sm:pt-0 lg:pt-0 w-full">
                <div className="mx-auto">
                  {/* Tabs - Full width on small screens, centered on larger screens */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white/40 rounded-2xl shadow-lg">
                    {/* First Column */}
                    <div className="pl-8 pr-8 pt-8 pb-0 sm:pl-12 sm:pr-12 sm:pt-12 sm:pb-0 lg:pl-20 lg:pr-20 lg:pt-12 lg:pb-12 text-white">
                      <h2 className="order-2 lg:order-1 text-3xl lg:text-4xl font-bold mb-6 text-[#252D6C]">
                        Fruit is getting a little sparkle.
                      </h2>
                      <div className="order-1 lg:order-2 items-center relative">
                        {/* Simplified image container without collapsible functionality */}
                        <div
                          ref={imageRef}
                          className="w-full bg-transparent flex items-center justify-center fade-up opacity-0 translate-y-8 rounded-md"
                        >
                          <img
                            src="/img/1-1.jpg"
                            alt="Product"
                            className="max-w-full object-contain max-h-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Column */}
                    <div className="pl-8 pr-8 pt-8 pb-8 sm:pl-8 sm:pr-8 sm:pt-12 sm:pb-8">
                      <div
                        ref={carouselRef}
                        className={`fade-up opacity-0 translate-y-8 ${
                          isCarouselSticky
                            ? "sticky top-[60px] z-30 bg-white/40 backdrop-blur-sm pt-4 pb-4 px-8 -mx-8 shadow-sm"
                            : ""
                        } transition-all duration-300`}
                      >
                        <PriceCarousel onCardClick={shuffleStoreData} />
                      </div>

                      <div className="mx-auto max-w-lg mt-6 lg:mb-0 mb-24 grid grid-cols-1 sm:grid-cols-1 gap-2">
                        {/* Animate the text with fade-up effect */}
                        <div
                          className="text-center mb-2 fade-up opacity-0 translate-y-8"
                          ref={(el) => (storeItemRefs.current[7] = el)} // Adding to refs with index after store items
                        >
                          Choose your favorite store below
                        </div>

                        {/* Update the store item div to be clickable with hover effect */}
                        {storeData.map((store, index) => (
                          <div
                            key={index}
                            ref={(el) => (storeItemRefs.current[index] = el)}
                            className="flex gap-x-4 bg-white border border-gray-200 pl-2 pr-6 py-2 rounded-full items-center fade-up opacity-0 translate-y-8 cursor-pointer transition-all hover:border-2 hover:border-[#4363F9] hover:shadow-md"
                            onClick={() =>
                              window.open(store.url || "#", "_blank")
                            }
                            onMouseEnter={() => setHoveredStoreIndex(index)}
                            onMouseLeave={() => setHoveredStoreIndex(null)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                window.open(store.url || "#", "_blank");
                              }
                            }}
                          >
                            <div className="flex-none">
                              <img
                                src={store.logo}
                                alt={store.name}
                                className="h-16 w-16 object-contain"
                              />
                            </div>
                            <div className="flex-grow uppercase">
                              <div className="uppercase font-bold">
                                {store.name}
                              </div>
                              <div className="text-xs mt-1">
                                <span className="bg-yellow-400 p-1 uppercase text-xs sm:text-sm font-bold">
                                  {store.description}
                                </span>{" "}
                                16 FL OZ BOTTLE 6 PACK
                              </div>
                            </div>
                            <div className="flex-none">
                              <ChevronRightIcon
                                className={`h-6 w-6 transition-colors ${
                                  hoveredStoreIndex === index
                                    ? "text-[#4363F9]"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                          </div>
                        ))}
                        {/* Find Near Me Button - with animation */}
                        <button
                          className="flex items-center justify-center gap-x-2 bg-[#4363F9] text-white py-3 px-4 rounded-full w-full mb-3 hover:bg-[#3a56de] transition-colors fade-up opacity-0 translate-y-8 mt-2"
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
        </div>
      )}
    </>
  );
}
