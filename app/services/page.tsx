import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Notary Services</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          We provide comprehensive notary services for all your real estate needs in St. Petersburg, Florida.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Real Estate Closings</CardTitle>
            <CardDescription>Complete notarization for real estate transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Mortgage documents</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Deeds and title transfers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Closing documents</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Refinancing paperwork</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Signings</CardTitle>
            <CardDescription>Expert notarization for loan documents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Loan agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Promissory notes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Security agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Loan modifications</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Power of Attorney</CardTitle>
            <CardDescription>Notarization of power of attorney documents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>General power of attorney</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Limited power of attorney</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Durable power of attorney</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Healthcare power of attorney</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Affidavits & Statements</CardTitle>
            <CardDescription>Notarization of sworn statements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Affidavits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Sworn statements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Declarations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Certifications</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estate Planning</CardTitle>
            <CardDescription>Notarization for estate planning documents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Wills</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Living trusts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Healthcare directives</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Living wills</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Documents</CardTitle>
            <CardDescription>Notarization for various other documents</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Consent forms</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Authorization letters</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Vehicle transfers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-sky-600 mt-0.5" />
                <span>Business documents</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Service Areas</h2>
        <p className="text-gray-500 md:text-lg/relaxed max-w-[700px] mx-auto">
          We provide mobile notary services throughout St. Petersburg and surrounding areas in Pinellas County,
          including:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-3xl mx-auto mt-6">
          <div className="bg-sky-50 p-3 rounded-md">St. Petersburg</div>
          <div className="bg-sky-50 p-3 rounded-md">Clearwater</div>
          <div className="bg-sky-50 p-3 rounded-md">Largo</div>
          <div className="bg-sky-50 p-3 rounded-md">Pinellas Park</div>
          <div className="bg-sky-50 p-3 rounded-md">Seminole</div>
          <div className="bg-sky-50 p-3 rounded-md">Gulfport</div>
          <div className="bg-sky-50 p-3 rounded-md">Treasure Island</div>
          <div className="bg-sky-50 p-3 rounded-md">Madeira Beach</div>
        </div>
      </div>
    </div>
  )
}
