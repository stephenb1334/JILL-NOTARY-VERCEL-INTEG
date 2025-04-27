import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createEvent } from "ics"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      notaryEmail,
      customerEmail,
      customerName,
      customerPhone,
      serviceType,
      appointmentDate,
      appointmentTime,
      location,
      details,
      calendarEvent,
    } = data

    // Create a formatted date string
    const date = new Date(appointmentDate)
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Format time slot based on preferred time
    let timeSlot = "9:00 AM - 10:00 AM"
    if (appointmentTime === "afternoon") {
      timeSlot = "1:00 PM - 2:00 PM"
    } else if (appointmentTime === "evening") {
      timeSlot = "5:00 PM - 6:00 PM"
    }

    // Create iCalendar event
    const [year, month, day] = appointmentDate.split("-").map(Number)

    // Set start and end times based on time slot
    let startHour = 9
    let endHour = 10

    if (appointmentTime === "afternoon") {
      startHour = 13
      endHour = 14
    } else if (appointmentTime === "evening") {
      startHour = 17
      endHour = 18
    }

    const eventData = {
      start: [year, month, day, startHour, 0],
      end: [year, month, day, endHour, 0],
      title: `Notary Appointment: ${serviceType} with ${customerName}`,
      description: `
Service: ${serviceType}
Client: ${customerName}
Phone: ${customerPhone}
Email: ${customerEmail}
Location: ${location}
Additional Details: ${details || "None provided"}
      `,
      location: location,
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: { name: "West Coast Notaries", email: notaryEmail },
      attendees: [
        { name: "Notary", email: notaryEmail, rsvp: true, partstat: "ACCEPTED", role: "REQ-PARTICIPANT" },
        { name: customerName, email: customerEmail, rsvp: true, partstat: "NEEDS-ACTION", role: "REQ-PARTICIPANT" },
      ],
    }

    // Create iCalendar file
    let icsEvent = ""
    createEvent(eventData as any, (error: Error | undefined, value: string) => {
      if (error) {
        console.error("Error creating iCalendar event:", error)
        throw new Error("Failed to create calendar event")
      }
      icsEvent = value
    })

    // Make sure we have the required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in environment variables")
      throw new Error("Email configuration error")
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content for notary
    const notaryEmailContent = {
      from: `"West Coast Notaries" <${notaryEmail}>`,
      to: notaryEmail,
      subject: `New Appointment: ${serviceType} with ${customerName} on ${formattedDate}`,
      text: `
New Notary Appointment Request

Service: ${serviceType}
Date: ${formattedDate}
Time: ${timeSlot}
Client: ${customerName}
Phone: ${customerPhone}
Email: ${customerEmail}
Location: ${location}
Additional Details: ${details || "None provided"}

This appointment has been automatically added to your Google Calendar.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #B78DC9;">New Notary Appointment Request</h2>
  <p>You have received a new appointment request with the following details:</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Service:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${serviceType}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Date:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${formattedDate}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Time:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${timeSlot}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Client:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerPhone}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerEmail}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Location:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${location}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Additional Details:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${details || "None provided"}</td>
    </tr>
  </table>
  
  <p style="color: #666;">This appointment has been automatically added to your Google Calendar.</p>
</div>
      `,
      icalEvent: {
        filename: "appointment.ics",
        method: "REQUEST",
        content: icsEvent,
      },
    }

    // Email content for customer
    const customerEmailContent = {
      from: `"West Coast Notaries" <${notaryEmail}>`,
      to: customerEmail,
      subject: `Your Notary Appointment Confirmation - ${formattedDate}`,
      text: `
Thank you for scheduling an appointment with West Coast Notaries!

Your appointment details:

Service: ${serviceType}
Date: ${formattedDate}
Time: ${timeSlot}
Location: ${location}

What to bring:
- Valid government-issued photo ID
- All documents that need to be notarized
- Any supporting documentation required for your specific notarization

If you need to reschedule or have any questions, please contact us at:
Phone: (727) 710-5455
Email: ${notaryEmail}

We look forward to serving you!

West Coast Notaries
Professional. Precise. Proudly Serving Our Community and Veterans.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #B78DC9;">Your Notary Appointment Confirmation</h2>
  <p>Thank you for scheduling an appointment with West Coast Notaries!</p>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #333;">Appointment Details</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Service:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${serviceType}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Date:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Time:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${timeSlot}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Location:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${location}</td>
      </tr>
    </table>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333;">What to Bring:</h3>
    <ul style="padding-left: 20px;">
      <li>Valid government-issued photo ID</li>
      <li>All documents that need to be notarized</li>
      <li>Any supporting documentation required for your specific notarization</li>
    </ul>
  </div>
  
  <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <p style="margin-top: 0;">If you need to reschedule or have any questions, please contact us at:</p>
    <p><strong>Phone:</strong> (727) 710-5455<br>
    <strong>Email:</strong> ${notaryEmail}</p>
  </div>
  
  <p>We look forward to serving you!</p>
  
  <p style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; padding-top: 15px;">
    <strong>West Coast Notaries</strong><br>
    Professional. Precise. Proudly Serving Our Community and Veterans.
  </p>
</div>
      `,
      icalEvent: {
        filename: "appointment.ics",
        method: "REQUEST",
        content: icsEvent,
      },
    }

    // Send emails
    await transporter.sendMail(notaryEmailContent)
    await transporter.sendMail(customerEmailContent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending notification:", error)
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
  }
}
