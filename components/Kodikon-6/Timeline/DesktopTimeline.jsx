"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { kodikon6TimelineEvents, eventDayLabel, eventTimeLabel, eventDateTime, formatMinute } from "./timelineData";
import styles from "./timeline.module.css";

const DesktopDragonScene = dynamic(() => import("./DesktopDragonScene"), { ssr: false });

// Cards are server rendered to preserve layout during native scroll restoration.
// Only the decorative scene imports/mounts the desktop animation controller.
export default function DesktopTimeline({ enabled }) {
  const sceneRef = useRef(null);
  const anchorRefs = useRef([]);
  const [active, setActive] = useState(-1);
  return (
    <div ref={sceneRef} className={`${styles.scene} hidden lg:block`} data-desktop-timeline data-active-event={active >= 0 ? kodikon6TimelineEvents[active]?.id : ""}>
      {enabled && <DesktopDragonScene sceneRef={sceneRef} anchorRefs={anchorRefs} onActiveChange={setActive} />}
      <ol className={styles.events}>
        {kodikon6TimelineEvents.map((event, index) => {
          const left = index % 2 === 0;
          return (
            <li key={event.id} className={styles.row} data-event-id={event.id}>
              <article className={`${styles.card} ${left ? styles.left : styles.right}`} data-active={active === index} aria-current={active === index ? "step" : undefined}>
                <span ref={node => { anchorRefs.current[index] = node; }} className={styles.anchor} aria-hidden="true" />
                <div className={styles.cardTop}>
                  <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.day}>{eventDayLabel(event)}</span>
                </div>
                <h3>{event.title}</h3>
                <p className={styles.time}>
                  {event.kind === "deadline" ? <>By <time dateTime={eventDateTime(event.dayOffset, event.endMinute)}>{formatMinute(event.endMinute)}</time></> : <>
                    <time dateTime={eventDateTime(event.dayOffset, event.startMinute)}>{eventTimeLabel(event).split("–")[0]}</time>
                    {" – "}<time dateTime={eventDateTime(event.endDayOffset, event.endMinute)}>{eventTimeLabel(event).split("–")[1]}</time>
                  </>}
                </p>
                {event.dayOffset !== event.endDayOffset && <p className={styles.note}>Crosses midnight into Day 2.</p>}
                <span aria-hidden="true" className={styles.corner} />
              </article>
            </li>
          );
        })}
      </ol>
      <p className={styles.endnote}>End of the itinerary</p>
    </div>
  );
}
