import { motion } from "framer-motion";
import { Heart, Infinity, Laugh, LucideIcon, Smile, Sparkles } from "lucide-react";
import { content, IconName } from "../data/content";

const HandHeart = Heart;

const iconMap: Record<IconName, LucideIcon> = {
  Smile,
  Heart,
  Sparkles,
  Laugh,
  HandHeart,
  Infinity,
};

export function LoveCards() {
  return (
    <section className="section-shell" id="favorite-person">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow">{content.favoriteSection.eyebrow}</p>
        <h2 className="section-title max-w-4xl">{content.favoriteSection.title}</h2>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.favoriteSection.cards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <motion.article
              className="glass-panel group relative min-h-[250px] overflow-hidden rounded-[8px] p-6 transition duration-300"
              initial={{ opacity: 0, y: 28 }}
              key={card.title}
              transition={{ duration: 0.58, delay: index * 0.07 }}
              viewport={{ once: true, margin: "-120px" }}
              whileHover={{ rotateX: 3, rotateY: index % 2 === 0 ? -4 : 4, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush/70 to-transparent" />
              <div className="mb-10 grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold shadow-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-4xl leading-none text-ink">{card.title}</h3>
              <p className="mt-5 text-base leading-7 text-ink/70">{card.message}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
