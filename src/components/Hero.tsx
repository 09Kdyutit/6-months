import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { content } from "../data/content";

type HeroProps = {
  onNameClick: () => void;
};

function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      powerPreference: "high-performance",
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7.2);

    scene.add(new THREE.AmbientLight("#ffffff", 0.55));
    const keyLight = new THREE.DirectionalLight("#fff0da", 2.2);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);
    const blushLight = new THREE.PointLight("#f6b6c9", 12, 12);
    blushLight.position.set(-2.6, -1, 3);
    scene.add(blushLight);

    const heart = new THREE.Shape();
    heart.moveTo(0, 2.2);
    heart.bezierCurveTo(0, 1.1, -2.2, 0.7, -2.2, 2.6);
    heart.bezierCurveTo(-2.2, 4.2, -0.5, 5.2, 0, 6.05);
    heart.bezierCurveTo(0.5, 5.2, 2.2, 4.2, 2.2, 2.6);
    heart.bezierCurveTo(2.2, 0.7, 0, 1.1, 0, 2.2);
    const geometry = new THREE.ExtrudeGeometry(heart, {
      bevelEnabled: true,
      bevelSegments: 12,
      bevelSize: 0.12,
      bevelThickness: 0.14,
      depth: 0.82,
      steps: 1,
    });
    geometry.center();
    const material = new THREE.MeshPhysicalMaterial({
      clearcoat: 0.7,
      clearcoatRoughness: 0.18,
      color: "#f6b6c9",
      emissive: "#7a1734",
      emissiveIntensity: 0.28,
      metalness: 0.34,
      roughness: 0.22,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = Math.PI;
    mesh.scale.setScalar(0.74);
    scene.add(mesh);

    const createStars = (count: number, radius: number, color: string, size: number) => {
      const values = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        const distance = radius * (0.42 + Math.random() * 0.58);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        values[index * 3] = distance * Math.sin(phi) * Math.cos(theta);
        values[index * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
        values[index * 3 + 2] = distance * Math.cos(phi);
      }
      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute("position", new THREE.BufferAttribute(values, 3));
      const starMaterial = new THREE.PointsMaterial({
        color,
        depthWrite: false,
        opacity: 0.72,
        size,
        sizeAttenuation: true,
        transparent: true,
      });
      const points = new THREE.Points(starGeometry, starMaterial);
      scene.add(points);
      return { points, starGeometry, starMaterial };
    };

    const goldStars = createStars(90, 7.5, "#f5c87a", 0.026);
    const pinkStars = createStars(36, 4.4, "#f6b6c9", 0.042);
    const pointer = { x: 0, y: 0 };
    const handlePointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointer);

    const resize = () => {
      const width = canvas.clientWidth || 640;
      const height = canvas.clientHeight || 520;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    let frame = 0;
    const animate = (timeMs: number) => {
      const time = timeMs / 1000;
      mesh.rotation.y = Math.sin(time * 0.4) * 0.22 + pointer.x * 0.24;
      mesh.rotation.x = -0.16 + pointer.y * 0.16;
      mesh.position.y = Math.sin(time * 0.8) * 0.08;
      goldStars.points.rotation.y = time * 0.018;
      pinkStars.points.rotation.y = -time * 0.014;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointer);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      goldStars.starGeometry.dispose();
      goldStars.starMaterial.dispose();
      pinkStars.starGeometry.dispose();
      pinkStars.starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
}

export function Hero({ onNameClick }: HeroProps) {
  return (
    <section className="relative grid min-h-screen overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pt-28" id="hero">
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 44 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                "--x": `${(index * 29) % 100}%`,
                "--y": `${(index * 47) % 100}%`,
                "--delay": `${index * 0.12}s`,
                "--duration": `${7 + (index % 7)}s`,
                "--dx": `${(index % 2 === 0 ? 1 : -1) * (12 + (index % 9) * 2)}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {Array.from({ length: 12 }).map((_, index) => (
        <span
          aria-hidden="true"
          className="petal"
          key={index}
          style={
            {
              "--x": `${8 + ((index * 17) % 86)}%`,
              "--y": `${12 + ((index * 23) % 74)}%`,
              "--rotate": `${index * 23}deg`,
              "--delay": `${index * 0.28}s`,
              "--duration": `${5.5 + (index % 5)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="relative z-10 mx-auto grid w-[min(1180px,100%)] flex-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
        >
          <p className="section-eyebrow">
            For{" "}
            <button
              className="rounded-sm text-gold underline decoration-blush/40 underline-offset-4 transition hover:text-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
              onClick={onNameClick}
              type="button"
            >
              {content.name}
            </button>
          </p>
          <p className="mb-5 text-lg text-ink/70 md:text-xl">{content.hero.subtext}</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-none text-ink md:text-8xl lg:text-9xl">
            {content.hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70 md:text-xl">
            {content.hero.line}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="romantic-button group" href="#favorite-person">
              {content.hero.cta}
              <ChevronDown className="ml-2 h-4 w-4 transition group-hover:translate-y-1" />
            </a>
            <a className="ghost-button" href="#letter">
              Read the letter
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative min-h-[420px] md:min-h-[620px]"
          initial={{ opacity: 0, scale: 0.92 }}
          style={{ height: "clamp(420px, 52vw, 620px)" }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1], delay: 0.35 }}
        >
          <div className="absolute inset-8 bg-gradient-to-br from-blush/10 via-transparent to-lavender/10 blur-3xl" aria-hidden="true" />
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
