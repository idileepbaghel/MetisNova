import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  GitBranch, 
  Layers, 
  Brain, 
  LineChart, 
  Workflow, 
  Shield 
} from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const ServiceCard = ({ icon, title, description, color, index, isVisible }) => (
    <div className="relative flex flex-col items-center h-full">
      {/* Icon Circle */}
      <div
        className={`relative bg-gradient-to-br ${color} rounded-full p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 transition-all duration-700 shadow-2xl ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 
        className={`text-base xs:text-lg sm:text-lg lg:text-lg font-bold mb-2 sm:mb-3 text-center transition-all duration-700 text-gray-900 px-2 sm:px-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: `${index * 100 + 100}ms` }}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className={`text-xs xs:text-sm sm:text-sm text-gray-600 text-center leading-relaxed px-2 sm:px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      >
        {description}
      </p>
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const coreServices = [
    {
      icon: <Code2 size={40} />,
      title: "Custom Software Development",
      description: "Scalable, secure solutions tailored to your unique business challenges with clean architecture.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe size={40} />,
      title: "Web Application Development",
      description: "Enterprise-grade web applications built with modern architectures and optimized performance.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile solutions delivering exceptional user experiences.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Database size={40} />,
      title: "Backend & API Engineering",
      description: "Robust backend systems and RESTful APIs designed for scale and security.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud-Native Development",
      description: "Microservices, containerization, and cloud-first architectures for scalability.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <GitBranch size={40} />,
      title: "DevOps & CI/CD Automation",
      description: "Automated deployment pipelines and infrastructure management for faster releases.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Layers size={40} />,
      title: "SaaS Product Development",
      description: "End-to-end SaaS platform development from MVP to enterprise-scale deployments.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const aiServices = [
    {
      icon: <Brain size={40} />,
      title: "AI-Powered Software Solutions",
      description: "Intelligent systems leveraging machine learning and natural language processing.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: <LineChart size={40} />,
      title: "Machine Learning & Data Intelligence",
      description: "Custom ML models and analytics that transform data into actionable insights.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Workflow size={40} />,
      title: "AI Automation & Workflow Intelligence",
      description: "Intelligent automation of business processes with ethical AI governance.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield size={40} />,
      title: "Responsible AI Integration",
      description: "Implementing AI with privacy, security, explainability, and governance at the core.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden px-3 sm:px-6"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-sm xs:text-base sm:text-lg max-w-2xl mx-auto text-gray-600">
            Enterprise-grade software solutions powered by intelligent engineering and cutting-edge technology.
          </p>
        </div>

        {/* Core Software Services */}
        <div className="mb-16 sm:mb-24">
          <h3 className={`text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Core Software Services
          </h3>
          
          <div className="relative">
            {/* Curved Dotted Line for Core Services - Hidden on mobile */}
            <svg 
              className="hidden lg:block absolute top-0 left-0 right-0 w-full h-35 z-0" 
              preserveAspectRatio="none"
              viewBox="0 0 1400 120"
            >
              <path
                d="M 100 60 Q 250 20, 400 60 Q 550 100, 700 60 Q 850 20, 1000 60 Q 1150 100, 1300 60"
                stroke="#ea8833ff"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                opacity="0.4"
              />
            </svg>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              {coreServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div>
          <h3 className={`text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Artificial Intelligence Services
          </h3>
          
          <div className="relative">
            {/* Curved Dotted Line for AI Services - Hidden on mobile */}
            <svg 
              className="hidden lg:block absolute top-0 left-0 right-0 w-full h-32 z-0" 
              preserveAspectRatio="none"
              viewBox="0 0 800 120"
            >
              <path
                d="M 100 60 Q 300 20, 500 60 Q 700 100, 900 60"
                stroke="#9333ea"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                opacity="0.4"
              />
            </svg>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              {aiServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index + 7} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}