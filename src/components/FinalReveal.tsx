import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { useMemo, useState } from "react";
import { content } from "../data/content";

type Particle = {
  color: string;
  delay: string;
  rot: string;
  tx: string;
  ty: string;
};

function makeParticles(): Particle[] {
  const colors = ["#f6b6c9", "#f5c87a", "#b7a7ff", "#f07a9b", "#f9f0ea"];
  return Array.from({ length: 46 }).map((_, index) => ({
    color: colors[index % colors.length],
    delay: `${(index % 8) * 0.025}s`,
    rot: `${120 + index * 19}deg`,
    tx: `${Math.cos(index * 1.7) * (110 + (index % 6) * 22)}px`,
    ty: `${Math.sin(index * 1.9) * (100 + (index % 5) * 24)}px`,
  }));
}

export function FinalReveal() {
  const [open, setOpen] = useState(false);
  const particles = useMemo(makeParticles, [open]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-24" id="finale">
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                "--x": `${(index * 19) % 100}%`,
                "--y": `${(index * 43) % 100}%`,
                "--delay": `${index * 0.1}s`,
                "--duration": `${7 + (index % 8)}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {Array.from({ length: 18 }).map((_, index) => (
        <span
          aria-hidden="true"
          className="petal"
          key={index}
          style={
            {
              "--x": `${5 + ((index * 13) % 90)}%`,
              "--y": `${8 + ((index * 29) % 82)}%`,
              "--rotate": `${index * 31}deg`,
              "--delay": `${index * 0.18}s`,
              "--duration": `${5.8 + (index % 7)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] w-[min(920px,100%)] flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow">{content.final.eyebrow}</p>
        <h2 className="font-serif text-6xl leading-none text-ink md:text-8xl">
          {content.final.title}
        </h2>
        <button className="romantic-button mt-10" onClick={() => setOpen(true)} type="button">
          <Heart className="mr-2 h-4 w-4 fill-current" />
          {content.final.button}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[95] grid place-items-center bg-midnight/90 px-4 backdrop-blur-2xl"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="final-reveal-title"
          >
            <button
              aria-label="Close final reveal"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] bg-white/[0.08] text-ink transition hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {particles.map((particle, index) => (
                <span
                  className="heart-confetti"
                  key={index}
                  style={
                    {
                      "--color": particle.color,
                      "--delay": particle.delay,
                      "--rot": particle.rot,
                      "--tx": particle.tx,
                      "--ty": particle.ty,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>

            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="glass-panel relative w-[min(760px,100%)] overflow-hidden rounded-[8px] p-8 text-center md:p-12"
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.45 }}
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-full border border-blush/30 bg-blush/10 text-blush shadow-glow">
                <Heart className="h-8 w-8 fill-current" />
              </div>
              <div className="space-y-5" id="final-reveal-title">
                {content.final.reveal.map((line) => (
                  <p className="font-serif text-5xl leading-none text-ink md:text-7xl" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
