"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import { EventCard } from "./event_card";
import { Calendar, Info, Check } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[400px] md:h-[810px] px-4 md:px-25 py-10 relative bg-black w-full"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.00) 75.48%, #000 100%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%),
          url('/landing_bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center">
        <div className="relative w-full h-20">
          <img 
            src="/kart_moving.svg"
            alt="Kart Moving"
            className="animate-move"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 w-full max-w-sm md:max-w-none justify-center md:justify-start">
          <div className="relative w-56 h-72 md:w-60 md:h-80">
            <Image
              src="/logo.svg"
              alt="Triton Mario Kart Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h2
              className="text-white"
              style={{
                textShadow:
                  "0px 0px 39.262px #636363, 0px 0px 22.435px #636363, 0px 0px 13.087px #636363, 0px 0px 6.544px #636363, 0px 0px 1.87px #636363, 0px 0px 0.935px #636363",
              }}
            >
              WELCOME TO
            </h2>
            <h1
              className="text-white"
              style={{
                textShadow:
                  "0px 0px 39.262px #636363, 0px 0px 22.435px #636363, 0px 0px 13.087px #636363, 0px 0px 6.544px #636363, 0px 0px 1.87px #636363, 0px 0px 0.935px #636363",
              }}
            >
              TRITON MARIO KART
            </h1>
            <h3 className="text-white font-barlow font-bold text-xl md:text-3xl text-center md:text-left">
              UC San Diego's Mario Kart Team
            </h3>
          </div>
        </div>
        <div className="relative w-full h-20 flex justify-end">
          <img 
            src="/kart_moving.svg"
            alt="Kart Moving"
            className="animate-move transform scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="flex flex-col w-full px-4 md:px-25 py-12 pb-16 bg-white rounded-t-[18px] -mt-8 relative z-10">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-5">
        <h3>
        ABOUT TRITON MARIO KART
        </h3>
        <p>
          Founded in 2023, Triton Mario Kart is UC San Diego's very own Mario
          Kart club and competitive organization.
        </p>
        <p>
          The Triton Mario Kart competitive teams currently consist of two sub
          teams spanning across all skill levels. UCSD 1 being our most
          competitive team, and winners of the Spring 2024 Collegiate Karting
          League tournament. We have performed well in other events, such as 4v4
          NRC and other seasons of Collegiate Karting League.
        </p>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 mt-4">
          <Image
            src="/banner_1.png"
            alt="Tournament image 1"
            width={450}
            height={150}
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
          <Image
            src="/banner_2.png"
            alt="Tournament image 2"
            width={600}
            height={150}
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}


export function EventsSection() {
  const events = [
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "/la_mario_kart.png",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "/la_mario_kart.png",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "/la_mario_kart.png",
    },
  ];

  return (
    <section
      className="flex flex-col gap-4 w-full px-4 md:px-25 py-12 pb-16 rounded-t-[18px] -mt-8 relative z-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(82, 168, 226, 0.8), rgba(82, 168, 226, 0.8)),
          url('/la_mario_kart.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-5">
        <h3 className="text-white font-barlow font-bold text-xl md:text-3xl">
        ATTEND OUR EVENTS
        </h3>

        <div className="text-white font-brix text-sm md:text-base leading-4">
          <span className="font-normal">
            We regularly host events for those looking to meet up in-person and
            get to play some Mario Kart, we also often host social events & trips
            between team members! Check out our public events below! Here are some
            of our
          </span>
          <span className="font-bold"> upcoming events </span>
          <span className="font-normal">below.</span>
        </div>

        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <div className="flex gap-8 overflow-x-auto md:justify-start pb-4 custom-scrollbar">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        <Button
          variant='blue'
          leftIcon={<Calendar />}
          className="self-start text-base md:text-2xl"
          href="/events"
        >
          VIEW EVENTS
        </Button>
      </div>
    </section>
  );
}

const DISCORD_URL = "https://discord.gg/NTNk9zygxf";
const FORM_URL = "https://forms.gle/JZwN9wgDWuH8gYEUA";

export function JoinTeamSection() {
  return (
    <section className="flex flex-col w-full px-4 md:px-25 py-12 pb-16 bg-gradient-to-r from-[#754162] to-(--maroon) rounded-t-[18px] -mt-8 relative z-10">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-6">
        <h3 className="text-white font-barlow font-bold text-xl md:text-3xl">JOIN US</h3>

        <div className="join-sections-container">
          {/* Discord Section */}
          <div className="join-section border-5 border-white/40">
            <div className="events-section-header">
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
          <div className="join-section border-5 border-white/40">
            <div className="events-section-header">
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
        </div>
      </div>
    </section>
  );
}

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

export function WatchLiveSection() {
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
    <section
      className="flex flex-col gap-12 w-full px-4 md:px-25 py-12 pb-16 rounded-t-[18px] -mt-8 relative z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.77%, #000 100%), linear-gradient(90deg, #4A4572 0%, #624A87 100%)",
      }}
    >
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-5">
        <h3 className="text-white font-barlow font-bold text-xl md:text-3xl mb-6">
          WATCH US LIVE
        </h3>

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
    </section>
  );
}
