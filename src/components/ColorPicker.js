import React, { useState } from "react";

const ColorSelector = ({ colors, onColorSelect, selectedColor, title = "Color" }) => {
  const handleColorSelect = (colorCode) => {
    if (onColorSelect) {
      onColorSelect(colorCode);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.code}
            className={`w-14 h-14 rounded-xl transition-all ${
              selectedColor === color.code
                ? "ring-2 ring-offset-2 ring-black scale-105"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: color.code }}
            onClick={() => handleColorSelect(color.code)}
            aria-label={`Select ${color.name}`}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;