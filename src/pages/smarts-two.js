import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import ImageSlider from "../components/ImageSlider";
import PriceCarousel from "@/components/CarouselWire";
import ColorSelector from "@/components/ColorSelector";

export default function ProductPrimerPage() {
  // Color selection state - removed selectedBodyColor
  const [selectedColor, setSelectedColor] = useState("#BF54C1");

  // Color options
  const colorOptions = [
    { name: "Purple", code: "#BF54C1" },
    { name: "Terracotta", code: "#B45353" },
    { name: "Pink", code: "#F7A0B7" },
    { name: "Brown", code: "#A9745F" },
    { name: "Mauve", code: "#B15A73" },
    { name: "Rose", code: "#E7647E" },
    { name: "Coral", code: "#F76D5A" },
    { name: "Hot Pink", code: "#FF69B4" },
    { name: "Peach", code: "#FF9F7D" },
    { name: "Wine", code: "#A43950" },
    { name: "Salmon", code: "#FA8072" },
    { name: "Magenta", code: "#D25BA2" },
  ];

  // Removed bodyColorOptions array

  // State for interactions
  const [hoveredStoreIndex, setHoveredStoreIndex] = useState(null);
  const storeItemRefs = useRef([]);

  // Store data
  const [storeData, setStoreData] = useState([
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/target_usa_dark.svg",
      name: "TARGET.COM",
      description: "$5.97",
      url: "https://www.target.com",
    },
    {
      logo: "https://click2cart.com/img/supers/sc/us/small/walmart_usa_dark.svg",
      name: "WALMART.COM",
      description: "$4.88",
      url: "https://www.walmart.com",
    },
    {
      logo: "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/amazon_usa_dark.svg",
      name: "AMAZON.COM",
      description: "$18.95",
      url: "https://www.amazon.com",
    },
    {
      logo: "https://s3.us-west-2.amazonaws.com/retailerlogos.smartcommerce.co/img/supers/sc/us/small/publixliquorspoweredbyinstacart_usa_dark.svg",
      name: "PUBLIX",
      description: "$7.49",
      url: "https://www.publix.com",
    },
  ]);

  // Sample images for the product
  const productImages = [
    "/img/16-9.jpg",
    "/img/9-16.jpg",
    "/img/1-1.jpg",
    "/img/4-3.jpg",
  ];

  // Shuffle store data
  const shuffleStoreData = () => {
    const shuffled = [...storeData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setStoreData(shuffled);
  };

  // Animation effect
  useEffect(() => {
    const makeVisible = (element, delay) => {
      if (!element) return;
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
        element.classList.remove("opacity-0", "translate-y-8");
      }, delay);
    };

    storeItemRefs.current.forEach((item, index) => {
      if (item) {
        makeVisible(item, 100 + index * 100);
      }
    });

    const findNearMeButton = document.querySelector(".find-near-me-button");
    if (findNearMeButton) {
      makeVisible(findNearMeButton, 100 + storeData.length * 100);
    }
  }, []);

  // Debugging logs
  console.log("Color options:", colorOptions);
  console.log("Selected color:", selectedColor);

  return (
    <>
      <Head>
        <style>{`body { background-color: #f5f5f7; }`}</style>
      </Head>

      <div className="container mx-auto p-0 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* ImageSlider Comp */}
          <div className="lg:w-1/2 overflow-hidden">
            <ImageSlider images={productImages} />
          </div>

          {/* Product details */}
          <div className="lg:w-1/2 lg:px-0 px-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
              The quick brown fox jumps over the lazy dog
            </h1>

            {/* Carousel */}
            <div className="mt-6">
              <div className="">
                <PriceCarousel onCardClick={shuffleStoreData} />
              </div>
            </div>

            {/* Color selection and options */}
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 gap-y-1 pt-8 lg:pb-4 pb-8">
              {/* Color */}
              <div>
                <ColorSelector
                  colors={colorOptions}
                  selectedColor={selectedColor}
                  onColorSelect={setSelectedColor}
                  title="Color" // Change this from empty string to "Color"
                  showSelectedName={true}
                  showColorNames={false}
                />
              </div>

              {/* Removed the Body Color section */}

              {/* Size selection */}
              <div>
                <h2 className="text-lg font-medium">Size</h2>
                <div className="flex flex-wrap mt-2 gap-2">
                  <button className="border border-black px-4 py-2 rounded font-medium bg-black text-white transition-colors">
                    0.8 fl oz
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded font-medium hover:border-gray-500 transition-colors">
                    1.0 fl oz
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded font-medium hover:border-gray-500 transition-colors">
                    1.0 fl oz
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded font-medium hover:border-gray-500 transition-colors">
                    1.0 fl oz
                  </button>
                </div>
              </div>
            </div>

            {/* Store items section */}
            <div className="text-center text-gray-700 font-bold">
              Add to your favorite cart
            </div>
            <div className="mx-auto max-w-full mt-6 lg:mb-0 mb-24 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-4">
              {storeData.map((store, index) => (
                <div
                  key={index}
                  ref={(el) => (storeItemRefs.current[index] = el)}
                  className="flex gap-x-4 bg-white border-2 border-gray-200 p-2 rounded-md items-center fade-up opacity-0 translate-y-8 cursor-pointer transition-colors hover:border-[#4363F9] hover:shadow-md"
                  onClick={() => window.open(store.url || "#", "_blank")}
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
                      className="h-14 w-14 object-contain border border-gray-300 rounded-full p-1"
                    />
                  </div>
                  <div className="flex-grow uppercase">
                    <div className="uppercase font-bold">{store.name}</div>
                    <div className="text-xs mt-1">
                      <span className="bg-yellow-400 p-1 uppercase text-xs sm:text-xs font-bold">
                        {store.description}
                      </span>{" "}
                      16 FL OZ BOTTLE 6 PACK
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
