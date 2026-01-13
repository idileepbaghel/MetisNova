import { Code2, BookOpen, Building2, Shield, Lightbulb } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      title: "Technology & SaaS",
      description: "Building cloud-native platforms, SaaS products, and innovative technology solutions for the digital age.",
      icon: Code2,
      colors: {
        primary: "blue",
        gradientFrom: "from-blue-500",
        gradientTo: "to-cyan-500",
        hoverBg: "hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50",
        iconColor: "text-blue-600",
        iconHoverColor: "group-hover:text-blue-600",
        titleHoverColor: "group-hover:text-blue-600",
        borderColor: "border-blue-200",
        borderHoverColor: "group-hover:border-blue-400",
        shadowColor: "group-hover:shadow-blue-500/20",
        glowColor: "group-hover:shadow-blue-500/50"
      }
    },
    {
      title: "Education & Research",
      description: "Empowering educational institutions with intelligent learning platforms, research analytics, and administrative systems.",
      icon: BookOpen,
      colors: {
        primary: "purple",
        gradientFrom: "from-purple-500",
        gradientTo: "to-pink-500",
        hoverBg: "hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50",
        iconColor: "text-purple-600",
        iconHoverColor: "group-hover:text-purple-600",
        titleHoverColor: "group-hover:text-purple-600",
        borderColor: "border-purple-200",
        borderHoverColor: "group-hover:border-purple-400",
        shadowColor: "group-hover:shadow-purple-500/20",
        glowColor: "group-hover:shadow-purple-500/50"
      }
    },
    {
      title: "Enterprises & Corporations",
      description: "Modernizing legacy systems, implementing AI-driven automation, and building enterprise-grade digital infrastructure.",
      icon: Building2,
      colors: {
        primary: "indigo",
        gradientFrom: "from-indigo-500",
        gradientTo: "to-blue-600",
        hoverBg: "hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50",
        iconColor: "text-indigo-600",
        iconHoverColor: "group-hover:text-indigo-600",
        titleHoverColor: "group-hover:text-indigo-600",
        borderColor: "border-indigo-200",
        borderHoverColor: "group-hover:border-indigo-400",
        shadowColor: "group-hover:shadow-indigo-500/20",
        glowColor: "group-hover:shadow-indigo-500/50"
      }
    },
    {
      title: "Government & Institutions",
      description: "Delivering secure, scalable, and compliant solutions for public sector organizations and government bodies.",
      icon: Shield,
      colors: {
        primary: "emerald",
        gradientFrom: "from-emerald-500",
        gradientTo: "to-teal-500",
        hoverBg: "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50",
        iconColor: "text-emerald-600",
        iconHoverColor: "group-hover:text-emerald-600",
        titleHoverColor: "group-hover:text-emerald-600",
        borderColor: "border-emerald-200",
        borderHoverColor: "group-hover:border-emerald-400",
        shadowColor: "group-hover:shadow-emerald-500/20",
        glowColor: "group-hover:shadow-emerald-500/50"
      }
    },
    {
      title: "Startups & Digital Platforms",
      description: "From MVP to scaling, we help startups build technically sound, investment-ready digital products.",
      icon: Lightbulb,
      colors: {
        primary: "amber",
        gradientFrom: "from-amber-500",
        gradientTo: "to-orange-500",
        hoverBg: "hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50",
        iconColor: "text-amber-600",
        iconHoverColor: "group-hover:text-amber-600",
        titleHoverColor: "group-hover:text-amber-600",
        borderColor: "border-amber-200",
        borderHoverColor: "group-hover:border-amber-400",
        shadowColor: "group-hover:shadow-amber-500/20",
        glowColor: "group-hover:shadow-amber-500/50"
      }
    }
  ]

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 scroll-mt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
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
            const delay = idx * 100
            return (
              <div
                key={idx}
                className={`relative p-4 sm:p-6 rounded-xl border-2 ${industry.colors.borderColor} bg-white 
                  ${industry.colors.hoverBg} ${industry.colors.borderHoverColor}
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  ${industry.colors.shadowColor} ${industry.colors.glowColor}
                  transition-all duration-500 ease-out group cursor-pointer overflow-hidden
                  animate-fade-in-up opacity-0`}
                style={{
                  animationDelay: `${delay}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Animated gradient background overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${industry.colors.gradientFrom} ${industry.colors.gradientTo} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}
                />
                
                {/* Glowing effect on hover */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${industry.colors.gradientFrom} ${industry.colors.gradientTo} 
                    rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with enhanced animations */}
                  <div className={`mb-3 sm:mb-4 ${industry.colors.iconColor} ${industry.colors.iconHoverColor} 
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out
                    inline-block transform`}>
                    <div className={`relative p-2 sm:p-3 rounded-lg overflow-hidden`}>
                      {/* Gradient background with opacity */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.colors.gradientFrom} ${industry.colors.gradientTo} 
                        opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
                      <IconComponent className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Title with color transition */}
                  <h3 className={`text-base xs:text-lg sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900 
                    ${industry.colors.titleHoverColor} transition-colors duration-500`}>
                    {industry.title}
                  </h3>

                  {/* Description with smooth fade */}
                  <p className="text-xs xs:text-sm sm:text-sm leading-relaxed text-gray-600 
                    group-hover:text-gray-700 transition-colors duration-500">
                    {industry.description}
                  </p>

                  {/* Decorative accent line */}
                  <div className={`mt-3 sm:mt-4 h-1 w-0 group-hover:w-full ${industry.colors.gradientFrom} ${industry.colors.gradientTo} 
                    bg-gradient-to-r rounded-full transition-all duration-500 ease-out`}
                  />
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                    transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" 
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
