import Image from "next/image";
import Link from "next/link";

const ImageWithEffect = ({
  src,
  alt,
  width,
  height,
  color,
  gColor,
  border,
  href,
}) => {
  const handleMouseOver = (e) => {
    e.currentTarget.parentNode.style.boxShadow = `0 0 100px ${gColor}`;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.parentNode.style.boxShadow = "0 0 0 transparent";
  };

  return (
    <div
      className={`relative inline-block mx-4 overflow-hidden group ${border}`}
    >
      <div
        className="w-full h-auto overflow-hidden group"
        style={{
          boxShadow: "0 0 0 transparent",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link href={href} target="_blank" passHref>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-[60px] lg:w-[70px] grayscale contrast-50 hover:filter-none transition duration-300"
            style={{
              position: "relative",
              zIndex: "1",
            }}
          />
        </Link>
      </div>
      <div
        className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-50 transition duration-300 items-center justify-center`}
      ></div>
    </div>
  );
};

export default ImageWithEffect;
