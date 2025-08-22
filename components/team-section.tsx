"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-deep-purple mb-4">Meet Our Team</h2>
          <p className="text-charcoal max-w-2xl mx-auto">
            Our experienced team of notaries and professionals are dedicated to providing exceptional service throughout
            the Tampa Bay area.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Jill Munoz - Founder */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/jill-munoz-about.jpeg"
                  alt="Jill Munoz, Founder"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-bold font-heading text-deep-purple mb-2">Jill Munoz</h3>
              <p className="text-steel-blue font-medium mb-3">Founder & Lead Notary</p>
              <p className="text-charcoal text-sm">
                With over 20 years of experience in real estate and notary services, Jill founded West Coast Notaries to
                provide convenient, professional notarization for the Tampa Bay community.
              </p>
            </CardContent>
          </Card>

          {/* Natalie Kolaxis */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/woman33.png"
                  alt="Natalie Kolaxis, Senior Notary"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-bold font-heading text-deep-purple mb-2">Natalie Kolaxis</h3>
              <p className="text-steel-blue font-medium mb-3">Senior Notary Public</p>
              <p className="text-charcoal text-sm">
                Natalie brings extensive experience in document notarization and specializes in real estate transactions
                and estate planning services throughout the Tampa Bay area.
              </p>
            </CardContent>
          </Card>

          {/* Larry Rivera */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-xs font-medium text-center">
                  <div>Coming</div>
                  <div>Soon</div>
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-deep-purple mb-2">Larry Rivera</h3>
              <p className="text-steel-blue font-medium mb-3">Estate Planning Advisor & Veteran Advocate</p>
              <p className="text-charcoal text-sm">
                Retired Army Captain Larry specializes in estate planning services and bilingual translation support. As
                a dedicated veteran advocate, he provides comprehensive guidance for wills, trusts, and estate documents
                throughout Florida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
