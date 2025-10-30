import React, { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export const SplineScene = ({ scene, className }) => {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // range -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // range -1 to 1

      setTransform({
        rotateX: y * 5, // degrees
        rotateY: -x * 5,
        translateX: x * 15, // px
        translateY: y * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        filter: "brightness(3) contrast(1.1)",
        transition: "transform 0.3s ease, filter 0.3s ease",
        transform: `
          perspective(1000px)
          rotateX(${transform.rotateX}deg)
          rotateY(${transform.rotateY}deg)
          translateX(${transform.translateX}px)
          translateY(${transform.translateY}px)
          scale(1.05)
        `,
      }}
    >
      <Spline scene={scene} />
    </div>
  );
};
