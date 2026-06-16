import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { content } from "../data/content";

export function LoveVault() {
  const [active, setActive] = useState(0);
  const activeNote = content.loveVault.notes[active];

  return (
    <section className="love-vault-section" id="vault">
      <motion.div
        className="love-vault-head"
        initial={{ opacity: 0, y: 26 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="love-vault-eyebrow">{content.loveVault.eyebrow}</p>
        <h2>{content.loveVault.title}</h2>
        <p>{content.loveVault.body}</p>
      </motion.div>

      <motion.div
        className="love-vault-frame"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="love-vault-visual" aria-hidden="true">
          <div className="vault-rings">
            <span />
            <span />
            <span />
          </div>
          <div className="vault-heart-core">
            <Heart />
          </div>
          {content.loveVault.notes.map((note, index) => (
            <span
              className="vault-floating-note"
              key={note.tag}
              style={
                {
                  "--vault-x": `${Math.cos(index * 1.16) * 38}%`,
                  "--vault-y": `${Math.sin(index * 1.16) * 34}%`,
                  "--vault-delay": `${index * 0.22}s`,
                } as React.CSSProperties
              }
            >
              {note.tag}
            </span>
          ))}
        </div>

        <div className="love-note-panel">
          <AnimatePresence mode="wait">
            <motion.article
              animate={{ opacity: 1, y: 0 }}
              className="love-note-card"
              exit={{ opacity: 0, y: 18 }}
              initial={{ opacity: 0, y: 18 }}
              key={activeNote.title}
              transition={{ duration: 0.36 }}
            >
              <p className="love-note-count">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(content.loveVault.notes.length).padStart(2, "0")}
              </p>
              <h3>{activeNote.title}</h3>
              <p>{activeNote.body}</p>
            </motion.article>
          </AnimatePresence>

          <div className="love-note-controls" aria-label="Love notes">
            {content.loveVault.notes.map((note, index) => (
              <button
                aria-label={`Open note: ${note.title}`}
                className={active === index ? "is-active" : ""}
                key={note.tag}
                onClick={() => setActive(index)}
                type="button"
              >
                {active === index ? <Sparkles /> : <Star />}
                <span>{note.tag}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
