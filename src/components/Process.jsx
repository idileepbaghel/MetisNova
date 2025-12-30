import React, { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Process() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const testimonials = [
    {
      quote: "MetisNova delivered our enterprise software system on time and with exceptional quality. Their attention to detail and commitment to clean code is outstanding.",
      author: "Enterprise Client",
      position: "CTO"
    },
    {
      quote: "Working with MetisNova on our SaaS product was a game-changer. They understood our vision and built something truly scalable.",
      author: "SaaS Founder",
      position: "CEO"
    },
    {
      quote: "MetisNova's AI integration transformed our business processes. Professional, transparent, and results-driven.",
      author: "Tech Corporation",
      position: "VP Engineering"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
            ⭐ Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Trusted by startups, enterprises, and institutions worldwide
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-lg border border-gray-200 min-h-[300px] flex flex-col justify-between bg-white hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl font-light leading-relaxed italic text-gray-800">
                "{testimonials[currentTestimonial].quote}"
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].position}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            {currentTestimonial + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}