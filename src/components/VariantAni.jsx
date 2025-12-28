import {motion} from "motion/react"
import "../App.css"
function VariantAni(){

    const ChildVariant = {
        start:{opacity:1},
        end: {opacity:0.3},
    }


    return(
        <motion.div className="parent w-full h-175 flex flex-col justify-center items-center gap-2 bg-sky-400">
            <motion.div className="box" variants={ChildVariant}> div1 </motion.div>
            <motion.div className="box" variants={ChildVariant}> div2 </motion.div>
            <motion.div className="box" variants={ChildVariant}> div3 </motion.div>
            <motion.div className="box" variants={ChildVariant}> div4 </motion.div>
            <motion.div className="box" variants={ChildVariant}> div5 </motion.div>
            <motion.div className="box" variants={ChildVariant}> div6 </motion.div>
        </motion.div>
    )
}

export default VariantAni;