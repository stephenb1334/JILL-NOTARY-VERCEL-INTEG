import { Award, Clock, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GoogleReviews } from "@/components/google-reviews"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16 pt-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-deep-purple sm:text-4xl md:text-5xl">
          About Us
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Professional mobile notary services for real estate transactions in Tampa Bay, Florida.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div>
          <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
            <img src="/images/office-2.jpg" alt="Professional notary office" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-deep-purple">Our Story</h2>
          <p className="text-charcoal">
            With over 20 years of experience in real estate and notary services, we founded West Coast Notaries to
            provide convenient, professional notarization for the Tampa Bay community.
          </p>
          <p className="text-charcoal">
            As longtime residents of Florida, we understand the local real estate market and the importance of reliable
            notary services for smooth transactions. Our mission is to make the notarization process as convenient and
            stress-free as possible.
          </p>
          <p className="text-charcoal">
            We're proud to serve individuals, real estate professionals, lenders, title companies, and attorneys
            throughout Tampa Bay and surrounding areas with our mobile notary services.
          </p>
          <div className="pt-4">
            <Button asChild className="bg-deep-purple hover:bg-purple-700">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* New Team Section */}
      <div className="my-20">
        <TeamSection />
      </div>

      {/* Google Reviews */}
      <div className="my-20">
        <GoogleReviews />
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center font-heading text-deep-purple mb-12">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-deep-purple/10">
              <Clock className="h-6 w-6 text-deep-purple" />
            </div>
            <h3 className="text-xl font-bold font-heading">Convenience</h3>
            <p className="text-charcoal">
              We come to your location, saving you time and hassle. Evening and weekend appointments available.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-steel-blue/10">
              <Award className="h-6 w-6 text-steel-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Experience</h3>
            <p className="text-charcoal">
              Over 20 years of experience in real estate and notary services in the Tampa Bay area.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-slate-blue/10">
              <Shield className="h-6 w-6 text-slate-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Reliability</h3>
            <p className="text-charcoal">
              Licensed, bonded, and insured Florida notary public with a commitment to professionalism.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-deep-purple/10">
              <MapPin className="h-6 w-6 text-deep-purple" />
            </div>
            <h3 className="text-xl font-bold font-heading">Local Knowledge</h3>
            <p className="text-charcoal">
              Deep understanding of the Tampa Bay real estate market and local requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center font-heading text-deep-purple mb-12">Our Office</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/images/office-1.jpg"
              alt="West Coast Notaries Office"
              className="w-full h-auto rounded-md shadow-sm"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/images/office-2.jpg"
              alt="West Coast Notaries Meeting Room"
              className="w-full h-auto rounded-md shadow-sm"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/images/office-3.jpg"
              alt="West Coast Notaries Reception"
              className="w-full h-auto rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold font-heading text-deep-purple mb-6">Ready to Work With Us?</h2>
        <p className="text-charcoal max-w-[700px] mx-auto mb-8">
          Schedule an appointment today and experience our professional notary services in Tampa Bay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-deep-purple hover:bg-purple-700">
            <Link href="/schedule">Book an Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-deep-purple text-deep-purple hover:bg-deep-purple/5"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
