import { motion } from "framer-motion";

const fadeDownInitial = {
  opacity: 0,
  y: 100,
};
const fadeDownAnimate = {
  opacity: 1,
  y: 0,
};
const fadeDownTransition = {
  duration: 1,
  ease: "easeOut",
  delay: 0.2,
};
export const FadeDown = () => {
  return (
    <>
      <motion.div
        className="w-20 h-20 bg-stone-100 rounded-lg mr-4"
        initial={fadeDownInitial}
        animate={fadeDownAnimate}
        transition={fadeDownTransition}
      ></motion.div>
    </>
  );
};
