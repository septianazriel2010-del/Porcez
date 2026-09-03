"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Keyframe = {
  selector: string;
  cam: THREE.Vector3;
  look: THREE.Vector3;
  color: THREE.Color;
  explode: number;
  rot: number;
  triggerY?: number;
};

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (err) {
      console.warn("3D background could not initialize:", err);
      canvas.style.display = "none";
      return;
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent — CSS body bg shows through

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const isMobile = window.innerWidth < 640;
    const detail = isMobile ? 2 : 3;

    // --- Procedural "Cyber Network Core": holographic wireframe globe + glowing point-nodes
    const coreGeo = new THREE.IcosahedronGeometry(2.4, detail);
    const posAttr = coreGeo.attributes.position;
    const vertexCount = posAttr.count;
    const basePositions = new Float32Array(posAttr.array as Float32Array);
    const scatterPositions = new Float32Array(posAttr.array.length);
    for (let i = 0; i < vertexCount; i++) {
      const r = 4.4 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      scatterPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      scatterPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      scatterPositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const nodesMaterial = new THREE.PointsMaterial({
      color: 0x00f3ff,
      size: isMobile ? 0.05 : 0.045,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const nodes = new THREE.Points(coreGeo, nodesMaterial);
    scene.add(nodes);

    const edgesGeo = new THREE.EdgesGeometry(coreGeo);
    const wireMaterial = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.32 });
    const wireframe = new THREE.LineSegments(edgesGeo, wireMaterial);
    scene.add(wireframe);

    const glowGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.035 });
    const glowMesh = new THREE.Mesh(glowGeo, glowMaterial);
    scene.add(glowMesh);

    // --- Scroll keyframes: Hero -> Security Mindset (Audit) -> Projects -> Footer
    const KEYFRAMES: Keyframe[] = [
      {
        selector: "#hero",
        cam: new THREE.Vector3(0, 0, 10.5),
        look: new THREE.Vector3(0, 0, 0),
        color: new THREE.Color(0x00f3ff),
        explode: 0,
        rot: 0.05,
      },
      {
        selector: "#audit",
        cam: new THREE.Vector3(3.3, 1.1, 4.1),
        look: new THREE.Vector3(0, 0.2, 0),
        color: new THREE.Color(0xff0055),
        explode: 0,
        rot: 0.16,
      },
      {
        selector: "#projects",
        cam: new THREE.Vector3(-2.6, 0.5, 7.6),
        look: new THREE.Vector3(0, 0, 0),
        color: new THREE.Color(0x00ff9d),
        explode: 1,
        rot: 0.26,
      },
      {
        selector: "#site-footer",
        cam: new THREE.Vector3(0, 5.6, 8.6),
        look: new THREE.Vector3(0, -0.6, 0),
        color: new THREE.Color(0x00f3ff),
        explode: 0,
        rot: 0.07,
      },
    ];

    function recomputeTriggers() {
      KEYFRAMES.forEach((k) => {
        const el = document.querySelector(k.selector);
        if (el) k.triggerY = el.getBoundingClientRect().top + window.scrollY;
      });
    }
    recomputeTriggers();

    function clamp(v: number, min: number, max: number) {
      return Math.max(min, Math.min(max, v));
    }

    const targetCam = new THREE.Vector3().copy(KEYFRAMES[0].cam);
    const targetLook = new THREE.Vector3().copy(KEYFRAMES[0].look);
    const currentLook = new THREE.Vector3().copy(KEYFRAMES[0].look);
    const targetColor = new THREE.Color().copy(KEYFRAMES[0].color);
    let targetExplode = 0;
    let currentExplode = 0;
    let targetRot = KEYFRAMES[0].rot;

    function updateTargets() {
      const scrollY = window.scrollY;
      let i = 0;
      while (i < KEYFRAMES.length - 1 && scrollY >= (KEYFRAMES[i + 1].triggerY ?? Infinity)) i++;
      const a = KEYFRAMES[clamp(i, 0, KEYFRAMES.length - 1)];
      const b = KEYFRAMES[clamp(i + 1, 0, KEYFRAMES.length - 1)];
      const aY = a.triggerY ?? 0;
      const bY = b.triggerY ?? 0;
      const span = bY - aY;
      let t = 0;
      if (a !== b && span > 0) {
        t = clamp((scrollY - aY) / span, 0, 1);
      } else if (a === KEYFRAMES[KEYFRAMES.length - 1] && scrollY >= aY) {
        t = 1;
      }

      targetCam.copy(a.cam).lerp(b.cam, t);
      targetLook.copy(a.look).lerp(b.look, t);
      targetColor.copy(a.color).lerp(b.color, t);
      targetExplode = a.explode + (b.explode - a.explode) * t;
      targetRot = a.rot + (b.rot - a.rot) * t;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      recomputeTriggers();
    }
    window.addEventListener("resize", onResize);

    let rafId = 0;

    if (reduced) {
      camera.position.copy(KEYFRAMES[0].cam);
      camera.lookAt(KEYFRAMES[0].look);
      nodesMaterial.color.copy(KEYFRAMES[0].color);
      wireMaterial.color.copy(KEYFRAMES[0].color);
      renderer.render(scene, camera);
    } else {
      const clock = new THREE.Clock();

      const animate3D = () => {
        rafId = requestAnimationFrame(animate3D);
        updateTargets();

        camera.position.lerp(targetCam, 0.055);
        currentLook.lerp(targetLook, 0.055);
        camera.lookAt(currentLook);

        nodesMaterial.color.lerp(targetColor, 0.05);
        wireMaterial.color.lerp(targetColor, 0.05);
        glowMaterial.color.lerp(targetColor, 0.05);

        currentExplode += (targetExplode - currentExplode) * 0.06;
        const posArr = coreGeo.attributes.position.array as Float32Array;
        for (let vi = 0; vi < vertexCount; vi++) {
          const ix = vi * 3;
          posArr[ix] = basePositions[ix] + (scatterPositions[ix] - basePositions[ix]) * currentExplode;
          posArr[ix + 1] = basePositions[ix + 1] + (scatterPositions[ix + 1] - basePositions[ix + 1]) * currentExplode;
          posArr[ix + 2] = basePositions[ix + 2] + (scatterPositions[ix + 2] - basePositions[ix + 2]) * currentExplode;
        }
        coreGeo.attributes.position.needsUpdate = true;
        wireMaterial.opacity = 0.32 * (1 - currentExplode);
        glowMaterial.opacity = 0.035 * (1 - currentExplode * 0.8);

        const delta = clock.getDelta();
        nodes.rotation.y += targetRot * delta;
        nodes.rotation.x += targetRot * 0.3 * delta;
        wireframe.rotation.copy(nodes.rotation);
        glowMesh.rotation.copy(nodes.rotation);

        renderer.render(scene, camera);
      };
      animate3D();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      coreGeo.dispose();
      edgesGeo.dispose();
      glowGeo.dispose();
      nodesMaterial.dispose();
      wireMaterial.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="three-canvas" ref={canvasRef} aria-hidden="true" />;
}
