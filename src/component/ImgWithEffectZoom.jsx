import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageWithEffectZoom = ({ src, alt, width, height, color, gColor, border }) => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsZoomEnabled(window.innerWidth >= 1024);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on initial component mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseOver = (e) => {
    if (isZoomEnabled) {
      const parent = e.currentTarget.parentNode;
      parent.style.boxShadow = `0 0 100px ${gColor}`;
      parent.querySelector('.zoomed-image').style.transform = 'scale(1.25)';
    }
  };

  const handleMouseOut = (e) => {
    if (isZoomEnabled) {
      const parent = e.currentTarget.parentNode;
      parent.style.boxShadow = '0 0 0 transparent';
      parent.querySelector('.zoomed-image').style.transform = 'scale(1)';
    }
  };

  return (
    <div className={`relative inline-block mx-4 overflow-hidden group ${border}`}>
      <div
        className={`w-full h-auto overflow-hidden group relative p-1 sm:p-5 inset-0 xl:group-hover:bg-[#0384fc] xl:group-hover:bg-opacity-65 transition duration-300 items-center justify-center grayscale contrast-50 xl:hover:filter-none zoomed-image`}
        style={{
          boxShadow: '0 0 0 transparent',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='w-[50px] sm:w-[100px]'
          style={{
            position: 'relative',
            zIndex: '1',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default ImageWithEffectZoom;