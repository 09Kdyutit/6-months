import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { content } from "../data/content";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (unavailable) return;

    if (!audioRef.current) {
      // Keep audio creation lazy so browsers allow playback after a user gesture.
      const audio = new Audio(content.music.src);
      audio.loop = true;
      audio.volume = 0.38;
      audio.addEventListener("error", () => {
        setUnavailable(true);
        setPlaying(false);
      });
      audioRef.current = audio;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setUnavailable(true);
      setPlaying(false);
    }
  };

  const Icon = unavailable ? Music : playing ? Volume2 : VolumeX;

  return (
    <button
      aria-label={
        unavailable
          ? "Background music unavailable"
          : playing
            ? "Pause background music"
            : "Play background music"
      }
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-midnight/70 text-ink shadow-glow backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
      onClick={toggleMusic}
      type="button"
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{content.music.label}</span>
    </button>
  );
}
