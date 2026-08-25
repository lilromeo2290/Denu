"use client";

import { LoadingScreen } from "@/components/festival/loading-screen";
import { Navbar } from "@/components/festival/navbar";
import { Hero } from "@/components/festival/hero";
import { ExecutiveSummary } from "@/components/festival/executive-summary";
import { About } from "@/components/festival/about";
import { Highlights } from "@/components/festival/highlights";
import { Roadmap } from "@/components/festival/roadmap";
import { Projects } from "@/components/festival/projects";
import { SponsorshipBudget } from "@/components/festival/sponsorship-budget";
import { Heritage } from "@/components/festival/heritage";
import { Tourism } from "@/components/festival/tourism";
import { Schedule } from "@/components/festival/schedule";
import { Gallery } from "@/components/festival/gallery";
import { Sponsors } from "@/components/festival/sponsors";
import { Sponsorship } from "@/components/festival/sponsorship";
import { Registration } from "@/components/festival/registration";
import { Countdown } from "@/components/festival/countdown";
import { Social } from "@/components/festival/social";
import { Contact } from "@/components/festival/contact";
import { Footer } from "@/components/festival/footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <ExecutiveSummary />
        <About />
        <Highlights />
        <Roadmap />
        <Projects />
        <SponsorshipBudget />
        <Heritage />
        <Tourism />
        <Schedule />
        <Gallery />
        <Sponsors />
        <Sponsorship />
        <Countdown />
        <Registration />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
