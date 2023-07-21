import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { setInterval } from "timers";

interface CarouselProps {
    children: React.ReactNode[],
    autoslides?: boolean,
    autoSlideInterval?: number,
  }

  export default function Carousel ({ children: slides, autoslides = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoslides) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
      <div className="absolute inset-0 flex item-center justify-between p-2">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white-80 text-grey-800 ">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white-80 text-grey-800">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex item-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              className={`transition-all w-3 h-3 bg-white round-full ${curr === i + 1 ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
