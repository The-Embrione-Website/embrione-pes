
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Edges,
  RoundedBox,
  Text,
  useCursor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { events } from "../../data/events";
import type { EventInfo } from "../../data/events";
import "./event-helix.css";

const RADIUS = 3.8;
const EVENT_GAP = 4.3;
const ANGLE_STEP = (Math.PI * 2) / events.length;

type SceneProps = {
  progressRef: MutableRefObject<number>;
  targetProgressRef: MutableRefObject<number>;
  onOpen: (event: EventInfo) => void;
  onActiveIndex: (index: number) => void;
};

/* ==========================================
   LOADING PLACEHOLDER
   Renders while an individual event image loads.
========================================== */

function EventCardPlaceholder({
  event,
  index,
  progressRef,
  onOpen,
}: {
  event: EventInfo;
  index: number;
  progressRef: MutableRefObject<number>;
  onOpen: (event: EventInfo) => void;
}) {
  const cardRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (!cardRef.current) return;

    const progress = progressRef.current;
    const angle =
      index * ANGLE_STEP -
      progress * Math.PI * 2 +
      Math.PI / 2;

    const factor = 1 - Math.exp(-delta * 5);

    cardRef.current.position.x = THREE.MathUtils.lerp(
      cardRef.current.position.x,
      Math.cos(angle) * RADIUS,
      factor
    );

    cardRef.current.position.y = THREE.MathUtils.lerp(
      cardRef.current.position.y,
      2.1 - index * EVENT_GAP,
      factor
    );

    cardRef.current.position.z = THREE.MathUtils.lerp(
      cardRef.current.position.z,
      Math.sin(angle) * RADIUS,
      factor
    );

    cardRef.current.quaternion.slerp(camera.quaternion, factor);
  });

  return (
    <group
      ref={cardRef}
      onClick={(e) => {
        e.stopPropagation();
        onOpen(event);
      }}
    >
      <RoundedBox args={[4.5, 2.65, 0.16]} radius={0.1} smoothness={3}>
        <meshBasicMaterial color="#07101b" />
        <Edges color="#22d3ee" threshold={15} />
      </RoundedBox>

      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[0.035, 1.8]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
}

/* ==========================================
   EVENT CARD
========================================== */

function EventCard({
  event,
  index,
  progressRef,
  onOpen,
}: {
  event: EventInfo;
  index: number;
  progressRef: MutableRefObject<number>;
  onOpen: (event: EventInfo) => void;
}) {
  const cardRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const [hovered, setHovered] = useState(false);

  const texture = useTexture(event.image);
  const { camera } = useThree();

  useCursor(hovered);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  useFrame((_, delta) => {
    if (!cardRef.current || !materialRef.current) return;

    const progress = progressRef.current;

    const angle =
      index * ANGLE_STEP -
      progress * Math.PI * 2 +
      Math.PI / 2;

    const x = Math.cos(angle) * RADIUS;
    const z = Math.sin(angle) * RADIUS;
    const y = 2.1 - index * EVENT_GAP;

    // Frame-rate-independent smoothing.
    const factor = 1 - Math.exp(-delta * 5);

    cardRef.current.position.x = THREE.MathUtils.lerp(
      cardRef.current.position.x,
      x,
      factor
    );

    cardRef.current.position.y = THREE.MathUtils.lerp(
      cardRef.current.position.y,
      y,
      factor
    );

    cardRef.current.position.z = THREE.MathUtils.lerp(
      cardRef.current.position.z,
      z,
      factor
    );

    cardRef.current.quaternion.slerp(camera.quaternion, factor);

    const distance = Math.abs(index - progress);
    const focus = THREE.MathUtils.clamp(1 - distance / 1.5, 0, 1);

    const scale = (0.78 + focus * 0.22) * (hovered ? 1.04 : 1);

    cardRef.current.scale.setScalar(
      THREE.MathUtils.lerp(
        cardRef.current.scale.x,
        scale,
        factor
      )
    );

    materialRef.current.opacity = THREE.MathUtils.lerp(
      materialRef.current.opacity,
      0.3 + focus * 0.65,
      factor
    );
  });

  return (
    <group
      ref={cardRef}
      onClick={(e) => {
        e.stopPropagation();
        onOpen(event);
      }}
    >
      <group
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <RoundedBox
          args={[4.5, 2.65, 0.16]}
          radius={0.1}
          smoothness={5}
        >
          <meshBasicMaterial
            ref={materialRef}
            color="#07101b"
            transparent
            opacity={0.8}
            depthWrite={false}
          />
          <Edges color="#22d3ee" threshold={15} />
        </RoundedBox>

        {/* Event image */}
        <mesh position={[1.12, 0, 0.095]}>
          <planeGeometry args={[1.55, 2.05]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.92}
            toneMapped={false}
          />
        </mesh>

        {/* Card labels */}
        <Text
          position={[-1.95, 0.91, 0.1]}
          fontSize={0.12}
          color="#22d3ee"
          anchorX="left"
          anchorY="middle"
        >
          {`EMBRIONE / ${event.edition}`}
        </Text>

        <Text
          position={[-1.95, 0.25, 0.1]}
          fontSize={0.38}
          maxWidth={2.7}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
        >
          {event.name}
        </Text>

        <Text
          position={[-1.95, -0.36, 0.1]}
          fontSize={0.13}
          color="#22d3ee"
          anchorX="left"
          anchorY="middle"
        >
          {event.year}
        </Text>

        <Text
          position={[-1.95, -0.83, 0.1]}
          fontSize={0.095}
          maxWidth={2.7}
          color="#b5c2d0"
          anchorX="left"
          anchorY="middle"
        >
          CLICK TO EXPLORE â†’
        </Text>
      </group>
    </group>
  );
}

