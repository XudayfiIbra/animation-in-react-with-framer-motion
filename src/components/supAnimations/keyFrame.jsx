import { motion } from "framer-motion";

const animatedKeyframe  = {
    scale: [1, 2, 2, 1],
    rotate: [0, 90, 90, 0],
    borderRadius: ["10%", "10%", "50%", "10%"]
}

const transitionKeyframe = {
    duration: 5,
    ease: "easeInOut",
    repeat: 1,
    repeatDelay: 1
}


export const KeyFrame = () => {
    return (
      <>
      <motion.div className="w-1/3 h-1/3 shadow-md bg-rose-400" animate={animatedKeyframe} transition={transitionKeyframe}></motion.div>
      </>
    )
  }