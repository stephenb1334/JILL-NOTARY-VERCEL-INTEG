import { Briefcase, FileText, Home, Users, FileSignature, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-sand">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Our Core Services
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Professional notary solutions for all your needs in the Greater Tampa Bay area.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-t-4 border-t-coastal-blue transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-blue/10 flex items-center justify-center">
                <Home className="h-6 w-6 text-coastal-blue" />
              </div>
              <CardTitle className="font-heading">Real Estate Services</CardTitle>
              <CardDescription>Expert notarization for real estate transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Loan signing agent services (NNA and LSS Certified)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Refinance and new home purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>HELOC and second mortgages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Advance Deed Transfers</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-coastal-blue text-coastal-blue hover:bg-coastal-blue/5"
              >
                <Link href="/services">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-coastal-blue hover:bg-coastal-light">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-coastal-light transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-light/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-coastal-light" />
              </div>
              <CardTitle className="font-heading">Estate Planning Services</CardTitle>
              <CardDescription>Secure your legacy with proper documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Last Will and Testament</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Living Will/Healthcare Directives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Durable Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Spanish Services Available</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-coastal-light text-coastal-light hover:bg-coastal-light/5"
              >
                <Link href="/estate-planning">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-coastal-light hover:bg-coastal-blue">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-sunrise-gold transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-sunrise-gold/10 flex items-center justify-center">
                <FileSignature className="h-6 w-6 text-sunrise-gold" />
              </div>
              <CardTitle className="font-heading">Wedding Officiant</CardTitle>
              <CardDescription>Create a ceremony that reflects your love story</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Classic weddings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Intimate elopements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Non-denominational celebrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Personalized ceremonies</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-sunrise-gold text-sunrise-gold hover:bg-sunrise-gold/5"
              >
                <Link href="/wedding-officiant">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-sunrise-gold hover:bg-sunrise-gold/80">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <Card className="border-t-4 border-t-coastal-blue transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-blue/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-coastal-blue" />
              </div>
              <CardTitle className="font-heading">Apostille Services</CardTitle>
              <CardDescription>Document authentication for international use</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Birth certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Marriage licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Powers of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Business agreements</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-coastal-blue text-coastal-blue hover:bg-coastal-blue/5"
              >
                <Link href="/apostille">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-coastal-blue hover:bg-coastal-light">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-coastal-light transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-light/10 flex items-center justify-center">
                <Car className="h-6 w-6 text-coastal-light" />
              </div>
              <CardTitle className="font-heading">Vehicle Documentation</CardTitle>
              <CardDescription>Vehicle-related verification and documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>VIN verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Odometer verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Out-of-state vehicle registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Vehicle title transfers</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-coastal-light text-coastal-light hover:bg-coastal-light/5"
              >
                <Link href="/services">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-coastal-light hover:bg-coastal-blue">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-sunrise-gold transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-sunrise-gold/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-sunrise-gold" />
              </div>
              <CardTitle className="font-heading">Special Features</CardTitle>
              <CardDescription>What sets our services apart</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Bilingual services (English/Spanish)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Military discount for veterans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Mobile service - we come to you!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>20+ years experience (since 2003)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-sunrise-gold text-sunrise-gold hover:bg-sunrise-gold/5"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-sunrise-gold hover:bg-sunrise-gold/80">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
