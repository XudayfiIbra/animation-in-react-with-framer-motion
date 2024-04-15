import { motion } from "framer-motion";
import { FadeDown } from "./supAnimations/fadeDown";
import { FadeUp } from "./supAnimations/fadeUp";
import { KeyFrame } from "./supAnimations/keyFrame";
import { Button } from "./supAnimations/button";
import { Scroll } from "./supAnimations/scroll";

const gridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const gridSquareVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
// fade down

// fade up


const SimpleAnimations = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden gap-10">
        <motion.section
          variants={gridVariant}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-10 p-10"
        >
          <motion.div
            variants={gridSquareVariant}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center"
          >
            <FadeDown />
            <FadeUp />
          </motion.div>
          <motion.div
            variants={gridSquareVariant}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center"
          >
            <KeyFrame />
          </motion.div>
          <motion.div
            variants={gridSquareVariant}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center"
          >
            <Scroll />
          </motion.div>
          <motion.div
            variants={gridSquareVariant}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center"
          >
            <Button />
          </motion.div>
          <motion.div
            variants={gridSquareVariant}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center"
          ></motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default SimpleAnimations;
