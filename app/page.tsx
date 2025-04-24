import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesGrid } from "@/components/services-grid"
import { CredentialsDisplay } from "@/components/credentials-display"
import { ClientHub } from "@/components/client-hub"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sand to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
                Professional Notary Services in Tampa Bay
              </h1>
              <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fast, reliable, and convenient notary services for all your real estate needs. We come to you, making
                the process seamless and stress-free.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-light">
                  <Link href="/schedule">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-coastal-blue text-coastal-blue hover:bg-coastal-blue/5"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto relative w-full aspect-video">
              <img
                alt="Tampa Bay Notary Services"
                className="rounded-lg object-cover w-full h-full"
                src="https://kagi.com/proxy/1920x1080.jpg?c=dvsHBTu7WpagfxSkLuYhxWFfD3XANdsB0CFy5CttIYczwDEqulZMECObtzWt8aVyUSslQyLFxW3gLA03HDnGM1CDfmkwzalviH7GQxWIpvlZppigUrKk_YvCCUFHcO4Y"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Credentials Display */}
      <CredentialsDisplay />

      {/* Client Hub Preview */}
      <ClientHub />

      {/* CTA Section */}
      <section className="bg-coastal-blue text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter font-heading md:text-4xl">Ready to Get Started?</h2>
              <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book your appointment today and experience our professional notary services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sunrise-gold hover:bg-sunrise-gold/90 text-coastal-blue">
                <Link href="/schedule">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
