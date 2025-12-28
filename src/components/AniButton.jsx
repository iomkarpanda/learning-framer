import {motion} from "motion/react";
import '../index.css';
function AniButton(){0
    return(
        <motion.button className="w-24 h-10 flex justify-center items-center rounded cursor-pointer border border-gray-400 shadow-md transition-colors"
                    // initial={{backgroundColor:"#808080"}}
                    // animate={{backgroundColor: ["#808080", "#ff0000", "#0000ff"]}}


                    // initial={{scale:1,x:0,y:0,borderWidth:"4"}}
                    // whileHover={{scale:1.05,}}
                    // transition={{duration:0.3, ease:"linear",}}
                    // style={{borderStyle:'solid'}}


        >
            Hello World
        </motion.button>
    )
}


export default AniButton;