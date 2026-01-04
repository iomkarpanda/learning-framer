import { motion,useTransform,useScroll } from "motion/react";

import {useRef} from "react";

function Scroll(){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","end start"]
    })

    const opacity = useTransform(scrollYProgress,[0,1],[0.8,1])
    const translateX = useTransform(scrollYProgress,[0.5,1],[400,800])
    return(
        <>
            <div className="w-full h-150 bg-amber-700"></div>
            <motion.div className="w-full h-150 bg-red-500"
            ref={ref}
            style={{
                opacity,
                translateX}}></motion.div>
            <div className="w-full h-150 bg-green-800"></div>
        </>
    )
}


export default Scroll;