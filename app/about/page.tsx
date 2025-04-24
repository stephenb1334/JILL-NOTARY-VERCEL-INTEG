import { Award, Clock, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
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
            <img
              src="https://sjc.microlink.io/DUW2KsuU5RtYwKM588plu7FncwhuLTuFZuz4Yj9OoU0hXNsAFu7JBR93BjW97wgbZMIyKSK5iwm7zkARgGX_EQ.jpeg"
              alt="Professional notary"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-coastal-blue">Our Story</h2>
          <p className="text-charcoal">
            With over 15 years of experience in real estate and notary services, we founded Sunrise Notary Solutions to
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
            <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
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
              Over 15 years of experience in real estate and notary services in the Tampa Bay area.
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
        <h2 className="text-3xl font-bold text-center font-heading text-coastal-blue mb-12">Our Credentials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img
                src="https://kagi.com/proxy/notary-commission-certificate-frame-8-11.jpg?c=W6nbceBOXRuFcwEgpo100_pbhtzx1jssg7CNp4Wiq0JDIRnPY_jqsCqQc5W_0oxIbAC4lupm_6zvdWFcoP2rjSyLhRWXkY93zWKPRh6kSdveWy3N4tpCpQ5czhaOiJdhcTlEEczmGIrVltT3zZjjgw%3D%3D"
                alt="Florida Notary Commission Certificate"
                className="max-w-full h-auto rounded-md shadow-sm"
              />
            </div>
            <h3 className="text-xl font-bold font-heading text-center text-coastal-blue mb-2">
              Florida Notary Commission
            </h3>
            <p className="text-center text-charcoal">Licensed and commissioned by the State of Florida</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img
                src="https://kagi.com/proxy/notarycredentials-1024x299-1.png?c=e4bzmU6ptF9dt7lMCO3uEsYd7Qi0rozYoNrDjH51VT_YbSMh1tTWorNwcHKS-srLq6Ky-C5gOpZGTzRApR6MF9Z1r7B3aGbbrlErw11RxpBhAhbZalCRDmeuFQfLPO92h2JTS2iViTGInIMBlv44mg%3D%3D"
                alt="Notary Professional Credentials"
                className="max-w-full h-auto rounded-md shadow-sm"
              />
            </div>
            <h3 className="text-xl font-bold font-heading text-center text-coastal-blue mb-2">
              Professional Memberships
            </h3>
            <p className="text-center text-charcoal">Active member of leading industry organizations</p>
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
