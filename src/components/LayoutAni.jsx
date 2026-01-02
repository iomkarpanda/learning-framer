import {motion} from "motion/react";
import { useState } from "react";


function LayoutAni(){
    const [open, setOpen] = useState(false);

    return(
        <motion.div layout className="bg-red-500 p-4">
            <button onClick={() => setOpen(!open)}>Toggle</button>
            {open && <p>Extra content that changes height</p>}
        </motion.div>
    )
}


export default LayoutAni;