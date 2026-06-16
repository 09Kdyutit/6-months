import { AnimatePresence, motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import { content } from "../data/content";

const points = [
  { x: 12, y: 22 },
  { x: 27, y: 14 },
  { x: 43, y: 28 },
  { x: 62, y: 18 },
  { x: 81, y: 27 },
  { x: 72, y: 49 },
  { x: 88, y: 66 },
  { x: 58, y: 68 },
  { x: 41, y: 55 },
  { x: 23, y: 70 },
  { x: 14, y: 51 },
  { x: 50, y: 42 },
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 11],
  [11, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 0],
  [8, 11],
  [2, 8],
];

export function Constellation() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-shell" id="stars">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow">{content.constellation.eyebrow}</p>
        <h2 className="section-title max-w-4xl">{content.constellation.title}</h2>
      </motion.div>

      <motion.div
        className="glass-panel relative mt-12 min-h-[620px] overflow-hidden rounded-[8px] p-4 md:p-8"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div className="star-field" aria-hidden="true">
          {Array.from({ length: 32 }).map((_, index) => (
            <span
              key={index}
              style={
                {
                  "--x": `${(index * 41) % 100}%`,
                  "--y": `${(index * 31) % 100}%`,
                  "--delay": `${index * 0.1}s`,
                  "--duration": `${6 + (index % 5)}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {lines.map(([from, to]) => (
            <line
              className="constellation-line"
              key={`${from}-${to}`}
              x1={points[from].x}
              x2={points[to].x}
              y1={points[from].y}
              y2={points[to].y}
            />
          ))}
        </svg>

        {points.map((point, index) => (
          <button
            aria-label={`Reveal reason ${index + 1}`}
            className={`constellation-star absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush ${
              active === index ? "scale-125 bg-gold text-midnight" : "bg-blush text-midnight hover:scale-110"
            }`}
            key={index}
            onClick={() => setActive(index)}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            type="button"
          >
            <Sparkle className="h-4 w-4 fill-current" />
          </button>
        ))}

        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-6 left-1/2 w-[min(560px,calc(100%-32px))] -translate-x-1/2 rounded-[8px] border border-gold/25 bg-midnight/80 p-5 text-center shadow-gold backdrop-blur-2xl md:bottom-10 md:p-7"
            exit={{ opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            key={active}
          >
            <p className="text-xs font-semibold uppercase text-gold" style={{ letterSpacing: "0.24em" }}>
              Reason {active + 1}
            </p>
            <p className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
              {content.constellation.reasons[active]}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
