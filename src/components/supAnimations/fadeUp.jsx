import { motion } from "framer-motion";

const fadeUpInitial = {
  opacity: 0,
  y: -100,
};
const fadeUpAnimate = {
  opacity: 1,
  y: 0,
};
const fadeUpTransition = {
  duration: 1,
  ease: "easeOut",
  delay: 0.4,
};

export const FadeUp = () => {
  return (
    <>
      <motion.div
        initial={fadeUpInitial}
        animate={fadeUpAnimate}
        transition={fadeUpTransition}
        className="w-20 h-20 bg-stone-100 rounded-full"
      ></motion.div>
    </>
  );
};
