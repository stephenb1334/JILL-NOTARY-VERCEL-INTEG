import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { notaryEmail, customerEmail, customerName, customerPhone, message } = data

    // Make sure we have the required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in environment variables")
      throw new Error("Email configuration error")
    }

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
      from: `"West Coast Notaries Website" <${notaryEmail}>`,
      to: notaryEmail,
      subject: `New Contact Form Submission from ${customerName}`,
      text: `
New Contact Form Submission

Name: ${customerName}
Email: ${customerEmail}
Phone: ${customerPhone}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #B78DC9;">New Contact Form Submission</h2>
  <p>You have received a new message from your website contact form:</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Name:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerEmail}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerPhone}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Message:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${message}</td>
    </tr>
  </table>
</div>
      `,
    }

    // Email content for customer (confirmation)
    const customerEmailContent = {
      from: `"West Coast Notaries" <${notaryEmail}>`,
      to: customerEmail,
      subject: `Thank You for Contacting West Coast Notaries`,
      text: `
Thank you for contacting West Coast Notaries!

We have received your message and will get back to you as soon as possible, typically within 24 hours.

Here's a copy of your message:

Name: ${customerName}
Phone: ${customerPhone}
Message: ${message}

If you need immediate assistance, please call us at (727) 710-5455.

Best regards,
West Coast Notaries
Professional. Precise. Proudly Serving Our Community and Veterans.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #B78DC9;">Thank You for Contacting Us</h2>
  <p>We have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #333;">Your Message</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Name:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${customerPhone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Message:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${message}</td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <p style="margin-top: 0;">If you need immediate assistance, please call us at:</p>
    <p><strong>Phone:</strong> (727) 710-5455</p>
  </div>
  
  <p>Best regards,</p>
  <p style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; padding-top: 15px;">
    <strong>West Coast Notaries</strong><br>
    Professional. Precise. Proudly Serving Our Community and Veterans.
  </p>
</div>
      `,
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
