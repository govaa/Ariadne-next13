"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoslides?: boolean;
  autoSlideInterval?: number;
  slides: { imgSrc: string; text: string }[];
}

function Carousel({
  children: slidesComponents,
  slides,
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
        {slidesComponents.map((slide, index) => (
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
      <div className="absolute bottom-4 right-0 left-0 flex justify-center">
        {slides.map((slide, index) => (
          <div key={index} className="w-12 h-12 m-1 overflow-hidden rounded-full" onClick={() => setCurr(index)}>
            <img src={slide.imgSrc} alt={slide.text} className={`object-cover transition-opacity duration-300 ${curr === index ? "opacity-100" : "opacity-50"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

const slides = [
  {
    imgSrc: '/images/industry/airport/airport_panner.png',
    text: 'Airport',
  },
  {
    imgSrc: '/images/industry/retail/retail_banner.png',
    text: 'Retail',
  },
  {
    imgSrc: '/images/industry/shopping_mall/mall_banner.png',
    text: 'Shopping Centres',
  },
  {
    imgSrc: '/images/industry/smartcity/smartcity_banner.png',
    text: 'Smart Cities',
  },
];

export default function VerticalCarousel() {
  return (
    <main className="App">
      <div className="carousel-container md:w-screen md:mx-auto">
        <Carousel slides={slides}>
          {slides.map((s, index) => (
            <div key={index} className="relative w-full h-full">
              <div className="image-container w-full h-[200px] flex justify-center items-center overflow-hidden">
                <img className="object-cover brightness-50" src={s.imgSrc} alt={s.text} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{s.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}
