import { HeroSection } from "@/components/hero-section"
import { SmoothCarousel } from "@/components/smooth-carousel"
import { ServicesGrid } from "@/components/updated-services-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ScheduleSection } from "@/components/schedule-section"
import { MilitaryDiscount } from "@/components/military-discount"
import { CredentialsSection } from "@/components/credentials-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-4 bg-white">
        <div className="space-y-4">
          <SmoothCarousel direction="rtl" speed={80} />
          <SmoothCarousel direction="ltr" speed={100} />
        </div>
      </section>
      <ServicesGrid />
      <TestimonialsSection />
      <MilitaryDiscount />
      <CertificationsSection />
      <ScheduleSection />
      <CredentialsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
