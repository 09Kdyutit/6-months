import { useEffect, useRef } from "react";

const colors = ["#f6b6c9", "#f5c87a", "#b7a7ff", "#f07a9b", "#f9f0ea"];

export function LoveSparks() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const burst = (event: PointerEvent) => {
      const layer = layerRef.current;
      if (!layer) return;

      for (let index = 0; index < 12; index += 1) {
        const spark = document.createElement("span");
        spark.className = "love-spark";
        spark.style.left = `${event.clientX}px`;
        spark.style.top = `${event.clientY}px`;
        spark.style.setProperty("--spark-color", colors[index % colors.length]);
        spark.style.setProperty("--spark-delay", `${index * 18}ms`);
        spark.style.setProperty("--spark-x", `${Math.cos(index * 1.7) * (54 + (index % 4) * 18)}px`);
        spark.style.setProperty("--spark-y", `${Math.sin(index * 1.9) * (46 + (index % 5) * 15)}px`);
        layer.appendChild(spark);
        window.setTimeout(() => spark.remove(), 1200);
      }
    };

    window.addEventListener("pointerdown", burst);
    return () => window.removeEventListener("pointerdown", burst);
  }, []);

  return <div className="love-spark-layer" ref={layerRef} aria-hidden="true" />;
}
