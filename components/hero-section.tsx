"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-background.jpg"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col justify-center space-y-6 text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Professional Mobile Notary Services in Florida
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specializing in loan document signings and estate planning. We bring the notary service to you, making the
            process seamless and convenient.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row justify-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-block px-6 py-3 text-black bg-pink-400/30 border-2 border-white rounded-md font-medium text-lg hover:bg-pink-400/50 transition-colors shadow-md"
            >
              Learn More
            </Link>
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 text-black bg-pink-400/30 border-2 border-white rounded-md font-medium text-lg hover:bg-pink-400/50 transition-colors shadow-md"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
