"use client";

import { motion } from "framer-motion";
import {
  FaSnowflake,
  FaWifi,
  FaTv,
  FaCouch,
  FaBed,
  FaUtensils,
  FaToilet,
  FaHome,
  FaBuilding,
} from "react-icons/fa";

export default function FacilitiesSection() {
  const facilities = [
    { icon: <FaSnowflake />, title: "Air Conditioning" },
    { icon: <FaWifi />, title: "Free WiFi" },
    { icon: <FaTv />, title: "Smart TV" },
    { icon: <FaCouch />, title: "Sofa Seating" },
    { icon: <FaBed />, title: "Queen Size Bed" },
    { icon: <FaUtensils />, title: "Kitchenette" },
    { icon: <FaToilet />, title: "Attached Toilet" },
    { icon: <FaHome />, title: "Living Space" },
    { icon: <FaBuilding />, title: "Balcony View" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33]">
            Room <span className="text-[#B89146]">Facilities</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Enjoy premium comfort with modern facilities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-[#f5f3ef] p-5 rounded-xl text-center shadow-sm hover:shadow-lg transition group"
            >

              <div className="text-[#B89146] text-2xl mb-3 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h4 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h4>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}