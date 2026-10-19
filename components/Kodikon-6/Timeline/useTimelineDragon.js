"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { DRAGON, bodyAt, createGeometry, nearestStop, progressAtY, clamp } from "./dragonGeometry";

function attr(node, name, value) { if (node) node.setAttribute(name, String(value)); }

export function paintDragon(art, geometry, progress) {
  const body = bodyAt(geometry, progress);
  const head = body.head;
  for (const layer of ["back", "front"]) {
    for (const part of ["fill", "edge", "belly", "scales", "fins", "ribs", "accents"]) {
      attr(art[`${layer}-${part}`], "d", body.layers[layer][part]);
    }
    attr(art[`${layer}-body`], "opacity", body.revealed ? 1 : 0);
  }
  const angle = Math.atan2(head.ty, head.tx) * 180 / Math.PI;
  attr(art.head, "transform", `translate(${head.x} ${head.y}) rotate(${angle}) scale(${DRAGON.headScale})`);
  // A continuous profile-to-three-quarter yaw, with an upright mirrored
  // profile at each left-facing stop. No instantaneous scaleX flips.
  const profile = Math.abs(head.tx);
  attr(art.profile, "transform", `scale(1 ${head.tx})`);
  attr(art.profile, "opacity", Math.min(1, profile * 1.8));
  attr(art.turn, "opacity", 1 - Math.min(1, profile * 1.8));
  body.limbs.forEach((p, index) => {
    for (const layer of ["back", "front"]) {
      const visible = p && (p.segment % 2 === 0 ? "front" : "back") === layer;
      const node = art[`${layer}-claw-${index}`];
      attr(node, "opacity", visible ? 1 : 0);
      if (visible) attr(node, "transform", `translate(${p.x} ${p.y}) rotate(${Math.atan2(p.ty, p.tx) * 180 / Math.PI}) scale(.8 ${index % 2 ? -.8 : .8})`);
      else node?.removeAttribute("transform");
    }
  });
  for (const layer of ["back", "front"]) {
    const p = body.tail;
    const visible = p && head.length > DRAGON.bodyLength && (p.segment % 2 === 0 ? "front" : "back") === layer;
    attr(art[`${layer}-tail`], "opacity", visible ? 1 : 0);
    if (visible) attr(art[`${layer}-tail`], "transform", `translate(${p.x} ${p.y}) rotate(${Math.atan2(p.ty, p.tx) * 180 / Math.PI})`);
    else art[`${layer}-tail`]?.removeAttribute("transform");
  }
  // Hide the current travel segment's connectors as well as the settled one.
  // No beam can bisect the face while it approaches or leaves a card.
  geometry.anchors.forEach((anchor, index) => {
    attr(art[`connector-${index}`], "opacity", Math.abs(index + 1 - progress) < 0.75 ? 0 : 0.3);
  });
}

export default function useTimelineDragon(sceneRef, anchorRefs, artRef) {
  const [geometry, setGeometry] = useState(null);
  const [active, setActive] = useState(-1);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    let frame = 0;
    let lastSignature = "";
    let disposed = false;
    const measure = () => {
      frame = 0;
      if (disposed || !scene) return;
      const rect = scene.getBoundingClientRect();
      const anchors = anchorRefs.current.filter(Boolean).map(node => {
        const anchor = node.getBoundingClientRect();
        return { x: anchor.left + anchor.width / 2 - rect.left, y: anchor.top + anchor.height / 2 - rect.top };
      });
      if (!anchors.length || !rect.width) return;
      const signature = JSON.stringify([rect.width, rect.height, anchors]);
      if (signature === lastSignature) return;
      lastSignature = signature;
      setGeometry(createGeometry(rect.width, rect.height, anchors));
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const observer = new ResizeObserver(queue);
    observer.observe(scene);
    anchorRefs.current.forEach(node => { if (node?.parentElement) observer.observe(node.parentElement); });
    window.addEventListener("resize", queue);
    document.fonts?.ready.then(() => { if (!disposed) queue(); });
    measure();
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", queue);
    };
  }, [sceneRef, anchorRefs]);

  useEffect(() => {
    if (!geometry) return;
    const scene = sceneRef.current;
    const art = artRef.current;
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = reducedQuery.matches;
    let frame = 0;
    let timer = 0;
    let lastTime = 0;
    let current = 0;
    let target = 0;
    let raw = 0;
    let stop = 0;
    let idle = true;
    let settleStart = 0;
    let settleFrom = 0;
    let selected = -2;
    const count = geometry.anchors.length;
    const select = index => {
      if (selected !== index) { selected = index; setActive(index); }
    };
    const read = () => {
      const rect = scene.getBoundingClientRect();
      return progressAtY(geometry, window.innerHeight * DRAGON.focusLine - rect.top);
    };
    const paint = () => {
      paintDragon(art, geometry, current);
      attr(scene, "data-dragon-progress", current.toFixed(5));
      attr(scene, "data-dragon-state", idle && current === target ? (target === 0 ? "entrance" : "settled") : "travel");
    };
    const tick = time => {
      frame = 0;
      const dt = lastTime ? Math.min(48, time - lastTime) : 16;
      lastTime = time;
      if (reduced || Math.abs(target - current) < DRAGON.epsilon) current = target;
      else if (idle) {
        const t = clamp((time - settleStart) / DRAGON.settleMs, 0, 1);
        current = t === 1 ? target : settleFrom + (target - settleFrom) * (1 - (1 - t) ** 3);
      } else current += (target - current) * (1 - Math.exp(-dt / DRAGON.followMs));
      if (Math.abs(target - current) < DRAGON.epsilon) current = target;
      paint();
      if (idle && current === target) select(target - 1);
      else select(-1);
      if (current !== target) frame = requestAnimationFrame(tick);
      else lastTime = 0;
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const settle = () => {
      idle = true;
      stop = nearestStop(raw, stop, count);
      target = stop;
      settleFrom = current;
      settleStart = performance.now();
      queue();
    };
    const scroll = () => {
      const next = read();
      if (next === raw && current === target && idle) return;
      raw = next;
      clearTimeout(timer);
      if (reduced) {
        stop = nearestStop(raw, stop, count);
        idle = true;
        target = stop;
      } else {
        idle = false;
        target = raw;
        timer = window.setTimeout(settle, DRAGON.idleMs);
      }
      // A scroll outside the scene must not run an otherwise idle RAF loop.
      if (current !== target || !idle) queue();
    };
    const restore = () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      frame = 0;
      raw = read();
      stop = clamp(Math.round(raw), 0, count);
      current = target = stop;
      idle = true;
      paint();
      select(stop - 1);
    };
    const motionChange = () => { reduced = reducedQuery.matches; restore(); };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", restore);
    window.addEventListener("pageshow", restore);
    window.addEventListener("popstate", restore);
    reducedQuery.addEventListener("change", motionChange);
    restore();
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", restore);
      window.removeEventListener("pageshow", restore);
      window.removeEventListener("popstate", restore);
      reducedQuery.removeEventListener("change", motionChange);
    };
  }, [geometry, sceneRef, artRef]);

  return { geometry, active };
}
