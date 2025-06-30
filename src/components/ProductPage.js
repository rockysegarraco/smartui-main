// ProductPage.js
import React from "react";
import ImageSlider from "../components/ImageSlider";

const ProductPage = () => {
  // Sample images - replace with your actual product images
  const productImages = [
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
    "/img/16-9.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product image slider */}
        <div className="lg:w-1/2">
          <ImageSlider images={productImages} />
        </div>

        {/* Product details */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900">
            e.l.f. Power Grip Primer
          </h1>
          <p className="mt-2 text-gray-600">
            A gel-based primer that grips makeup for all-day wear
          </p>

          {/* Price */}
          <div className="mt-4">
            <span className="text-xl font-semibold">$10.00</span>
          </div>

          {/* Add to cart button */}
          <button className="mt-6 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors w-full lg:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
