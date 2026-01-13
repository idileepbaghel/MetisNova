import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Globe, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Prepare email template parameters to match EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 scroll-mt-20 mx-2 sm:mx-4 md:mx-6 lg:mx-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-200 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-12 sm:mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-sm xs:text-base sm:text-lg max-w-2xl mx-auto text-gray-600 px-2">
            Ready to discuss your next project? We'd love to hear about your ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</p>
                  <p className="text-blue-600 font-medium mb-1 text-xs sm:text-sm">contact@metisnova.com</p>
                  <p className="text-xs text-gray-500">
                    General inquiries and project discussions
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Careers</p>
                  <p className="text-purple-600 font-medium mb-1 text-xs sm:text-sm">careers@metisnova.com</p>
                  <p className="text-xs text-gray-500">
                    Join our team and grow with us
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Global</p>
                  <p className="text-green-600 font-medium mb-1 text-xs sm:text-sm">We operate globally with distributed teams</p>
                  <p className="text-xs text-gray-500">
                    Serving clients across all time zones
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Website</p>
                  <p className="text-cyan-600 font-medium mb-1 text-xs sm:text-sm break-all">https://www.metisnova.com</p>
                  <p className="text-xs text-gray-500">
                    Visit our website to learn more about our services and team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-xl">
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software development, AI solutions, etc."
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="4"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                {isSubmitted && (
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-green-300 bg-green-50 text-green-700">
                    <p className="font-bold text-sm sm:text-base">Thank you! We'll be in touch soon.</p>
                  </div>
                )}

                {error && (
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-red-300 bg-red-50 text-red-700">
                    <p className="font-bold text-sm sm:text-base">{error}</p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full py-3 sm:py-4 text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 px-2">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}