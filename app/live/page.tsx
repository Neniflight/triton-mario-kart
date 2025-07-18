import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function WatchLive() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="watch-live-page">
        <div className="watch-live-header">
          <h1 className="page-title">WATCH LIVE</h1>
        </div>

        <div className="video-container">
          <div className="video-placeholder">
            <p className="video-placeholder-text">
              Triton Mario Kart Youtube / Twitch Channel
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <Navbar />
      </div>
    </div>
  );
}
