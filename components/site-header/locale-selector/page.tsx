"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'



export default function LocaleSelector() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
  
    return segments.join('/')
  }

  const currentLocale = () => {
    const locale = i18n.locales.find((l) => l === pathName.split('/')[1])
    if (!locale) return i18n.defaultLocale
    return locale
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="uppercase bg-white text-black-gothamlight hover:bg-ariadnepurple hover:text-natural-500">
          {currentLocale()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-70">
        
        
      {i18n.locales.map((locale) => {
          const isActive = locale === currentLocale()
          return (        
        <DropdownMenuLabel key={locale} className="uppercase">
             <Link href={redirectedPathName(locale)} className="flex items-center justify-between">
                  {locale}
                  {isActive ? (
                    <span className="ml-2 text-blue-500">✓</span>
                  ) : null}
              </Link>
            </DropdownMenuLabel>

          )
        })}

            

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
