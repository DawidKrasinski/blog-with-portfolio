import { motion } from "framer-motion";
import { useState } from "react";

interface MovingBubbleProps {
  duration?: number; // czas całej animacji w sekundach
  className?: string;
  startProgress?: number; // 0 → początek, 0.5 → połowa animacji
}

export function MovingBubble({
  duration = 20,
  className = "",
  startProgress = 0,
}: MovingBubbleProps) {
  const [startX, setStartX] = useState(startProgress);
  const [repet, setRepet] = useState(0);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ x: `${-35 + startX}vw` }}
      animate={{ x: `135vw` }}
      transition={{
        duration: duration,
        ease: "linear",
        // repeat: Infinity,
        // repeatType: "loop",
      }}
      onAnimationComplete={() => {
        setStartX(0);
        setRepet(repet + 1);
        console.log("animation ended", repet);
      }}
      key={repet}
    />
  );
}
