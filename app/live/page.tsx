"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const YT_API_KEY = "AIzaSyBnw2yGy6EuxUthoEIltfAVQBxxlQNwZEA";

const STREAMERS = [
  {
    name: "AstraMKW",
    twitchChannel: "astramkw",
    youtubeChannelId: "UC1grOYjzmftzT2DCWq0Mcog",
    youtubeFallbackVideoId: "rGVOVMo-A9o",
  },
  {
    name: "Collegiate Karting League",
    twitchChannel: "collegiatekl",
    youtubeChannelId: "UCNIAx4iPEWlMbb7TVeeM2Wg",
    youtubeFallbackVideoId: "M3fqTkYY9LY",
  },
];

export default function WatchLive() {
  const [ytLiveStatus, setYtLiveStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function checkYouTubeLive(channelId: string, streamerKey: string) {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${YT_API_KEY}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        const isLive = data.items && data.items.length > 0;
        setYtLiveStatus((prev) => ({ ...prev, [streamerKey]: isLive }));
      } catch (e) {
        console.error("YouTube API error", e);
      }
    }

    STREAMERS.forEach(({ youtubeChannelId, name }) => {
      checkYouTubeLive(youtubeChannelId, name);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-12 w-full px-4 md:px-25 py-12 pb-16 min-h-screen bg-black">
        <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-5 pt-80 md:pt-14">
          <div className="events-page-header">
            <h1 className="page-title">WATCH US LIVE</h1>
          </div>

          {/* Twitch row */}
          <div className="flex items-center gap-6 flex-col md:flex-row">
            {/* Twitch Logo */}
            <div className="flex-shrink-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-700"
              >
                <path
                  d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.142V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                  fill="#9146FF"
                />
              </svg>
            </div>
            {/* Twitch streams side-by-side */}
            <div className="flex flex-1 gap-6 md:flex-row flex-col w-3/4">
              {STREAMERS.map(({ name, twitchChannel }) => (
                <div key={name} className="flex flex-col flex-1">
                  <h4 className="text-white font-bold text-2xl text-center">
                    {name}
                  </h4>
                  <div className="aspect-video rounded-2xl overflow-hidden border-4 border-purple-700">
                    <iframe
                      src={`https://player.twitch.tv/?channel=${twitchChannel}&parent=triton-mario-kart.vercel.app`}
                      height="100%"
                      width="100%"
                      allowFullScreen
                      frameBorder="0"
                      title={`${name} Twitch Stream`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube row */}
          <div className="flex items-center gap-6 flex-col md:flex-row">
            {/* YouTube Logo */}
            <div className="flex-shrink-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-600"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="#FF0000"
                />
              </svg>
            </div>
            {/* YouTube streams side-by-side */}
            <div className="flex flex-1 gap-6 md:flex-row flex-col w-3/4">
              {STREAMERS.map(({ name, youtubeChannelId, youtubeFallbackVideoId }) => {
                const fallbackVideoId = youtubeFallbackVideoId;
                return (
                  <div key={name} className="flex flex-col flex-1">
                    <h4 className="text-white font-bold text-2xl text-center">
                      {name}
                    </h4>
                    <div className="aspect-video rounded-2xl border-4 border-red-700">
                      {ytLiveStatus[name] ? (
                        <iframe
                          src={`https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}`}
                          height="100%"
                          width="100%"
                          allowFullScreen
                          frameBorder="0"
                          title={`${name} YouTube Live Stream`}
                        ></iframe>
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${fallbackVideoId}`}
                          height="100%"
                          width="100%"
                          allowFullScreen
                          frameBorder="0"
                          title={`${name} YouTube Fallback Video`}
                        ></iframe>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
