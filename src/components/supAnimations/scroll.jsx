import {motion, useScroll} from 'framer-motion'



export const Scroll = () => {
    const {scrollYProgress: completionProgress} = useScroll()
  return (

    <>
    <motion.div className='w-40 aspect-square rounded-xl bg-gray-50/20'>
        <motion.div className='w-full bg-gray-400 rounded-xl h-full origin-bottom' style={{
            scaleY: completionProgress
        }}>

        </motion.div>
    </motion.div>
    </>
  )
}
