import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { content } from "../data/content";

export function LoveLetter() {
  const [displayed, setDisplayed] = useState("");
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayed(content.letter.body);
      return undefined;
    }

    let index = 0;
    setDisplayed("");
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayed(content.letter.body.slice(0, index));
      if (index >= content.letter.body.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [run, started]);

  return (
    <section className="section-shell" id="letter">
      <div className="grid items-start gap-8 lg:grid-cols-[0.74fr_1.26fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-120px" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="section-eyebrow">{content.letter.eyebrow}</p>
          <h2 className="section-title">{content.letter.title}</h2>
        </motion.div>

        <motion.article
          className="glass-panel relative overflow-hidden rounded-[8px] p-6 md:p-10"
          initial={{ opacity: 0, y: 32 }}
          onViewportEnter={() => setStarted(true)}
          transition={{ duration: 0.78 }}
          viewport={{ once: true, margin: "-120px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
          <div className="typewriter-text min-h-[520px] font-serif text-2xl leading-9 text-ink md:text-3xl md:leading-10">
            {displayed}
            <span className="ml-1 inline-block h-7 w-px translate-y-1 bg-blush" aria-hidden="true" />
          </div>
          <button
            className="ghost-button mt-8"
            onClick={() => {
              setStarted(true);
              setRun((value) => value + 1);
            }}
            type="button"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {content.letter.replay}
          </button>
        </motion.article>
      </div>
    </section>
  );
}
