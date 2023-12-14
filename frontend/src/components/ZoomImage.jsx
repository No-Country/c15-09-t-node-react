import { useState } from "react";

const ZoomImage = ({ src, alt, zoomArea }) => {
  const [isZoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setZoomed(true);
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      updatePosition(e);
    }
  };

  const updatePosition = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setPosition({ x, y });
  };

  const { x, y, width, height } = zoomArea || { x: 0, y: 0, width: 0, height: 0 };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className={`rounded-xl mt-5 w-full h-auto transition-transform transform ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
        style={{
          transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
        }}
      />
      {isZoomed && (
        <div
          className="absolute border-2 border-blue-500 rounded-xl mt-5"
          style={{
            width: `${width}%`,
            height: `${height}%`,
            top: `${y * 100}%`,
            left: `${x * 100}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
