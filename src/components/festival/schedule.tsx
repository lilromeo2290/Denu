"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CalendarDays } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";

type Day = "all" | "day1" | "day2" | "day3" | "finale";

interface Slot {
  time: string;
  title: string;
  venue: string;
  desc: string;
}

const SCHEDULE: Record<Exclude<Day, "all">, { title: string; date: string; slots: Slot[] }> = {
  day1: {
    title: "Day One — Opening & Cultural Awakening",
    date: "Thursday, 26 November",
    slots: [
      { time: "07:00", title: "Sunrise Beach Prayer & Libation", venue: "Denu Beach", desc: "Pouring of libation and interfaith prayers to open the festival." },
      { time: "10:00", title: "Grand Opening Ceremony", venue: "Denu Festival Grounds", desc: "Address by the Paramount Chief, municipal executives and the festival planning committee." },
      { time: "13:00", title: "Health Screening Outreach Launch", venue: "Denu CHPS Compound", desc: "Free BP, diabetes, dental and eye screening for the community." },
      { time: "16:00", title: "Youth Empowerment Forum", venue: "Community Centre", desc: "Mentorship, digital skills and entrepreneurship clinics for youth." },
      { time: "19:00", title: "Choral & Cultural Evening", venue: "Open-air Amphitheatre", desc: "Church choirs and cultural troupes open the festival of voices." },
    ],
  },
  day2: {
    title: "Day Two — Heritage & Knowledge",
    date: "Friday, 27 November",
    slots: [
      { time: "08:00", title: "Educational Symposium", venue: "Denu Community SHS", desc: "Symposium on Ewe heritage, climate action and civic responsibility." },
      { time: "11:00", title: "Women in Trade Exhibition", venue: "Market Square", desc: "Showcase of women entrepreneurs, micro-grant recipients and artisans." },
      { time: "14:00", title: "Miss Nugoryiyi Za Pageant", venue: "Festival Grounds", desc: "Celebrating intelligence, culture and grace of young women of Denu." },
      { time: "17:00", title: "Business & Investment Forum", venue: "Beach Resort Pavilion", desc: "Connecting diaspora investors, local entrepreneurs and government agencies." },
      { time: "20:00", title: "Borborbor & Highlife Night", venue: "Open-air Amphitheatre", desc: "An evening of music, dance and stories under the stars." },
    ],
  },
  day3: {
    title: "Day Three — Sport, Service & Sound",
    date: "Saturday, 28 November",
    slots: [
      { time: "08:00", title: "Football Gala — Quarter & Semi Finals", venue: "Denu Town Park", desc: "Inter-clan football tournament for the coveted Nugoryiyi Za Cup." },
      { time: "10:00", title: "Beach Activities & Family Day", venue: "Denu Beach", desc: "Beach sports, food fair, kids zone and live DJ sets by the ocean." },
      { time: "13:00", title: "Cultural Procession", venue: "Principal Streets", desc: "Parade of clans, schools, masquerades and cultural troupes." },
      { time: "16:00", title: "Traditional Dance Showcase", venue: "Festival Grounds", desc: "Agbadza, Atsia, Adowa and invited cultural groups from across Ghana." },
      { time: "20:00", title: "Awards Night", venue: "Grand Pavilion", desc: "Recognising community heroes, scholars and outstanding sons & daughters of Denu." },
    ],
  },
  finale: {
    title: "Grand Finale — The Durbar of Chiefs",
    date: "Sunday, 29 November",
    slots: [
      { time: "09:00", title: "Thanksgiving Service", venue: "Denu Community Church", desc: "Interdenominational service of thanksgiving." },
      { time: "12:00", title: "Grand Durbar of Chiefs & Queen Mothers", venue: "Durbar Grounds", desc: "The spiritual climax — chiefs and queen mothers in full regalia, in the presence of the people." },
      { time: "15:00", title: "Football Gala — Final & Cup Presentation", venue: "Denu Town Park", desc: "The grand final and presentation of the Nugoryiyi Za Cup." },
      { time: "17:00", title: "Development Projects Commissioning", venue: "Various Sites", desc: "Commissioning of completed community projects funded by the festival." },
      { time: "19:30", title: "Grand Closing Concert & Fireworks", venue: "Beachfront", desc: "Closing concert with headline acts and a fireworks display over the ocean." },
    ],
  },
};

const TABS: { id: Day; label: string }[] = [
  { id: "all", label: "All Days" },
  { id: "day1", label: "Day One" },
  { id: "day2", label: "Day Two" },
  { id: "day3", label: "Day Three" },
  { id: "finale", label: "Grand Finale" },
];

export function Schedule() {
  const [active, setActive] = useState<Day>("all");
  const days = Object.keys(SCHEDULE) as Exclude<Day, "all">[];
  const visible = active === "all" ? days : [active];

  return (
    <SectionShell id="schedule" dark className="bg-forest">
      <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-gold/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Event Schedule"
          title="Four days of culture, service and celebration"
          description="From the sunrise libation on day one to the grand durbar and fireworks of the finale — explore the full programme and filter by day to plan your festival."
        />

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all ${
                  active === t.id
                    ? "bg-gradient-gold text-forest shadow-gold-glow"
                    : "glass-card text-cream/80 hover:text-gold"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="mt-12 space-y-12">
          <AnimatePresence mode="popLayout">
            {visible.map((d, di) => {
              const day = SCHEDULE[d];
              return (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, delay: di * 0.05 }}
                >
                  <div className="flex flex-wrap items-end justify-between gap-3 mb-6 pb-4 border-b border-gold/20">
                    <div>
                      <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.25em] font-semibold">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {day.date}
                      </div>
                      <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-cream font-semibold">
                        {day.title}
                      </h3>
                    </div>
                  </div>

                  <ol className="relative ml-2 sm:ml-4 border-l-2 border-gold/25 pl-6 sm:pl-8 space-y-5">
                    {day.slots.map((s, i) => (
                      <motion.li
                        key={s.title}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.1 }}
                        className="relative group"
                      >
                        {/* Node */}
                        <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-forest border-2 border-gold group-hover:bg-gradient-gold transition-colors">
                          <span className="absolute -inset-1.5 rounded-full border border-gold/40 animate-glow-pulse opacity-0 group-hover:opacity-100" />
                        </span>

                        <div className="glass-card rounded-2xl p-5 sm:p-6 group-hover:border-gold/50 transition-colors">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold tracking-wide">
                              <Clock className="w-3 h-3" />
                              {s.time}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-cream/70 text-xs">
                              <MapPin className="w-3 h-3 text-gold/70" />
                              {s.venue}
                            </span>
                          </div>
                          <h4 className="font-serif text-lg sm:text-xl text-cream font-semibold group-hover:text-gold transition-colors">
                            {s.title}
                          </h4>
                          <p className="mt-1.5 text-sm text-cream/65 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ol>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
