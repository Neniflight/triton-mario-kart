"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 419}px)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-image-wrapper">
              <Image
                src={image}
                alt={`Event image ${index + 1}`}
                width={399}
                height={299}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
