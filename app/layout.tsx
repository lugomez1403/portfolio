import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Luis Enrique Gomez Perez - Full Stack Developer",
  description:
    "Professional portfolio of Luis Enrique Gomez Perez, Systems Engineer with 8 years of software development experience. Specialized in PHP, Node.js, React and GCP.",
  keywords: "developer, full stack, PHP, Laravel, Symfony, Node.js, React, GCP, freelance, Cancún",
  authors: [{ name: "Luis Enrique Gomez Perez" }],
  creator: "Luis Enrique Gomez Perez",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
