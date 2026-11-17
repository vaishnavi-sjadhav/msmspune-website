import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";
import {
  EventHero,
  EventStatsRow,
  UpcomingEventsSection,
  PastEventsGallery,
  StayConnectedEventsBanner,
} from "@/components/events";

export const metadata = {
  title: "Events at Matrix | Engage. Learn. Grow.",
  description:
    "Explore the vibrant calendar of academic conferences, industry conclaves, campus recruitment drives, skill development workshops, and cultural fests at Matrix School of Management Studies, Pune.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF3E8] text-[#3D0C16]">
      {/* Universal Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Engage. Learn. Grow. & 3D Floating Icon Cubes */}
        <EventHero />

        {/* 2. Key Event Stats Row (50+ Events, 10K+ Students, 100+ Partners, Countless) */}
        <EventStatsRow />

        {/* 3. Upcoming Events with Clean Curated Imagery & Registration Modal */}
        <UpcomingEventsSection />

        {/* 4. Past Events Carousel & Memory Moments Lightbox */}
        <PastEventsGallery />

        {/* 5. Stay Connected with Matrix Events Banner & 3D Golden Trophy */}
        <StayConnectedEventsBanner />
      </main>

      {/* Universal University Footer */}
      <Footer />
    </div>
  );
}
