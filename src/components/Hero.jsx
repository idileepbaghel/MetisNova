import heroImage from "../assets/images/hero.png"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="mt-0 px-6 overflow-hidden scroll-mt-20 bg-gradient-to-b from-white via-blue-50 to-white" id="hero">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in">
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900">
            MetisNova
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Where Logic Ignites Innovation
          </h2>

          <p className="mt-8 text-lg max-w-xl leading-relaxed text-gray-600">
            MetisNova designs and builds intelligent software systems that combine strong engineering foundations with artificial intelligence and modern cloud architectures. From custom platforms and SaaS products to AI-powered applications, we deliver reliable solutions built for long-term success.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="px-8 py-4 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 group">
              Talk to Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 transition duration-200"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative lg:scale-110 xl:scale-125 hidden lg:block animate-float">
          <img
            src={heroImage}
            alt="MetisNova intelligent software systems"
            className="w-50 max-h-[600px] lg:max-h-[600px] object-contain drop-shadow-2xl"
          />
<h1></h1>        </div>

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
      `}</style>
    </section>
  )
}
