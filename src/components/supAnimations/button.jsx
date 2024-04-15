import { motion } from "framer-motion";

const whileTapButton = {
  scale: 0.9,
};
const whileHoverButton = {
  scale: 1.1,
  backgroundColor: "#d1d5b",
  color: "black",
};

export const Button = () => {
  return (
    <>
      <motion.button
        whileTap={whileTapButton}
        whileHover={whileHoverButton}
        className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
      >
        Submit
      </motion.button>
    </>
  );
};
