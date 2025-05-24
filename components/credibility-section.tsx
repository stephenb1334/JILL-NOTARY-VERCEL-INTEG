"use client"

import { motion } from "framer-motion"

export function CredibilitySection() {
  const certifications = [
    {
      name: "NNA Certified Signing Agent",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NNA%20LOGO.PNG-w9iuyQdknc119MnXO8CIgNJ2biYiuC.png",
      alt: "NNA Certified Notary Signing Agent",
    },
    {
      name: "NNA Background Screened",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20NNA.JPEG-UdfCfFbyy1pQGtglsrT8Aqb1hmqQKJ.jpeg",
      alt: "NNA Background Screened Certified",
    },
    {
      name: "Loan Signing System",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LLS%20Logo-APPROVED%20.JPEG-z0ywWaImzcXIyOPBZgDcnXaTPT9C06.jpeg",
      alt: "Loan Signing System Certified",
    },
    {
      name: "National Notary Association",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nna%20diamond.JPEG-Muya81Nitu1USn4xcCEnAbDqosSwxp.jpeg",
      alt: "National Notary Association Member",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-4">
            Certified & Trusted Professional
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our certifications and memberships ensure you receive the highest quality notary services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs md:text-sm text-center text-neutral-600 mt-2 font-medium">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
