import React,{useEffect,useRef} from 'react'
import {motion,useAnimation, useInView, useIsPresent} from 'framer-motion'
import { use } from 'framer-motion/client'


type Props = {
  children : JSX.Element,
  width?: "fit-content" | "100%",
}

const Reveal = ({children,width="100%"}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {

      mainControls.start("visible");
    } else {

      mainControls.start("hidden");
    }
  },[isInView])
  return (
    <div ref={ref} style={{position: "relative",width,overflow: "hidden"}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.5}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal