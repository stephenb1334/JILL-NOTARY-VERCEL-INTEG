"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Schedule", href: "/schedule" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="font-accent font-bold text-xl flex items-center">
            <img
              src="/images/000-newnewlogotrans.jpg"
              alt="NotariesBy Logo"
              className="h-6 sm:h-7 md:h-8 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex items-center space-x-6">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-heading font-medium hover:text-purple-600 hover:underline underline-offset-4 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/schedule">Book Now</Link>
            </Button>
          </div>
        ) : (
          /* Mobile Controls */
          <div className="flex items-center space-x-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-4 py-1.5 rounded-full text-xs"
            >
              <Link href="/schedule">Book</Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-full shadow-lg"
                >
                  <Link href="/schedule" onClick={toggleMenu}>
                    Book Your Appointment
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
