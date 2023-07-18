import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import logo from "public/images/logo/ariadne-long-logo.png"
import { LocaleSelector } from "./locale-selector"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ">
      <Image src={logo} width={140} height={100} alt="Ariadne Logo Long" />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <MainNav/>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
            <LocaleSelector />
            <ThemeToggle />
            <button className="bg-ariadnepurple hover:bg-ariadnepurple text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
