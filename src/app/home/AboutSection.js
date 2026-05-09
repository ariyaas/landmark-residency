// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function About() {

//   // 🔥 Image Slider
//   const images = ["/resiabout.jpg", "/resiabout2.jpg"];
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-[#f5f3ef]">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>

//           {/* Small Title */}
//           <p className="text-sm uppercase tracking-widest text-[#B89146] font-semibold">
//             About Residency
//           </p>

//           {/* Main Title */}
// <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-[var(--font-poppins)] text-gray-800 break-words leading-tight">            Comfortable Stay at Landmark Residency
//           </h2>

//           {/* Line */}
//           <div className="w-14 h-[2px] bg-[#B89146] my-5"></div>

//           {/* Description */}
//           <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
//             Landmark Residency offers clean, affordable, and comfortable rooms 
//             in Adirampattinam. Ideal for daily stay, travelers, and business visits 
//             with all essential facilities.
//           </p>

//           {/* FEATURES */}
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {[
//               {
//                 title: "Clean Rooms",
//                 desc: "Well-maintained and hygienic rooms",
//               },
//               {
//                 title: "Main City",
//                 desc: "Prime location with easy access",
//               },
//               {
//                 title: "Comfort Stay",
//                 desc: "Relax with peaceful environment",
//               },
//               {
//                 title: "New Rooms",
//                 desc: "Modern rooms with latest facilities",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
//               >
//                 <h4 className="font-semibold text-lg text-gray-800">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}

//           </div>

//           {/* Button */}
//           <button className="mt-10 px-6 py-3 bg-[#B89146] text-white rounded-md font-semibold hover:bg-[#9a7a3d] transition">
//             More About
//           </button>
//         </div>

//         {/* RIGHT IMAGE + SLIDER */}
//         <div className="relative flex justify-center items-center">

//           {/* 🔥 Brown Background (only right/top/bottom) */}
//           <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-[#B89146] z-0"></div>

//           {/* 🔥 Image Container */}
//           <div className="relative z-10 bg-white p-4 shadow-lg">

//             <div className="relative 
//               w-[260px] sm:w-[300px] md:w-[380px] lg:w-[450px] 
//               h-[320px] sm:h-[380px] md:h-[480px] lg:h-[580px] overflow-hidden">

//               {/* Images */}
//               {images.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt="Landmark Residency Room"
//                   fill
//                   className={`object-cover absolute top-0 left-0 transition-opacity duration-700 
//                   ${current === index ? "opacity-100" : "opacity-0"}`}
//                 />
//               ))}

//             </div>

//             {/* 🔘 Dots */}
//             <div className="flex justify-center gap-2 mt-4">
//               {images.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`w-2.5 h-2.5 rounded-full transition 
//                   ${current === i ? "bg-[#B89146]" : "bg-gray-300"}`}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {

  // 🔥 IMAGE SLIDER
  const images = ["/resiabout.jpg", "/resiabout2.jpg"];
  const [current, setCurrent] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#f5f3ef] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div>

          {/* SMALL TITLE */}
          <p className="text-[13px] uppercase tracking-[4px] text-[#B89146] font-semibold">
            About Residency
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
              text-[30px]
              sm:text-4xl
              lg:text-5xl
              font-bold
              mt-3
              font-[var(--font-poppins)]
              text-[#0B1F33]
              leading-[1.2]
              break-words
            "
          >
            Comfortable Stay at Landmark Residency
          </h2>

          {/* LINE */}
          <div className="w-14 h-[2px] bg-[#B89146] my-5"></div>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-600
              leading-8
              text-sm
              sm:text-base
              mb-8
              max-w-xl
            "
          >
            Landmark Residency offers clean, affordable, and comfortable
            rooms in Adirampattinam. Ideal for daily stay, travelers,
            and business visits with all essential facilities and peaceful
            hospitality experience.
          </p>

          {/* 🔥 FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              {
                title: "Clean Rooms",
                desc: "Well-maintained and hygienic rooms",
              },
              {
                title: "Main City",
                desc: "Prime location with easy access",
              },
              {
                title: "Comfort Stay",
                desc: "Relax with peaceful environment",
              },
              {
                title: "New Rooms",
                desc: "Modern rooms with latest facilities",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  p-5
                  rounded-2xl
                  shadow-sm
                  hover:shadow-xl
                  transition
                  duration-300
                "
              >

                <h4 className="font-semibold text-lg text-[#0B1F33]">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

          {/* 🔥 BUTTON */}
          <a
            href="/about"
            className="
              inline-block
              mt-10
              px-6
              py-3
              bg-[#B89146]
              text-white
              rounded-xl
              font-semibold
              hover:bg-[#9a7a3d]
              transition
              duration-300
              shadow-lg
            "
          >
            More About
          </a>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">

          {/* BROWN BACKGROUND */}
          <div
            className="
              absolute
              top-6
              right-0
              w-[85%]
              h-[88%]
              bg-[#B89146]
              rounded-3xl
              z-0
            "
          ></div>

          {/* IMAGE CARD */}
          <div
            className="
              relative
              z-10
              bg-white
              p-3
              rounded-3xl
              shadow-2xl
            "
          >

            {/* IMAGE BOX */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                w-[240px]
                sm:w-[300px]
                md:w-[360px]
                lg:w-[430px]
                h-[320px]
                sm:h-[400px]
                md:h-[500px]
                lg:h-[580px]
              "
            >

              {/* 🔥 IMAGES */}
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Landmark Residency"
                  fill
                  sizes="100vw"
                  className={`
                    object-cover
                    absolute
                    inset-0
                    transition-opacity
                    duration-700
                    ${current === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}

            </div>

            {/* 🔥 DOTS */}
            <div className="flex justify-center gap-2 mt-4">

              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    transition
                    duration-300
                    ${current === i ? "bg-[#B89146]" : "bg-gray-300"}
                  `}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}