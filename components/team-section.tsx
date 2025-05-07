"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  image?: string
  bio: string
}

export function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Jill Munoz",
      role: "Principal & Owner",
      image: "/images/jill-munoz.png",
      bio: "With over 20 years of experience in notary services and real estate, Jill brings unparalleled expertise to every client interaction. As the founder of West Coast Notaries, she has built a reputation for professionalism, reliability, and exceptional service throughout Florida.",
    },
    {
      name: "John Doe",
      role: "Senior Notary Specialist",
      bio: "John specializes in complex notarizations and has extensive experience with loan document signings and estate planning. His attention to detail and commitment to client satisfaction make him an invaluable member of our team.",
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-foreground/70">
              Our experienced professionals are dedicated to providing exceptional notary services.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-full md:w-1/3">
                {member.image ? (
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full aspect-square bg-primary/10 rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary/30">{member.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold font-heading text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-foreground/70 mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Schedule</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
