"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoslides?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoslides = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const currRef = useRef(curr);
  currRef.current = curr;

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoslides) return;
    const slideInterval = setInterval(() => {
      const nextIndex = (currRef.current === slides.length - 1) ? 0 : currRef.current + 1;
      setCurr(nextIndex);
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, autoslides, slides.length]);

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white text-gray-800">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white text-gray-800">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              key={i}
              className={`w-3 h-3 bg-white rounded-full transition-all ${curr === i ? "bg-opacity-100" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
