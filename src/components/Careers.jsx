import { Users, Code, Brain, Cloud, GraduationCap } from 'lucide-react'

export default function Careers() {
  const roles = [
    {
      title: "Software Engineers",
      description: "Full-stack and backend engineers passionate about clean code and scalable systems",
      icon: Code
    },
    {
      title: "Full-Stack Developers",
      description: "Developers with expertise across frontend, backend, and DevOps ecosystems",
      icon: Users
    },
    {
      title: "AI / ML Engineers",
      description: "Machine learning engineers building intelligent systems and data solutions",
      icon: Brain
    },
    {
      title: "Cloud & DevOps Engineers",
      description: "Infrastructure and DevOps specialists building resilient, scalable cloud systems",
      icon: Cloud
    },
    {
      title: "Interns & Graduate Engineers",
      description: "Fresh talents eager to learn, grow, and contribute to real-world projects",
      icon: GraduationCap
    }
  ]

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 scroll-mt-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 xs:px-4 sm:px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs xs:text-sm sm:text-sm font-semibold">
            💼 Join Us
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Careers at MetisNova
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 px-2">
            Join a team that values engineering excellence, continuous learning, and building products that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {roles.map((role, idx) => {
            const IconComponent = role.icon
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 text-gray-900">
                  {role.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-gray-600 text-xs xs:text-sm sm:text-sm">
                  {role.description}
                </p>
                <button className="font-bold text-xs xs:text-sm sm:text-sm text-blue-600 hover:text-blue-700 transition duration-200">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>

        <div className="rounded-lg p-8 sm:p-10 lg:p-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <h3 className="text-2xl xs:text-3xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Join MetisNova?</h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div>
              <p className="text-base xs:text-lg sm:text-lg font-bold mb-2">🎯 Real Impact</p>
              <p className="opacity-90 text-sm xs:text-sm sm:text-base">Work on projects that solve real business problems and create lasting value</p>
            </div>
            <div>
              <p className="text-base xs:text-lg sm:text-lg font-bold mb-2">🚀 Growth</p>
              <p className="opacity-90 text-sm xs:text-sm sm:text-base">Continuous learning, mentorship, and career development opportunities</p>
            </div>
            <div>
              <p className="text-base xs:text-lg sm:text-lg font-bold mb-2">🤝 Culture</p>
              <p className="opacity-90 text-sm xs:text-sm sm:text-base">Collaborative, inclusive environment where your voice matters</p>
            </div>
          </div>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold bg-white text-blue-600 hover:bg-gray-100 transition duration-200 hover:scale-105 text-sm sm:text-base">
            Apply Now
          </button>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-600 text-xs xs:text-sm sm:text-base px-2">
            Questions about opportunities? Email us at{' '}
            <a href="mailto:careers@metisnova.com" className="text-blue-600 font-bold hover:underline">
              careers@metisnova.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
