"use client";

import { useState } from "react";

interface Event {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

interface EventCardCarouselProps {
  events: Event[];
  showScrollbar?: boolean;
}

export default function EventCardCarousel({
  events,
  showScrollbar = true,
}: EventCardCarouselProps) {
  return (
    <div className="event-card-carousel-container">
      <div className="event-card-carousel">
        <div className="event-cards-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-card-image-container">
                <img
                  src={event.image}
                  alt={event.name}
                  className="event-card-image"
                />
              </div>
              <div className="event-card-content">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
                <p className="event-location">{event.location}</p>
                <div className="event-description-container">
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showScrollbar && (
          <div className="carousel-scrollbar">
            <div className="scrollbar-track"></div>
          </div>
        )}
      </div>
    </div>
  );
}
