import { motion } from "framer-motion";
import { content } from "../data/content";

export function Timeline() {
  return (
    <section className="section-shell" id="timeline">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow">{content.timeline.eyebrow}</p>
        <h2 className="section-title max-w-4xl">{content.timeline.title}</h2>
      </motion.div>

      <div className="relative mt-14">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-blush/50 to-transparent md:left-1/2 md:block" />
        <div className="space-y-6">
          {content.timeline.items.map((item, index) => (
            <motion.article
              className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:text-right"}`}
              initial={{ opacity: 0, y: 32 }}
              key={item.title}
              transition={{ duration: 0.62, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className={index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
                <div className="glass-panel rounded-[8px] p-6">
                  <p className="text-xs font-semibold uppercase text-gold" style={{ letterSpacing: "0.24em" }}>
                    {item.date}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl leading-none text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/70">{item.body}</p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 hidden h-9 w-9 -translate-x-1/2 rounded-full border border-gold/40 bg-midnight shadow-gold md:left-1/2 md:block"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
