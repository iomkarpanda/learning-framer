import {motion} from "motion/react"
import "../App.css"
function VariantAni(){

const ParentVariant = {
  start: {},
  end: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3
    }
  }
};

const ChildVariant = {
  start: {
    opacity: 0,
    y: 20
  },
  end: {
    opacity: 1,
    y: 0
  }
};

return (
<motion.div
  className="parent w-full h-175 flex flex-col justify-center items-center gap-2 bg-sky-400"
  variants={ParentVariant}
  initial="start"
  animate="end"
>
  <motion.div className="box" variants={ChildVariant}>div1</motion.div>
  <motion.div className="box" variants={ChildVariant}>div2</motion.div>
  <motion.div className="box" variants={ChildVariant}>div3</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
  <motion.div className="box" variants={ChildVariant}>div4</motion.div>
</motion.div>
);

}

export default VariantAni;