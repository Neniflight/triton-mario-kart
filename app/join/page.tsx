import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const DISCORD_URL = "https://discord.gg/NTNk9zygxf";
const FORM_URL = "https://forms.gle/JZwN9wgDWuH8gYEUA";

export default function Join() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="join-page">
        <div className="join-page-header">
          <h1 className="page-title">JOIN US</h1>
        </div>

        <div className="join-sections-container">
          {/* Discord Section */}
          <div className="join-section discord-section">
            <div className="events-section-header min-h-[400px]">
              <div className="flex items-center gap-3">
                <h2 className="section-title">DISCORD</h2>
                <Image src="/images/discord-white-icon.png" alt="Discord logo" width={28} height={28} />
              </div>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-white/60 bg-black/50 hover:bg-black/70 transition-colors p-6 flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <h5 className="text-white/80">
                    In the Triton Mario Kart Discord, members regularly chat, plan meetups, and play Mario Kart together whether for fun or competitively. If these interest you, join today!
                  </h5>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-black font-barlow font-bold bg-white rounded-full px-4 py-2 w-fit group-hover:bg-grey">
                  <span>Open Discord</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Interest Form Section */}
          <div className="join-section form-section">
            <div className="events-section-header min-h-[400px]">
              <h2 className="section-title">INTEREST FORM</h2>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-white/60 bg-black/50 hover:bg-black/70 transition-colors p-6 flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <h5 className="text-white/80">
                    For Fall 2025, both Mario Kart 8 Deluxe and Mario Kart World are supported by the Collegiate Karting League. With this in mind, feel free to let us know on the attached form any interest in playing for UCSD's competitive teams, or if you want to play the game casually. All skill levels are welcome!
                  </h5>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-black font-barlow font-bold bg-white rounded-full px-4 py-2 w-fit group-hover:bg-grey">
                  <span>Open Form</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="join-full-row text-white/80 text-center px-4 pb-10">
            <p style={{fontSize: "24px"}}>
              Questions? Reach us at <span className="font-barlow font-bold">mariokart@ucsd.edu</span>.
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
