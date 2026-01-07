import { Code2, BookOpen, Building2, Shield, Lightbulb } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      title: "Technology & SaaS",
      description: "Building cloud-native platforms, SaaS products, and innovative technology solutions for the digital age.",
      icon: Code2
    },
    {
      title: "Education & Research",
      description: "Empowering educational institutions with intelligent learning platforms, research analytics, and administrative systems.",
      icon: BookOpen
    },
    {
      title: "Enterprises & Corporations",
      description: "Modernizing legacy systems, implementing AI-driven automation, and building enterprise-grade digital infrastructure.",
      icon: Building2
    },
    {
      title: "Government & Institutions",
      description: "Delivering secure, scalable, and compliant solutions for public sector organizations and government bodies.",
      icon: Shield
    },
    {
      title: "Startups & Digital Platforms",
      description: "From MVP to scaling, we help startups build technically sound, investment-ready digital products.",
      icon: Lightbulb
    }
  ]

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 scroll-mt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-3 sm:mb-4 px-3 xs:px-4 sm:px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs xs:text-sm sm:text-sm font-semibold">
            🏭 Industries
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-sm xs:text-base sm:text-lg max-w-2xl mx-auto text-gray-600 px-2">
            Delivering specialized solutions across diverse sectors with industry-specific expertise
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl xs:text-3xl sm:text-3xl mb-3 sm:mb-4 text-blue-600 group-hover:scale-110 transition duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
