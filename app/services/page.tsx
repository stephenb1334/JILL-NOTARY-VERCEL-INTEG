import { Check, Clock, DollarSign, MapPin, Globe, Car, Briefcase, FileText, Users, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
          Our Notary Services
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl/text-xl/relaxed max-w-[700px] mx-auto">
          We provide comprehensive notary and related services throughout Florida.
        </p>
      </div>

      <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-7 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="notary">Notary</TabsTrigger>
          <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
          <TabsTrigger value="estate-planning">Estate Planning</TabsTrigger>
          <TabsTrigger value="wedding">Wedding</TabsTrigger>
          <TabsTrigger value="apostille">Apostille</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Notary Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Notary Services</CardTitle>
                <CardDescription>Professional notarization for all document types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>General document notarization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Mobile notary services covering all 67 Florida counties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Witnesses for document signing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Extended hours notary services (with convenience fee)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>LegalZoom document notarization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real Estate Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Real Estate Services</CardTitle>
                <CardDescription>Expert notarization for real estate transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Real estate document notarization and preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Seller documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>New home purchase documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Loan signing agent services (NNA and LSS Certified)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Estate Planning */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Estate Planning</CardTitle>
                <CardDescription>Secure your legacy with proper documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Last Will and Testament ($150)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Living Will/Advance Healthcare Directive ($65)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Durable Power of Attorney ($125)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Full estate planning packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Testamentos, Directivas, Carta de Poder (Spanish services)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vehicle Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Vehicle Documentation</CardTitle>
                <CardDescription>Vehicle-related verification and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>VIN verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Odometer verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Out-of-state vehicle registration assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Trailer, RV, and motorcycle documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Business & Employment Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Business & Employment</CardTitle>
                <CardDescription>Services for businesses and employers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>I-9 Form verification (Employment Eligibility Verification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Authorized representative services for remote employee verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Document Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Document Services</CardTitle>
                <CardDescription>Comprehensive document handling solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>International document shipping (over 200 countries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Legal document preparation with state compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Translation services (English-Spanish)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Other Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Other Services</CardTitle>
                <CardDescription>Additional services to meet your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Bilingual services (English and Spanish)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Local business recommendations (Shop Local - Tampa Bay)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notary">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Notary Services</CardTitle>
                <CardDescription>Professional notarization for all document types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>General document notarization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Mobile notary services covering all 67 Florida counties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Witnesses for document signing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Extended hours notary services (with convenience fee)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>LegalZoom document notarization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="real-estate">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Real Estate Services</CardTitle>
                <CardDescription>Expert notarization for real estate transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Real estate document notarization and preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Seller documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>New home purchase documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Loan signing agent services (NNA and LSS Certified)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="estate-planning">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Estate Planning</CardTitle>
                <CardDescription>Secure your legacy with proper documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Last Will and Testament ($150)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Living Will/Advance Healthcare Directive ($65)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Durable Power of Attorney ($125)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Full estate planning packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Testamentos, Directivas, Carta de Poder (Spanish services)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wedding">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Wedding Officiant Services</CardTitle>
                <CardDescription>Elegant ceremonies for your special day</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Classic weddings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Intimate elopements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Non-denominational celebrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Personalized ceremonies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apostille">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Apostille Services</CardTitle>
                <CardDescription>Document authentication for international use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Birth certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Marriage licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Powers of attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Business agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Educational documents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vehicle">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Vehicle Documentation</CardTitle>
                <CardDescription>Vehicle-related verification and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>VIN verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Odometer verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Out-of-state vehicle registration assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Trailer, RV, and motorcycle documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Business & Employment</CardTitle>
                <CardDescription>Services for businesses and employers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>I-9 Form verification (Employment Eligibility Verification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Authorized representative services for remote employee verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Document Services</CardTitle>
                <CardDescription>Comprehensive document handling solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>International document shipping (over 200 countries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Legal document preparation with state compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Translation services (English-Spanish)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="other">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Other Services</CardTitle>
                <CardDescription>Additional services to meet your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Bilingual services (English and Spanish)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Local business recommendations (Shop Local - Tampa Bay)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Document Services</CardTitle>
                <CardDescription>Comprehensive document handling solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>International document shipping (over 200 countries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Legal document preparation with state compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-coastal-blue mt-0.5" />
                    <span>Translation services (English-Spanish)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <div className="bg-coastal-blue/5 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold font-heading text-coastal-blue mb-4">Our Service Categories</h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <FileText className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Notary Services</h3>
              <p className="text-xs text-charcoal mt-1">Professional notarization for all document types</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <Home className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Real Estate</h3>
              <p className="text-xs text-charcoal mt-1">Expert notarization for real estate transactions</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <FileText className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Estate Planning</h3>
              <p className="text-xs text-charcoal mt-1">Secure your legacy with proper documentation</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <Car className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Vehicle Documentation</h3>
              <p className="text-xs text-charcoal mt-1">Vehicle-related verification and documentation</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <Briefcase className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Business Services</h3>
              <p className="text-xs text-charcoal mt-1">Services for businesses and employers</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <Globe className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Document Services</h3>
              <p className="text-xs text-charcoal mt-1">Comprehensive document handling solutions</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-coastal-blue/10">
                  <Users className="h-5 w-5 text-coastal-blue" />
                </div>
              </div>
              <h3 className="font-medium font-heading">Bilingual Services</h3>
              <p className="text-xs text-charcoal mt-1">Services in English and Spanish</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <Clock className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Availability</h3>
            </div>
            <p className="text-sm text-charcoal mb-2">We offer flexible scheduling to accommodate your needs:</p>
            <ul className="text-sm text-charcoal space-y-1">
              <li>• Monday - Friday: 9AM - 7PM</li>
              <li>• Saturday: 10AM - 5PM</li>
              <li>• Sunday: By appointment</li>
              <li>• Extended hours available (fee applies)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <MapPin className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Service Area</h3>
            </div>
            <p className="text-sm text-charcoal mb-2">We provide mobile notary services throughout:</p>
            <ul className="text-sm text-charcoal space-y-1">
              <li>• All 67 Florida counties</li>
              <li>• Tampa Bay area</li>
              <li>• St. Petersburg</li>
              <li>• Clearwater and surrounding areas</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <DollarSign className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Pricing</h3>
            </div>
            <p className="text-sm text-charcoal mb-2">Our competitive pricing structure:</p>
            <ul className="text-sm text-charcoal space-y-1">
              <li>• Last Will and Testament: $150</li>
              <li>• Living Will/Healthcare Directive: $65</li>
              <li>• Durable Power of Attorney: $125</li>
              <li>• Standard notarization: $10/signature</li>
              <li>• Travel fees vary by location</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold font-heading text-coastal-blue mb-4">
            Ready to Schedule a Notary Service?
          </h2>
          <p className="text-charcoal max-w-[700px] mx-auto mb-6">
            Book an appointment today and experience our professional, convenient mobile notary services.
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

      <div className="mt-16 text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter font-heading text-coastal-blue">Service Areas</h2>
        <p className="text-charcoal md:text-lg/relaxed max-w-[700px] mx-auto">
          We provide mobile notary services throughout all 67 Florida counties, including:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-3xl mx-auto mt-6">
          <div className="bg-coastal-blue/5 p-3 rounded-md">Tampa</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">St. Petersburg</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Clearwater</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Largo</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Pinellas Park</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Seminole</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Palm Harbor</div>
          <div className="bg-coastal-blue/5 p-3 rounded-md">Wesley Chapel</div>
        </div>
      </div>
    </div>
  )
}
