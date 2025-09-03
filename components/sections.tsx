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
          url('https://cdn.builder.io/api/v1/image/assets/TEMP/fb618e9d5a52e1e74f1e61ff0f1eba88478ceb69?width=2880')
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
      {/* <div className="flex flex-col items-start gap-4 w-full max-w-sm md:max-w-none md:flex-row md:justify-end md:mb-4">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0978fba81573db99c707bac0fc88c4317ba0d676?width=199"
          alt="Mario character"
          width={100}
          height={77}
          className="w-24 h-auto md:hidden"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0978fba81573db99c707bac0fc88c4317ba0d676?width=199"
          alt="Mario character"
          width={100}
          height={77}
          className="hidden md:block w-24 h-auto"
        />
      </div> */}

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
              UC San Diego's Mario Kart 8 Deluxe Team
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
      {/* <div className="flex justify-end w-full max-w-sm md:max-w-none mt-4 md:mt-8">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/161ff07f4f1cea44dfc0b8f809068686560b995f?width=199"
          alt="Mario character"
          width={100}
          height={77}
          className="w-24 h-auto md:hidden"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/161ff07f4f1cea44dfc0b8f809068686560b995f?width=199"
          alt="Mario character"
          width={100}
          height={77}
          className="hidden md:block w-24 h-auto"
        />
      </div> */}
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
          Kart 8 Deluxe club and competitive organization.
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/710270632278e6b477fa042943edac39131c4fc2?width=900"
            alt="Tournament image 1"
            width={450}
            height={150}
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b515d0f8dd484fca84d83119008c886d2d6404?width=1200"
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
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
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
          <div className="flex gap-8 overflow-x-auto md:justify-center pb-4">
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
/*
export function EventsSection() {
  const events = [
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
    },
    {
      eventName: "Event Name",
      date: "Date (Monday, 1/14/2025)",
      time: "Time (9:00pm to 10:00pm)",
      location: "Location",
      description: "This is the event description for this event",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df7c748c2682c77cf3ae899374035811cac88f60?width=600",
    },
  ];

  const CalendarIcon = () => (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      className="md:w-7 md:h-7"
    >
      <path
        d="M6.04167 26.5833C5.37708 26.5833 4.80836 26.3469 4.3355 25.874C3.86264 25.4011 3.62581 24.832 3.625 24.1666V7.24996C3.625 6.58538 3.86183 6.01665 4.3355 5.54379C4.80917 5.07093 5.37789 4.8341 6.04167 4.83329H7.25V2.41663H9.66667V4.83329H19.3333V2.41663H21.75V4.83329H22.9583C23.6229 4.83329 24.192 5.07013 24.6657 5.54379C25.1394 6.01746 25.3758 6.58618 25.375 7.24996V24.1666C25.375 24.8312 25.1386 25.4003 24.6657 25.874C24.1928 26.3477 23.6237 26.5841 22.9583 26.5833H6.04167ZM6.04167 24.1666H22.9583V12.0833H6.04167V24.1666ZM6.04167 9.66663H22.9583V7.24996H6.04167V9.66663ZM14.5 16.9166C14.1576 16.9166 13.8709 16.8006 13.6397 16.5686C13.4085 16.3366 13.2925 16.0498 13.2917 15.7083C13.2909 15.3667 13.4069 15.08 13.6397 14.848C13.8725 14.616 14.1592 14.5 14.5 14.5C14.8407 14.5 15.1279 14.616 15.3615 14.848C15.5952 15.08 15.7107 15.3667 15.7083 15.7083C15.7059 16.0498 15.5899 16.337 15.3603 16.5698C15.1307 16.8026 14.844 16.9182 14.5 16.9166ZM9.66667 16.9166C9.32431 16.9166 9.03753 16.8006 8.80633 16.5686C8.57514 16.3366 8.45914 16.0498 8.45833 15.7083C8.45753 15.3667 8.57353 15.08 8.80633 14.848C9.03914 14.616 9.32592 14.5 9.66667 14.5C10.0074 14.5 10.2946 14.616 10.5282 14.848C10.7618 15.08 10.8774 15.3667 10.875 15.7083C10.8726 16.0498 10.7566 16.337 10.527 16.5698C10.2974 16.8026 10.0106 16.9182 9.66667 16.9166ZM19.3333 16.9166C18.991 16.9166 18.7042 16.8006 18.473 16.5686C18.2418 16.3366 18.1258 16.0498 18.125 15.7083C18.1242 15.3667 18.2402 15.08 18.473 14.848C18.7058 14.616 18.9926 14.5 19.3333 14.5C19.6741 14.5 19.9613 14.616 20.1949 14.848C20.4285 15.08 20.5441 15.3667 20.5417 15.7083C20.5392 16.0498 20.4232 16.337 20.1937 16.5698C19.9641 16.8026 19.6773 16.9182 19.3333 16.9166ZM14.5 21.75C14.1576 21.75 13.8709 21.634 13.6397 21.402C13.4085 21.17 13.2925 20.8832 13.2917 20.5416C13.2909 20.2001 13.4069 19.9133 13.6397 19.6813C13.8725 19.4493 14.1592 19.3333 14.5 19.3333C14.8407 19.3333 15.1279 19.4493 15.3615 19.6813C15.5952 19.9133 15.7107 20.2001 15.7083 20.5416C15.7059 20.8832 15.5899 21.1704 15.3603 21.4032C15.1307 21.636 14.844 21.7516 14.5 21.75ZM9.66667 21.75C9.32431 21.75 9.03753 21.634 8.80633 21.402C8.57514 21.17 8.45914 20.8832 8.45833 20.5416C8.45753 20.2001 8.57353 19.9133 8.80633 19.6813C9.03914 19.4493 9.32592 19.3333 9.66667 19.3333C10.0074 19.3333 10.2946 19.4493 10.5282 19.6813C10.7618 19.9133 10.8774 20.2001 10.875 20.5416C10.8726 20.8832 10.7566 21.1704 10.527 21.4032C10.2974 21.636 10.0106 21.7516 9.66667 21.75ZM19.3333 21.75C18.991 21.75 18.7042 21.634 18.473 21.402C18.2418 21.17 18.1258 20.8832 18.125 20.5416C18.1242 20.2001 18.2402 19.9133 18.473 19.6813C18.7058 19.4493 18.9926 19.3333 19.3333 19.3333C19.6741 19.3333 19.9613 19.4493 20.1949 19.6813C20.4285 19.9133 20.5441 20.2001 20.5417 20.5416C20.5392 20.8832 20.4232 21.1704 20.1937 21.4032C19.9641 21.636 19.6773 21.7516 19.3333 21.75Z"
        fill="white"
      />
    </svg>
  );

  return (
    <section
      className="flex flex-col gap-4 w-full px-4 md:px-25 py-12 pb-16 rounded-t-[18px] -mt-8 relative z-10"
      style={{
        background: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/34d44b3d07bea9053ca541a4bf126addf7270441?width=2880') lightgray 50% / cover no-repeat, linear-gradient(90deg, #52A8E2 0%, #1487D4 100%)`,
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

        <div className="flex flex-col gap-4 p-4 shadow-lg rounded-lg">
          <div className="flex gap-8 overflow-x-auto md:justify-center pb-4">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="w-full flex justify-center md:hidden">
            <div className="w-48 h-2.5 bg-grey rounded-2xl"></div>
          </div>
        </div>

        <Button
          leftIcon={<CalendarIcon />}
          className="self-start text-base md:text-2xl"
        >
          VIEW EVENTS
        </Button>
      </div>
    </section>
  );
}
*/

const DISCORD_URL = "https://discord.gg/NTNk9zygxf";
const FORM_URL = "https://forms.gle/JZwN9wgDWuH8gYEUA";

export function JoinTeamSection() {
  return (
    <section className="flex flex-col w-full px-4 md:px-25 py-12 pb-16 bg-gradient-to-r from-[#754162] to-(--maroon) rounded-t-[18px] -mt-8 relative z-10">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-6">
        <h3 className="text-white font-barlow font-bold text-xl md:text-3xl">JOIN US</h3>

        <div className="join-sections-container">
          {/* Discord Section */}
          <div className="join-section discord-section">
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
          <div className="join-section discord-section">
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
