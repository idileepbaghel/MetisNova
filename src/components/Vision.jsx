import {
  ShieldCheck,
  Eye,
  Rocket,
  Users
} from "lucide-react";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 my-8 sm:my-10 lg:my-12 rounded-2xl sm:rounded-3xl py-12 sm:py-16 lg:py-24 px-3 xs:px-4 sm:px-6 scroll-mt-20 bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden"
    >
      {/* Decorative Background Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="animate-fade-in">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <Sparkles size={16} />
              Our Purpose
            </div> */}

            <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our Vision
            </h2>

            <p className="text-sm xs:text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700">
              To become a trusted global technology partner by building intelligent
              software systems that deliver lasting business value.
            </p>

            <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-600">
              We believe in the power of engineering excellence combined with artificial
              intelligence to solve complex business challenges. Every solution we build
              is designed to evolve with your business and create sustainable competitive
              advantage.
            </p>
          </div>

          {/* Right Card */}
          <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors">
              Core Values
            </h3>

            <ul className="space-y-4 sm:space-y-6">
              <li className="flex gap-3 sm:gap-4 items-start">
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Technical Excellence
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    Clean architecture, best practices, and long-term sustainability
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                  <Eye size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Transparency
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    Clear communication and honest dialogue at every step
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-pink-100 text-pink-600">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Innovation
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    Emerging technologies with pragmatic engineering
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                  <Users size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Partnership
                  </p>
                  <p className="text-sm mt-1 text-gray-600">
                    Focused on long-term success, not just delivery
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
