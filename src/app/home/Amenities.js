"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Amenities() {

  const router = useRouter();

  const features = [
    {
      title: "Air Conditioned Rooms",
      desc: "Comfortable AC rooms for a pleasant and relaxing stay in Adirampattinam.",
    },

    {
      title: "Free WiFi",
      desc: "Stay connected with high-speed internet access available in all rooms.",
    },

    {
      title: "Smart TV",
      desc: "Enjoy your favorite shows and entertainment anytime.",
    },

    {
      title: "Spacious Living Area",
      desc: "Relax with sofa seating and comfortable living space.",
    },

    {
      title: "Queen Size Bed",
      desc: "Premium quality bed for a peaceful and restful sleep.",
    },

    {
      title: "Kitchenette",
      desc: "Basic cooking facility for added convenience during your stay.",
    },

    {
      title: "Attached Bathroom",
      desc: "Clean, hygienic and private bathroom for every room.",
    },

    {
      title: "Balcony View",
      desc: "Enjoy fresh air and a pleasant outdoor view from your room.",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-20 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/bgforam.png')" }}
    >

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >

          <h2
            className="
              text-[30px]
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
              font-[var(--font-outfit)]
              leading-tight
            "
          >
            Best Amenities at{" "}
            <span className="text-[#B89146]">
              Our Residency
            </span>
          </h2>

          <p
            className="
              text-white/80
              mt-4
              max-w-2xl
              mx-auto
              leading-7
              text-sm
              sm:text-base
            "
          >
            Experience comfortable and affordable rooms in
            Adirampattinam with AC, WiFi, TV, sofa, kitchen,
            balcony and modern facilities for a perfect stay.
          </p>

        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">

          {features.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                bg-white/10
                backdrop-blur-md
                p-5
                sm:p-6
                rounded-2xl
                text-center
                border
                border-white/10
                hover:bg-white/20
                transition
                duration-300
              "
            >

              <h4 className="font-semibold text-lg text-white leading-tight">
                {item.title}
              </h4>

              <p
                className="
                  text-sm
                  text-white/80
                  mt-3
                  leading-7
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        {/* 🔥 BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-14"
        >

          <button
            onClick={() => router.push("/contact")}
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
              shadow-lg
            "
          >
            Contact Us
          </button>

        </motion.div>

      </div>
    </section>
  );
}