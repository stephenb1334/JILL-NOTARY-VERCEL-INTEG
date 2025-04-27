import { ScheduleProcess } from "@/components/schedule-process"

export default function SchedulePage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Schedule an Appointment</h1>
        <p className="text-lg text-center mb-12 text-neutral-700">
          Book a convenient time for our mobile notary to meet you in Florida.
        </p>

        <ScheduleProcess />
      </div>
    </div>
  )
}
