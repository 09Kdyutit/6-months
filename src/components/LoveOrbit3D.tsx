import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { content } from "../data/content";

function makeTextTexture(text: string, color: string, fontSize: number) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  const padding = 36;
  context.font = `${fontSize}px Georgia, serif`;
  const metrics = context.measureText(text);
  canvas.width = Math.ceil(metrics.width + padding * 2);
  canvas.height = Math.ceil(fontSize * 1.7);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = `${fontSize}px Georgia, serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = color;
  context.shadowBlur = 22;
  context.fillStyle = color;
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function OrbitScene() {
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
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.35, 6.2);
    scene.add(new THREE.AmbientLight("#ffffff", 0.7));
    const pinkLight = new THREE.PointLight("#f6b6c9", 9, 10);
    pinkLight.position.set(2, 2, 3);
    scene.add(pinkLight);
    const lavenderLight = new THREE.PointLight("#b7a7ff", 5, 10);
    lavenderLight.position.set(-3, -1, 2);
    scene.add(lavenderLight);

    const textures: THREE.Texture[] = [];
    const materials: THREE.SpriteMaterial[] = [];
    const makeSprite = (text: string, color: string, size: number, position: THREE.Vector3) => {
      const texture = makeTextTexture(text, color, size > 0.7 ? 118 : 76);
      textures.push(texture);
      const material = new THREE.SpriteMaterial({ depthWrite: false, map: texture, transparent: true });
      materials.push(material);
      const aspect = texture.image?.width && texture.image?.height ? texture.image.width / texture.image.height : 2.4;
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      sprite.scale.set(size * aspect, size, 1);
      return sprite;
    };

    scene.add(makeSprite(content.orbit.center, "#f9f0ea", 0.82, new THREE.Vector3(0, 0, 0)));

    const orbitGroup = new THREE.Group();
    content.orbit.words.forEach((word, index) => {
      const angle = (index / content.orbit.words.length) * Math.PI * 2;
      const radius = 2.65;
      orbitGroup.add(
        makeSprite(
          word,
          index % 2 === 0 ? "#f5c87a" : "#f6b6c9",
          word.length > 8 ? 0.38 : 0.46,
          new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle * 2) * 0.42, Math.sin(angle) * radius),
        ),
      );
    });
    scene.add(orbitGroup);

    const starValues = new Float32Array(120 * 3);
    for (let index = 0; index < 120; index += 1) {
      starValues[index * 3] = (Math.random() - 0.5) * 6.5;
      starValues[index * 3 + 1] = (Math.random() - 0.5) * 4.4;
      starValues[index * 3 + 2] = (Math.random() - 0.5) * 5.8;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starValues, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: "#f5c87a",
      depthWrite: false,
      opacity: 0.6,
      size: 0.026,
      sizeAttenuation: true,
      transparent: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

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
      orbitGroup.rotation.y = time * 0.24;
      orbitGroup.rotation.x = Math.sin(time * 0.32) * 0.08;
      stars.rotation.y = time * 0.035;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      starGeometry.dispose();
      starMaterial.dispose();
      textures.forEach((texture) => texture.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
}

export function LoveOrbit3D() {
  const [sceneReady, setSceneReady] = useState(false);

  return (
    <section className="section-shell" id="orbit">
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-120px" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="section-eyebrow">{content.orbit.eyebrow}</p>
          <h2 className="section-title">{content.orbit.title}</h2>
          <p className="section-copy">{content.orbit.caption}</p>
        </motion.div>

        <motion.div
          className="glass-panel relative h-[440px] overflow-hidden rounded-[8px] md:h-[560px]"
          initial={{ opacity: 0, scale: 0.95 }}
          onViewportEnter={() => setSceneReady(true)}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-120px" }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blush/[0.12] via-transparent to-lavender/[0.12]" />
          {sceneReady ? (
            <OrbitScene />
          ) : (
            <div className="grid h-full place-items-center font-serif text-4xl text-ink/70">
              {content.orbit.center}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
