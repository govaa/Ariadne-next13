"use client"
import Carousel from "@/components/carousel"

const slides =[
    {
        imgSrc: '/images/homepage-image-2.png',
        text: 'Know every visitor journey With Ariadne\'s Solution'
    },
    {
        imgSrc: '/images/homepage-image-2.png',
        text: 'Text for image 2'
    },
    {
        imgSrc: '/images/homepage-image-2.png',
        text: 'Text for image 3'
    },
]

export default function HomeCarousel() { 
    return (
        <main className="App">
            <div className="carousel-container md:w-screen md:mx-auto">
                <Carousel>
                    {slides.map((s, index) => (
                        <div key={index} className="relative w-full h-full">
                            <img className="w-full h-full object-cover brightness-50" src={s.imgSrc} alt="alt" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-2xl font-bold">{s.text}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div> 
        </main>
    )
}
