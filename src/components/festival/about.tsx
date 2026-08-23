"use client";

import { motion } from "framer-motion";
import {
  Home,
  Sparkles,
  Users,
  HandHeart,
  BookOpen,
  HeartHandshake,
  TrendingUp,
  Radio,
  Award,
  Quote,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { FestivalLogo } from "./festival-logo";

const NARRATIVE_BLOCKS = [
  {
    icon: Home,
    eyebrow: "A Homecoming Celebration",
    title: "An annual homecoming of the people of Denu",
    body: "Denu Nugoryiyi Zà is an annual homecoming and cultural celebration of the people of Denu, held a week after the Easter festivities. The festival was established to create a platform that unites the sons and daughters of Denu, both at home and across the diaspora, while welcoming friends, visitors and people from diverse cultures, faiths and backgrounds to celebrate the rich heritage, values and identity of the community.",
    image:
      "https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=1200&q=80",
    flip: false,
  },
  {
    icon: Sparkles,
    eyebrow: "The Meaning of Nugoryiyi Zà",
    title: "Development, coming home, reconnecting and celebrating together",
    body: "The name \"Nugoryiyi Zà\" embodies the spirit of development, coming home, reconnecting and celebrating together. It was conceived as a movement to strengthen the bond among the people of Denu, preserve the community's cultural heritage, promote peaceful coexistence and mobilize collective efforts towards the sustainable development of the town. Rooted in the spirit of Easter, the celebration symbolizes renewal, hope, reconciliation, unity and shared humanity.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
    flip: true,
  },
  {
    icon: TrendingUp,
    eyebrow: "A Decade of Growth",
    title: "From community reunion to a vibrant regional festival",
    body: "Over the past decade, Denu Nugoryiyi Zà has evolved into one of the most anticipated community events in the Ketu South Municipality, attracting thousands of participants from Ghana and abroad. What began as a community reunion has grown into a vibrant festival that showcases Denu's culture through traditional performances, cultural displays, sporting activities, educational engagements, entertainment and development-focused initiatives.",
    image:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&q=80",
    flip: false,
  },
  {
    icon: HeartHandshake,
    eyebrow: "Peace, Unity & Cohesion",
    title: "Bringing traditional leaders, youth and families together",
    body: "Throughout its journey, the festival has played a significant role in fostering peace and unity among the people of Denu by bringing together traditional leaders, youth, families, community associations and stakeholders on one common platform. It has strengthened social cohesion, encouraged volunteerism, promoted dialogue across generations and inspired a shared commitment to the progress of the community.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    flip: true,
  },
  {
    icon: TrendingUp,
    eyebrow: "Catalyst for Development",
    title: "Mobilizing resources, partnerships and economic opportunity",
    body: "Beyond celebrating culture, Denu Nugoryiyi Zà has become an important catalyst for community development. The festival has served as a platform for mobilizing resources, attracting partnerships, promoting local businesses and tourism, creating economic opportunities for traders and artisans and supporting developmental projects that benefit the people of Denu. It continues to inspire collective responsibility and active participation in the growth of the community.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    flip: false,
  },
];

const MEDIA_OUTLETS = [
  { name: "Metro TV", desc: "National television coverage" },
  { name: "Original TV", desc: "Regional television" },
  { name: "Original FM", desc: "Radio broadcast partner" },
  { name: "Leading Media", desc: "Multiple outlets" },
];

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Peace & Unity",
    text: "Bringing together traditional leaders, youth, families and community associations on one common platform.",
  },
  {
    icon: Users,
    title: "Diaspora Homecoming",
    text: "Uniting sons and daughters of Denu at home and across the diaspora in shared celebration.",
  },
  {
    icon: HandHeart,
    title: "Sustainable Development",
    text: "Mobilizing collective efforts and partnerships towards the growth of the community.",
  },
  {
    icon: BookOpen,
    title: "Heritage Preservation",
    text: "Safeguarding the cultural heritage, values and identity of the people of Denu.",
  },
];

