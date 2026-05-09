"use client";

import { motion } from "framer-motion";

export default function CTA() {

  const phoneNumber = "919840120595";

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">

      <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-[30px]
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#0B1F33]
            leading-tight
          "
        >
          Book Your Stay at{" "}
          <span className="text-[#B89146]">
            Landmark Residency
          </span>
        </motion.h2>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            text-gray-600
            mt-5
            max-w-2xl
            mx-auto
            leading-8
            text-sm
            sm:text-base
          "
        >
          Enjoy comfortable AC & Non-AC rooms in
          Adirampattinam with modern facilities like
          WiFi, TV, balcony and living space.
          Call now to book your room instantly.
        </motion.p>

        {/* 🔥 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="
            mt-8
            flex
            justify-center
            gap-4
            flex-wrap
          "
        >

          {/* 🔥 CALL BUTTON */}
          <a
            href={`tel:+${phoneNumber}`}
            className="
              px-7
              py-3
              bg-[#B89146]
              text-white
              rounded-full
              text-sm
              sm:text-base
              font-semibold
              hover:bg-[#9a7a3d]
              transition
              shadow-md
            "
          >
            Call Now
          </a>

          {/* 🔥 CONTACT BUTTON */}
          <a
            href="/contact"
            className="
              px-7
              py-3
              border
              border-[#B89146]
              text-[#B89146]
              rounded-full
              text-sm
              sm:text-base
              font-semibold
              hover:bg-[#B89146]
              hover:text-white
              transition
            "
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}