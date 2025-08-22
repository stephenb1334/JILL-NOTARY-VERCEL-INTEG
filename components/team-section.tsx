import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Jill Munoz",
      role: "Founder & Lead Notary",
      image: "/images/jill-munoz-about.jpeg",
      bio: "With over 15 years of experience in the notary industry, Jill founded NotariesBy to provide exceptional mobile notary services throughout Florida. She specializes in real estate transactions and estate planning documents, bringing professionalism and reliability to every appointment.",
    },
    {
      name: "Natalie Kolaxis",
      role: "Senior Notary Public",
      image: "/images/woman33.png",
      bio: "Natalie brings 8 years of notary experience with expertise in loan signings and complex document preparation. Her attention to detail and commitment to client satisfaction makes her an invaluable member of our team, serving clients across the Tampa Bay area.",
    },
    {
      name: "Larry Rivera",
      role: "Estate Planning Advisor & Veteran Advocate",
      image: null,
      bio: "Retired Army Captain Larry Rivera brings military precision and dedication to estate planning services. As a bilingual translator and veteran advocate, he specializes in helping families secure their legacy through comprehensive estate planning documents and personalized guidance.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to providing you with exceptional notary services and
            personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  {member.image ? (
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-gray-300 flex items-center justify-center border-4 border-gray-200">
                      <span className="text-gray-600 font-medium text-sm">Coming Soon</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
