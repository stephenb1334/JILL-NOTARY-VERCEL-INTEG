import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-coastal-blue text-white border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="font-accent font-bold text-xl flex items-center">
              <img
                src="https://kagi.com/proxy/4.png?c=V9SL_Pk4NSRIavWtLPKxEU60MIizL_oxnkl1ibD4_WA6gXrEUA21k8Q8m7S8LnqHwoyYVuva8Bgev8pLDaGFQw%3D%3D"
                alt="Sunrise Notary Logo"
                className="h-8 w-auto mr-2 bg-white rounded-full p-1"
              />
              <span className="text-white">Sunrise</span>
              <span className="text-sunrise-gold mx-1">Notary</span>
              <span className="text-coastal-light">Solutions</span>
            </Link>
            <p className="text-sm text-white/80">
              Professional mobile notary services for real estate transactions in Tampa Bay, Florida.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/80 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm text-white/80 hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-white/80 hover:text-white">
                  Client Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-heading">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 text-sunrise-gold" />
                (727) 555-1234
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 text-sunrise-gold" />
                info@sunrisenotary.com
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-sunrise-gold mt-1" />
                <span>Serving Tampa Bay and surrounding areas in Florida</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-heading">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Mail className="h-5 w-5 text-white" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Sunrise Notary Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
