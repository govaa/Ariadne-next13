"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  '/images/partner-logos/partner-101.png',
  '/images/partner-logos/partner-102.png',
  '/images/partner-logos/partner-103.png',
  '/images/partner-logos/partner-104.png',
  '/images/partner-logos/partner-105.png',
  '/images/partner-logos/partner-106.png',
  '/images/partner-logos/partner-107.png',
  '/images/partner-logos/partner-108.png',
  '/images/partner-logos/partner-109.png',
  '/images/partner-logos/partner-110.png',
  '/images/partner-logos/partner-111.png',
  '/images/partner-logos/partner-112.png',
  '/images/partner-logos/partner-113.png',
  '/images/partner-logos/partner-114.png',
  '/images/partner-logos/partner-115.png',
  '/images/partner-logos/partner-116.png',
  '/images/partner-logos/partner-117.png',
  '/images/partner-logos/partner-118.png',
]

const useClient = () => {
  return true;
};

export default function LogoCarousel() {
  const totalSlidesToShow = 5;
  const [currentSlides, setCurrentSlides] = useState(slides.slice(0, totalSlidesToShow));

  const nextSlide = () => {
    const newSlides = currentSlides.map((_, idx) => {
      const slideIndex = (slides.indexOf(currentSlides[idx]) + 1) % slides.length;
      return slides[slideIndex];
    });
    setCurrentSlides(newSlides);
  };

  const prevSlide = () => {
    const newSlides = currentSlides.map((_, idx) => {
      const slideIndex = (slides.indexOf(currentSlides[idx]) - 1 + slides.length) % slides.length;
      return slides[slideIndex];
    });
    setCurrentSlides(newSlides);
  };

  useEffect(() => {
    const autoCarousel = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoCarousel);
  }, [currentSlides]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="grid grid-flow-col gap-4 p-4 transition-all duration-500 ease-in-out items-center justify-items-center">
        {currentSlides.map((slide, index) => (
          <div key={index} className="flex justify-center items-center h-100">
            <Image
              src={slide}
              alt="Partner Logos"
              width={200}
              height={100}
              layout="intrinsic"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full ${currentSlides.includes(slide) ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
