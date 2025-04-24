import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Have questions or need to schedule an appointment? Get in touch with our team.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>We're here to help with all your notary needs in St. Petersburg.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-100">
                  <Phone className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-500">(727) 555-1234</p>
                  <p className="text-sm text-gray-500 mt-1">Available 9AM-7PM, Monday-Saturday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-100">
                  <Mail className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-500">info@spnotary.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-100">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium">Service Area</h3>
                  <p className="text-gray-500">St. Petersburg, FL and surrounding areas</p>
                  <p className="text-sm text-gray-500 mt-1">Mobile service - we come to you!</p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/book">Book an Appointment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">Business Hours</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Monday - Friday</p>
                <p className="text-gray-500">9:00 AM - 7:00 PM</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Saturday</p>
                <p className="text-gray-500">10:00 AM - 5:00 PM</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md col-span-2">
                <p className="font-medium">Sunday</p>
                <p className="text-gray-500">By appointment only</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Evening and weekend appointments available upon request.</p>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input id="first-name" className="w-full p-2 border rounded-md" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input id="last-name" className="w-full p-2 border rounded-md" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input id="phone" type="tel" className="w-full p-2 border rounded-md" placeholder="(727) 555-1234" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input id="subject" className="w-full p-2 border rounded-md" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded-md min-h-[120px]"
                    placeholder="Tell us about your notary needs..."
                  />
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-medium">What is a notary public?</h3>
            <p className="text-gray-500">
              A notary public is a state-appointed official who serves as an impartial witness to the signing of
              important documents, verifying the identity of signers and ensuring they're signing willingly.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">What documents do you notarize?</h3>
            <p className="text-gray-500">
              We notarize a wide range of documents including real estate closings, loan documents, powers of attorney,
              affidavits, wills, and more. See our services page for a complete list.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">How much do your services cost?</h3>
            <p className="text-gray-500">
              Our fees vary depending on the type of service, number of documents, and location. Please contact us for a
              quote based on your specific needs.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">What ID do I need for notarization?</h3>
            <p className="text-gray-500">
              Florida law requires current, valid, government-issued photo ID such as a driver's license, passport, or
              state ID card for notarization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
