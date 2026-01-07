import {
  Building2,
  Cpu,
  Cloud,
  Boxes,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-28 px-3 xs:px-4 sm:px-6 scroll-mt-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
            About MetisNova
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed px-2">
            We are a software engineering company focused on building intelligent,
            scalable, and future-ready digital systems for ambitious organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h3 className="text-2xl xs:text-2xl sm:text-2xl font-semibold text-gray-900">
              Engineering-First. Intelligence-Driven.
            </h3>

            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              MetisNova is a technology-driven software company specializing in
              <strong> software engineering, artificial intelligence, and cloud-native platforms</strong>.
              We design and deliver systems that are built to scale, adapt, and evolve.
            </p>

            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              Our team partners closely with startups, enterprises, and institutions
              to translate complex business challenges into robust technical solutions.
              From strategy and architecture to production deployment, we deliver
              software with measurable impact.
            </p>

            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              Whether you are launching a new product, modernizing legacy systems,
              or integrating AI into your workflows, MetisNova acts as a long-term
              technology partner—not just a service provider.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6 sm:space-y-8">

            {/* Expertise Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg xs:text-xl sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Our Expertise
              </h4>

              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 flex-shrink-0">
                    <Boxes size={20} />
                  </div>
                  <span className="text-gray-700 text-sm xs:text-base">
                    Full-stack software development across web, mobile, and backend systems
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                    <Cpu size={20} />
                  </div>
                  <span className="text-gray-700">
                    Artificial intelligence and machine learning integration
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    <Cloud size={20} />
                  </div>
                  <span className="text-gray-700">
                    Cloud-native architectures, DevOps, and scalable infrastructure
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                    <Building2 size={20} />
                  </div>
                  <span className="text-gray-700">
                    SaaS product engineering and enterprise system modernization
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-gray-700">
                    Security-first development and enterprise-grade quality standards
                  </span>
                </li>
              </ul>
            </div>

            {/* Approach Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg">
              <h4 className="text-lg xs:text-xl sm:text-xl font-semibold mb-3 sm:mb-4">
                Our Approach
              </h4>

              <p className="text-white/90 text-sm xs:text-base sm:text-base leading-relaxed mb-4 sm:mb-6">
                We combine strategic thinking with pragmatic engineering. Every engagement
                follows a transparent, agile process focused on delivering long-term
                business value—not short-term fixes.
              </p>

              <div className="flex items-center gap-2 text-sm font-medium">
                <span>Build. Scale. Evolve.</span>
                <ArrowRight size={16} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
