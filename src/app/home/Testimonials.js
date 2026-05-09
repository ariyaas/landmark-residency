"use client";

import { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {

  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Manoj Kumar",
      time: "a day ago",
      text: "Very neat and clean place. Spending money is worth it.",
    },

    {
      name: "Mohamed Ibrahim",
      time: "3 days ago",
      text: "I stayed here and had a good experience.",
    },

    {
      name: "Farshidha Faizal",
      time: "3 weeks ago",
      text: "Best place 👍 Clean rooms, great location, and worth the money.",
    },
  ];

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 md:py-16 bg-[#B89146] overflow-hidden">

      <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">

        {/* 🔥 TITLE */}
        <h2
          className="
            text-[30px]
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-white
            leading-tight
          "
        >
          What Our Guests Say
        </h2>

        <p
          className="
            text-white/80
            mt-3
            mb-10
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Real reviews from our happy customers
        </p>

        {/* 🔥 SLIDER */}
        <div className="relative h-[280px] sm:h-[300px] md:h-[320px]">

          {reviews.map((review, i) => (

            <div
              key={i}
              className={`
                absolute
                w-full
                transition-all
                duration-700
                ease-in-out
                ${i === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                }
              `}
            >

              <div
                className="
                  bg-[#0B1F33]
                  text-white
                  p-6
                  sm:p-8
                  md:p-10
                  rounded-2xl
                  shadow-2xl
                "
              >

                {/* 🔥 HEADER */}
                <div className="flex items-center gap-4 mb-5">

                  {/* USER ICON */}
                  <UserCircleIcon className="w-12 h-12 sm:w-14 sm:h-14 text-gray-300" />

                  <div className="text-left">

                    <h4 className="font-semibold text-base sm:text-lg">
                      {review.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-400">
                      {review.time}
                    </p>

                  </div>

                </div>

                {/* 🔥 STARS */}
                <div className="flex gap-1 mb-4 justify-start">

                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg sm:text-xl"
                      >
                        ★
                      </span>
                    ))}

                </div>

                {/* 🔥 REVIEW TEXT */}
                <p
                  className="
                    text-gray-200
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-7
                    text-left
                  "
                >
                  “{review.text}”
                </p>

                {/* 🔥 QUOTE */}
                <div className="text-[#B89146] text-3xl sm:text-4xl mt-5 text-right">
                  ”
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* 🔥 DOTS */}
        <div className="flex justify-center mt-6 gap-3">

          {reviews.map((_, i) => (

            <div
              key={i}
              className={`
                w-3
                h-3
                rounded-full
                transition
                duration-300
                ${i === index
                  ? "bg-white"
                  : "bg-white/40"
                }
              `}
            />

          ))}

        </div>

      </div>
    </section>
  );
}