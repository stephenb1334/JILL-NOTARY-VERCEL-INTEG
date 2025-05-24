"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Globe, Car, Briefcase, FileText, Users, Home, Heart, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ServiceCardProps {
  title: string
  description: string
  services: string[]
  detailedServices?: { name: string; description: string }[]
  pricing?: string
  serviceType: string
}

function ServiceCard({ title, description, services, detailedServices, pricing, serviceType }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-2 border-deep-purple-200/20">
      <CardHeader>
        <CardTitle className="font-heading text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
        {pricing && <div className="text-lg font-semibold text-deep-purple-700">{pricing}</div>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base">{service}</span>
            </li>
          ))}
        </ul>

        {detailedServices && (
          <>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mb-4 border-deep-purple-200 text-deep-purple-700"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2" />
                  Show Less Details
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Details
                </>
              )}
            </Button>

            {isExpanded && (
              <div className="space-y-4 mb-4 p-4 bg-deep-purple-50 rounded-lg">
                <h4 className="font-semibold text-deep-purple-800">Detailed Services:</h4>
                {detailedServices.map((service, index) => (
                  <div key={index} className="border-l-4 border-deep-purple-200 pl-4">
                    <h5 className="font-medium text-deep-purple-700 mb-1">{service.name}</h5>
                    <p className="text-sm text-slate-blue-700">{service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <Button asChild className="w-full bg-deep-purple text-white border border-black">
          <Link href={`/schedule?service=${encodeURIComponent(serviceType)}`}>Book {title}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  const notaryServices = [
    "General document notarization",
    "Mobile notary services covering all 67 Florida counties",
    "Witnesses for document signing",
    "Extended hours notary services (with convenience fee)",
    "LegalZoom document notarization",
    "Apostille document authentication for international use",
  ]

  const notaryDetailed = [
    {
      name: "General Document Notarization",
      description:
        "Professional notarization of legal documents, contracts, affidavits, and personal papers with proper identification verification and record keeping.",
    },
    {
      name: "Mobile Notary Services",
      description:
        "Convenient on-site notarization at your location throughout all 67 Florida counties, including homes, offices, hospitals, and assisted living facilities.",
    },
    {
      name: "Witness Services",
      description:
        "Providing qualified witnesses for document signing when required by law, ensuring all legal requirements are met for document validity.",
    },
    {
      name: "Extended Hours Service",
      description:
        "After-hours and weekend notarization services available for urgent needs, with additional convenience fees applied.",
    },
  ]

  const realEstateServices = [
    "Real estate document notarization and preparation",
    "Seller documents",
    "New home purchase documents",
    "Loan signing agent services (NNA and LSS Certified)",
  ]

  const realEstateDetailed = [
    {
      name: "Purchase Agreements",
      description:
        "Complete notarization of home purchase contracts, ensuring all parties are properly identified and documents are executed correctly.",
    },
    {
      name: "Refinancing Documents",
      description:
        "Professional handling of mortgage refinancing paperwork, including loan modifications and rate adjustments.",
    },
    {
      name: "Seller Document Packages",
      description:
        "Comprehensive notarization of all seller-required documents including deeds, disclosures, and transfer documents.",
    },
    {
      name: "Closing Services",
      description: "Full-service loan signing agent capabilities for real estate closings, certified by NNA and LSS.",
    },
  ]

  const estatePlanningServices = [
    "Last Will and Testament",
    "Living Will/Advance Healthcare Directive",
    "Durable Power of Attorney",
    "Full estate planning packages",
    "Testamentos, Directivas, Carta de Poder (Spanish services)",
  ]

  const estatePlanningDetailed = [
    {
      name: "Last Will and Testament",
      description:
        "Comprehensive will preparation and notarization, ensuring your final wishes are legally documented and properly executed.",
    },
    {
      name: "Healthcare Directives",
      description:
        "Living wills and advance healthcare directives to ensure your medical preferences are honored when you cannot speak for yourself.",
    },
    {
      name: "Power of Attorney Documents",
      description:
        "Durable and limited power of attorney documents for financial, legal, and healthcare decision-making authority.",
    },
    {
      name: "Bilingual Estate Services",
      description:
        "Complete estate planning services available in Spanish, including Testamentos, Directivas, and Carta de Poder.",
    },
  ]

  const apostilleServices = [
    "US State Department apostille processing",
    "International document authentication",
    "Document shipping to over 200 countries",
    "Expedited processing available",
  ]

  const apostilleDetailed = [
    {
      name: "Birth Certificate Apostilles",
      description:
        "Authentication of birth certificates for international use, including dual citizenship applications and overseas employment.",
    },
    {
      name: "Marriage License Apostilles",
      description:
        "Apostille services for marriage certificates needed for international recognition, immigration, and legal proceedings abroad.",
    },
    {
      name: "Educational Document Apostilles",
      description:
        "Authentication of diplomas, transcripts, and educational certificates for international study or employment opportunities.",
    },
    {
      name: "Business Document Apostilles",
      description:
        "Corporate document authentication for international business transactions, including articles of incorporation and business licenses.",
    },
  ]

  const vehicleServices = [
    "VIN verification",
    "Odometer verification",
    "Out-of-state vehicle registration assistance",
    "Trailer, RV, and motorcycle documentation",
  ]

  const vehicleDetailed = [
    {
      name: "VIN Verification Services",
      description:
        "Official vehicle identification number verification for title transfers, registration, and insurance purposes.",
    },
    {
      name: "Odometer Certification",
      description: "Legal odometer reading verification and certification for vehicle sales and transfers.",
    },
    {
      name: "Registration Assistance",
      description:
        "Complete assistance with out-of-state vehicle registration, including all required documentation and verification.",
    },
  ]

  const businessServices = [
    "I-9 Form verification (Employment Eligibility Verification)",
    "Authorized representative services for remote employee verification",
  ]

  const businessDetailed = [
    {
      name: "I-9 Employment Verification",
      description:
        "Complete I-9 form verification services for employers, ensuring compliance with federal employment eligibility requirements.",
    },
    {
      name: "Remote Employee Verification",
      description:
        "Authorized representative services for companies with remote employees, providing secure identity and document verification.",
    },
  ]

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services%20banner.jpg-epBW9I30cqghyHv2MxcIPYmEgnkSXZ.jpeg"
          alt="Professional notary services - pen and document signing"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-deep-purple-900/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl font-bold tracking-tighter font-heading text-white sm:text-4xl md:text-5xl mb-4 drop-shadow-lg">
            Our Notary Services
          </h1>
          <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto drop-shadow-md">
            We provide comprehensive notary and related services throughout Florida.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 md:py-16">
        <Tabs defaultValue="all" className="max-w-6xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 mb-8 text-xs md:text-sm">
            <TabsTrigger value="all" className="text-xs md:text-sm px-2 md:px-4">
              All
            </TabsTrigger>
            <TabsTrigger value="notary" className="text-xs md:text-sm px-2 md:px-4">
              Notary
            </TabsTrigger>
            <TabsTrigger value="real-estate" className="text-xs md:text-sm px-1 md:px-4">
              Real Estate
            </TabsTrigger>
            <TabsTrigger value="estate-planning" className="text-xs md:text-sm px-1 md:px-4">
              Estate Planning
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="text-xs md:text-sm px-2 md:px-4 md:block hidden">
              Vehicle
            </TabsTrigger>
            <TabsTrigger value="business" className="text-xs md:text-sm px-2 md:px-4 md:block hidden">
              Business
            </TabsTrigger>
            <TabsTrigger value="other" className="text-xs md:text-sm px-2 md:px-4 md:block hidden">
              Other
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Notary Services"
                description="Professional notarization for all document types"
                services={notaryServices}
                detailedServices={notaryDetailed}
                serviceType="notary"
              />

              <ServiceCard
                title="Real Estate Services"
                description="Expert notarization for real estate transactions"
                services={realEstateServices}
                detailedServices={realEstateDetailed}
                serviceType="real-estate"
              />

              <ServiceCard
                title="Estate Planning"
                description="Secure your legacy with proper documentation"
                services={estatePlanningServices}
                detailedServices={estatePlanningDetailed}
                serviceType="estate-planning"
              />

              <ServiceCard
                title="Apostille Services"
                description="International document authentication through US State Department"
                services={apostilleServices}
                detailedServices={apostilleDetailed}
                pricing="$250 per document"
                serviceType="apostille"
              />

              <ServiceCard
                title="Vehicle Documentation"
                description="Vehicle-related verification and documentation"
                services={vehicleServices}
                detailedServices={vehicleDetailed}
                serviceType="vehicle"
              />

              <ServiceCard
                title="Business & Employment"
                description="Services for businesses and employers"
                services={businessServices}
                detailedServices={businessDetailed}
                serviceType="business"
              />
            </div>
          </TabsContent>

          <TabsContent value="notary">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Notary Services"
                description="Professional notarization for all document types"
                services={notaryServices}
                detailedServices={notaryDetailed}
                serviceType="notary"
              />
            </div>
          </TabsContent>

          <TabsContent value="real-estate">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Real Estate Services"
                description="Expert notarization for real estate transactions"
                services={realEstateServices}
                detailedServices={realEstateDetailed}
                serviceType="real-estate"
              />
            </div>
          </TabsContent>

          <TabsContent value="estate-planning">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Estate Planning"
                description="Secure your legacy with proper documentation"
                services={estatePlanningServices}
                detailedServices={estatePlanningDetailed}
                serviceType="estate-planning"
              />
            </div>
          </TabsContent>

          <TabsContent value="vehicle">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Vehicle Documentation"
                description="Vehicle-related verification and documentation"
                services={vehicleServices}
                detailedServices={vehicleDetailed}
                serviceType="vehicle"
              />
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Business & Employment"
                description="Services for businesses and employers"
                services={businessServices}
                detailedServices={businessDetailed}
                serviceType="business"
              />
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Apostille Services"
                description="International document authentication through US State Department"
                services={apostilleServices}
                detailedServices={apostilleDetailed}
                pricing="$250 per document"
                serviceType="apostille"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Rest of the page content remains the same */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-deep-purple-700/5 rounded-lg p-6 md:p-8 mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-deep-purple-700 mb-4">
              Our Service Categories
            </h2>
            <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <FileText className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Notary Services</h3>
                <p className="text-xs text-neutral-600 mt-1">Professional notarization for all document types</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <Home className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Real Estate</h3>
                <p className="text-xs text-neutral-600 mt-1">Expert notarization for real estate transactions</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <FileText className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Estate Planning</h3>
                <p className="text-xs text-neutral-600 mt-1">Secure your legacy with proper documentation</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-100">
                    <Globe className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Apostille Services</h3>
                <p className="text-xs text-neutral-600 mt-1">International document authentication</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <Car className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Vehicle Documentation</h3>
                <p className="text-xs text-neutral-600 mt-1">Vehicle-related verification and documentation</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <Briefcase className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Business Services</h3>
                <p className="text-xs text-neutral-600 mt-1">Services for businesses and employers</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-700/10">
                    <Users className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Bilingual Services</h3>
                <p className="text-xs text-neutral-600 mt-1">Services in English and Spanish</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-deep-purple-100">
                    <Heart className="h-5 w-5 text-deep-purple-700" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Wedding Officiant</h3>
                <p className="text-xs text-neutral-600 mt-1">Elegant wedding ceremony services</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-deep-purple-700 mb-4">
              Ready to Schedule a Notary Service?
            </h2>
            <p className="text-neutral-600 max-w-[700px] mx-auto mb-6 text-sm md:text-base">
              Book an appointment today and experience our professional, convenient mobile notary services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-deep-purple text-white border border-black">
                <Link href="/schedule">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-deep-purple-200 text-deep-purple-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tighter font-heading text-deep-purple-700">
            Service Areas
          </h2>
          <p className="text-neutral-600 md:text-lg/relaxed max-w-[700px] mx-auto text-sm md:text-base">
            We provide mobile notary services throughout all 67 Florida counties, including:
          </p>
          <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-3xl mx-auto mt-6">
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Tampa</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">St. Petersburg</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Clearwater</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Largo</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Pinellas Park</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Seminole</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Palm Harbor</div>
            <div className="bg-deep-purple-700/5 p-2 md:p-3 rounded-md text-xs md:text-sm">Wesley Chapel</div>
          </div>
        </div>
      </div>
    </>
  )
}
