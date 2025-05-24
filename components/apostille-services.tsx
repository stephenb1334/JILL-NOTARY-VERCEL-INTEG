import { Check, Globe, FileText, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ApostilleServices() {
  return (
    <section className="py-16 bg-slate-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-deep-purple-800 md:text-4xl">
            Florida Apostille Services
          </h2>
          <p className="text-steel-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Efficient, Professional Authentication for International Documents
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
          <div>
            <Card className="border-2 border-deep-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-deep-purple-100">
                    <Globe className="h-6 w-6 text-deep-purple-700" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl text-deep-purple-800">
                      Professional Apostille Services
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <DollarSign className="h-4 w-4 text-steel-blue-600" />
                      <span className="text-lg font-semibold text-steel-blue-700">$250 per Apostille document</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src="/images/apostille-services-new.jpg"
                    alt="Florida Apostille Process - Documents processed through US Department of State for international use"
                    width={400}
                    height={300}
                    className="w-full h-64 object-contain rounded-lg border-2 border-deep-purple-200 bg-white p-4"
                  />
                </div>
                <p className="text-slate-blue-700 mb-6">
                  NotariesBy provides streamlined Apostille services across Tampa Bay, working directly with the US
                  Department of State and appropriate governmental agencies to facilitate the authentication of
                  essential documents such as birth certificates, marriage licenses, powers of attorney, and business
                  agreements for international use. As a credentialed service provider authorized to handle Apostille
                  Document Services with governmental agencies, our rigorous process ensures compliance with the Hague
                  Apostille Convention requirements, offering you convenience and peace of mind.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-deep-purple-800 mb-3">Documents We Authenticate:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-blue-700">Birth certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-blue-700">Marriage licenses and divorce decrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-blue-700">Powers of attorney</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-blue-700">Business agreements and corporate documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-blue-700">Educational transcripts and diplomas</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-steel-blue-200">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-deep-purple-800 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-steel-blue-600" />
                  What is an Apostille?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-blue-700 mb-4">
                  An Apostille certifies documents for acceptance in foreign countries under the Hague Apostille
                  Convention. Commonly required for international adoptions, dual citizenship, employment overseas,
                  business transactions, and educational enrollments abroad, Apostilles are typically issued by the
                  Secretary of State in the originating state of the document.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-steel-blue-200">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-deep-purple-800 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-steel-blue-600" />
                  Key Information Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Originating state or agency of the document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">Destination country for document usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-deep-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-blue-700">
                      Verification if notarization is needed before apostille processing
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-deep-purple-200 bg-deep-purple-50">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-deep-purple-800 mb-3">
                  Governmental Authorization & Service Assurance
                </h4>
                <p className="text-slate-blue-700 mb-4">
                  NotariesBy is credentialed to handle Apostille Document Services with appropriate governmental
                  agencies, including direct coordination with the US Department of State. With extensive experience as
                  a Florida Notary Public, I ensure your documents fulfill all Apostille prerequisites accurately,
                  serving clients in Pasco, Hillsborough counties, and across Florida with full governmental
                  authorization.
                </p>
                <Button asChild className="w-full bg-deep-purple-700 hover:bg-deep-purple-800">
                  <Link href="/schedule">Schedule Apostille Service</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
