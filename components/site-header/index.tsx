import { siteConfig } from "@/config/site"
import MainNav from "@/components/main-nav"
import LocaleSelector from "./locale-selector/page"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-12 items-center justify-between space-x-4 sm:space-x-0 ">
        <Link href="https://www.ariadne.inc" className="flex h-10">
            <Image src="/images/logo/ariadne-long-logo.png"  width={140} height={100} alt="Ariadne Logo Long" layout="responsive" />
        </Link>
        <nav className="flex items-center space-x-4">
          <MainNav />
          <LocaleSelector />
          <Link href="/get-started" className="inline-block bg-ariadnepurple hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full">
                Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}

