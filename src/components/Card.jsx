import { motion } from "motion/react";

function Card() {
  return (
    <motion.div
      key="card"
      className="w-96 h-64 bg-amber-950 text-white flex items-center justify-center mt-4 rounded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
    >
      This is a card
    </motion.div>
  );
}

export default Card;
