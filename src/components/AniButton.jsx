import {motion} from "motion/react";

function AniButton(){
    return(
        <motion.div className="w-24 h-10 bg-slate-300 flex justify-center items-center rounded"
                    initial={{opacity:1}}
                    animate = {{opacity:0.2}}
                    transition={{duration:1,ease:'easeIn'}}
        >
            Hello World
        </motion.div>
    )
}


export default AniButton;