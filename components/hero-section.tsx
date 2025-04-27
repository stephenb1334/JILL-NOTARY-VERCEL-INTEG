"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white -z-10"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Professional Mobile Notary Services in Florida
          </h1>
          <p className="text-xl text-neutral-600">
            Professional. Precise. Proudly Serving Our Community and Veterans. With over 20 years of experience since
            2003, specializing in loan document signings and estate planning.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link href="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/schedule">Sign Up</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
