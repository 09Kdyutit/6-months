import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { content } from "../data/content";

type LoadingScreenProps = {
  visible: boolean;
};

export function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[120] grid place-items-center bg-midnight"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          initial={{ opacity: 1 }}
        >
          <div className="star-field" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, index) => (
              <span
                key={index}
                style={
                  {
                    "--x": `${(index * 37) % 100}%`,
                    "--y": `${(index * 53) % 100}%`,
                    "--delay": `${index * 0.09}s`,
                    "--duration": `${6 + (index % 5)}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <motion.div
            animate={{ scale: [0.96, 1.02, 0.96], opacity: [0.84, 1, 0.84] }}
            className="relative z-10 flex flex-col items-center gap-5 text-center"
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="grid h-16 w-16 place-items-center rounded-full border border-blush/30 bg-white/10 shadow-glow">
              <Heart className="h-7 w-7 fill-blush text-blush" />
            </div>
            <p className="max-w-[280px] font-serif text-4xl leading-none text-ink md:text-5xl">
              {content.loading}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
