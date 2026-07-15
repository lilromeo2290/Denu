"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Hotel,
  UtensilsCrossed,
  ShoppingBasket,
  Landmark,
  Leaf,
  Compass,
  Bus,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const DESTINATIONS = [
  {
    icon: Waves,
    title: "Denu Beach",
    type: "Beaches",
    desc: "Golden sand, gentle surf and breathtaking sunsets over the Gulf of Guinea — the perfect setting for the festival's beach activities.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Coastal stretch, Ketu South",
  },
  {
    icon: Hotel,
    title: "Premier Beach Resorts",
    type: "Hotels",
    desc: "From boutique coastal lodges to full-service beach resorts, Denu offers comfortable stays minutes from the durbar grounds.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Along Coastal Road",
  },
  {
    icon: UtensilsCrossed,
    title: "Seaside Eateries",
    type: "Restaurants",
    desc: "Grilled tilapia, red-red, fresh coconut, abolo and palm wine served steps from the ocean. A culinary journey through Volta Region flavours.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Beach Road & Town Centre",
  },
  {
    icon: ShoppingBasket,
    title: "Denu Central Market",
    type: "Markets",
    desc: "A bustling cross-border market famous for textiles, kente, fresh produce and crafts — one of the busiest in the Volta Region.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Denu Town Centre",
  },
  {
    icon: Landmark,
    title: "Aflao Border & Heritage Sites",
    type: "Historical Sites",
    desc: "Visit the historic Aflao border, colonial-era churches and ancestral shrines that tell the layered story of the south-eastern coast.",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c52a?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Aflao Border Post",
  },
  {
    icon: Leaf,
    title: "Mangrove & Lagoon Trails",
    type: "Eco-tourism",
    desc: "Guided eco-walks through mangrove forests and lagoon ecosystems, with birdwatching and stories from local eco-rangers.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Agbedrafo Wetlands",
  },
  {
    icon: Compass,
    title: "Local Experiences",
    type: "Local experiences",
    desc: "Learn to weave kente, fish with local fishermen, cook abolo, or join an Ewe drumming circle — authentic, hands-on cultural immersion.",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Community Centres",
  },
  {
    icon: Bus,
    title: "How to Get to Denu",
    type: "Transportation",
    desc: "Two hours east of Accra on the Aflao road, with daily STC & private coaches, tro-tros, and a short hop from Lomé across the Aflao border.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    mapLabel: "Accra–Aflao Highway",
  },
];

export function Tourism() {
  return (
    <SectionShell id="tourism" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Denu"
          title="Where the coast meets culture"
          description="Denu is more than a festival venue — it is a destination. Beaches, markets, history, food and warm Ewe hospitality await every visitor. Come for the festival; stay for the experience."
        />

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((d) => (
            <motion.article
              key={d.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-glow">
                  <d.icon className="w-5 h-5 text-forest-deep" />
                </div>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cream/90 text-forest text-[10px] font-semibold uppercase tracking-wider">
                  {d.type}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-cream/85 text-[11px]">
                  <MapPin className="w-3 h-3 text-gold" />
                  {d.mapLabel}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-forest font-semibold group-hover:text-forest-deep transition-colors">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-forest/65 leading-relaxed">
                  {d.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-deep uppercase tracking-wide">
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>

        {/* Map card */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl overflow-hidden shadow-premium border border-forest/10 bg-white">
            <div className="grid lg:grid-cols-3">
              <div className="p-8 lg:p-10 lg:col-span-1 bg-gradient-forest text-cream">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                  <MapPin className="w-3.5 h-3.5" />
                  Find Denu
                </div>
                <h3 className="mt-5 font-serif text-2xl lg:text-3xl font-semibold leading-tight">
                  Denu, Ketu South Municipality
                </h3>
                <p className="mt-4 text-cream/75 text-sm leading-relaxed">
                  Located in the Volta Region of Ghana, Denu sits along the
                  coastal Aflao road — approximately 180 km east of Accra and
                  just 5 km from the Togo border.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-cream/80">
                    <Bus className="w-4 h-4 text-gold" />
                    Accra → Denu: ~2 hr by road
                  </li>
                  <li className="flex items-center gap-2 text-cream/80">
                    <Compass className="w-4 h-4 text-gold" />
                    Lomé → Denu: ~30 min across Aflao
                  </li>
                  <li className="flex items-center gap-2 text-cream/80">
                    <Hotel className="w-4 h-4 text-gold" />
                    Lodging available year-round
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2 relative min-h-[320px] bg-forest/5">
                <iframe
                  title="Map of Denu, Volta Region, Ghana"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=1.155%2C6.075%2C1.215%2C6.115&layer=mapnik&marker=6.095%2C1.185"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
