import "@/styles/globals.css"
import { Metadata } from "next"
import ReactQueryProvider from "@/context/react-query-provider"
import { i18n } from "@/i18n-config"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { lang: string }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <html lang={params.lang} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background GothamBook antialiased",
            fontSans.variable
          )}
        >
          <ReactQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </>
  )
}
