import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Lightbulb, Zap, Code, Rocket, TrendingUp } from 'lucide-react';
import '@lottiefiles/dotlottie-wc';

export default function WorkflowPrinciples() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const principles = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Zap,
      title: "System Design",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Code,
      title: "Agile Development",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: Rocket,
      title: "Deployment & Scaling",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      icon: TrendingUp,
      title: "Support & Evolution",
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-100"
    }
            ></dotlottie-wc>,
      title: "Design & Planning",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-200"
    },
    {
      icon: <dotlottie-wc
              src="https://lottie.host/2ae11661-6f33-4e8a-9ac5-c76a8b6d2d42/Jc68BHyeEx.lottie"
              autoplay
              loop
              style={{ width: '130px', height: '130px' }}
            ></dotlottie-wc>,
      title: "Development & Quality",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-500",
      bgColor: "bg-green-200"
    },
    {
      icon: <dotlottie-wc
              src="https://lottie.host/7f0487bb-c869-4256-aa16-39588f99fce9/wn0ZvazvUn.lottie"
              autoplay
              loop
              style={{ width: '130px', height: '130px' }}
            ></dotlottie-wc>,
      title: "Testing & Deployment",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-200"
    },
    {
      icon: <dotlottie-wc
              src="https://lottie.host/d8d88536-dcc2-4082-bc8b-86bc169c7fe7/DdF8mNJi3f.lottie"
              autoplay
              loop
              style={{ width: '130px', height: '130px' }}
            ></dotlottie-wc>,
      title: "Support & Growth",
      color: "from-indigo-500 to-violet-500",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-200"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          principles.forEach((_, idx) => {
            setTimeout(() => {
              setActiveCards(prev => [...prev, idx]);
            }, idx * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="my-12 mx-10 py-12 bg-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-100 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl font-extrabold text-center mb-7 
            bg-gradient-to-r from-gray-700 to-gray-700 
            bg-clip-text text-transparent tracking-wide">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures intelligent solutions delivered with clarity, quality, and care.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="relative">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-40 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-50 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">

            {principles.map((principle, idx) => (
              <div key={idx} className="relative">
                
                <div
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative bg-white rounded-3xl p-12 min-h-[440px] min-w-[260px] border-2 border-gray-200 transition-all duration-700 hover:border-gray-300${
                    activeCards.includes(idx)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className={`inline-flex p-8 rounded-3xl ${principle.bgColor} transition-all duration-500 ${
                        hoveredCard === idx 
                          ? 'scale-110 rotate-6 shadow-lg' 
                          : 'scale-100 rotate-0'
                      }`}>
                      {principle.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-black text-center">
                    {principle.title}
                  </h3>

                  <div className="flex justify-center mb-4">
                    <div 
                      className={`h-1 bg-gradient-to-r ${principle.color} rounded-full transition-all duration-500 ${
                        hoveredCard === idx ? 'w-28' : 'w-20'
                      }`}>
                    </div>
                  </div>

                  <ul className="space-y-2 text-center">
                    {[
                      "Clear requirements",
                      "Transparent process",
                      "Quality delivery"
                    ].map((point, pIdx) => (
                      <li 
                        key={pIdx} 
                        className={`flex items-center justify-center gap-2 text-sm text-gray-600 transition-all duration-300 ${
                          hoveredCard === idx 
                            ? 'translate-x-2 text-gray-800' 
                            : 'translate-x-0'
                        }`}
                        style={{ transitionDelay: `${pIdx * 50}ms` }}
                      >
                        <div 
                          className={`rounded-full bg-gradient-to-r ${principle.color} transition-all duration-300 ${
                            hoveredCard === idx ? 'w-2 h-2' : 'w-1.5 h-1.5'
                          }`}>
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {idx < principles.length - 1 && (
                  <div className={`hidden lg:block absolute top-40 -right-4 transform -translate-y-1/2 z-20 transition-all duration-500 ${
                    activeCards.includes(idx) && activeCards.includes(idx + 1)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  }`}>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            <span>Ready to start your project?</span>
            <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
