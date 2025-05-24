"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional notary specialists dedicated to providing exceptional service throughout Tampa Bay
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Jill Munoz */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Image Container */}
                <div className="w-48 h-48 mb-6 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jill%20headshot.PNG-R3RJpMsPDtNr3rNPhhMvBWlZ6zZkw2.png"
                    alt="Jill Munoz - Principal & Owner"
                    className="w-full h-full object-cover rounded-full border-4 border-deep-purple/20 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-purple mb-2">Jill Munoz</h3>
                    <p className="text-steel-blue font-semibold text-lg">Principal & Owner</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    With over 20 years of experience in notary services and real estate, Jill brings unparalleled
                    expertise to every client interaction. As the founder of West Coast Notaries, she has built a
                    reputation for professionalism, reliability, and exceptional service throughout Florida.
                  </p>

                  {/* Call Now Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-deep-purple to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <a href="tel:+1-813-555-0123" className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Natalie Kolaxis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Image Container */}
                <div className="w-48 h-48 mb-6 relative">
                  <img
                    src="/images/natalie-jill-notary.jpg"
                    alt="Natalie Kolaxis - Senior Notary Specialist"
                    className="w-full h-full object-cover rounded-full border-4 border-steel-blue/20 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-purple mb-2">Natalie Kolaxis</h3>
                    <p className="text-steel-blue font-semibold text-lg">Senior Notary Specialist</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    As a Senior Notary Specialist, Natalie brings years of hands-on notarial experience and a deep
                    commitment to providing precise, reliable, and client-focused services. She is passionate about
                    making the notarization process seamless and is strongly driven by customer service satisfaction.
                  </p>

                  {/* Call Now Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-steel-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <a href="tel:+1-813-555-0123" className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-deep-purple/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-purple mb-4">Ready to Work with Our Team?</h3>
            <p className="text-gray-600 mb-6">
              Contact our professional notary specialists today for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-deep-purple to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:+1-813-555-0123" className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Team
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <Link href="/schedule">Schedule Online</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
