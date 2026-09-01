import Image from "next/image";
import { Countdown, DayTabs, Reveal } from "./_c/Bits";

const U = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=72&auto=format&fit=crop`;

const PHOTO = {
  lattice: "1564864829977-701822524526",
  silos: "1568621422837-a343133e2bb9",
  confetti: "1533174072545-7a4b6ad7a6c3",
  crowdWarm: "1470229722913-7c0e2dbbafd3",
  crowdWide: "1603190287605-e6ade32fa852",
  panels: "1601883683106-42e49ae6eda0",
};

const DAYS = [
  {
    label: "FRI",
    date: "16 JUL",
    acts: [
      { name: "Settling Tank", time: "14:00", hall: "FILTER HOUSE" },
      { name: "Marisol Vent", time: "16:30", hall: "PUMP HALL" },
      { name: "Ninety Degrees Of Silt", time: "18:00", hall: "OUTFALL" },
      { name: "K. Aterna", time: "20:15", hall: "PUMP HALL" },
      { name: "Weir Crest", time: "22:00", hall: "FILTER HOUSE" },
      { name: "Overflow Channel", time: "00:30", hall: "OUTFALL" },
    ],
  },
  {
    label: "SAT",
    date: "17 JUL",
    acts: [
      { name: "Aeration Basin", time: "13:00", hall: "OUTFALL" },
      { name: "Halide Sisters", time: "15:00", hall: "FILTER HOUSE" },
      { name: "Tomasz Grit", time: "17:30", hall: "PUMP HALL" },
      { name: "Sediment Choir", time: "19:45", hall: "SLUDGE LANE" },
      { name: "Rebar", time: "21:30", hall: "PUMP HALL" },
      { name: "Ninety Degrees Of Silt", time: "23:00", hall: "FILTER HOUSE" },
      { name: "Chlorine Contact", time: "01:00", hall: "OUTFALL" },
    ],
  },
  {
    label: "SUN",
    date: "18 JUL",
    acts: [
      { name: "Slow Sand", time: "12:00", hall: "SLUDGE LANE" },
      { name: "Anaerobic Digest", time: "14:30", hall: "OUTFALL" },
      { name: "Marisol Vent", time: "16:00", hall: "PUMP HALL" },
      { name: "Clarifier", time: "18:00", hall: "FILTER HOUSE" },
      { name: "Last Discharge (all halls)", time: "20:00", hall: "SITE-WIDE" },
    ],
  },
];

const HALLS = [
  {
    name: "PUMP HALL",
    cap: "1,100",
    note: "The original engine floor. Six-metre ceiling, no seating, and a reverb tail nobody has managed to tame since 1971.",
    photo: PHOTO.confetti,
  },
  {
    name: "FILTER HOUSE",
    cap: "600",
    note: "Twelve dry filter beds with the gravel removed. Quadraphonic. Standing on the bed walls is permitted and, frankly, the point.",
    photo: PHOTO.crowdWarm,
  },
  {
    name: "OUTFALL",
    cap: "450",
    note: "Open air, under the discharge arches. Runs until sunrise on Friday and Saturday. Bring a coat — it is eleven degrees down there in July.",
    photo: PHOTO.crowdWide,
  },
];

const SPEC: [string, string][] = [
  ["SITE", "Basin Works, decommissioned 2019"],
  ["CAPACITY", "2,400 across four halls"],
  ["AGE", "18+, photo ID at the gate"],
  ["CAMPING", "None. Last shuttle 03:40"],
  ["ACCESS", "Step-free to all four halls"],
  ["CASH", "Card and phone only, no ATM on site"],
  ["SOUND", "Curfew 02:00 Fri/Sat, 22:00 Sun"],
  ["RE-ENTRY", "Unlimited with wristband"],
];

const TICKETS = [
  { tier: "DAY — FRIDAY", price: "€48", state: "AVAILABLE" },
  { tier: "DAY — SATURDAY", price: "€52", state: "SOLD OUT" },
  { tier: "DAY — SUNDAY", price: "€44", state: "AVAILABLE" },
  { tier: "FULL SEASON", price: "€118", state: "AVAILABLE" },
  { tier: "FULL SEASON + SHUTTLE", price: "€139", state: "AVAILABLE" },
];

const FAQ = [
  [
    "There is no headliner on the bill. Is that a mistake?",
    "No. Every act is listed by set time only. The Sunday closer plays all four halls at once through a shared feed, which is the closest thing to a headline slot we run.",
  ],
  [
    "Can I bring a camera?",
    "Handheld, yes. No detachable lenses over 55 mm, no tripods, no drones. The halls are dark and the flash will make you unpopular.",
  ],
  [
    "What is actually still in the building?",
    "Most of it. The pumps, the gantry crane, the filter beds and the chlorine contact tanks are all in place and structurally surveyed. The water is not.",
  ],
  [
    "Is it loud?",
    "Yes. 103 dB(A) averaged in Pump Hall. Free plugs at every bar, and the Outfall stage sits twelve decibels below the indoor halls if you need a night off.",
  ],
];

export default function Home() {
  return (
    <div>
      {/* ---------------------------------------------------------- bar */}
      <header className="sticky top-0 z-50 edge-b bg-slab">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5">
          <a href="#top" className="font-display text-sm font-extrabold tracking-tight">
            CONCRETE SEASON
          </a>
          <span className="hidden text-xs tracking-[0.18em] sm:block">16–18 JUL 2027</span>
          <a
            href="#tickets"
            className="press ml-auto edge px-4 py-2 font-display text-xs font-extrabold"
            style={{ background: "var(--color-signal)", color: "var(--color-bone)" }}
          >
            TICKETS
          </a>
        </div>
      </header>

      {/* -------------------------------------------------------- poster */}
      <section id="top" className="relative edge-b">
        <div className="plate relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={U(PHOTO.lattice, 1800)}
            alt="Grid of cast concrete coffers on the exterior of the Basin Works"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slab/45" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-8">
              <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] sm:text-[8.4rem]">
                Concrete
                <br />
                Season
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="max-w-lg text-base leading-relaxed">
              Three days of electronic music and installation art inside a water treatment works
              that stopped treating water in 2019. Four halls, 2,400 people, no headliner billing
              and no field.
            </p>
            <p className="mt-4 font-display text-sm font-extrabold tracking-tight">
              16–18 JULY 2027 · BASIN WORKS · 18+
            </p>
          </div>
          <div>
            <p className="mb-2 text-[11px] tracking-[0.2em]">GATES OPEN IN</p>
            <Countdown />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- ticker */}
      <div className="overflow-hidden edge-b bg-ink py-2">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {DAYS.flatMap((d) => d.acts.map((a) => a.name)).map((n, idx) => (
                <span
                  key={`${copy}-${n}-${idx}`}
                  className="whitespace-nowrap px-5 font-display text-xs font-extrabold uppercase tracking-tight text-bone"
                >
                  {n} <span className="opacity-40">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- bill */}
      <section id="bill" className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            The bill
          </h2>
          <p className="mt-3 max-w-xl">
            Listed by set time. Nobody is bigger than anybody, and the running order is the running
            order.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <DayTabs days={DAYS} />
        </Reveal>
      </section>

      {/* --------------------------------------------------------- halls */}
      <section id="halls" className="edge-t bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Four halls, one building
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {HALLS.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.06}>
                <article className="plate h-full edge bg-slab">
                  <div className="relative h-52 overflow-hidden edge-b">
                    <Image
                      src={U(h.photo, 640)}
                      alt=""
                      width={640}
                      height={420}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg font-extrabold tracking-tight">
                        {h.name}
                      </h3>
                      <span className="text-xs tabular-nums opacity-70">CAP {h.cap}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{h.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-6">
            <p className="text-sm">
              The fourth is <strong className="font-display">SLUDGE LANE</strong>, capacity 250, in
              the old dosing corridor. It is not on the map and it does not have a schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- site */}
      <section id="site" className="edge-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2 lg:items-start">
          <Reveal className="plate">
            <div className="relative aspect-[4/5] overflow-hidden edge">
              <Image
                src={U(PHOTO.silos, 900)}
                alt="Concrete silos and conveyor gantry at the Basin Works site"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
              The site
            </h2>
            <p className="mt-3 leading-relaxed">
              Built 1971, decommissioned 2019, listed 2023. We have a five-year licence, an
              engineer on site for all three days, and a standing agreement not to paint anything.
            </p>

            <dl className="mt-8 edge">
              {SPEC.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[8.5rem_1fr] gap-3 px-4 py-3 text-sm ${
                    i > 0 ? "border-t-2 border-ink" : ""
                  }`}
                >
                  <dt className="font-display text-[11px] font-extrabold tracking-[0.14em]">
                    {k}
                  </dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- tickets */}
      <section id="tickets" className="edge-t bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Tickets
            </h2>
            <p className="mt-3 max-w-xl">
              Flat pricing, no tiers that get worse the longer you think about it. Face value
              resale through the same page you bought on.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-8">
            <ul className="border-2 border-bone">
              {TICKETS.map((t, i) => {
                const gone = t.state === "SOLD OUT";
                return (
                  <li
                    key={t.tier}
                    className={`flex flex-wrap items-center gap-4 px-4 py-4 ${
                      i > 0 ? "border-t-2 border-bone" : ""
                    }`}
                  >
                    <span className="font-display text-sm font-extrabold tracking-tight">
                      {t.tier}
                    </span>
                    <span className="ml-auto font-display text-lg tabular-nums">{t.price}</span>
                    {gone ? (
                      <span
                        className="px-3 py-1.5 font-display text-[11px] font-extrabold tracking-[0.14em]"
                        style={{ background: "var(--color-signal)", color: "var(--color-bone)" }}
                      >
                        SOLD OUT
                      </span>
                    ) : (
                      <a
                        href="#tickets"
                        className="press border-2 border-bone px-4 py-1.5 font-display text-[11px] font-extrabold tracking-[0.14em] hover:bg-bone hover:text-ink"
                      >
                        BUY
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- faq */}
      <section className="edge-t bg-panel">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Before you ask
            </h2>
          </Reveal>

          <div className="mt-8 edge">
            {FAQ.map(([q, a], i) => (
              <details key={q} className={i > 0 ? "border-t-2 border-ink" : ""}>
                <summary className="flex items-start gap-4 px-4 py-4 font-display text-sm font-extrabold">
                  <span className="plus mt-0.5 shrink-0 text-base leading-none">+</span>
                  {q}
                </summary>
                <p className="px-4 pb-4 pl-12 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- footer */}
      <footer className="edge-t bg-slab">
        <div className="relative">
          <div className="plate relative h-40 overflow-hidden edge-b">
            <Image
              src={U(PHOTO.panels, 1600)}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-4xl">
            16–18 JULY 2027
          </p>
          <div className="mt-8 grid gap-6 text-xs leading-relaxed sm:grid-cols-2">
            <p>
              Concrete Season is a fictional festival. This page is a design-engineering portfolio
              piece by Jason Low — the event, the site and every act on the bill are invented. No
              tickets are for sale.
            </p>
            <p className="sm:text-right">
              Photography from Unsplash: Stefan Spassov, Julian Schultz, Danny Howe, Yvette de Wit,
              Tijs van Leur, the blowup.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
