import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface MovingBubbleProps {
  animationSpeed: number; // px per second
  className?: string;
  direction?: "right" | "left";
}

export function MovingBubble({
  animationSpeed,
  className,
  direction = "right",
}: MovingBubbleProps) {
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  // ustawiamy distance na szerokość okna
  useEffect(() => {
    const updateDistance = () => setDistance(window.innerWidth);
    updateDistance();

    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  const safeSpeed = Math.max(Math.abs(animationSpeed), 1);

  const dirMultiplier = direction === "right" ? 1 : -1;

  // uruchamiamy animację
  useEffect(() => {
    if (distance > 0) {
      const animateStep = async () => {
        while (true) {
          // przesuwamy się do krawędzi
          await controls.start({
            x: distance * dirMultiplier,
            transition: { duration: distance / safeSpeed, ease: "linear" },
          });

          // po dotknięciu krawędzi przesuwamy się dodatkowo o 200 px od pozycji początkowej
          await controls.start({
            x: distance * dirMultiplier,
            transition: { duration: 200 / safeSpeed, ease: "linear" },
          });

          // wracamy do pozycji początkowej i powtarzamy
          await controls.start({
            x: 0,
            transition: {
              duration: distance / safeSpeed,
              ease: "linear",
            },
          });
        }
      };

      animateStep();
    }
  }, [distance, dirMultiplier, controls, safeSpeed]);

  return (
    <motion.div
      className={`absolute ${className ?? ""} blur-3xl`}
      initial={{ x: 0 }}
      animate={controls}
    />
  );
}

/* 
Powinien przesuwać sie w lewo / prawo dopuki nie dotknie krawędzi, wtedy zmienić zwrot i kontynuować do drugiej krawędzi. 
Przy okazji może w losowy sposób zmieniać positionY (do jakiejś maksymalnej wartości)
*/
