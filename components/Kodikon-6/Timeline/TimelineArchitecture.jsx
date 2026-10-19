import React from "react";
import { SingleJapaneseTower } from "./SingleJapaneseTower";
import { DRAGON } from "./dragonGeometry";

// Reuse the original upper stories unchanged, then continue the fourth story's
// detailed roof, chamber, lattice and balcony all the way to the ground floor.
// Coordinates parameterize the existing artwork; the SVG is never stretched.
function towerLayout(geometry) {
  const scale = geometry.towerWidth / 500;
  const baseY = (geometry.height - DRAGON.towerTop - 40) / scale - 200;
  const floors = [
    { roofTopY: 220, roofEdgeY: 275, roofWidth: 290, roomWidth: 220, roomTopY: 290, roomBottomY: 390, balconyBottomY: 404 },
    { roofTopY: 404, roofEdgeY: 474, roofWidth: 330, roomWidth: 250, roomTopY: 492, roomBottomY: 606, balconyBottomY: 622 },
    { roofTopY: 622, roofEdgeY: 702, roofWidth: 370, roomWidth: 280, roomTopY: 722, roomBottomY: 846, balconyBottomY: 864 },
    { roofTopY: 864, roofEdgeY: 954, roofWidth: 410, roomWidth: 315, roomTopY: 976, roomBottomY: 1110, balconyBottomY: 1130 },
  ];
  const groundTop = baseY - 290;
  const extraHeight = Math.max(0, groundTop - 1130);
  const extraCount = Math.max(0, Math.round(extraHeight / 266));
  for (let i = 0; i < extraCount; i++) {
    const top = 1130 + i * extraHeight / extraCount;
    const bottom = 1130 + (i + 1) * extraHeight / extraCount;
    floors.push({
      roofTopY: top, roofEdgeY: top + 90, roofWidth: 410, roomWidth: 315,
      roomTopY: top + 112, roomBottomY: bottom - 20, balconyBottomY: bottom,
    });
  }
  floors.push({
    roofTopY: groundTop, roofEdgeY: groundTop + 100, roofWidth: 450, roomWidth: 350,
    roomTopY: groundTop + 124, roomBottomY: baseY - 20, balconyBottomY: baseY,
    isGroundLevel: true,
  });
  return {
    baseY, scale,
    floors: floors.map((floor, index) => ({
      ...floor, floorNum: floors.length - index,
      // Preserve the original four story seals; repeat their decorative motif.
      kanji: ["壱", "弐", "参", "四"][index % 4],
    })),
  };
}

function FloorSilhouette({ floor }) {
  const { roofTopY, roofEdgeY, roofWidth, roomWidth, roomTopY, roomBottomY, balconyBottomY } = floor;
  const roof = roofWidth / 2;
  const room = roomWidth / 2;
  return (
    <g>
      <path d={`M${250 - roof * .4} ${roofTopY} Q${250 - roof * .72} ${roofEdgeY - 8} ${250 - roof} ${roofEdgeY} C${250 - roof + 25} ${roofEdgeY + 6} ${250 - roof * .5} ${roofEdgeY + 3} 250 ${roofEdgeY - 2} C${250 + roof * .5} ${roofEdgeY + 3} ${250 + roof - 25} ${roofEdgeY + 6} ${250 + roof} ${roofEdgeY} Q${250 + roof * .72} ${roofEdgeY - 8} ${250 + roof * .4} ${roofTopY}Z`} />
      <rect x={250 - roof * .72} y={roofEdgeY} width={roofWidth * .72} height={roomTopY - roofEdgeY} />
      <rect x={250 - room} y={roomTopY} width={roomWidth} height={roomBottomY - roomTopY} />
      <rect x={250 - room - 8} y={roomBottomY - 12} width={roomWidth + 16} height={balconyBottomY - roomBottomY + 12} />
    </g>
  );
}

// The rear dragon passes use precisely the same floor layout as the artwork.
export function ArchitectureOcclusion({ geometry }) {
  const { baseY, scale, floors } = towerLayout(geometry);
  return (
    <g fill="black" transform={`translate(${geometry.center - geometry.towerWidth / 2} ${DRAGON.towerTop}) scale(${scale})`}>
      <path d="M235 0H265V220H235Z" />
      {floors.map(floor => <FloorSilhouette key={floor.floorNum} floor={floor} />)}
      <path d={`M40 ${baseY}H460L485 ${baseY + 185}H15Z`} />
    </g>
  );
}

export default function TimelineArchitecture({ geometry }) {
  const { baseY, scale, floors } = towerLayout(geometry);
  return (
    <g aria-hidden="true" pointerEvents="none">
      <SingleJapaneseTower
        embedded
        x={geometry.center - geometry.towerWidth / 2}
        y={DRAGON.towerTop}
        width={geometry.towerWidth}
        height={(baseY + 200) * scale}
        floors={floors}
        baseY={baseY}
      />
    </g>
  );
}
