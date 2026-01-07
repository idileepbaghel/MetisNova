import { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaAws, FaHtml5, FaVuejs } from "react-icons/fa";
import {
    SiNextdotjs,
    SiReact,
    SiDjango,
    SiFastapi,
    SiTailwindcss,
    SiFlask,
    SiSpringboot, SiExpress,
    SiMysql,
    SiMongodb
} from "react-icons/si";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("frontend");
    const [fade, setFade] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
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

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;
        setFade(false);
        setTimeout(() => {
            setActiveTab(tab);
            setFade(true);
        }, 200);
    };

    const frontendTech = [
        { icon: <FaReact size={60} color="#61DBFB" />, percent: "90", label: "React" },
        { icon: <SiNextdotjs size={60} color="#000000" />, percent: "80", label: "Next.js" },
        { icon: <SiReact size={60} color="#61DBFB" />, percent: "78", label: "React Native" },
        { icon: <FaVuejs size={60} color="#42b883" />, percent: "75", label: "Vue.js" },
        { icon: <SiTailwindcss size={60} color="#38bdf8" />, percent: "85", label: "Tailwind CSS" },
        { icon: <FaHtml5 size={60} color="#E44D26" />, percent: "88", label: "HTML / CSS" },
    ];

    const backendTech = [
        { icon: <FaNodeJs size={60} color="#3C873A" />, percent: "85", label: "Node.js" },
        { icon: <SiDjango size={60} color="#092E20" />, percent: "85", label: "Django" },
        { icon: <SiFastapi size={60} color="#05998B" />, percent: "80", label: "FastAPI" },
        { icon: <SiFlask size={60} color="#000000" />, percent: "75", label: "Flask" },
        { icon: <SiSpringboot size={60} color="#6DB33F" />, percent: "80", label: "Spring Boot" },
        { icon: <SiExpress size={60} color="#000000" />, percent: "82", label: "Express.js" },
        { icon: <SiMysql size={60} color="#316192" />, percent: "85", label: "MySQL" },
        { icon: <SiMongodb size={60} color="#4DB33D" />, percent: "88", label: "MongoDB" },
        { icon: <FaAws size={60} color="#FF9900" />, percent: "75", label: "AWS" },
    ];

    const displayedTech = activeTab === "frontend" ? frontendTech : backendTech;

    return (
        <section id="tech" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-white w-full">

            {/* Custom CSS */}
            <style>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0px);
          transition: all 0.4s ease-in-out;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease-in-out;
        }

        /* Responsive card sizing */
        @media (max-width: 480px) {
          .tech-card {
            width: 120px;
            height: 160px;
          }
          .tech-icon {
            font-size: 40px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .tech-card {
            width: 130px;
            height: 180px;
          }
          .tech-icon {
            font-size: 45px;
          }
        }

        @media (min-width: 769px) {
          .tech-card {
            width: 140px;
            height: 200px;
          }
          .tech-icon {
            font-size: 50px;
          }
        }
      `}</style>

            {/* Heading */}
            <h2 className="
      text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 sm:mb-7 
      bg-gradient-to-r from-gray-700 to-gray-700 
      bg-clip-text text-transparent tracking-wide
    ">
                Technologies we work on
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 flex-wrap">
                <button
                    className={`px-4 xs:px-5 sm:px-6 py-2 rounded-full text-sm xs:text-base sm:text-lg font-semibold transition whitespace-nowrap
          ${activeTab === "frontend"
                            ? "bg-gray-800 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => handleTabChange("frontend")}
                >
                    Frontend
                </button>

                <button
                    className={`px-4 xs:px-5 sm:px-6 py-2 rounded-full text-sm xs:text-base sm:text-lg font-semibold transition whitespace-nowrap
          ${activeTab === "backend"
                            ? "bg-gray-800 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => handleTabChange("backend")}
                >
                    Backend
                </button>
            </div>

            {/* Tech Grid */}
            <div
                className={`
      flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 lg:gap-10
      max-w-7xl mx-auto px-2 sm:px-0
      ${fade ? "fade-in" : "fade-out"}
    `}
            >
                {displayedTech.map((item, index) => (
                    <div
                        key={index}
                        className="
        tech-card
        bg-gray-100
        rounded-3xl lg:rounded-[60px]
        flex flex-col items-center justify-center
        shadow-sm
        hover:shadow-xl
        transition
        p-2 sm:p-3 lg:p-4
      "
                    >
                        <div className="tech-icon text-gray-700 mb-2 sm:mb-3 lg:mb-4">{item.icon}</div>
                        <p className="text-lg xs:text-xl sm:text-2xl font-medium text-gray-800 mb-1 sm:mb-2">
                            {item.percent}%
                        </p>
                        <p className="text-xs xs:text-xs sm:text-sm text-gray-600 text-center mt-1 sm:mt-3 lg:mt-4 px-1">{item.label}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}