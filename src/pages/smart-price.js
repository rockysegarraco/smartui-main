import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/Button";

const PriceFinderAgent = () => {
  const [product, setProduct] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.example.com/search?query=${product}`
      );
      const data = await response.json();

      // Ensure data is an array
      const dataArray = Array.isArray(data) ? data : [data];

      // Fetch additional data from Amazon, Walmart, and eBay APIs
      const amazonResponse = await fetch(
        `https://api.amazon.com/search?query=${product}`
      );
      const amazonData = await amazonResponse.json();

      const walmartResponse = await fetch(
        `https://api.walmart.com/search?query=${product}`
      );
      const walmartData = await walmartResponse.json();

      const ebayResponse = await fetch(
        `https://api.ebay.com/search?query=${product}`
      );
      const ebayData = await ebayResponse.json();

      // Ensure all data is in array format
      const amazonArray = Array.isArray(amazonData) ? amazonData : [amazonData];
      const walmartArray = Array.isArray(walmartData)
        ? walmartData
        : [walmartData];
      const ebayArray = Array.isArray(ebayData) ? ebayData : [ebayData];

      // Combine results and find the cheapest option
      const allResults = [
        ...dataArray,
        ...amazonArray,
        ...walmartArray,
        ...ebayArray,
      ];
      const cheapest = allResults.reduce(
        (prev, curr) => (prev.price < curr.price ? prev : curr),
        allResults[0]
      );

      setResult(cheapest);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Find the Cheapest Price</h1>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter product name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border p-2 flex-1"
        />
        <Button
          onClick={searchProduct}
          disabled={loading}
          className="bg-blue-500 text-white p-2"
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{result.title}</h2>
          <p>Price: {result.price}</p>
          <p>Retailer: {result.retailer}</p>
          <p>
            Availability: {result.availability ? "In Stock" : "Out of Stock"}
          </p>
          <a
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Product
          </a>
        </div>
      )}
    </div>
  );
};

export default PriceFinderAgent;

// Future Enhancements:
// 1. Implement push notifications for price drops using Firebase Cloud Messaging (FCM).
// 2. Add user authentication to save search history and set price alerts.
// 3. Implement a background service to periodically check for price updates.
