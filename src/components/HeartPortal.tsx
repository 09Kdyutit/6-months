import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { content } from "../data/content";

export function HeartPortal() {
  const [lit, setLit] = useState(false);

  return (
    <section className={`heart-portal-section ${lit ? "is-lit" : ""}`} id="portal">
      <motion.div
        className="heart-portal-copy"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="heart-portal-eyebrow">{content.portal.eyebrow}</p>
        <h2>{content.portal.title}</h2>
        <p>{content.portal.body}</p>
      </motion.div>

      <motion.div
        className="heart-portal-stage"
        initial={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div className="portal-rings" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <button
          className="portal-heart-button"
          onClick={() => setLit(true)}
          type="button"
          aria-label={content.portal.button}
        >
          <Heart />
        </button>
        <div className="portal-orbit-words" aria-hidden="true">
          <span>Vanika</span>
          <span>Forever</span>
          <span>Home</span>
          <span>Mine</span>
        </div>

        <AnimatePresence>
          {lit && (
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="portal-reveal"
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
            >
              <Sparkles />
              <span>{content.portal.revealed}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button className="portal-action" onClick={() => setLit(true)} type="button">
          <Sparkles />
          <span>{content.portal.button}</span>
        </button>
      </motion.div>
    </section>
  );
}
