import { Medal, Shield, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MilitaryDiscount() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Military Discount
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Thank you for your service to our country.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2 border-coastal-blue/20">
          <CardHeader className="text-center bg-coastal-blue/5">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-coastal-blue/10">
                <Medal className="h-8 w-8 text-coastal-blue" />
              </div>
            </div>
            <CardTitle className="font-heading text-2xl">GovX ID Military Discount</CardTitle>
            <CardDescription className="text-lg">Available to all United States Armed Forces veterans</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 pb-8 px-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-coastal-blue/10 mt-1">
                  <Shield className="h-5 w-5 text-coastal-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Personal Connection</h3>
                  <p className="text-charcoal">
                    As the proud spouse of a former United States Air Force veteran, I understand the sacrifices made by
                    our service members and their families.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-coastal-blue/10 mt-1">
                  <Heart className="h-5 w-5 text-coastal-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Our Commitment</h3>
                  <p className="text-charcoal">
                    I am deeply committed to giving back to those who have served our country. Simply present your
                    military ID or GovX ID to receive your discount on our notary services.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-xl font-bold text-coastal-blue">Thank you for your service!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
