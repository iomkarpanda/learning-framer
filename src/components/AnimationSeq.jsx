import React from "react";
import { useAnimate, motion } from "motion/react";

function AnimationSeq() {
  const [scope, animate] = useAnimate();

  async function runanimation() {
    await animate(".box", { rotate: 360 }, { duration: 2 });
    await animate(".box", { x: 40 }, { duration: 2 });
    await animate(".box", { opacity: 0.3 }, { duration: 2 });
    await animate(".box", { backgroundColor: "green" }, { duration: 1 });
  }

  return (
    <div ref={scope}>
      <motion.div
        className="box size-94"
        style={{ backgroundColor: "red" }}
      />
      <button
        onClick={runanimation}
        className="w-32 h-10 bg-green-500 mt-4"
      >
        Click Me!
      </button>
    </div>
  );
}

export default AnimationSeq;
