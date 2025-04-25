"use client"

import { motion } from "framer-motion"
import { Award, Shield, Clock } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Notary Signing Agent",
      description: "NNA certified with background screening and training",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Member of the National Notary Association",
      description: "Following the highest professional standards",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Recognized for Excellence",
      description: "Consistent 5-star ratings from satisfied clients",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications and Professional Affiliations</h2>
            <p className="text-lg text-neutral-600">
              We maintain the highest standards of professionalism and expertise in the notary industry.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <div className="text-primary">{cert.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-neutral-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
