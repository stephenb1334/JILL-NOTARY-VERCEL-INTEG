"use client"

import { useEffect, useRef } from "react"
import styles from "./smooth-carousel.module.css"

interface SmoothCarouselProps {
  direction?: "ltr" | "rtl"
  speed?: number
}

export function SmoothCarousel({ direction = "rtl", speed = 80 }: SmoothCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    { src: "/images/background-1.jpg", alt: "Professional notary services" },
    { src: "/images/background-2.jpg", alt: "Document signing" },
    { src: "/images/background-3.jpg", alt: "Legal documentation" },
    { src: "/images/background-4.jpg", alt: "Notary seal and stamp" },
    { src: "/images/office-1.jpg", alt: "Professional office environment" },
    { src: "/images/office-2.jpg", alt: "Modern workspace" },
    { src: "/images/office-3.jpg", alt: "Client consultation area" },
    { src: "/images/sign-here-please.jpg", alt: "Document execution" },
    { src: "/images/banner-hand-signing-9.jpg", alt: "Hand signing documents" },
    { src: "/images/banner-real-estate-3.jpg", alt: "Real estate documentation" },
    { src: "/images/banner-signing-close-7.jpg", alt: "Close-up document signing" },
    { src: "/images/apostille.jpg", alt: "Apostille services" },
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const animationDuration = (images.length * 200) / speed // Adjust based on image width and speed
    carousel.style.setProperty("--animation-duration", `${animationDuration}s`)
    carousel.style.setProperty("--direction", direction === "rtl" ? "reverse" : "normal")
  }, [direction, speed, images.length])

  return (
    <div className="overflow-hidden bg-gray-50">
      <div
        ref={carouselRef}
        className={`${styles.carousel} flex`}
        style={{
          width: `${duplicatedImages.length * 200}px`, // 200px per image
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
