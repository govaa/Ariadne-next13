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
        <div className="md:container-fit-screen  md:mx-auto">
            <Carousel> 
            {[...slides.map((s) => (
                      <img src = {s} />
                ))]}
            </Carousel>
        </div> 
    </main>
)
}