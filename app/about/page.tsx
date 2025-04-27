import { Award, Clock, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GoogleReviews } from "@/components/google-reviews"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16 pt-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
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
          <h2 className="text-3xl font-bold font-heading text-coastal-blue">Our Story</h2>
          <p className="text-charcoal">
            Since 2003, I have provided distinguished notarial services to discerning clients across the Tampa Bay area
            and beyond. As a bilingual Notary offering services in both English and Spanish, I am proud to offer a
            seamless and personalized experience for individuals and businesses requiring precision, discretion, and
            professionalism.
          </p>
          <p className="text-charcoal">
            I hold a National Certification through the esteemed Loan Signing System and maintain long-standing
            membership with the National Notary Association, underscoring my commitment to excellence, security, and
            ongoing education in the notarial field.
          </p>
          <p className="text-charcoal">
            As the proud spouse of a former United States Air Force veteran, I am deeply committed to giving back to
            those who have served our country. I am honored to offer discounted notarial services to all United States
            Armed Forces veterans.
          </p>
          <div className="pt-4">
            <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="my-20">
        <TeamSection />
      </div>

      {/* Google Reviews */}
      <div className="my-20">
        <GoogleReviews />
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center font-heading text-coastal-blue mb-12">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <Clock className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Convenience</h3>
            <p className="text-charcoal">
              We come to your location, saving you time and hassle. Evening and weekend appointments available.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-light/10">
              <Award className="h-6 w-6 text-coastal-light" />
            </div>
            <h3 className="text-xl font-bold font-heading">Experience</h3>
            <p className="text-charcoal">
              Over 20 years of experience in real estate and notary services in the Tampa Bay area.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-sunrise-gold/10">
              <Shield className="h-6 w-6 text-sunrise-gold" />
            </div>
            <h3 className="text-xl font-bold font-heading">Reliability</h3>
            <p className="text-charcoal">
              Licensed, bonded, and insured Florida notary public with a commitment to professionalism.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <MapPin className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Local Knowledge</h3>
            <p className="text-charcoal">
              Deep understanding of the Tampa Bay real estate market and local requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center font-heading text-coastal-blue mb-12">Our Office</h2>
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
        <h2 className="text-3xl font-bold font-heading text-coastal-blue mb-6">Ready to Work With Us?</h2>
        <p className="text-charcoal max-w-[700px] mx-auto mb-8">
          Schedule an appointment today and experience our professional notary services in Tampa Bay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-light">
            <Link href="/schedule">Book an Appointment</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-coastal-blue text-coastal-blue hover:bg-coastal-blue/5"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
