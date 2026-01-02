import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function LayoutIDAni() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AnimatePresence >
        {!open ? (
          <motion.div
            layoutId="product"
            className="w-60 h-40 bg-purple-500 rounded-xl cursor-pointer flex items-center justify-center text-white"
            onClick={() => setOpen(true)}
          >
            Product Card
          </motion.div>
        ) : (
          <motion.div
            layoutId="product"
            className="fixed inset-0 bg-purple-500 flex items-center justify-center text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            Product Details
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
