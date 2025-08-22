"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"

export function EnhancedBooking() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    "General Document Notarization",
    "Real Estate Documents",
    "Estate Planning (Will, Power of Attorney)",
    "Apostille Services",
    "Vehicle Documentation (VIN Verification)",
    "I-9 Employment Verification",
    "Wedding Officiant Services",
    "Mobile Notary Service",
    "Loan Signing Agent Services",
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Appointment request submitted successfully! We'll contact you shortly to confirm.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-deep-purple mb-4">Schedule Your Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your notary services with our experienced team. We serve all 67 Florida counties with mobile and office
            appointments.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="bg-deep-purple text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Book Your Notary Service
            </CardTitle>
            <CardDescription className="text-blue-100">
              Fill out the form below and we'll contact you to confirm your appointment
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <Tabs defaultValue="service" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="service">Service & Schedule</TabsTrigger>
                <TabsTrigger value="contact">Contact Information</TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                <TabsContent value="service" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">
                        Select Service *
                      </Label>
                      <Select value={selectedService} onValueChange={setSelectedService} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-medium">
                        Service Location *
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose location..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile">Mobile Service (Your Location)</SelectItem>
                          <SelectItem value="office">Our Office</SelectItem>
                          <SelectItem value="virtual">Virtual/Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium">
                        Preferred Date *
                      </Label>
                      <Input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-sm font-medium">
                        Preferred Time *
                      </Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time..." />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-medium">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Please provide any additional details about your notary needs..."
                      className="min-h-[100px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input type="text" id="firstName" placeholder="Enter your first name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input type="text" id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input type="email" id="email" placeholder="your.email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input type="tel" id="phone" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Address (Required for Mobile Service)
                    </Label>
                    <Input type="text" id="address" placeholder="Street address" />
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City
                      </Label>
                      <Input type="text" id="city" placeholder="City" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="FL" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="FL">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zip" className="text-sm font-medium">
                        ZIP Code
                      </Label>
                      <Input type="text" id="zip" placeholder="12345" />
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-deep-purple hover:bg-deep-purple/90 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Submit Appointment Request
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </form>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-deep-purple mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">(727) 555-0123</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-deep-purple mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@westcoastnotaries.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-deep-purple mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Service Area</h3>
              <p className="text-sm text-gray-600">All 67 Florida Counties</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
