// All coordinates are scene CSS pixels. One ordered pose per measured card,
// preceded by pose 0: the intentional head-only side entrance.
export const DRAGON = Object.freeze({
  cyan: "#22D3EE", blue: "#06B6D4", amber: "#F59E0B", ink: "#020a12",
  headScale: 0.74, snoutReach: 92, targetGap: 18,
  bodyRadius: 18, bodyLength: 1900, sampleCount: 72,
  curveHandle: 135, idleMs: 140, hysteresis: 0.08,
  followMs: 105, settleMs: 380, focusLine: 0.48, epsilon: 0.0003,
  entranceY: 150, towerTop: 12, maxTowerWidth: 338,
});
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const mix = (a, b, t) => a + (b - a) * t;
const point = (x, y) => ({ x, y });

export function bezier(curve, t) {
  const [a, b, c, d] = curve;
  const u = 1 - t;
  const x = u ** 3 * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t ** 3 * d.x;
  const y = u ** 3 * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t ** 3 * d.y;
  const dx = 3 * u * u * (b.x - a.x) + 6 * u * t * (c.x - b.x) + 3 * t * t * (d.x - c.x);
  const dy = 3 * u * u * (b.y - a.y) + 6 * u * t * (c.y - b.y) + 3 * t * t * (d.y - c.y);
  const length = Math.hypot(dx, dy) || 1;
  return { x, y, tx: dx / length, ty: dy / length };
}

export function createGeometry(width, height, anchors) {
  const center = width / 2;
  const towerWidth = Math.min(DRAGON.maxTowerWidth, width * 0.31);
  const entrance = { x: anchors[0].x + 16, y: DRAGON.entranceY, facing: 1 };
  const poses = [entrance, ...anchors.map((anchor, index) => {
    const facing = index % 2 === 0 ? -1 : 1;
    return { x: anchor.x - facing * (DRAGON.snoutReach * DRAGON.headScale + DRAGON.targetGap), y: anchor.y, facing };
  })];
  const curves = poses.slice(1).map((end, index) => {
    const start = poses[index];
    const handle = index === 0 ? Math.min(310, width * 0.29) : DRAGON.curveHandle;
    return [start, point(start.x + start.facing * handle, start.y), point(end.x - end.facing * handle, end.y), end];
  });
  let length = 0;
  let previous = null;
  const samples = [];
  curves.forEach((curve, index) => {
    for (let j = index === 0 ? 0 : 1; j <= DRAGON.sampleCount; j++) {
      const t = j / DRAGON.sampleCount;
      const p = bezier(curve, t);
      if (previous) length += Math.hypot(p.x - previous.x, p.y - previous.y);
      const sample = { ...p, step: index + t, length, segment: index, sampleIndex: samples.length };
      samples.push(sample);
      previous = sample;
    }
  });
  return { width, height, center, towerWidth, towerBottom: DRAGON.towerTop + towerWidth * 1620 / 500, anchors, poses, curves, samples };
}

export function poseAt(geometry, progress) {
  const p = clamp(progress, 0, geometry.curves.length);
  const index = Math.min(Math.floor(p), geometry.curves.length - 1);
  const t = p - index;
  const pose = bezier(geometry.curves[index], t);
  const sampleIndex = Math.min(Math.floor(p * DRAGON.sampleCount), geometry.samples.length - 2);
  const a = geometry.samples[sampleIndex];
  const b = geometry.samples[sampleIndex + 1];
  const fraction = clamp((p - a.step) / (b.step - a.step), 0, 1);
  return { ...pose, length: mix(a.length, b.length, fraction), step: p, segment: index };
}

// Convert a viewport focus line into a continuous journey through measured
// anchor heights. No relationship between event count and pagoda floor count.
export function progressAtY(geometry, y) {
  const poses = geometry.poses;
  if (y <= poses[0].y) return 0;
  for (let i = 1; i < poses.length; i++) {
    if (y <= poses[i].y) return i - 1 + (y - poses[i - 1].y) / (poses[i].y - poses[i - 1].y);
  }
  return poses.length - 1;
}

export function nearestStop(progress, previous, count) {
  const nearest = clamp(Math.round(progress), 0, count);
  // Hysteresis is symmetric. The separate entrance is always recoverable.
  if (progress < 0.35) return 0;
  if (Math.abs(progress - previous) <= 0.5 + DRAGON.hysteresis) return previous;
  return nearest;
}

const xy = p => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
const offset = (p, n) => ({ x: p.x - p.ty * n, y: p.y + p.tx * n });
const line = points => points.length ? `M${points.map(xy).join("L")}` : "";

