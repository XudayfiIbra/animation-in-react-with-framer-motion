import { motion } from "framer-motion";

const Transition = (Ogcomponent) => {
  return () => (
    <>
      <Ogcomponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-gray-900 transform origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-gray-900 transform origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
