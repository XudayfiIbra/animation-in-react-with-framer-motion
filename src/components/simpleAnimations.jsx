import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { FadeDown } from "./supAnimations/fadeDown";
import { FadeUp } from "./supAnimations/fadeUp";
import { KeyFrame } from "./supAnimations/keyFrame";
import { Button } from "./supAnimations/button";
import { Scroll } from "./supAnimations/scroll";
import { useEffect, useRef } from "react";

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

const SimpleAnimations = () => {
  // ref hook
  const container = useRef(null);
  const isInViewPort = useInView(container, { once: true });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const p1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const p2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (isInViewPort) {
      controls.start("visible");
    }
  }, [isInViewPort]);
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
        <motion.section className="flex flex-col gap-10 mb-10" ref={container}>
          <motion.h1
            className="text-5xl tracking-wide text-slate-100 text-center"
            animate={controls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ delay: 0.3 }}
          >
            Lorem ipsum dolor sit
          </motion.h1>

          <motion.p style={{translateX: p1}} className="text-slate-100 font-thin text-4xl mx-auto w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur tempore dignissimos
          </motion.p>
          <motion.p style={{translateX: p2}}  className="text-slate-100 font-thin text-4xl mx-auto w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur tempore dignissimos
          </motion.p>
        </motion.section>
      </div>
    </>
  );
};

export default SimpleAnimations;
