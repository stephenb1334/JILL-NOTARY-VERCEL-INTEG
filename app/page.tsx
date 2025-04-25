import { HeroSection } from "@/components/hero-section"
import { SmoothCarousel } from "@/components/smooth-carousel"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ScheduleSection } from "@/components/schedule-section"
import { FounderSection } from "@/components/founder-section"
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
      <TestimonialsSection />
      <ServicesSection />
      <CertificationsSection />
      <ScheduleSection />
      <FounderSection />
      <CredentialsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
