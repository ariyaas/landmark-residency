"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-[9999] flex flex-col gap-3">

      {/* 🔥 CALL BUTTON */}
      <a
        href="tel:+919840120595"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
      >
        <FaPhoneAlt className="text-[18px] md:text-[22px]" />
      </a>

      {/* 🔥 WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919840120595"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
      >
        <FaWhatsapp className="text-[20px] md:text-[26px]" />
      </a>

    </div>
  );
}