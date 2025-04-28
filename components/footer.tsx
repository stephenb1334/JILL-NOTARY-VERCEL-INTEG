import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-neutral-700">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-neutral-300 mb-6 max-w-xl">
              Subscribe to our newsletter for notary tips, industry updates, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-coastal-blue flex-grow"
              />
              <Button className="bg-coastal-blue hover:bg-coastal-light whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-coastal-blue" />
                <span>(727) 710-5455</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-coastal-blue" />
                <span>info@gopronotaries.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-coastal-blue" />
                <span>Tampa Bay Area, Florida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-neutral-700">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-neutral-300 mb-4">
              Professional mobile notary services specializing in loan signings and estate planning throughout Florida
              since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-coastal-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-neutral-300 hover:text-coastal-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-300 hover:text-coastal-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-neutral-300 hover:text-coastal-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-neutral-300 hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-neutral-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Loan Document Signings
                </Link>
              </li>
              <li>
                <Link href="/estate-planning" className="text-neutral-300 hover:text-white transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/wedding-officiant" className="text-neutral-300 hover:text-white transition-colors">
                  Wedding Officiant
                </Link>
              </li>
              <li>
                <Link href="/apostille" className="text-neutral-300 hover:text-white transition-colors">
                  Apostille Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Vehicle Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-neutral-300">Monday - Friday:</span>
                <span>9AM - 7PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">Saturday:</span>
                <span>10AM - 5PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">Sunday:</span>
                <span>By appointment</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-neutral-700">
              <p className="text-coastal-blue font-medium">Military Discount Available</p>
              <p className="text-neutral-300 text-sm">For all U.S. Armed Forces veterans</p>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} West Coast Notaries, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-neutral-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-neutral-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-neutral-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-neutral-500 text-xs mt-6">
            West Coast Notaries is a licensed and insured Florida notary public service. Florida Notary Commission
            #GG123456. NNA Certified Signing Agent.
          </p>
        </div>
      </div>
    </footer>
  )
}
