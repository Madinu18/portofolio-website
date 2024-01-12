import React, { useState } from "react";
import Image from "next/image";

const ImageWithEffectZoom = ({ src, alt, width, height, gColor, border }) => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(true);

  const handleMouseOver = (e) => {
    if (isZoomEnabled) {
      const parent = e.currentTarget.parentNode;
      parent.style.boxShadow = `0 0 100px ${gColor}`;
      parent.querySelector(".zoomed-image").style.transform = "scale(1.25)";
    }
  };

  const handleMouseOut = (e) => {
    if (isZoomEnabled) {
      const parent = e.currentTarget.parentNode;
      parent.style.boxShadow = "0 0 0 transparent";
      parent.querySelector(".zoomed-image").style.transform = "scale(1)";
    }
  };

  return (
    <div
      className={`relative inline-block mx-4 overflow-hidden group ${border}`}
    >
      <div
        className={`w-full h-auto overflow-hidden group relative p-1 sm:p-5 inset-0 group-hover:bg-[#0384fc] group-hover:bg-opacity-65 transition duration-300 items-center justify-center grayscale contrast-50 hover:filter-none zoomed-image`}
        style={{
          boxShadow: "0 0 0 transparent",
          transition: "box-shadow 0.3s ease-in-out",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-[50px] sm:w-[100px]"
          style={{
            position: "relative",
            zIndex: "1",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ImageWithEffectZoom;
