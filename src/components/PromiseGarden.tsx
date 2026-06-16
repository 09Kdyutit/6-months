import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { content } from "../data/content";

const petals = Array.from({ length: 8 });

export function PromiseGarden() {
  const [active, setActive] = useState(0);
  const activePromise = content.promiseGarden.promises[active];

  return (
    <section className="promise-garden-section" id="promises">
      <motion.div
        className="promise-garden-head"
        initial={{ opacity: 0, y: 26 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="promise-garden-eyebrow">{content.promiseGarden.eyebrow}</p>
        <h2>{content.promiseGarden.title}</h2>
        <p>{content.promiseGarden.body}</p>
      </motion.div>

      <motion.div
        className="promise-garden-bed"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="garden-glow" aria-hidden="true" />

        <div className="promise-blooms">
          {content.promiseGarden.promises.map((promise, index) => (
            <button
              aria-label={`Show promise: ${promise.title}`}
              className={`promise-bloom ${active === index ? "is-active" : ""}`}
              key={promise.title}
              onClick={() => setActive(index)}
              style={{ "--bloom-delay": `${index * 0.12}s` } as React.CSSProperties}
              type="button"
            >
              <span className="bloom-flower" aria-hidden="true">
                {petals.map((_, petalIndex) => (
                  <span
                    className="bloom-petal"
                    key={petalIndex}
                    style={
                      {
                        "--petal-rotation": `${petalIndex * 45}deg`,
                      } as React.CSSProperties
                    }
                  />
                ))}
                <span className="bloom-center">
                  {active === index ? <Heart /> : <Sparkles />}
                </span>
              </span>
              <span className="promise-bloom-title">{promise.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="promise-message"
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            key={activePromise.title}
            transition={{ duration: 0.38 }}
          >
            <div className="promise-message-icon">
              <Heart />
            </div>
            <div>
              <p>Promise {active + 1}</p>
              <h3>{activePromise.title}</h3>
              <span>{activePromise.body}</span>
            </div>
          </motion.article>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
