"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection() {

  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What is the room price at Landmark Residency?",
      answer:
        "Our Non-AC Suite Rooms start from ₹1250 per night and Deluxe AC Suite Rooms start from ₹1750 per night with premium facilities.",
    },

    {
      question: "Is free WiFi available in all rooms?",
      answer:
        "Yes, free high-speed WiFi is available in all rooms for a comfortable and connected stay experience.",
    },

    {
      question: "Do you provide AC and Non-AC rooms?",
      answer:
        "Yes, Landmark Residency offers both Deluxe AC Suite Rooms and comfortable Non-AC Suite Rooms based on your preference and budget.",
    },

    {
      question: "Is Landmark Residency suitable for family stay?",
      answer:
        "Absolutely. Our residency is family-friendly with clean rooms, peaceful environment, spacious living areas, and safe surroundings.",
    },

    {
      question: "Do rooms include attached bathrooms and balcony facilities?",
      answer:
        "Yes, our rooms include attached bathrooms, spacious living space, and balcony facilities for added comfort and convenience.",
    },

    {
      question: "How can I book a room at Landmark Residency?",
      answer:
        "You can directly call us or contact us through WhatsApp for quick room booking and availability details.",
    },

    {
      question: "Where is Landmark Residency located in Adirampattinam?",
      answer:
        "Landmark Residency is located in Adirampattinam, Tamil Nadu 614701, in one of the landmark and easily accessible locations.",
    },

    {
      question:
        "Is Landmark Residency located near the main road and transport facilities?",
      answer:
        "Yes, our residency is located near the main road with easy access to transport facilities, shops, restaurants, and essential services.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f3ef] overflow-hidden">

      <div className="max-w-4xl mx-auto px-5 md:px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-12">

          <p className="text-[13px] uppercase tracking-[4px] text-[#B89146] font-semibold">
            Stay Information & Booking Help
          </p>

          <h2
            className="
              text-[30px]
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-[#0B1F33]
              mt-3
              leading-tight
            "
          >
            Everything You Need To Know
          </h2>

          <div className="w-16 h-[2px] bg-[#B89146] mx-auto mt-5"></div>

        </div>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, i) => {

            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  overflow-hidden
                "
              >

                {/* 🔥 QUESTION */}
                <button
                  onClick={() =>
                    setActive(isOpen ? null : i)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    p-5
                    sm:p-6
                    gap-5
                  "
                >

                  <h3
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg
                      font-semibold
                      text-[#0B1F33]
                      leading-relaxed
                    "
                  >
                    {faq.question}
                  </h3>

                  <div className="text-[#B89146] text-2xl flex-shrink-0">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>

                </button>

                {/* 🔥 ANSWER */}
                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">

                        <p
                          className="
                            text-gray-600
                            text-sm
                            sm:text-base
                            leading-7
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}