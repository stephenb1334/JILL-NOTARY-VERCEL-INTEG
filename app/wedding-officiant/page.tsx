import { Heart, Calendar, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WeddingOfficiantPage() {
  return (
    <div className="container px-4 py-12 md:py-16 pt-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
          Wedding Officiant Services
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Elegant ceremonies serving Tampa Bay and beyond.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center mb-16">
        <div>
          <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg">
            <img src="/florida-beach-wedding.png" alt="Wedding ceremony" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-coastal-blue">Your Special Day</h2>
          <p className="text-charcoal">
            Your wedding day is a beautiful chapter in your love story — a moment to be cherished forever. As a
            dedicated wedding officiant based in Trinity, Florida, I am honored to help you create a ceremony that
            reflects the heart of your journey together.
          </p>
          <p className="text-charcoal">
            Whether you envision a classic wedding, an intimate elopement, or a non-denominational celebration, I will
            thoughtfully craft a personalized ceremony that captures the essence of your bond.
          </p>
          <div className="pt-4">
            <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
              <Link href="/schedule">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl font-bold text-center font-heading text-coastal-blue mb-12">Our Wedding Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <Heart className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Classic Weddings</h3>
            <p className="text-charcoal">Traditional ceremonies with all the cherished elements you love.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-light/10">
              <Calendar className="h-6 w-6 text-coastal-light" />
            </div>
            <h3 className="text-xl font-bold font-heading">Intimate Elopements</h3>
            <p className="text-charcoal">Beautiful, meaningful ceremonies for just the two of you.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-sunrise-gold/10">
              <MapPin className="h-6 w-6 text-sunrise-gold" />
            </div>
            <h3 className="text-xl font-bold font-heading">Destination Weddings</h3>
            <p className="text-charcoal">Services throughout the beautiful Tampa Bay area and beaches.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <CheckCircle className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Legal Requirements</h3>
            <p className="text-charcoal">Ensuring all legal aspects of your marriage are properly handled.</p>
          </div>
        </div>
      </div>

      <div className="bg-coastal-blue/5 rounded-lg p-8 my-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center font-heading text-coastal-blue mb-6">The Process</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-blue flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium">Initial Consultation</h3>
                <p className="text-charcoal">
                  We'll discuss your vision, preferences, and any special elements you'd like to include in your
                  ceremony.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-blue flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium">Ceremony Planning</h3>
                <p className="text-charcoal">
                  I'll craft a personalized ceremony script that reflects your relationship and values.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-blue flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium">Marriage License</h3>
                <p className="text-charcoal">
                  You'll need to obtain a valid marriage license from the Clerk of Court prior to the ceremony.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-blue flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="font-medium">Your Special Day</h3>
                <p className="text-charcoal">
                  I'll arrive early to ensure everything is ready for your perfect ceremony.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold font-heading text-coastal-blue mb-6">Ready to Begin?</h2>
        <p className="text-charcoal max-w-[700px] mx-auto mb-8">
          Let's create a ceremony that perfectly captures your love story and creates lasting memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-light">
            <Link href="/schedule">Schedule a Consultation</Link>
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
