"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your form handling logic
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue">Get In Touch</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full bg-coastal-blue hover:bg-coastal-light" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-heading text-coastal-blue mb-6">Contact Information</h3>

              {/* Horizontal contact info layout */}
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-coastal-blue/10 mr-4">
                      <Phone className="h-6 w-6 text-coastal-blue" />
                    </div>
                    <div>
                      <p className="font-medium">(727) 710-5455</p>
                      <p className="text-sm text-neutral-500">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-coastal-blue/10 mr-4">
                      <Mail className="h-6 w-6 text-coastal-blue" />
                    </div>
                    <div>
                      <p className="font-medium">info@gopronotaries.com</p>
                      <p className="text-sm text-neutral-500">We respond within 24hrs</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-coastal-blue/10 mr-4">
                      <MapPin className="h-6 w-6 text-coastal-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Tampa Bay Area, FL</p>
                      <p className="text-sm text-neutral-500">Mobile service - we come to you!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-heading text-coastal-blue mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-neutral-50 rounded-md">
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-neutral-600">9:00 AM - 7:00 PM</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-md">
                  <p className="font-medium">Saturday</p>
                  <p className="text-neutral-600">10:00 AM - 5:00 PM</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-md col-span-2">
                  <p className="font-medium">Sunday</p>
                  <p className="text-neutral-600">By appointment only</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-light">
                <Link href="/schedule">Schedule an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
