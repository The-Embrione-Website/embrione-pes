"use client";

import React, { useEffect, useRef } from "react";

/**
 * GalaxyBackground: Cinematic "God View" Spiral Milky Way Simulation
 *
 * Renders an authentic bird's-eye / tilted god-view of the Milky Way spiral galaxy:
 * - Radiant Galactic Core (dense stellar bulge & supermassive core glow)
 * - 4 Logarithmic Spiral Arms with differential density wave kinematics
 * - Billowy interstellar nebular gas clouds along the spiral arms
 * - Dark cosmic dust absorption lanes (The Great Rift structure)
 * - 1,800+ multi-spectral stars (O/B blue giants, white stars, golden core dwarfs)
 * - Continuous smooth 3D celestial rotation with mouse-driven perspective parallax
 * - High-DPI Retina support, auto-pause when scrolled away (0 CPU wasted)
 */
export default function GalaxyBackground({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targetElement =
      containerRef?.current || canvas.parentElement || document.body;

    let animationFrameId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse parallax tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    // Color definitions for spectral stars and interstellar gas
    const STAR_COLORS = [
      { r: 255, g: 255, b: 255 }, // Class A: Pure White
      { r: 191, g: 219, b: 254 }, // Class B: Icy Sky Blue
      { r: 147, g: 197, b: 253 }, // Class O: Azure Starburst
      { r: 96, g: 165, b: 250 },  // Class O: Sapphire Blue
      { r: 165, g: 180, b: 252 }, // Violet-Indigo Cluster
      { r: 254, g: 240, b: 138 }, // Class G: Warm Core Star
    ];

    const GAS_COLORS = [
      "rgba(30, 58, 138, 0.14)",  // Deep Navy
      "rgba(59, 130, 246, 0.12)", // Azure
      "rgba(79, 70, 229, 0.10)",  // Indigo
      "rgba(37, 99, 235, 0.12)",  // Royal Blue
      "rgba(99, 102, 241, 0.08)", // Violet
    ];

    let stars = [];
    let gasClouds = [];
    let shootingStar = null;
    let nextShootingStarTime = performance.now() + 4000 + Math.random() * 5000;

    // Configuration of the God-View Spiral Galaxy
    const NUM_ARMS = 4;            // 4 major spiral arms of the Milky Way
    const SPIRAL_WINDING = 3.6;    // How tightly the arms wrap
    const TILT_PITCH = 0.52;       // God-view 3D inclination angle (~58 deg tilt)
    const TILT_ROLL = -0.32;       // Aesthetic diagonal orientation (~ -18 deg)
    const ROTATION_SPEED = 0.00065; // Majestic slow celestial spin

    let galaxyAngle = 0;

    // Gaussian random helper for realistic natural dispersion
    const gaussian = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    const initUniverse = () => {
      const rect = targetElement.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      const isMobile = width < 768;
      // High-performance DPR: 1 on mobile to prevent GPU fill-rate exhaustion; capped to 1.5 on desktop
      dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Galaxy radius scaled to fill the entire hero backdrop majestically
      const maxRadius = Math.max(width, height) * 0.62;

      // 1. Generate Spiral Galaxy Stars (Mobile optimized to 280 stars for 60/120fps smoothness)
      const starCount = isMobile
        ? 280
        : Math.min(1800, Math.max(900, Math.floor(width * 1.1)));
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const isCoreBulge = Math.random() < 0.28; // 28% in dense central bulge

        let r, theta, z, color, size, alpha;

        if (isCoreBulge) {
          // Central bulge distribution (dense spherical/ellipsoid core)
          r = Math.pow(Math.random(), 1.8) * (maxRadius * 0.25);
          theta = Math.random() * Math.PI * 2;
          z = gaussian() * (maxRadius * 0.08) * (1 - r / (maxRadius * 0.25));

          // Warmer golden and brilliant white stars in core
          const coreColorIdx = Math.random() < 0.5 ? 5 : 0;
          color = STAR_COLORS[coreColorIdx];
          size = 0.6 + Math.random() * 1.4;
          alpha = 0.25 + Math.random() * 0.45;
        } else {
          // Spiral Arm distribution
          const armIndex = i % NUM_ARMS;
          const armBaseAngle = (armIndex * (2 * Math.PI)) / NUM_ARMS;

          // Radial distance along spiral arm (smooth exponential spread)
          const normDist = 0.15 + Math.pow(Math.random(), 0.8) * 0.85;
          r = normDist * maxRadius;

          // Logarithmic spiral angle + Gaussian dispersion across arm width
          const armAngle = armBaseAngle + Math.log(normDist * 8 + 1) * SPIRAL_WINDING;
          const spread = gaussian() * (0.16 + normDist * 0.14);
          theta = armAngle + spread;

          // Vertical disk thickness (thinner at edges)
          z = gaussian() * (maxRadius * 0.05) * (1 - normDist * 0.5);

          // Colors: Blue giants, azure clusters & white stars in the arms
          const armColorIdx = Math.floor(Math.random() * (STAR_COLORS.length - 1));
          color = STAR_COLORS[armColorIdx];
          size = 0.5 + Math.random() * 1.3;
          alpha = 0.20 + Math.random() * 0.48;
        }

        // Prominent brilliant beacon stars (~4% of stars)
        const isProminent = Math.random() < 0.035;
        if (isProminent) {
          size = 1.4 + Math.random() * 1.2;
          alpha = 0.65 + Math.random() * 0.30;
        }

        stars.push({
          r,
          theta,
          z,
          size,
          baseAlpha: alpha,
          alpha,
          color,
          isProminent,
          twinkleSpeed: 0.02 + Math.random() * 0.04,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      // 2. Generate Interstellar Nebular Gas Puffs along Spiral Arms (12 on mobile, 45 on desktop)
      gasClouds = [];
      const cloudCount = isMobile ? 12 : 45;
      for (let i = 0; i < cloudCount; i++) {
        const armIndex = i % NUM_ARMS;
        const armBaseAngle = (armIndex * (2 * Math.PI)) / NUM_ARMS;
        const normDist = 0.12 + Math.pow(Math.random(), 0.75) * 0.82;
        const r = normDist * maxRadius;
        const armAngle = armBaseAngle + Math.log(normDist * 8 + 1) * SPIRAL_WINDING;
        const theta = armAngle + gaussian() * 0.08;

        gasClouds.push({
          r,
          theta,
          radius: (35 + Math.random() * 65) * (normDist * 0.6 + 0.6),
          color: GAS_COLORS[i % GAS_COLORS.length],
        });
      }
    };

    initUniverse();

    // Resize handling
    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => initUniverse());
      resizeObserver.observe(targetElement);
    } else {
      window.addEventListener("resize", initUniverse);
    }

    // Interactive pointer parallax (desktop mouse only - disabled on touch devices to avoid scroll lag)
    const handlePointerMove = (e) => {
      const rect = targetElement.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;
      mouse.targetX = nx * 0.08; // subtle roll adjustment
      mouse.targetY = ny * 0.06; // subtle pitch adjustment
    };

    const hasFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer) {
      targetElement.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    // Shooting star (rare meteoric streak across the cosmos)
    class ShootingStar {
      constructor(w, h) {
        this.x = Math.random() * (w * 0.8) + w * 0.1;
        this.y = Math.random() * (h * 0.35);
        this.length = 100 + Math.random() * 80;
        this.speed = 16 + Math.random() * 10;
        this.angle = 0.5 + (Math.random() - 0.5) * 0.25;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.opacity = 1;
        this.dead = false;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.024;
        if (this.opacity <= 0) this.dead = true;
      }
      draw(c) {
        if (this.dead) return;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;
        const grad = c.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.7, `rgba(147, 197, 253, ${0.4 * this.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${0.95 * this.opacity})`);
        c.beginPath();
        c.moveTo(tailX, tailY);
        c.lineTo(this.x, this.y);
        c.strokeStyle = grad;
        c.lineWidth = 1.4;
        c.stroke();
      }
    }

    // IntersectionObserver to freeze canvas when scrolled out of view
    let observer = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !animationFrameId) {
              render(performance.now());
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(targetElement);
    }

    // 3D Projection transformation helper
    const project = (r, theta, z, currentGalaxyAngle, cx, cy, pitch, roll) => {
      const currentTheta = theta + currentGalaxyAngle;

      // Unrotated position in the galactic disc plane
      const x0 = r * Math.cos(currentTheta);
      const y0 = r * Math.sin(currentTheta);
      const z0 = z;

      // 1. Pitch tilt (inclination: tilt the disc back like an elliptical god-view)
      const x1 = x0;
      const y1 = y0 * pitch - z0 * Math.sqrt(1 - pitch * pitch);

      // 2. Roll rotation (diagonal slant on screen + interactive mouse parallax)
      const cosR = Math.cos(roll);
      const sinR = Math.sin(roll);
      const xScreen = cx + (x1 * cosR - y1 * sinR);
      const yScreen = cy + (x1 * sinR + y1 * cosR);

      return { x: xScreen, y: yScreen };
    };

    // Main render loop
    const render = (time) => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const pitch = Math.max(0.35, Math.min(0.75, TILT_PITCH + mouse.y));
      const roll = TILT_ROLL + mouse.x;

      // Center galaxy in upper third for dramatic perspective framing the hero text below
      const cx = width * 0.5;
      const cy = height * 0.32;

      if (!prefersReducedMotion) {
        galaxyAngle += ROTATION_SPEED;
      }

      // 1. Draw Nebular Interstellar Gas Puffs along the Spiral Arms (Luminous haze)
      ctx.globalCompositeOperation = "screen";
      const gLen = gasClouds.length;
      for (let i = 0; i < gLen; i++) {
        const cloud = gasClouds[i];
        const pt = project(cloud.r, cloud.theta, 0, galaxyAngle, cx, cy, pitch, roll);

        const cloudGrad = ctx.createRadialGradient(
          pt.x,
          pt.y,
          0,
          pt.x,
          pt.y,
          cloud.radius
        );
        cloudGrad.addColorStop(0, cloud.color);
        cloudGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Radiant Galactic Core (Supermassive Bulge & Multi-layered Halo)
      const corePt = { x: cx, y: cy };
      const coreRadius = Math.min(width, height) * 0.28;

      const coreGlow = ctx.createRadialGradient(
        corePt.x,
        corePt.y,
        0,
        corePt.x,
        corePt.y,
        coreRadius
      );
      coreGlow.addColorStop(0, "rgba(255, 255, 255, 0.42)");        // Radiant white core nucleus
      coreGlow.addColorStop(0.12, "rgba(254, 240, 138, 0.26)");     // Golden bulge starlight
      coreGlow.addColorStop(0.32, "rgba(147, 197, 253, 0.18)");     // Azure stellar starburst
      coreGlow.addColorStop(0.62, "rgba(30, 58, 138, 0.12)");      // Deep royal navy halo
      coreGlow.addColorStop(0.9, "rgba(15, 23, 42, 0.04)");        // Cosmic mist
      coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(corePt.x, corePt.y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Stars (1,900+ multi-spectral stars mapped across the spiral arms)
      ctx.globalCompositeOperation = "source-over";
      const sLen = stars.length;
      for (let i = 0; i < sLen; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          star.alpha =
            star.baseAlpha + Math.sin(star.twinklePhase) * (star.baseAlpha * 0.3);
        }

        const pt = project(
          star.r,
          star.theta,
          star.z,
          galaxyAngle,
          cx,
          cy,
          pitch,
          roll
        );

        const { r, g, b } = star.color;
        const alpha = Math.max(0.04, Math.min(0.9, star.alpha));

        // Soft diffraction halo for prominent stars
        if (star.isProminent) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, star.size * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.25})`;
          ctx.fill();
        }

        // Star core point
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(0.4, star.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }

      // 4. Draw Rare Graceful Shooting Star
      if (!prefersReducedMotion) {
        if (!shootingStar && time > nextShootingStarTime) {
          shootingStar = new ShootingStar(width, height);
          nextShootingStarTime = time + 8000 + Math.random() * 9000;
        }

        if (shootingStar) {
          shootingStar.update();
          shootingStar.draw(ctx);
          if (shootingStar.dead) shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", initUniverse);
      if (observer) observer.disconnect();
      if (hasFinePointer) {
        targetElement.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [containerRef]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Dramatic Ambient Cosmic Vignette (Deep Space Obsidian Background) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#000000]"
      />

      {/* 2. Atmospheric Galactic Core Glow (Optimized blur on mobile for 60fps performance) */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[1200px] h-[260px] sm:h-[650px] pointer-events-none opacity-[0.24] blur-[50px] sm:blur-[140px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(30, 58, 138, 0.35) 0%, rgba(20, 33, 59, 0.20) 45%, rgba(10, 15, 30, 0.06) 70%, transparent 100%)",
          transform: "rotate(-18deg)",
        }}
      />

      {/* 3. The God-View Canvas Spiral Galaxy Simulation (-15% opacity -> 0.85) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.85]"
      />

      {/* 4. Atmospheric Bottom Horizon Fade into pure obsidian black */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-[2]"
      />
    </div>
  );
}