function sampleAtLength(samples, length) {
  let low = 0, high = samples.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (samples[mid].length < length) low = mid + 1;
    else high = mid;
  }
  const b = samples[Math.max(1, low)], a = samples[Math.max(1, low) - 1];
  const t = clamp((length - a.length) / (b.length - a.length), 0, 1);
  const tx = mix(a.tx, b.tx, t), ty = mix(a.ty, b.ty, t), magnitude = Math.hypot(tx, ty) || 1;
  return { ...b, x: mix(a.x, b.x, t), y: mix(a.y, b.y, t), tx: tx / magnitude, ty: ty / magnitude, length, sampleIndex: -1 };
}

// Generate a finite, tapered anatomical body from the SAME curve as the head.
// Runs switch depth at the outer turns, away from the architecture silhouette.
// The entry has length zero; on reversing every coordinate and reveal retraces.
export function bodyAt(geometry, progress) {
  const head = poseAt(geometry, progress);
  const startLength = Math.max(0, head.length - DRAGON.bodyLength);
  // Interpolate the tail's exact arc-length position instead of advancing it
  // one sample at a time. Detail indices stay fixed while the body slides.
  const tail = sampleAtLength(geometry.samples, startLength);
  const available = geometry.samples.filter(p => p.length > startLength && p.step < progress);
  const points = progress > 0 ? [tail, ...available.filter(p => p.sampleIndex % 2 === 0)] : [];
  points.push(head);
  const layers = {
    back: { fill: "", edge: "", belly: "", scales: "", fins: "", ribs: "", accents: "" },
    front: { fill: "", edge: "", belly: "", scales: "", fins: "", ribs: "", accents: "" },
  };
  const radius = p => DRAGON.bodyRadius * Math.min(1, Math.max(0, (p.length - startLength) / 105)) * (0.87 + 0.13 * Math.cos((head.length - p.length) / 150));
  let run = [];
  let depth;
  function flush() {
    if (run.length < 2) return;
    const layer = layers[depth];
    const upper = run.map(p => offset(p, radius(p)));
    const lower = run.map(p => offset(p, -radius(p)));
    layer.fill += `${line(upper)}L${lower.slice().reverse().map(xy).join("L")}Z`;
    layer.edge += line(upper) + line(lower);
    layer.belly += line(run.map(p => offset(p, radius(p) * 0.42)));
  }
  points.forEach((p, index) => {
    const nextDepth = p.segment % 2 === 0 ? "front" : "back";
    if (nextDepth !== depth) {
      flush();
      run = index ? [points[index - 1]] : [];
      depth = nextDepth;
    }
    run.push(p);
    const r = radius(p);
    const layer = layers[nextDepth];
    if (p.sampleIndex >= 0 && p.sampleIndex % 4 === 0 && r > 5 && head.length - p.length > 26) {
      // Three staggered rows of engraved, overlapping crescent scales.
      for (const row of [-0.68, -0.18, 0.23]) {
        const a = offset(p, r * row - 3.8);
        const b = offset(p, r * row + 3.8);
        const c = offset({ ...p, x: p.x - p.tx * 8, y: p.y - p.ty * 8 }, r * row);
        const scale = `M${xy(a)}Q${xy(c)} ${xy(b)}`;
        layer.scales += scale;
        if (p.sampleIndex % 28 === 0 && row === -0.18) layer.accents += scale;
      }
      const a = offset(p, r * .44), b = offset(p, r * .96);
      layer.ribs += `M${xy(a)}Q${xy({x:(a.x+b.x)/2-p.tx*3,y:(a.y+b.y)/2-p.ty*3})} ${xy(b)}`;
    }
    if (p.sampleIndex >= 0 && p.sampleIndex % 8 === 0 && r > 9 && head.length - p.length > 40) {
      const base = offset(p, -r);
      const peak = offset({ ...p, x: p.x - p.tx * 7, y: p.y - p.ty * 7 }, -r - 13);
      const end = { x: base.x - p.tx * 16, y: base.y - p.ty * 16 };
      layer.fins += `M${xy(base)}Q${xy(peak)} ${xy(end)}`;
    }
  });
  flush();
  const limbAt = distance => {
    const target = head.length - distance;
    return target > startLength + 90 ? sampleAtLength(geometry.samples, target) : null;
  };
  return { head, layers, limbs: [limbAt(150), limbAt(440)], tail: points[0], revealed: head.length > 0.01 };
}
