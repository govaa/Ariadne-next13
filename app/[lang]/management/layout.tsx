"use client"

import { SessionProvider } from "next-auth/react"

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <section>{children}</section>
    </SessionProvider>
  )
}
