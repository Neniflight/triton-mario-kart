import {
  HeroSection,
  AboutSection,
  EventsSection,
  JoinTeamSection,
  WatchLiveSection,
} from "@/components/sections";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop: navbar at top, Mobile: navbar at bottom */}
      <Navbar />

      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full">
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <JoinTeamSection />
          <WatchLiveSection />

        </div>

        {/* Desktop footer */}
        <Footer />
      </div>
    </div>
  );
}
