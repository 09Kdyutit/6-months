import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Constellation } from "./components/Constellation";
import { FinalReveal } from "./components/FinalReveal";
import { Gallery } from "./components/Gallery";
import { HeartPortal } from "./components/HeartPortal";
import { LoadingScreen } from "./components/LoadingScreen";
import { LoveSparks } from "./components/LoveSparks";
import { LoveCards } from "./components/LoveCards";
import { LoveLetter } from "./components/LoveLetter";
import { LoveVault } from "./components/LoveVault";
import { MusicToggle } from "./components/MusicToggle";
import { PromiseGarden } from "./components/PromiseGarden";
import { ShootingStars } from "./components/ShootingStars";
import { Timeline } from "./components/Timeline";
import { content } from "./data/content";

const Hero = lazy(() => import("./components/Hero").then((module) => ({ default: module.Hero })));
const LoveOrbit3D = lazy(() =>
  import("./components/LoveOrbit3D").then((module) => ({ default: module.LoveOrbit3D })),
);

const navItems = [
  { href: "#favorite-person", label: "Reasons" },
  { href: "#orbit", label: "Orbit" },
  { href: "#letter", label: "Letter" },
  { href: "#vault", label: "Vault" },
  { href: "#stars", label: "Stars" },
  { href: "#gallery", label: "Gallery" },
  { href: "#promises", label: "Promises" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [secretClicks, setSecretClicks] = useState(0);
  const [secretVisible, setSecretVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.35,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  const handleNameClick = () => {
    setSecretClicks((current) => {
      const next = current + 1;
      if (next >= 5) {
        setSecretVisible(true);
        window.setTimeout(() => setSecretVisible(false), 5200);
        return 0;
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-ink">
      <motion.div
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-gold via-blush to-lavender"
        style={{ scaleX: progress }}
      />
      <LoadingScreen visible={loading} />
      <CustomCursor />
      <MusicToggle />
      <ShootingStars />
      <LoveSparks />

      <header className="fixed left-1/2 top-4 z-50 hidden w-[min(1040px,calc(100%-32px))] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-midnight/60 px-4 py-3 shadow-glow backdrop-blur-2xl md:flex">
        <a
          className="font-serif text-2xl italic text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
          href="#top"
        >
          For {content.name}
        </a>
        <nav aria-label="Main sections" className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm text-ink/70 transition hover:bg-white/10 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero onNameClick={handleNameClick} />
        </Suspense>
        <LoveCards />
        <Suspense fallback={<div className="section-shell min-h-[440px]" />}>
          <LoveOrbit3D />
        </Suspense>
        <Timeline />
        <LoveLetter />
        <LoveVault />
        <Constellation />
        <Gallery />
        <PromiseGarden />
        <HeartPortal />
        <FinalReveal />
      </main>

      <footer className="relative z-10 px-6 pb-10 text-center text-sm text-ink/50">
        Made as a little universe for {content.name}.
      </footer>

      <AnimatePresence>
        {secretVisible && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 z-[90] w-[min(520px,calc(100%-32px))] -translate-x-1/2 rounded-2xl border border-gold/30 bg-midnight/90 px-5 py-4 text-center font-serif text-2xl text-ink shadow-gold backdrop-blur-2xl"
            exit={{ opacity: 0, y: 24 }}
            initial={{ opacity: 0, y: 24 }}
            role="status"
          >
            {content.secretMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
