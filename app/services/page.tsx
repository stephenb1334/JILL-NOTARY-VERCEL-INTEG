import Image from "next/image"
import { Check, Clock, DollarSign, MapPin, Globe, Car, Briefcase, FileText, Users, Home, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
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
        <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
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
              {/* Notary Services */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Notary Services</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Professional notarization for all document types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">General document notarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Mobile notary services covering all 67 Florida counties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Witnesses for document signing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Extended hours notary services (with convenience fee)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">LegalZoom document notarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Apostille document authentication for international use
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Real Estate Services */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Real Estate Services</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Expert notarization for real estate transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Real estate document notarization and preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Seller documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">New home purchase documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Loan signing agent services (NNA and LSS Certified)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Estate Planning */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Estate Planning</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Secure your legacy with proper documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Last Will and Testament</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Living Will/Advance Healthcare Directive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Durable Power of Attorney</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Full estate planning packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Testamentos, Directivas, Carta de Poder (Spanish services)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Apostille Services */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Apostille Services</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    International document authentication through US State Department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0FFBE8DE-D543-4655-8711-13905865AF10.jpg-WmN2hxYndKvjmubtIF25HKTlJLIInI.jpeg"
                      alt="Florida to International Apostille Service"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">US State Department apostille processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">International document authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Document shipping to over 200 countries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Expedited processing available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Vehicle Documentation */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Vehicle Documentation</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Vehicle-related verification and documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">VIN verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Odometer verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Out-of-state vehicle registration assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Trailer, RV, and motorcycle documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Business & Employment Services */}
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Business & Employment</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Services for businesses and employers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        I-9 Form verification (Employment Eligibility Verification)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Authorized representative services for remote employee verification
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tab contents remain the same but with improved mobile styling */}
          <TabsContent value="notary">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-deep-purple-200/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg md:text-xl">Notary Services</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Professional notarization for all document types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">General document notarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Mobile notary services covering all 67 Florida counties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Witnesses for document signing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">
                        Extended hours notary services (with convenience fee)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">LegalZoom document notarization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Continue with other tabs but with improved mobile styling... */}
        </Tabs>

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

          <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-12">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-deep-purple-700/10">
                  <Clock className="h-5 w-5 text-deep-purple-700" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Availability</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">
                We offer flexible scheduling to accommodate your needs:
              </p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• Monday - Friday: 9AM - 7PM</li>
                <li>• Saturday: 10AM - 5PM</li>
                <li>• Sunday: By appointment</li>
                <li>• Extended hours available (fee applies)</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-deep-purple-700/10">
                  <MapPin className="h-5 w-5 text-deep-purple-700" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Service Area</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">We provide mobile notary services throughout:</p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• All 67 Florida counties</li>
                <li>• Tampa Bay area</li>
                <li>• St. Petersburg</li>
                <li>• Clearwater and surrounding areas</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-deep-purple-700/10">
                  <DollarSign className="h-5 w-5 text-deep-purple-700" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Pricing</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">Our competitive pricing structure:</p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• Standard notarization: $10/signature</li>
                <li>• Travel fees vary by location</li>
                <li>• Apostille services: $250 per document</li>
              </ul>
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
              <Button asChild size="lg" className="bg-deep-purple-700 hover:bg-primary-hover">
                <Link href="/schedule">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-deep-purple-200 text-deep-purple-700 hover:bg-primary/5"
              >
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
