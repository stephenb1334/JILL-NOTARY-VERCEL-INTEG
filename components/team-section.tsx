"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
      image: "/images/jill-headshot.png",
      bio: "With over 20 years of experience in notary services and real estate, Jill brings unparalleled expertise to every client interaction. As the founder of West Coast Notaries, she has built a reputation for professionalism, reliability, and exceptional service throughout Florida.",
    },
    {
      name: "Natalie Kolaxis",
      role: "Senior Notary Specialist",
      image: "/images/natalie-jill-notary.jpg",
      bio: "As a Senior Notary Specialist at Westcoast Notary Services, I bring years of hands-on notarial experience and a deep commitment to providing precise, reliable, and client-focused services. I am passionate about making the notarization process seamless for individuals, businesses, and legal professionals, and I am strongly driven by a commitment to customer service satisfaction, ensuring every client feels valued and supported. Outside of my professional work, I am a proud wife and mother of six wonderful children, and I strive to bring the same dedication, care, and attention to detail to my clients as I do to my family.",
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-deep-purple">Meet Our Team</h2>
            <p className="text-lg text-foreground/70">
              Our experienced professionals are dedicated to providing exceptional notary services.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full max-w-xs mb-6">
                <div className="relative w-full aspect-square rounded-lg shadow-md overflow-hidden bg-deep-purple/10">
                  <Image
                    src={member.image || `/placeholder.svg?height=300&width=300&text=${member.name.charAt(0)}`}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => {
                      console.log(`Using placeholder for ${member.name}`)
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold font-heading text-deep-purple mb-1">{member.name}</h3>
                <p className="text-steel-blue font-medium mb-4">{member.role}</p>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-deep-purple text-deep-purple hover:bg-deep-purple/5"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-deep-purple text-deep-purple hover:bg-deep-purple/5"
                  >
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
