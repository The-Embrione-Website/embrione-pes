import React, { useId } from "react";
import { DragonProfile, DragonTurningFace, DragonClaw, DragonTail } from "./DragonArtwork";
import TimelineArchitecture, { ArchitectureOcclusion } from "./TimelineArchitecture";
import { DRAGON } from "./dragonGeometry";

function BodyLayer({ layer, artRef }) {
  const ref = name => node => { artRef.current[`${layer}-${name}`] = node; };
  return (
    <g ref={ref("body")} opacity="0">
      <path ref={ref("fill")} fill={DRAGON.ink} stroke="none" />
      <path ref={ref("edge")} fill="none" stroke={DRAGON.cyan} strokeWidth="1.8" />
      <path ref={ref("belly")} fill="none" stroke={DRAGON.blue} strokeWidth="1" />
      <path ref={ref("scales")} fill="none" stroke={DRAGON.blue} strokeWidth=".9" />
      <path ref={ref("ribs")} fill="none" stroke={DRAGON.cyan} strokeOpacity=".55" strokeWidth=".8" />
      <path ref={ref("accents")} fill="none" stroke={DRAGON.amber} strokeOpacity=".7" strokeWidth=".8" />
      <path ref={ref("fins")} fill="none" stroke={DRAGON.cyan} strokeWidth="1.2" />
      {[0, 1].map(index => <g key={index} ref={ref(`claw-${index}`)} opacity="0"><DragonClaw /></g>)}
      <g ref={ref("tail")} opacity="0"><DragonTail /></g>
    </g>
  );
}

export default function TimelineDragon({ geometry, artRef }) {
  const id = useId().replace(/:/g, "");
  if (!geometry) return null;
  const { width, height, center, anchors } = geometry;
  const ref = name => node => { artRef.current[name] = node; };
  return (
    <svg data-timeline-dragon aria-hidden="true" focusable="false" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox={`0 0 ${width} ${height}`} fill="none">
      <defs>
        <filter id={`${id}-glow`} x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.7" result="blur" />
          <feFlood floodColor={DRAGON.blue} floodOpacity=".35" />
          <feComposite in2="blur" operator="in" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <mask id={`${id}-behind`} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height} style={{ maskType: "luminance" }}>
          <rect width={width} height={height} fill="white" />
          <ArchitectureOcclusion geometry={geometry} />
        </mask>
        {/* Entry is an intentional reveal zone; the zero-length body is fully
            concealed at the peek. Only the independently drawn head is visible. */}
        <clipPath id={`${id}-entry`} clipPathUnits="userSpaceOnUse">
          <rect x="0" y={DRAGON.entranceY - 1} width={width} height={height} />
        </clipPath>
      </defs>
      <g stroke={DRAGON.cyan} strokeWidth="1" strokeDasharray="2 5">
        {anchors.map((anchor, index) => <path key={index} ref={ref(`connector-${index}`)} d={`M${anchor.x} ${anchor.y}H${center}`} opacity=".3" />)}
      </g>
      <g clipPath={`url(#${id}-entry)`}>
        <g mask={`url(#${id}-behind)`}><BodyLayer layer="back" artRef={artRef} /></g>
      </g>
      <TimelineArchitecture geometry={geometry} />
      <g clipPath={`url(#${id}-entry)`}><BodyLayer layer="front" artRef={artRef} /></g>
      <g ref={ref("head")} filter={`url(#${id}-glow)`}>
        <g ref={ref("profile")}><DragonProfile /></g>
        <g ref={ref("turn")} opacity="0"><DragonTurningFace /></g>
      </g>
    </svg>
  );
}
