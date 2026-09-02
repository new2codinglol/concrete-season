"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import DecryptedText from "./reactbits/DecryptedText";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/* --------------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.38, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------- */
/* Gates open 16 July 2027, 14:00 local. Rendered client-side only: a       */
/* server-rendered clock would ship a number that is already wrong.        */

const GATES = Date.UTC(2027, 6, 16, 12, 0, 0); // 14:00 CEST

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now === null ? null : split(GATES - now);
  const cells: [string, string][] =
    t === null
      ? [["—", "DAYS"], ["—", "HRS"], ["—", "MIN"], ["—", "SEC"]]
      : [
          [String(t.d), "DAYS"],
          [String(t.h).padStart(2, "0"), "HRS"],
          [String(t.m).padStart(2, "0"), "MIN"],
          [String(t.s).padStart(2, "0"), "SEC"],
        ];

  return (
    <div className="grid grid-cols-4 edge">
      {cells.map(([v, l], i) => (
        <div
          key={l}
          className={`px-3 py-4 text-center ${i < 3 ? "border-r-2 border-ink" : ""}`}
        >
          <p className="font-display text-2xl font-extrabold tabular-nums sm:text-4xl">{v}</p>
          <p className="mt-1 text-[10px] font-bold tracking-[0.2em]">{l}</p>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Day switcher for the bill. Three days is few enough that tabs beat a    */
/* dropdown, and the panel swap is a 180 ms crossfade — long enough to     */
/* read as a change, short enough not to be waited on.                    */

export function DayTabs({
  days,
}: {
  days: { label: string; date: string; acts: { name: string; time: string; hall: string }[] }[];
}) {
  const [i, setI] = useState(0);
  const day = days[i];

  return (
    <div>
      <div role="tablist" aria-label="Festival days" className="flex flex-wrap edge">
        {days.map((d, n) => {
          const active = n === i;
          return (
            <button
              key={d.label}
              role="tab"
              aria-selected={active}
              onClick={() => setI(n)}
              className={`press flex-1 px-4 py-3 text-left font-display text-sm font-extrabold ${
                n < days.length - 1 ? "border-r-2 border-ink" : ""
              }`}
              style={{
                background: active ? "var(--color-ink)" : "transparent",
                color: active ? "var(--color-bone)" : "var(--color-ink)",
              }}
            >
              {d.label}
              <span className="block text-[10px] font-normal opacity-70">{d.date}</span>
            </button>
          );
        })}
      </div>

      <motion.ul
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: EASE_OUT }}
        className="edge border-t-0"
      >
        {day.acts.map((a, n) => (
          <li
            key={a.name}
            className={`grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-3 px-4 py-3 ${
              n > 0 ? "border-t-2 border-ink" : ""
            }`}
          >
            <span className="text-xs tabular-nums opacity-70">{a.time}</span>
            {/* React Bits DecryptedText. A lineup is a thing you scan, so the
                names resolve out of noise as the cursor passes — and a
                decommissioned plant is the one venue where a terminal
                scramble is not an affectation. */}
            <DecryptedText
              text={a.name}
              animateOn="hover"
              sequential
              revealDirection="start"
              speed={28}
              maxIterations={12}
              useOriginalCharsOnly={false}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\|=-_"
              parentClassName="font-display text-sm font-extrabold uppercase sm:text-base"
              className="font-display"
              encryptedClassName="font-display opacity-45"
            />
            <span className="text-[11px] tracking-[0.14em] opacity-70">{a.hall}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
