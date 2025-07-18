import {
  HeroSection,
  AboutSection,
  EventsSection,
  JoinTeamSection,
  WatchLiveSection,
} from "@/components/sections";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop: navbar at top, Mobile: navbar at bottom */}
      <div className="hidden md:block w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-md md:max-w-screen-2xl mx-auto relative w-full">
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <JoinTeamSection />
          <WatchLiveSection />

          {/* Mobile navbar at bottom */}
          <div className="md:hidden">
            <Navbar />
          </div>
        </div>

        {/* Desktop footer */}
        <Footer />
      </div>
    </div>
  );
}
