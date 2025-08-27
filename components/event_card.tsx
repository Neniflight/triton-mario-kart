import React from "react";
import Image from "next/image";

interface EventCardProps {
  eventName: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

export function EventCard({
  eventName,
  date,
  time,
  location,
  description,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] shadow-lg">
      <div className="relative h-[225px] rounded-t-2xl overflow-hidden">
        <Image src={imageUrl} alt={eventName} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-4 bg-white rounded-b-2xl border-t border-black shadow-lg">
        <h5 className="text-blue font-bold text-base md:text-xl">
          {eventName}
        </h5>
        <p className="text-maroon font-bold text-sm md:text-base leading-5">
          {date}
        </p>
        <p className="text-purple font-bold text-sm md:text-base leading-5">
          {time}
        </p>
        <p className="text-black font-brix text-sm md:text-base leading-4">
          {location}
        </p>
        <div className="h-12 flex items-start">
          <p className="text-black font-brix text-sm md:text-base leading-4 flex-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
