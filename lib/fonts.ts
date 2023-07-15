import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const gothamblack = localFont({
  src: './fonts/Gotham-Black.woff2',
  weight: '400',
  style: 'normal',
  variable: "--font-gothamblack",
})

export const gothambold = localFont({
  src: './fonts/Gotham-Bold.woff2',
  weight: '700',
  style: 'normal',
  variable: "--font-gothambold",
})

export const gothambolditalic = localFont({
  src: './fonts/Gotham-BoldItalic.woff2',
  weight: '700',
  style: 'italic',
  variable: "--font-gothambolditalic",
})
export const gothambook = localFont({
  src: './fonts/Gotham-Book.woff2',
  weight: '400',
  style: 'normal',
  variable: "--font-gothambook",
})

export const gothambookitalic = localFont({
  src: './fonts/Gotham-BookItalic.woff2',
  weight: '400',
  style: 'italic',
  variable: "--font-gothambookitalic",
})
export const gothamlight = localFont({
  src: './fonts/Gotham-Light.woff2',
  weight: '400',
  style: 'normal',
  variable: "--font-gothamlight",
})

export const gothamlightitalic = localFont({
  src: './fonts/Gotham-LightItalic.woff2',
  weight: '400',
  style: 'italic',
  variable: "--font-gothamlightitalic",
})

export const gothammedium = localFont({
  src: './fonts/Gotham-Medium.woff2',
  weight: '550',
  style: 'normal',
  variable: "--font-gothammedium",
})

export const gothammediumitalic = localFont({
  src: './fonts/Gotham-MediumItalic.woff2',
  weight: '550',
  style: 'italic',
  variable: "--font-gothammediumitalic",
})
