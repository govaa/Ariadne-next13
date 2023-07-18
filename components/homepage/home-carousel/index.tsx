"use client"
import Carousel from "@/components/carousel"
import Image from 'next/image'
const slides = [
    '/images/homepage-image-1.png',
    '/images/homepage-image-1.png',
    '/images/homepage-image-1.png',]
export default function HomeCarousel() { 

return (
    <main className="App">
        <div>
            <Carousel> 
            {slides.map((s, index) => (
                    <div key={index}>
                      <Image src={s} alt="Homepage image" width={1000} height={800} />
                    </div>
                ))}
            </Carousel>
        </div> 
    </main>
)
}