/* ==========================================
   3D HELIX WORLD
========================================== */

function EventsWorld({
  progressRef,
  targetProgressRef,
  onOpen,
  onActiveIndex,
}: SceneProps) {
  const { camera } = useThree();
  const ringsRef = useRef<THREE.Group>(null);
  const activeIndexTimerRef = useRef(0);

  useFrame((_, delta) => {
    const factor = 1 - Math.exp(-delta * 4.5);

    // Keep the actual animation inside the Three.js frame loop.
    progressRef.current = THREE.MathUtils.lerp(
      progressRef.current,
      targetProgressRef.current,
      factor
    );

    const progress = progressRef.current;
    const targetY = 2.1 - progress * EVENT_GAP;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      0,
      factor
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      factor
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      11.5,
      factor
    );

    camera.lookAt(0, camera.position.y, 0);

    if (ringsRef.current) {
      ringsRef.current.rotation.y = progress * Math.PI * 2;
    }

    // Update React only when the active edition may have changed.
    activeIndexTimerRef.current += delta;

    if (activeIndexTimerRef.current >= 0.12) {
      activeIndexTimerRef.current = 0;
      onActiveIndex(
        THREE.MathUtils.clamp(
          Math.round(progress),
          0,
          events.length - 1
        )
      );
    }
  });

  return (
    <group>
      {/* Central cyan axis */}
      <mesh position={[0, -6.5, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 36, 8]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Soft glow around the axis */}
      <mesh position={[0, -6.5, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 36, 8]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </mesh>

      {/* Orbit rings */}
      <group ref={ringsRef}>
        {events.map((event, index) => (
          <mesh
            key={event.id}
            position={[0, 2.1 - index * EVENT_GAP, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[4.8, 0.012, 6, 64]} />
            <meshBasicMaterial
              color="#00E5FF"
              transparent
              opacity={0.22}
            />
          </mesh>
        ))}
      </group>

      {/* Event cards load independently */}
      {events.map((event, index) => (
        <Suspense
          key={event.id}
          fallback={
            <EventCardPlaceholder
              event={event}
              index={index}
              progressRef={progressRef}
              onOpen={onOpen}
            />
          }
        >
          <EventCard
            event={event}
            index={index}
            progressRef={progressRef}
            onOpen={onOpen}
          />
        </Suspense>
      ))}
    </group>
  );
}

/* ==========================================
   EVENT DETAILS MODAL
========================================== */

function EventModal({
  event,
  onClose,
}: {
  event: EventInfo;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="helix-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="helix-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="helix-modal-title"
      >
        <div className="helix-modal-top">
          <span>EMBRIONE / EVENT ARCHIVE</span>
          <button onClick={onClose} aria-label="Close details">
            Ã—
          </button>
        </div>

        <p className="helix-modal-edition">{event.edition}</p>
        <h2 id="helix-modal-title">{event.name}</h2>
        <p className="helix-modal-year">{event.year}</p>

        <div
          className="helix-modal-image"
          style={{ backgroundImage: `url("${event.image}")` }}
        />

        <p className="helix-modal-description">{event.description}</p>

        <div className="helix-modal-bottom">
          <span>EMBRIONE ARCHIVE SYSTEM</span>
          <span>{event.edition}</span>
        </div>
      </section>
    </div>
  );
}

/* ==========================================
   MAIN EVENTS HELIX
========================================== */

export default function EventHelix() {
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const touchYRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] =
    useState<EventInfo | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const isInsideModal = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest(".helix-modal-panel"));

    const handleWheel = (e: WheelEvent) => {
      if (isInsideModal(e.target) || selectedEvent) return;

      e.preventDefault();

      targetProgressRef.current = THREE.MathUtils.clamp(
        targetProgressRef.current + Math.sign(e.deltaY) * 0.16,
        0,
        events.length - 1
      );
    };

    const handleKey = (e: KeyboardEvent) => {
      if (selectedEvent) return;

      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();

        targetProgressRef.current = THREE.MathUtils.clamp(
          targetProgressRef.current + 0.45,
          0,
          events.length - 1
        );
      }

      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();

        targetProgressRef.current = THREE.MathUtils.clamp(
          targetProgressRef.current - 0.45,
          0,
          events.length - 1
        );
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isInsideModal(e.target)) return;
      touchYRef.current = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isInsideModal(e.target) || selectedEvent) return;

      const y = e.touches[0]?.clientY;

      if (y === undefined) return;

      const difference = touchYRef.current - y;

      if (Math.abs(difference) < 12) return;

      e.preventDefault();

      targetProgressRef.current = THREE.MathUtils.clamp(
        targetProgressRef.current +
          Math.sign(difference) * 0.12,
        0,
        events.length - 1
      );

      touchYRef.current = y;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("keydown", handleKey);

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [selectedEvent]);

  const closeModal = () => setSelectedEvent(null);

  return (
    <main className="helix-page">
      <div className="helix-stage">
        <Canvas
          camera={{
            position: [0, 2.1, 11.5],
            fov: 42,
            near: 0.1,
            far: 100,
          }}
          dpr={[1, 1.25]}
          gl={{
            antialias: false,
            alpha: false,
            powerPreference: "high-performance",
          }}
        >
          <color attach="background" args={["#030610"]} />
          <fog attach="fog" args={["#030610", 16, 38]} />

          <EventsWorld
            progressRef={progressRef}
            targetProgressRef={targetProgressRef}
            onOpen={setSelectedEvent}
            onActiveIndex={(index) => {
              setActiveIndex((current) =>
                current === index ? current : index
              );
            }}
          />
        </Canvas>

        {/* Flowing KODIKON text */}
        <div className="helix-axis-flow" aria-hidden="true">
          <div className="helix-axis-track">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i}>KODIKON&nbsp; â€¢</span>
            ))}
          </div>
        </div>

        {/* Fixed centre label */}
        <div className="helix-centre-label" aria-hidden="true">
          <span className="helix-centre-mark">E.</span>
          <strong>EMBRIONE</strong>
          <small>EVENT ARCHIVE</small>
        </div>

        <header className="helix-topbar">
          <span>EMBRIONE / EVENTS</span>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(events.length).padStart(2, "0")}
          </span>
        </header>

        <div className="helix-heading">
          <p>THE KODIKON ARCHIVE</p>
          <h1>
            Built to create.
            <br />
            <span>Made to remember.</span>
          </h1>
          <small>SCROLL TO ROTATE THROUGH THE EVENTS</small>
        </div>

        <div className="helix-active-event">
          <span>SELECTED EDITION</span>
          <strong>{events[activeIndex].name}</strong>
          <small>{events[activeIndex].edition}</small>
        </div>

        <div className="helix-scroll-hint">
          <span>SCROLL TO DESCEND</span>
          <span className="helix-scroll-line" />
        </div>

        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={closeModal}
          />
        )}
      </div>
    </main>
  );
}

