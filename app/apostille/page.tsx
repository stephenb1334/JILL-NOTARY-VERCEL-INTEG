import { Globe, FileCheck, Briefcase, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ApostillePage() {
  return (
    <div className="container px-4 py-12 md:py-16 pt-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
          Apostille Services
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Document authentication for international use.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-coastal-blue">Easy Apostille Service in Tampa Bay</h2>
          <p className="text-charcoal">
            We offer apostille services to authenticate documents for international use, including birth certificates,
            marriage licenses, and other legal papers. Our efficient process ensures all paperwork is handled correctly,
            working with relevant authorities to meet international requirements, making it smooth and stress-free for
            you.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <Globe className="h-5 w-5 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">International Recognition</h3>
                <p className="text-sm text-charcoal/80">
                  Apostille certification ensures your documents are recognized in over 100 countries.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <FileCheck className="h-5 w-5 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Comprehensive Service</h3>
                <p className="text-sm text-charcoal/80">
                  We handle the entire process from document preparation to final authentication.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <Clock className="h-5 w-5 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Efficient Processing</h3>
                <p className="text-sm text-charcoal/80">
                  Our expertise ensures your documents are processed correctly and efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
              <Link href="/schedule">Request Apostille Service</Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="/apostille-example.png"
              alt="Apostille document with official stamp"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl font-bold text-center font-heading text-coastal-blue mb-12">
          Documents We Can Apostille
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <FileCheck className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Personal Documents</h3>
            </div>
            <ul className="text-sm text-charcoal space-y-2">
              <li>• Birth certificates</li>
              <li>• Marriage licenses</li>
              <li>• Divorce decrees</li>
              <li>• Death certificates</li>
              <li>• Adoption papers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <Briefcase className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Business Documents</h3>
            </div>
            <ul className="text-sm text-charcoal space-y-2">
              <li>• Powers of attorney</li>
              <li>• Business agreements</li>
              <li>• Corporate documents</li>
              <li>• Certificates of incorporation</li>
              <li>• Trade certificates</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-coastal-blue/10">
                <Globe className="h-5 w-5 text-coastal-blue" />
              </div>
              <h3 className="font-medium font-heading">Educational Documents</h3>
            </div>
            <ul className="text-sm text-charcoal space-y-2">
              <li>• Diplomas</li>
              <li>• Transcripts</li>
              <li>• Certificates</li>
              <li>• School records</li>
              <li>• Letters of recommendation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-coastal-blue/5 rounded-lg p-8 my-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center font-heading text-coastal-blue mb-6">
            Common Uses for Apostille Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">International Adoptions</h3>
              <p className="text-sm text-charcoal">
                Authentication of adoption papers and birth certificates for international adoption processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Dual Citizenship</h3>
              <p className="text-sm text-charcoal">
                Verification of birth certificates and other documents for dual citizenship applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Overseas Employment</h3>
              <p className="text-sm text-charcoal">
                Authentication of educational credentials and professional certifications for work abroad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">International Business</h3>
              <p className="text-sm text-charcoal">
                Verification of business documents for international transactions and partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-16 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center font-heading text-coastal-blue mb-6">
          Our Apostille Service Fee
        </h2>
        <div className="flex justify-center items-center mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-coastal-blue">$250</div>
            <p className="text-charcoal mt-2">Professional handling of your apostille needs</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-charcoal">Our comprehensive apostille service includes:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <FileCheck className="h-4 w-4 text-coastal-blue" />
              </div>
              <span className="text-charcoal">Document review and preparation</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <FileCheck className="h-4 w-4 text-coastal-blue" />
              </div>
              <span className="text-charcoal">Coordination with relevant authorities</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <FileCheck className="h-4 w-4 text-coastal-blue" />
              </div>
              <span className="text-charcoal">Professional handling of all paperwork</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <FileCheck className="h-4 w-4 text-coastal-blue" />
              </div>
              <span className="text-charcoal">Guidance throughout the entire process</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
