import React from "react";

const ColorSelector = ({
  colors,
  onColorSelect,
  selectedColor,
  title = "Color",
  showSelectedName = true,
  showColorNames = false, // Keeping this for future use
}) => {
  console.log("ColorSelector props:", {
    colors,
    selectedColor,
    title,
    showSelectedName,
  });

  const handleColorSelect = (colorCode) => {
    if (onColorSelect) {
      onColorSelect(colorCode);
    }
  };

  // Find the currently selected color object
  const selectedColorObj = colors?.find(
    (color) => color.code === selectedColor
  );

  return (
    <div className="mb-6">
      {title && (
        <div className="flex items-baseline mb-3">
          <h2 className="text-lg font-medium mr-3">{title}</h2>
          {showSelectedName && selectedColorObj && (
            <span className="text-gray-900">{selectedColorObj.name}</span>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        {colors &&
          colors.map((color) => (
            <div key={color.code} className="flex flex-col items-center">
              <button
                className={`w-8 h-8 transition-all border border-gray-300 ${
                  selectedColor === color.code
                    ? "ring-2 ring-offset-2 ring-black scale-105"
                    : "hover:scale-105"
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => handleColorSelect(color.code)}
                aria-label={`Select ${color.name}`}
                title={color.name}
              />
              {/* Only show names under each swatch if showColorNames is true */}
              {showColorNames && (
                <span className="text-xs mt-1 text-gray-600">{color.name}</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

// Export the ColorSelector component directly
export default ColorSelector;
