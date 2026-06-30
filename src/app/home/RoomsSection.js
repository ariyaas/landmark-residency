// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function RoomsSection() {
//   const phoneNumber = "919840120595";

//   const rooms = [
//     {
//       title: "Deluxe AC Suite",
//       price: "₹1750 / Night",
//       image: "/resihero.png",
//       desc: "Luxury living Deluxe AC Suite Rooms in Adirampattinam at a landmark location with premium comfort and modern facilities.",
//       features: ["AC", "WiFi", "TV", "Sofa", "Queen Bed", "Kitchenette", "Balcony"],
//     },
//     {
//       title: "AC Suite Room",
//       price: "₹1750 / Night",
//       image: "/resiabout2.jpg",
//       desc: "Spacious AC suite with attached toilet, living space and essential amenities for a comfortable family stay.",
//       features: ["AC", "WiFi", "TV", "Living Space", "Attached Toilet"],
//     },
//     {
//       title: "Non-AC Suite",
//       price: "₹1250 / Night",
//       image: "/rblog3.jpg",
//       desc: "Clean and affordable non-AC suite with all basic facilities, perfect for budget-friendly comfortable stays.",
//       features: ["Fan", "WiFi", "TV", "Attached Toilet"],
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#f5f3ef]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* TITLE */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Explore Our{" "}
//             <span className="text-[#B89146]">Premium Rooms</span>
//           </h2>

//           <p className="text-gray-600 mt-3 max-w-xl mx-auto leading-relaxed">
//             Discover comfortable and affordable rooms in Adirampattinam with AC, WiFi, TV,
//             sofa, kitchen, and balcony facilities for a perfect stay.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {rooms.map((room, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col h-full"
//             >

//               {/* IMAGE */}
// <div className="relative h-56 w-full group overflow-hidden">
//                 <Image
//     src={room.image}
//     alt={room.title}
//     fill
//     className="object-cover transition duration-700 group-hover:scale-110"
//   />

//   {/* 🔥 GLOW EFFECT (TOP LIGHT) */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>

//   {/* 🔥 SHINE EFFECT (on hover) */}
//   <div className="absolute -left-[100%] top-0 h-full w-[50%] bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700"></div>
//                 {/* PRICE */}
//   <div className="absolute top-3 right-3 bg-[#B89146] text-white px-3 py-1 text-xs rounded-md font-semibold z-10">
//     {room.price}
//   </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 flex flex-col flex-grow">

//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {room.title}
//                 </h3>

//                 <div className="w-10 h-[2px] bg-[#B89146] my-3"></div>

//                 <p className="text-gray-600 text-sm leading-relaxed flex-grow">
//                   {room.desc}
//                 </p>

//                 {/* FEATURES */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {room.features.map((f, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
//                     >
//                       {f}
//                     </span>
//                   ))}
//                 </div>

//                 {/* BUTTONS (ALWAYS BOTTOM) */}
//                 <div className="flex gap-3 mt-6">

//                <Link
//   href="/rooms"
//   className="flex-1 py-2 rounded-md bg-[#0B1F33] text-white text-sm font-semibold hover:bg-black transition text-center"
// >
//   View Details
// </Link>

//                   <a
//                     href={`tel:+${phoneNumber}`}
//                     className="flex-1 py-2 rounded-md bg-[#B89146] text-white text-sm font-semibold text-center hover:bg-[#9a7a3d] transition"
//                   >
//                     Call Now
//                   </a>

//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RoomsSection() {

  const phoneNumber = "919840120595";

  const rooms = [
    {
      title: "Deluxe AC Suite",
      price: "₹1999 / Night",
      image: "/resihero.png",
      desc:
        "Luxury living Deluxe AC Suite Rooms in Adirampattinam at a landmark location with premium comfort and modern facilities.",
      features: [
        "AC",
        "WiFi",
        "TV",
        "Sofa",
        "Queen Bed",
        "Kitchenette",
        "Balcony",
      ],
    },

    {
      title: "AC Suite Room",
      price: "₹1999 / Night",
      image: "/resiabout2.jpg",
      desc:
        "Spacious AC suite with attached toilet, living space and essential amenities for a comfortable family stay.",
      features: [
        "AC",
        "WiFi",
        "TV",
        "Living Space",
        "Attached Toilet",
      ],
    },

    {
      title: "Non-AC Suite",
      price: "₹1450 / Night",
      image: "/rblog3.jpg",
      desc:
        "Clean and affordable non-AC suite with all basic facilities, perfect for budget-friendly comfortable stays.",
      features: ["Fan", "WiFi", "TV", "Attached Toilet"],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f3ef] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-12 md:mb-14">

          <p className="text-[13px] uppercase tracking-[4px] text-[#B89146] font-semibold">
            Premium Stay
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
            Explore Our{" "}
            <span className="text-[#B89146]">
              Premium Rooms
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-[#B89146] mx-auto mt-5"></div>

          <p
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
            Discover comfortable and affordable rooms in
            Adirampattinam with AC, WiFi, TV, sofa,
            kitchen, balcony, and premium facilities
            designed for peaceful family stay.
          </p>

        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {rooms.map((room, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                transition
                duration-300
                flex
                flex-col
                h-full
              "
            >

              {/* 🔥 IMAGE */}
              <div className="relative h-[240px] sm:h-[260px] w-full group overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="100vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>

                {/* 🔥 SHINE EFFECT */}
                <div className="
                  absolute
                  -left-[100%]
                  top-0
                  h-full
                  w-[50%]
                  bg-white/20
                  skew-x-12
                  group-hover:left-[120%]
                  transition-all
                  duration-1000
                "></div>

                {/* 🔥 PRICE */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-[#B89146]
                    text-white
                    px-3
                    py-1.5
                    text-xs
                    rounded-full
                    font-semibold
                    shadow-lg
                  "
                >
                  {room.price}
                </div>

              </div>

              {/* 🔥 CONTENT */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">

                {/* ROOM TITLE */}
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  {room.title}
                </h3>

                {/* LINE */}
                <div className="w-12 h-[2px] bg-[#B89146] my-4"></div>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-600
                    text-sm
                    sm:text-base
                    leading-7
                    flex-grow
                  "
                >
                  {room.desc}
                </p>

                {/* 🔥 FEATURES */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {room.features.map((f, index) => (
                    <span
                      key={index}
                      className="
                        bg-[#f5f3ef]
                        text-gray-700
                        text-xs
                        sm:text-sm
                        px-3
                        py-1.5
                        rounded-full
                        font-medium
                      "
                    >
                      {f}
                    </span>
                  ))}

                </div>

                {/* 🔥 BUTTONS */}
                <div className="flex gap-3 mt-7">

                  {/* VIEW DETAILS */}
                  <Link
                    href="/rooms"
                    className="
                      flex-1
                      py-3
                      rounded-xl
                      bg-[#0B1F33]
                      text-white
                      text-sm
                      sm:text-base
                      font-semibold
                      hover:bg-black
                      transition
                      text-center
                    "
                  >
                    View Details
                  </Link>

                  {/* CALL NOW */}
                  <a
                    href={`tel:+${phoneNumber}`}
                    className="
                      flex-1
                      py-3
                      rounded-xl
                      bg-[#B89146]
                      text-white
                      text-sm
                      sm:text-base
                      font-semibold
                      text-center
                      hover:bg-[#9a7a3d]
                      transition
                    "
                  >
                    Call Now
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}