export function About() {
  return (
    <SectionShell id="about" className="bg-cream">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30Z' fill='%23003018'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Festival"
          title="About Denu Nugoryiyi Zà"
          description="An annual homecoming and cultural celebration of the people of Denu — uniting sons and daughters at home and across the diaspora, while welcoming friends and visitors from diverse cultures, faiths and backgrounds to celebrate our rich heritage, values and identity."
        />

        {/* Story grid — opening narrative with image */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5] sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=1200&q=80"
                  alt="Ewe chief in colourful regalia at a Ghanaian durbar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/40 shadow-gold-glow shrink-0 bg-forest">
                      <FestivalLogo variant="icon" size={56} />
                    </div>
                    <div>
                      <div className="font-serif text-cream text-lg leading-tight">
                        Nugoryiyi Zà
                      </div>
                      <div className="text-cream/70 text-xs">
                        Coming home · Reconnecting · Celebrating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative gold frame */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-gold/40 rounded-3xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-forest/20 rounded-3xl -z-10" />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10">
                <Home className="w-3.5 h-3.5 text-gold" />
                A Homecoming Celebration
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest font-semibold leading-tight">
                An annual homecoming of the people of Denu
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-forest/75 leading-relaxed">
                Denu Nugoryiyi Zà is an annual homecoming and cultural
                celebration of the people of Denu, held a week after the Easter
                festivities. The festival was established to create a platform
                that unites the sons and daughters of Denu, both at home and
                across the diaspora, while welcoming friends, visitors and
                people from diverse cultures, faiths and backgrounds to
                celebrate the rich heritage, values and identity of the
                community.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Homecoming",
                  "Easter Renewal",
                  "Diaspora Reunion",
                  "Cultural Heritage",
                  "Unity & Hope",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-forest/5 text-forest border border-forest/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* The meaning callout */}
        <Reveal delay={0.1}>
          <div className="mt-16 relative rounded-3xl border-l-4 border-gold bg-white p-7 sm:p-9 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] overflow-hidden">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/25" />
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold-deep text-[11px] font-bold uppercase tracking-[0.2em] border border-gold/25 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                The Meaning of Nugoryiyi Zà
              </div>
              <p className="text-forest/85 leading-relaxed text-base sm:text-lg">
                The name <strong className="text-forest">"Nugoryiyi Zà"</strong>{" "}
                embodies the spirit of{" "}
                <strong className="text-forest">development, coming home,
                reconnecting and celebrating together</strong>. It was conceived
                as a movement to strengthen the bond among the people of Denu,
                preserve the community's cultural heritage, promote peaceful
                coexistence and mobilize collective efforts towards the
                sustainable development of the town. Rooted in the spirit of
                Easter, the celebration symbolizes{" "}
                <em className="text-forest-deep">renewal, hope,
                reconciliation, unity and shared humanity</em>.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Alternating image/text narrative blocks */}
        <div className="mt-20 space-y-20 lg:space-y-28">
          {NARRATIVE_BLOCKS.slice(2).map((b) => (
            <div
              key={b.title}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                b.flip ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <Reveal y={40}>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/3]">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent" />
                  </div>
                  {/* Floating icon badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    className={`absolute ${
                      b.flip ? "-left-4 sm:-left-6" : "-right-4 sm:-right-6"
                    } -bottom-4 sm:-bottom-6 w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold-glow`}
                  >
                    <b.icon className="w-9 h-9 text-forest-deep" />
                  </motion.div>
                  {/* Decorative frame */}
                  <div
                    className={`absolute ${
                      b.flip ? "-right-3 -top-3" : "-left-3 -top-3"
                    } w-28 h-28 border-2 border-gold/30 rounded-3xl -z-10`}
                  />
                </div>
              </Reveal>

              {/* Text */}
              <Reveal delay={0.15} y={40}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10">
                    <b.icon className="w-3.5 h-3.5 text-gold" />
                    {b.eyebrow}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-forest font-semibold leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-5 text-forest/75 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Media coverage strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-3xl bg-gradient-forest p-7 sm:p-9 text-cream shadow-premium overflow-hidden">
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                    Media Coverage
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream">
                    Featured by leading media organizations
                  </h3>
                </div>
              </div>
              <p className="text-cream/80 text-sm leading-relaxed mb-6 max-w-3xl">
                The festival's growing reputation has attracted widespread
                participation from natives living both within Ghana and in the
                diaspora, as well as visitors from neighboring communities and
                beyond. Its increasing prominence has also earned the support
                and coverage of leading media organizations, significantly
                expanding its visibility and impact.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MEDIA_OUTLETS.map((m) => (
                  <div
                    key={m.name}
                    className="glass-card rounded-2xl p-4 text-center hover:border-gold/50 transition-colors"
                  >
                    <div className="font-serif text-lg text-gold font-bold">
                      {m.name}
                    </div>
                    <div className="text-[11px] text-cream/65 mt-0.5">
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 10th Anniversary milestone callout */}
        <Reveal delay={0.1}>
          <div className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-forest shadow-premium">
            <div className="kente-divider" />
            <div className="relative px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16">
              {/* Gold glow */}
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-gold/15 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 text-gold text-[11px] font-bold uppercase tracking-[0.28em] border border-gold/30">
                  <Award className="w-3.5 h-3.5" />
                  10th Anniversary · 2027
                </div>

                <h3 className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl text-cream font-bold leading-tight">
                  A decade of achievements, a vision for the future
                </h3>

                <p className="mt-5 text-cream/85 leading-relaxed max-w-4xl">
                  As Denu Nugoryiyi Zà marks its 10th Anniversary in 2027, the
                  celebration presents an opportunity to reflect on a decade of
                  remarkable achievements while unveiling an even greater
                  vision for the future. The milestone celebration will honor the
                  festival's legacy of promoting peace, unity, cultural
                  preservation and sustainable community development, while
                  creating new opportunities for investment, partnerships,
                  tourism and socio-economic growth.
                </p>

                <div className="mt-7 p-6 rounded-2xl glass-card border-gold/30">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
                    Festival Theme
                  </div>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-cream font-semibold italic leading-tight">
                    "Celebrating a Decade of Unity, Heritage and Sustainable
                    Development"
                  </p>
                  <p className="mt-3 text-cream/75 text-sm leading-relaxed">
                    The 10th Anniversary seeks not only to commemorate the past
                    but also to inspire a stronger, more prosperous and united
                    future for Denu and generations yet to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="kente-divider" />
          </div>
        </Reveal>

        {/* Values grid */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-10">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">
                Values We Celebrate
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="group relative rounded-2xl p-6 bg-white border border-forest/10 hover:border-gold/40 hover:shadow-premium transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-forest flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-forest-deep transition-all">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h5 className="mt-4 font-serif text-lg text-forest font-semibold">
                    {v.title}
                  </h5>
                  <p className="mt-2 text-sm text-forest/70 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
}
