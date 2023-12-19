"use client";

import React, { useState } from "react";

const ButtonWithIcon = () => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <button
      className={`icon-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <span className="icon">🚀</span>{" "}
      {/* Replace this with your desired icon */}
      Click me
    </button>
  );
};

export default ButtonWithIcon;
