"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Professional Mobile Notary Services in Florida
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Specializing in loan document signings and estate planning. We bring the notary service to you, making the
            process seamless and convenient.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/schedule">Book Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
