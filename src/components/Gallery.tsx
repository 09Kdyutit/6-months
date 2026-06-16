import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { content, GalleryItem } from "../data/content";

function PhotoCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.article
      className="gallery-card glass-panel group relative overflow-hidden rounded-[8px] p-3 transition duration-500 hover:-translate-y-2"
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.62, delay: index * 0.07 }}
      viewport={{ once: true, margin: "-120px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-gradient-to-br from-blush/[0.28] via-lavender/[0.18] to-gold/[0.24]">
        {item.image ? (
          <img
            alt={item.label}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            src={item.image}
          />
        ) : (
          <div className="grid h-full place-items-center text-center text-ink/60">
            <Image className="mx-auto mb-3 h-8 w-8" />
            <span className="block px-6 text-sm">{item.label}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-serif text-3xl leading-none text-ink">{item.caption}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function Gallery() {
  return (
    <section className="section-shell" id="gallery">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow">{content.gallery.eyebrow}</p>
        <h2 className="section-title">{content.gallery.title}</h2>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.gallery.items.map((item, index) => (
          <PhotoCard index={index} item={item} key={item.caption} />
        ))}
      </div>
    </section>
  );
}
