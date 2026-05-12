// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full">

//       {/* Background */}
//       <Image
//         src="/resihero.png"
//         alt="Affordable rental rooms in Adirampattinam"
//         fill
//         className="object-cover object-center"
//         priority
//       />

//       {/* Overlay */}


//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

//         {/* 🔥 BOLD H1 - Brown line removed */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="font-[var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight max-w-5xl tracking-tight drop-shadow-lg"
//         >
//           Best Affordable Rental{" "}
//           <span className="text-[#B89146] relative inline-block  font-black">
//             Rooms in Adirampattinam
//           </span>
//           <br />
//           for Comfortable Stay
//         </motion.h1>

//         {/* Sub line with rounded background (circle edge) */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 px-6 py-2 text-lg md:text-xl text-[#B89146] font-semibold tracking-wide bg-black/50 rounded-full backdrop-blur-sm inline-block"
//         >
//           Rental Rooms • Daily Stay • Budget Stay
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 40 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-1 text-white/80 max-w-xl text-base md:text-lg "
//         >
//           Book affordable rental rooms in Adirampattinam with clean and comfortable facilities. Enjoy budget-friendly daily stays with fast and easy online booking.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 40 }}
//           transition={{ delay: 0.9, duration: 0.8 }}
//           className="mt-8 flex gap-4 flex-wrap justify-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-[#B89146] text-white rounded-xl font-semibold hover:bg-[#9a7a3d] transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             About Us
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
//           >
//             Contact Us
//           </motion.button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src="/resihero.png"
        alt="Affordable rental rooms in Adirampattinam"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5 -mt-8 md:mt-0">

        {/* 🔥 MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-[var(--font-outfit)]
            text-[26px]
            sm:text-4xl
            md:text-5xl
            lg:text-7xl
            font-black
            leading-[1.15]
            md:leading-[1.2]
            max-w-4xl
            tracking-tight
            drop-shadow-xl
          "
        >
          Best Affordable Rental{" "}
          <span className="text-[#B89146]">
            Rooms in Adirampattinam
          </span>
          <br />
          for Comfortable Stay
        </motion.h1>

        {/* 🔥 SUB TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            mt-4
            px-4
            py-2
            bg-black/55
            rounded-full
            backdrop-blur-sm
          "
        >
          <p className="text-[#B89146] text-[12px] sm:text-sm md:text-lg font-semibold tracking-wide whitespace-nowrap">
            Rental Rooms • Daily Stay • Budget Stay
          </p>
        </motion.div>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="
            mt-4
            text-white/60
            max-w-md
            text-sm
            sm:text-base
            md:text-lg
            leading-7
          "
        >
          Book affordable rental rooms & Lodge in Adirampattinam with 
          comfortable facilities and peaceful daily stay experience.
        </motion.p>

        {/* 🔥 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >

          {/* ABOUT */}
          <a
            href="/about"
            className="
              px-5
              py-2.5
              bg-[#B89146]
              text-white
              text-sm
              md:text-base
              rounded-xl
              font-semibold
              hover:bg-[#9a7a3d]
              transition-all
              duration-300
              shadow-lg
            "
          >
            About Us
          </a>

          {/* CONTACT */}
          <a
            href="/contact"
            className="
              px-5
              py-2.5
              border
              border-white
              text-white
              text-sm
              md:text-base
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
}