"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, FileText, Home, MapPin, Phone, User, CheckCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ScheduleProcess() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // Get form values for calendar event
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const preferredDate = formData.get("preferredDate") as string
    const preferredTime = formData.get("preferredTime") as string
    const location = formData.get("location") as string
    const details = formData.get("details") as string
    const serviceType = selectedService

    // Format service type for display
    let serviceTypeDisplay = "General Notary Service"
    if (serviceType === "loan") serviceTypeDisplay = "Loan Document Signing"
    if (serviceType === "estate") serviceTypeDisplay = "Estate Planning"

    // Create time slot based on preferred time
    let startTime = "09:00"
    let endTime = "10:00"

    if (preferredTime === "morning") {
      startTime = "09:00"
      endTime = "10:00"
    } else if (preferredTime === "afternoon") {
      startTime = "13:00"
      endTime = "14:00"
    } else if (preferredTime === "evening") {
      startTime = "17:00"
      endTime = "18:00"
    }

    // Create start and end datetime strings
    const startDateTime = `${preferredDate}T${startTime}:00`
    const endDateTime = `${preferredDate}T${endTime}:00`

    // Create calendar event data
    const calendarEvent = {
      summary: `Notary Appointment: ${serviceTypeDisplay} with ${fullName}`,
      description: `
Service: ${serviceTypeDisplay}
Client: ${fullName}
Phone: ${phone}
Email: ${email}
Location: ${location}
Additional Details: ${details || "None provided"}
      `,
      start: {
        dateTime: startDateTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/New_York",
      },
      location: location,
      attendees: [{ email: "steve@theaiminded.com" }, { email: email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 60 },
        ],
      },
    }

    try {
      // Send form data to Formspree
      const formResponse = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!formResponse.ok) {
        const formError = await formResponse.text()
        console.error("Form submission error:", formError)
        throw new Error("Form submission failed")
      }

      // Send notification with calendar invite to both parties
      const notificationResponse = await fetch("/api/send-appointment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notaryEmail: "steve@theaiminded.com",
          customerEmail: email,
          customerName: fullName,
          customerPhone: phone,
          serviceType: serviceTypeDisplay,
          appointmentDate: preferredDate,
          appointmentTime: preferredTime,
          location: location,
          details: details,
          calendarEvent: calendarEvent,
        }),
      })

      if (!notificationResponse.ok) {
        const notificationError = await notificationResponse.text()
        console.error("Notification error:", notificationError)
        throw new Error("Failed to send notification")
      }

      setFormSubmitted(true)
    } catch (error) {
      console.error("Error:", error)
      alert(
        "There was an error submitting your appointment request. Please try again or contact us directly at (727) 710-5455.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formSubmitted) {
    return (
      <Card className="border-2 border-green-100">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Appointment Request Received</h2>
          <p className="text-neutral-700 mb-6">
            Thank you for scheduling with West Coast Notaries. We'll contact you within 2 hours during business hours to
            confirm your appointment. A calendar invitation has been sent to your email.
          </p>
          <Button onClick={() => setFormSubmitted(false)}>Schedule Another Appointment</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Rest of the component remains the same */}
      <Card className="border-none shadow-none bg-primary/5 p-6">
        <CardContent className="p-0 space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Quick Response Time</h3>
              <p className="text-neutral-600">
                We'll contact you within 2 hours during business hours to confirm your appointment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Mobile Service</h3>
              <p className="text-neutral-600">
                We come to your location - home, office, or any convenient place in the Tampa Bay area.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Bring Required Documents</h3>
              <p className="text-neutral-600">
                Have your valid government-issued photo ID and all documents that need notarization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="book" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-8">
          <TabsTrigger value="book" className="text-base py-3">
            Book Appointment
          </TabsTrigger>
          <TabsTrigger value="info" className="text-base py-3">
            Appointment Information
          </TabsTrigger>
        </TabsList>

        <TabsContent value="book" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Request an Appointment</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you to confirm your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Select Service Type</h3>

                  <RadioGroup
                    value={selectedService}
                    onValueChange={setSelectedService}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedService === "loan" ? "border-primary bg-primary/5" : "hover:border-neutral-300"}`}
                    >
                      <RadioGroupItem value="loan" id="loan" className="sr-only" />
                      <Label htmlFor="loan" className="cursor-pointer">
                        <div className="flex flex-col items-center text-center gap-2">
                          <Home className="h-8 w-8 mb-2 text-primary" />
                          <div className="font-medium">Loan Document Signing</div>
                          <p className="text-sm text-neutral-600">Mortgage refinances, purchases</p>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedService === "estate" ? "border-primary bg-primary/5" : "hover:border-neutral-300"}`}
                    >
                      <RadioGroupItem value="estate" id="estate" className="sr-only" />
                      <Label htmlFor="estate" className="cursor-pointer">
                        <div className="flex flex-col items-center text-center gap-2">
                          <FileText className="h-8 w-8 mb-2 text-primary" />
                          <div className="font-medium">Estate Planning</div>
                          <p className="text-sm text-neutral-600">POA, Living Wills, Directives</p>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedService === "general" ? "border-primary bg-primary/5" : "hover:border-neutral-300"}`}
                    >
                      <RadioGroupItem value="general" id="general" className="sr-only" />
                      <Label htmlFor="general" className="cursor-pointer">
                        <div className="flex flex-col items-center text-center gap-2">
                          <FileText className="h-8 w-8 mb-2 text-primary" />
                          <div className="font-medium">General Notary Work</div>
                          <p className="text-sm text-neutral-600">Affidavits, Deeds, etc.</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        <User className="h-4 w-4" />
                      </span>
                      <Input id="fullName" name="fullName" placeholder="John Doe" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        <Phone className="h-4 w-4" />
                      </span>
                      <Input id="phone" name="phone" placeholder="(727) 555-1234" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        <CalendarDays className="h-4 w-4" />
                      </span>
                      <Input id="preferredDate" name="preferredDate" type="date" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select name="preferredTime" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <Input
                        id="location"
                        name="location"
                        placeholder="Address or general area"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Please provide any additional information about your notary needs"
                    rows={4}
                  />
                </div>

                <input type="hidden" name="serviceType" value={selectedService} />

                {/* Hidden fields for notification emails */}
                <input type="hidden" name="_cc" value="heliumiq113672@proton.me" />
                <input type="hidden" name="_subject" value="New Notary Appointment Request" />
                <input type="hidden" name="_template" value="table" />

                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="mt-0">
          {/* Info tab content remains the same */}
          <Card>
            <CardHeader>
              <CardTitle>Appointment Information</CardTitle>
              <CardDescription>Important details about our notary services and appointment process.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">What to Expect</h3>
                <p className="text-neutral-700">
                  After submitting your appointment request, we'll contact you within 2 hours during business hours to
                  confirm your appointment. Our mobile notary will arrive at your specified location at the scheduled
                  time with all necessary supplies.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Required Documents</h3>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  <li>Valid government-issued photo ID (driver's license, passport, state ID)</li>
                  <li>All documents that need to be notarized</li>
                  <li>Any supporting documentation required for your specific notarization</li>
                </ul>
                <p className="text-neutral-700 mt-2">
                  Please note that all signers must be present with valid identification. For estate planning documents,
                  two witnesses unrelated to the signers may be required.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Service Areas</h3>
                <p className="text-neutral-700">
                  We provide mobile notary services throughout the Tampa Bay area, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>Pasco County</li>
                  <li>Hillsborough County</li>
                  <li>Pinellas County</li>
                  <li>Trinity, Wesley Chapel, Brandon, Gulfport, Tampa, St. Petersburg, Clearwater</li>
                </ul>
                <p className="text-neutral-700 mt-2">
                  We can travel to all 67 Florida counties for appointments with appropriate travel fees.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Appointment Duration</h3>
                <p className="text-neutral-700">Appointment times vary based on the service:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                  <li>General notary work: 15-30 minutes</li>
                  <li>Loan document signing: 45-60 minutes</li>
                  <li>Estate planning: 30-45 minutes</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Payment Information</h3>
                <p className="text-neutral-700">
                  We accept cash, credit cards, and mobile payment options (Venmo, Zelle, CashApp). Payment is due at
                  the time of service. We offer special discounts for veterans through GovX ID verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
