"use client";

import { LoadingScreen } from "@/components/festival/loading-screen";
import { Navbar } from "@/components/festival/navbar";
import { Hero } from "@/components/festival/hero";
import { About } from "@/components/festival/about";
import { Highlights } from "@/components/festival/highlights";
import { Projects } from "@/components/festival/projects";
import { Heritage } from "@/components/festival/heritage";
import { Tourism } from "@/components/festival/tourism";
import { Schedule } from "@/components/festival/schedule";
import { Gallery } from "@/components/festival/gallery";
import { News } from "@/components/festival/news";
import { Sponsors } from "@/components/festival/sponsors";
import { Sponsorship } from "@/components/festival/sponsorship";
import { Registration } from "@/components/festival/registration";
import { Countdown } from "@/components/festival/countdown";
import { Testimonials } from "@/components/festival/testimonials";
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
        <About />
        <Highlights />
        <Projects />
        <Heritage />
        <Tourism />
        <Schedule />
        <Gallery />
        <News />
        <Sponsors />
        <Sponsorship />
        <Countdown />
        <Registration />
        <Testimonials />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
