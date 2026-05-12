"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* 🔹 BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Landmark <span className="text-[#B89146]">Residency</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            Affordable and comfortable rental rooms in Adirampattinam. 
            Experience clean, safe, and premium stay with all essential facilities.
          </p>

          {/* SOCIAL */}
         <div className="flex gap-4 mt-6">

  {/* FACEBOOK */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#B89146] hover:text-white transition"
  >
    <FaFacebookF size={14} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#B89146] hover:text-white transition"
  >
    <FaInstagram size={14} />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/919840120595"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#B89146] hover:text-white transition"
  >
    <FaWhatsapp size={14} />
  </a>

</div>
        </div>

        {/* 🔹 LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "About Us",
              "Rooms & Stay",
              "Services",
              "Gallery",
              "Contact",
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#B89146] transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#B89146] mt-1" />
              <p>
                Adirampattinam, Tamil Nadu, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#B89146]" />
              <p>Landmarkresidency26@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#B89146]" />
             <a href="https://wa.me/919840120595" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* 🔹 BOTTOM */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Landmark Residency. All Rights Reserved.
      </div>
    </footer>
  );
}