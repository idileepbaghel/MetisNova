import {
  FaLinkedinIn,
  FaInstagram,
  FaSquareXTwitter,
  FaEnvelope
} from "react-icons/fa6"
import Logo_img from '../assets/logo/Logo_03.png'

export default function Footer() {
  return (
    <footer className="mt-20 py-12 px-6 sm:px-10 scroll-mt-20 border-t rounded-t-3xl border-gray-900 bg-gray-800">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Branding & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo_img}
                alt="MetisNova Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white">
                MetisNova
              </h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              We deliver custom software development, web and mobile applications, cloud-native architectures, SaaS platforms, and AI-powered solutions. Our expertise spans full-stack development, backend engineering, DevOps, machine learning, and enterprise software modernization.
            </p>
          </div>
        </div>

        {/* LINKS & CONTACT */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#services" className="hover:text-blue-400 transition">Software Development</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Cloud Services</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#vision" className="hover:text-blue-400 transition">Vision</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#approach" className="hover:text-blue-400 transition">Approach</a></li>
                <li><a href="#careers" className="hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="mailto:contact@metisnova.com" className="hover:text-blue-400 transition">contact@metisnova.com</a></li>
                <li><a href="mailto:careers@metisnova.com" className="hover:text-blue-400 transition">careers@metisnova.com</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact Form</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-6 text-xl">
                {[
                  { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn" },
                  { icon: <FaSquareXTwitter />, label: "X (Twitter)" },
                  { icon: <FaEnvelope />, label: "Gmail" },
                ].map((item, idx) => (
                  <div key={idx} className="relative group flex justify-center">
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition cursor-pointer"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>

                    {/* Tooltip */}
                    <span
                      className="
          absolute
          top-full
          mt-2
          px-2 py-1
          text-xs
          text-white
          bg-black
          rounded-md
          opacity-0
          scale-95
          group-hover:opacity-100
          group-hover:scale-100
          transition-all
          duration-200
          pointer-events-none
          whitespace-nowrap
          left-1/2
          -translate-x-1/2
        "
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs">
          <p className="text-white">© {new Date().getFullYear()} MetisNova. All rights reserved. | Where Logic Ignites Innovation</p>
          {/* <div className="flex gap-6 text-gray-100">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
