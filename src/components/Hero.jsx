import heroImage from "../assets/images/hero.png"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="mt-0 px-3 sm:px-6 overflow-hidden scroll-mt-20 bg-gradient-to-b from-white via-blue-50 to-white" id="hero">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in py-8 lg:py-0">
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-gray-900">
            MetisNova
          </h1>
          
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mt-3 sm:mt-4 lg:mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Where Logic Ignites Innovation
          </h2>

          <p className="mt-6 sm:mt-8 lg:mt-8 text-sm xs:text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
            MetisNova designs and builds intelligent software systems that combine strong engineering foundations with artificial intelligence and modern cloud architectures. From custom platforms and SaaS products to AI-powered applications, we deliver reliable solutions built for long-term success.
          </p>

          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col xs:flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base">
              Talk to Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="text-xs xs:text-sm sm:text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 transition duration-200 w-full xs:w-auto text-center sm:text-left"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block lg:scale-100 xl:scale-125 animate-float mt-8 lg:mt-0">
          <img
            src={heroImage}
            alt="MetisNova intelligent software systems"
            className="w-full max-h-80 lg:max-h-[600px] object-contain drop-shadow-2xl mx-auto"
          />
        </div>

        {/* Mobile Image - Show on smaller screens */}
        <div className="relative lg:hidden mt-6 sm:mt-8">
          <img
            src={heroImage}
            alt="MetisNova intelligent software systems"
            className="w-full max-h-64 xs:max-h-72 sm:max-h-80 object-contain drop-shadow-lg mx-auto"
          />
        </div>

      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  )
}
