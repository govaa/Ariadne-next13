"use client"
import Carousel from "@/components/carousel"
import Image from 'next/image'
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

export default function LogoCarousel() { 

return (
    <main className="App">
        <div>
            <Carousel> 
            {slides.map((s, index) => (
                    <div key={index}>
                      <Image src={s} alt="Partner Logos" width={200} height={100} />
                    </div>
                ))}
            </Carousel>
        </div> 
    </main>
)
}