import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import homeimage1 from "public/images/homepage-image-1.png"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const HomeCarousel = dynamic(
    () => import("@/components/homepage/home-carousel"),
    { ssr: true, loading: () => <div>Loading</div> })

const LogoCarousel = dynamic(
    () => import("@/components/homepage/logo-carousel"),
    { ssr: true, loading: () => <div>Loading</div> })

const Footer = dynamic(
    () => import("@/components/footer"),
    { ssr: true, loading: () => <div>Loading</div> })

export default function IndexPage() {
  return (
    <main>
      <HomeCarousel />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          <Image src={homeimage1} width={10000} height={100} alt="Ariadne Logo Long" />
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      <LogoCarousel />
      <Footer/>
    </main>
  )
}
