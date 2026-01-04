import {motion} from "motion/react"

function ViewAni(){
    return(
        <>
            <motion.div
            initial={{ opacity: 1, backgroundColor: "red", scaleX: 1 }}
            whileInView={{
                opacity: 0,
                backgroundColor: "green",
                scaleX: 0.1,
                transition: { duration: 5, }
            }}
            viewport={{amount:0.5}}
            style={{ width: "1000px", height: "40px", transformOrigin: "left" }}
            />
        </>
    )
}


export default ViewAni