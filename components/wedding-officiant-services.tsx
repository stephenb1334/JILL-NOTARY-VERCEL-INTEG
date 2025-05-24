import { Heart, MapPin, FileText, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WeddingOfficiantServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-deep-purple-800 md:text-4xl">
            Elegant Wedding Officiant Services
          </h2>
          <p className="text-steel-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Serving Tampa Bay and Surrounding Areas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <div className="space-y-6">
              <Card className="border-2 border-deep-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-deep-purple-100">
                      <Heart className="h-6 w-6 text-deep-purple-700" />
                    </div>
                    <CardTitle className="font-heading text-xl text-deep-purple-800">
                      Personalized Wedding Ceremonies
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-blue-700 mb-6">
                    Your wedding day is a cherished milestone deserving of a meaningful, personalized ceremony. As your
                    dedicated officiant based in Trinity, Florida, I expertly craft ceremonies tailored to your unique
                    love story—be it a traditional wedding, intimate elopement, or a non-denominational event. My
                    approach combines warm, heartfelt engagement with professional precision, ensuring a memorable
                    experience for both Florida residents and out-of-state couples holding valid marriage licenses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-steel-blue-200 bg-steel-blue-50">
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-deep-purple-800 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-steel-blue-600" />
                    Legal Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-blue-700 font-medium">
                    Commissioned State of Florida Notary Public fully authorized to officiate weddings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-2 border-deep-purple-200">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-deep-purple-800 flex items-center gap-2">
                  <Users className="h-5 w-5 text-steel-blue-600" />
                  Wedding Services Include
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Traditional wedding ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Intimate elopements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Non-denominational ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Personalized vow writing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Marriage license guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Ceremony rehearsal coordination</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-deep-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-steel-blue-600" />
                    <span className="font-medium text-deep-purple-800">Service Area</span>
                  </div>
                  <p className="text-slate-blue-700 text-sm">
                    Tampa Bay, Pasco County, Hillsborough County, and surrounding areas throughout Florida
                  </p>
                </div>

                <Button asChild className="w-full mt-6 bg-deep-purple-700 hover:bg-deep-purple-800">
                  <Link href="/schedule">Schedule Wedding Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
