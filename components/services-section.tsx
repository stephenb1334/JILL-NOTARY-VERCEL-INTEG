"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Home, FileText, Briefcase, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      id: "loan-signing",
      icon: <Home className="h-6 w-6" />,
      title: "Loan Document Signings",
      description:
        "Expert notarization for mortgage refinances, purchases, and title company work. We ensure a smooth and compliant signing process.",
      features: ["Mortgage refinances", "Home purchases", "Title company work", "Experienced with all major lenders"],
      image: "/images/sign-here-please.jpg",
    },
    {
      id: "estate-planning",
      icon: <FileText className="h-6 w-6" />,
      title: "Estate Planning",
      description:
        "Professional notarization for all your estate planning documents, ensuring they're legally executed and valid.",
      features: ["Power of Attorney", "Living Wills", "Executive Directives", "Comprehensive document review"],
      image: "/images/office-2.jpg",
    },
    {
      id: "general-notary",
      icon: <Briefcase className="h-6 w-6" />,
      title: "General Notary Work",
      description: "Notarization services for a variety of documents requiring an official notary seal.",
      features: ["Affidavits", "Deeds", "Certified copies", "Oaths and affirmations"],
      image: "/images/office-3.jpg",
    },
    {
      id: "apostille-services",
      icon: <FileText className="h-6 w-6" />,
      title: "Apostille Services",
      description:
        "Professional apostille services for Florida documents requiring international authentication and recognition.",
      features: [
        "Document authentication",
        "International recognition",
        "Florida state certification",
        "Fast processing times",
      ],
      image: "/images/florida-apostille-process.jpg",
    },
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Notary Services for Your Most Important Transactions
            </h2>
            <p className="text-lg text-neutral-600">
              We focus on high-value notary services with expertise in loan document signings and estate planning.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="loan-signing" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-12 bg-white">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 py-3 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <span className="hidden md:inline-flex">{service.icon}</span>
                <span>{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-primary hover:bg-primary-hover">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
