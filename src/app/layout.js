import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

// Initializes the Inter font with the latin subset.
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'A Spotify front-end clone built with Next.js and Tailwind CSS',
}

// This is the root layout that wraps around all pages.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Applies the Inter font class to the body tag. */}
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
