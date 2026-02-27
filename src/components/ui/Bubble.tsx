import { motion } from "framer-motion";
import { useState } from "react";

interface MovingBubbleProps {
  baseDuration?: number; // czas całej animacji w sekundach
  className?: string;
  startProgress?: number; // 0 → początek, 0.5 → połowa animacji
}

export function MovingBubble({
  baseDuration = 46,
  className = "",
  startProgress = 0,
}: MovingBubbleProps) {
  const [startX, setStartX] = useState(startProgress * 1.35);
  const [repet, setRepet] = useState(0);

  const distance = 140 - startX;
  const [duration, setDuration] = useState((baseDuration * distance) / 100);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ x: `${startX - 35}vw` }}
      animate={{ x: `105vw` }}
      transition={{
        duration: duration,
        ease: "linear",
      }}
      onAnimationComplete={() => {
        setStartX(0);
        setRepet(repet + 1);
        setDuration(baseDuration);
        console.log(
          "animation ended startX:",
          startX,
          "BaseDuration:",
          baseDuration,
          "Duration:",
          duration
        );
      }}
      key={repet}
    />
  );
}
