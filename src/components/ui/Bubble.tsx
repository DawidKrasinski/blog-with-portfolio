import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface MovingBubbleProps {
  animationSpeed: number; // px per second
  className?: string;
  direction?: "right" | "left"; // początkowy kierunek
  startX?: number; // procentowo, np. 50 = środek ekranu
}

export function MovingBubble({
  animationSpeed,
  className = "",
  direction = "right",
  startX = 50, // domyślnie środek ekranu
}: MovingBubbleProps) {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(0);
  const bubbleWidth = 50; // szerokość bubble, zmień jeśli potrzebujesz

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 0) return;

    const safeSpeed = Math.max(Math.abs(animationSpeed), 1);

    // startX w px
    let positionX = (startX / 100) * windowWidth;

    // jeśli direction = left, ruszamy w lewo, w przeciwnym wypadku w prawo
    let currentDirection = direction === "left" ? -1 : 1;

    const animateBubble = async () => {
      while (true) {
        // target zależny od kierunku
        const targetX =
          currentDirection === 1
            ? windowWidth - bubbleWidth // w prawo
            : 0; // w lewo

        const distance = Math.abs(targetX - positionX);
        const duration = distance / safeSpeed;

        await controls.start({
          x: targetX,
          transition: { duration, ease: "linear" },
        });

        positionX = targetX;
        currentDirection *= -1; // zmiana kierunku
      }
    };

    animateBubble();
  }, [windowWidth, controls, animationSpeed, direction, startX]);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ x: (startX / 100) * windowWidth }}
      animate={controls}
    />
  );
}
