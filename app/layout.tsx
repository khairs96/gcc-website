"use client"

import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Twitter, Youtube, Linkedin, Instagram, Mail, Phone, TwitterIcon as TikTok } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 w-full bg-gradient-primary z-50 shadow-soft">
          <div className="container mx-auto px-4 text-white">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="GCC Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white">GCC</span>
                  <span className="text-sm text-white/80 whitespace-nowrap">Gamatika Coding Club</span>
                </div>
              </Link>

              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-white hover:bg-white/10 bg-[#7096d1]"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 bg-[#7096d1] md:bg-transparent items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 w-full`}>
                <Link href="/" className="text-white hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 touch-hover hover:opacity-80">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 touch-hover hover:opacity-80 flex items-center"
                >
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 touch-hover hover:opacity-80">
                  Contact
                </Link>
              </nav>

            </div>
          </div>
        </header>
        <main className="min-h-screen">
          <div className="w-full text-center py-2 bg-[#5a7ab3]">
            <p className="mb-4 text-2xl font-bold text-[#7096d1] animate-pulse">Code Smarter, Impact Greater</p>
          </div>
          {children}
        </main>
        <footer className="bg-pattern py-12 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Center Logo and Social Links */}
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="GCC Logo"
                  width={120}
                  height={120}
                  className="mb-6"
                />
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-primary touch-hover">
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-primary touch-hover">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-primary touch-hover">
                    <TikTok className="h-5 w-5" />
                  </Link>
                  <Link href="mailto:contact@gcc.org" className="text-gray-600 hover:text-primary touch-hover">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>1234567 (Partnership)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>1234567 (Organization & NGO)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:gcc@gmail.com" className="hover:text-primary">
                      gcc@mail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-gray-600 border-t pt-6">
              <p className="mb-2">Code Smarter, Impact Greater</p>
              <p>Copyright © 2024 GCC - All rights reserved.</p>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">
              This website is entirely made by v0 by Vercel
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'