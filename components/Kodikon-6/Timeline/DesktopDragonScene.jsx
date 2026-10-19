"use client";

import React, { useEffect, useRef } from "react";
import TimelineDragon from "./TimelineDragon";
import useTimelineDragon from "./useTimelineDragon";

export default function DesktopDragonScene({ sceneRef, anchorRefs, onActiveChange }) {
  const artRef = useRef({});
  const { geometry, active } = useTimelineDragon(sceneRef, anchorRefs, artRef);
  useEffect(() => { onActiveChange(active); }, [active, onActiveChange]);
  return <TimelineDragon geometry={geometry} artRef={artRef} />;
}
