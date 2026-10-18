"use client";

import React, { useEffect, useRef } from "react";

/**
 * ParticleBackground: A high-performance, canvas-based particle network
 * inspired by particles.js, styled specifically for The Embrione's aesthetic.
 *
 * Features:
 * - Subtle ambient constellation (cyan / sky / slate nodes & links)
 * - Interactive hover effect: dynamic cursor links and gentle fluid displacement
 * - Auto-pauses off-screen via IntersectionObserver (0 CPU wasted when scrolled)
 * - Retina / High-DPI support
 * - Prefers-reduced-motion friendly
 * - Non-blocking pointer events (pointer-events-none)
 */
export default function ParticleBackground({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Target container to bound sizing and mouse coordinates
    const targetElement = containerRef?.current || canvas.parentElement || document.body;

    let animationFrameId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking state
    const mouse = {
      x: null,
      y: null,
      radius: 170, // Interaction radius in pixels
      isInside: false,
      alpha: 0, // Smooth fade for mouse links
    };

    let particles = [];

    // Color definitions tailored to the dark cyan/blue site theme
    const colorPalette = [
      { r: 6, g: 182, b: 212 },   // cyan-500
      { r: 34, g: 211, b: 238 },  // cyan-400
      { r: 56, g: 189, b: 248 },  // sky-400
      { r: 148, g: 163, b: 184 }, // slate-400
      { r: 255, g: 255, b: 255 }, // white accent
    ];

    class Particle {
      constructor(w, h, initial = false) {
        this.reset(w, h, initial);
      }

      reset(w, h, initial = false) {
        this.x = initial ? Math.random() * w : Math.random() < 0.5 ? 0 : w;
        this.y = initial ? Math.random() * h : Math.random() * h;

        // Gentle, professional drift speed (never jittery or hyperactive)
        const speed = prefersReducedMotion ? 0 : 0.25 + Math.random() * 0.35;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        // Tiny, crisp nodes
        this.radius = 1.0 + Math.random() * 1.4;
        this.baseRadius = this.radius;

        // Color & Opacity
        const colorIdx = Math.floor(Math.random() * colorPalette.length);
        this.color = colorPalette[colorIdx];
        this.baseAlpha = 0.25 + Math.random() * 0.45;
        this.currentAlpha = this.baseAlpha;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.012 + Math.random() * 0.018;

        // Interaction state
        this.originX = this.x;
        this.originY = this.y;
      }

      update(w, h) {
        if (!prefersReducedMotion) {
          this.x += this.vx;
          this.y += this.vy;

          // Subtle natural twinkling
          this.pulsePhase += this.pulseSpeed;
          this.currentAlpha =
            this.baseAlpha + Math.sin(this.pulsePhase) * 0.12;

          // Wrap edges smoothly with margin
          const margin = 10;
          if (this.x < -margin) this.x = w + margin;
          if (this.x > w + margin) this.x = -margin;
          if (this.y < -margin) this.y = h + margin;
          if (this.y > h + margin) this.y = -margin;
        }

        // Mouse hover interaction: gentle fluid repulsion & radius scaling
        if (mouse.isInside && mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius);
            // Subtle physical push (fluid push away from cursor)
            const pushMagnitude = force * 1.2;
            this.x += (dx / dist) * pushMagnitude;
            this.y += (dy / dist) * pushMagnitude;

            // Soft hover expansion
            this.radius = this.baseRadius + force * 0.8;
          } else {
            this.radius += (this.baseRadius - this.radius) * 0.1;
          }
        } else {
          this.radius += (this.baseRadius - this.radius) * 0.1;
        }
      }

      draw(context) {
        const { r, g, b } = this.color;
        context.beginPath();
        context.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.05, Math.min(1, this.currentAlpha))})`;
        context.fill();
      }
    }

    // Set canvas dimensions with Retina DPR scaling
    const setDimensions = () => {
      const rect = targetElement.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Balanced density: ~1 particle per 17,000 sq pixels, clamped between 32 and 75
      const targetCount = Math.min(
        75,
        Math.max(32, Math.floor((width * height) / 17000))
      );

      // Re-populate smoothly
      particles = [];
      for (let i = 0; i < targetCount; i++) {
        particles.push(new Particle(width, height, true));
      }
    };

    setDimensions();

    // Resize listener with ResizeObserver
    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        setDimensions();
      });
      resizeObserver.observe(targetElement);
    } else {
      window.addEventListener("resize", setDimensions);
    }

    // Pointer event handlers on the target container for hover detection
    const handlePointerMove = (e) => {
      const rect = targetElement.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isInside = true;
    };

    const handlePointerEnter = () => {
      mouse.isInside = true;
    };

    const handlePointerLeave = () => {
      mouse.isInside = false;
      mouse.x = null;
      mouse.y = null;
    };

    targetElement.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    targetElement.addEventListener("pointerenter", handlePointerEnter, {
      passive: true,
    });
    targetElement.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    // Pause animation when scrolled away
    let observer = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !animationFrameId) {
              lastTimestamp = performance.now();
              render(lastTimestamp);
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(targetElement);
    }

    // Main animation loop
    let lastTimestamp = performance.now();
    const maxLinkDist = 120; // Maximum distance between connected particles

    const render = (timestamp) => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth fade-in/out of mouse interaction
      if (mouse.isInside && mouse.x !== null) {
        mouse.alpha += (1 - mouse.alpha) * 0.1;
      } else {
        mouse.alpha += (0 - mouse.alpha) * 0.08;
      }

      const pLen = particles.length;

      // 1. Update and draw nodes
      for (let i = 0; i < pLen; i++) {
        particles[i].update(width, height);
        particles[i].draw(ctx);
      }

      // 2. Inter-particle constellation links
      ctx.lineWidth = 0.65;
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxLinkDist * maxLinkDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxLinkDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      // 3. Interactive Hover effect: Cursor-to-particle links
      if (mouse.alpha > 0.02 && mouse.x !== null && mouse.y !== null) {
        ctx.lineWidth = 0.85;
        for (let i = 0; i < pLen; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = mouse.radius * mouse.radius;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const linkAlpha =
              (1 - dist / mouse.radius) * 0.38 * mouse.alpha;

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${linkAlpha.toFixed(3)})`;
            ctx.stroke();
          }
        }

        // Soft luminous cursor focal node
        const cursorGlowAlpha = 0.25 * mouse.alpha;
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          24
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${cursorGlowAlpha})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 24, 0, Math.PI * 2);
        ctx.fill();

        // Tiny center pin
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * mouse.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Cleanup listeners on unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", setDimensions);
      }
      if (observer) {
        observer.disconnect();
      }
      targetElement.removeEventListener("pointermove", handlePointerMove);
      targetElement.removeEventListener("pointerenter", handlePointerEnter);
      targetElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
