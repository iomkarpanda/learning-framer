import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Card from "./Card";

function ExitAni() {
  const [isLogged, setLogged] = useState(false);

  function toggle() {
    setLogged(prev => !prev);
  }

  return (
    <>
      <button
        onClick={toggle}
        className="w-24 h-10 bg-amber-200 rounded"
      >
        Click ME
      </button>

      <AnimatePresence mode="wait">
        {isLogged && <Card />}
      </AnimatePresence>
    </>
  );
}

export default ExitAni;
