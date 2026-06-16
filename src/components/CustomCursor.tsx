import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 180, damping: 26, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 26, mass: 0.3 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) return undefined;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 32);
      y.set(event.clientY - 32);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[110] h-16 w-16 rounded-full bg-blush/20 blur-xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
