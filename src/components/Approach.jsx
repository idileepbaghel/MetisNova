import { useState, useEffect, useRef } from 'react';
import { Lightbulb, Zap, Code, Rocket, TrendingUp } from 'lucide-react';

export default function Approach() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We start by deeply understanding your business challenges, goals, and constraints. Through collaborative discovery, we define the technical strategy and roadmap.",
      Icon: Lightbulb
    },
    {
      number: "2",
      title: "System Design & Architecture",
      description: "We design scalable, secure, and maintainable system architecture that aligns with your business objectives and technical requirements.",
      Icon: Zap
    },
    {
      number: "3",
      title: "Agile Development & Testing",
      description: "Using agile methodologies, we develop with continuous testing, code reviews, and quality assurance to ensure production-ready code.",
      Icon: Code
    },
    {
      number: "4",
      title: "Deployment & Scaling",
      description: "We handle smooth deployment, infrastructure setup, and optimization to ensure your system scales reliably under demand.",
      Icon: Rocket
    },
    {
      number: "5",
      title: "Long-Term Support & Evolution",
      description: "Beyond launch, we provide ongoing support, monitoring, and evolution to keep your systems secure, efficient, and competitive.",
      Icon: TrendingUp
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveCards([]);
          steps.forEach((_, idx) => {
            setTimeout(() => {
              setActiveCards(prev => [...prev, idx]);
            }, idx * 200);
          });
        } else {
          setIsVisible(false);
          setActiveCards([]);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="approach" 
      ref={sectionRef}
      className="py-20 px-6 scroll-mt-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Approach
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            A clear, proven methodology that delivers results at every stage
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className={`absolute top-16 left-[55%] w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent transition-all duration-500 ${
                      activeCards.includes(idx) && activeCards.includes(idx + 1) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`} style={{ transformOrigin: 'left', transitionDelay: `${(idx + 1) * 200}ms` }}></div>
                  )}
                  
                  {/* Circle with icon - Animated */}
                  <div 
                    className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 relative z-10 shadow-2xl bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-700 ${
                      activeCards.includes(idx) ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                    }`}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                  >
                    <step.Icon className="w-12 h-12" />
                  </div>
                  
                  {/* Card - Animated */}
                  <div 
                    className={`p-6 rounded-2xl border-2 border-gray-200 bg-white text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                      activeCards.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${idx * 200 + 100}ms` }}
                  >
                    <h3 className="font-bold mb-3 text-base text-gray-900">
                      {step.title}
                    </h3>
                    {/* Gradient underline */}
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 mx-auto"></div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl flex-shrink-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-700 ${
                    activeCards.includes(idx) ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <step.Icon className="w-10 h-10" />
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-0.5 h-24 mt-2 bg-gradient-to-b from-blue-500 to-cyan-500 transition-all duration-500 ${
                    activeCards.includes(idx) ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`} style={{ transformOrigin: 'top', transitionDelay: `${idx * 200 + 300}ms` }}></div>
                )}
              </div>
              <div 
                className={`p-6 rounded-2xl border-2 border-gray-200 bg-white flex-1 mt-1 hover:shadow-2xl transition-all duration-500 ${
                  activeCards.includes(idx) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 200 + 100}ms` }}
              >
                <h3 className="font-bold mb-3 text-base text-gray-900">
                  {step.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3"></div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}