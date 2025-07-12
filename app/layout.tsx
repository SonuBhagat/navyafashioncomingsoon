import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Navya Fashion - Coming Soon | Your Vision, Our Creation",
  description:
    "Navya Fashion is coming soon! Custom fashion designs by Chandni Singh. Your Vision, Our Creation. Contact us at navya8052023@gmail.com or +91 9326123594.",
  keywords: "fashion, custom design, Navya Fashion, Chandni Singh, Mira Road, fashion designer, coming soon",
  authors: [{ name: "Chandni Singh" }],
  creator: "Navya Fashion",
  openGraph: {
    title: "Navya Fashion - Coming Soon",
    description: "Your Vision, Our Creation - Custom fashion designs coming soon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navya Fashion - Coming Soon",
    description: "Your Vision, Our Creation - Custom fashion designs coming soon",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
