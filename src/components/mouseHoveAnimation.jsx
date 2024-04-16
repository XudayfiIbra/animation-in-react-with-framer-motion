import { useState } from "react";
import { motion } from "framer-motion";

const MouseHoverAnimation = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [courseVariant, setCourseVariant] = useState("default");

  const handleClick = (event) => {
    if (courseVariant === "default") {
      setCourseVariant("text");
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    } else {
      setCourseVariant("default");
    }
  };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    },
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1
          onClick={handleClick}
          className="text-6xl font-mono"
        >
          I'am Hudayfi
        </h1>
        {courseVariant === "text" && (
          <motion.div
            variants={variants}
            animate={courseVariant}
            className="bg-black h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none"
          />
        )}
      </div>
    </>
  );
};

export default MouseHoverAnimation;
