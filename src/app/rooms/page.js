import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import RoomsSection from "../home/RoomsSection";

export const metadata = {
  title: "Rooms & Stay | Landmark Residency",
  description:
    "Explore our AC and Non-AC suite rooms in Adirampattinam with modern facilities and affordable pricing.",
};

export default function RoomsPage() {
  const phoneNumber = "919840120595";

  const rooms = [
    {
      title: "Deluxe AC Suite",
      price: "₹1999 / Night",
      image: "/resihero.png",
      desc: "Luxury Deluxe AC Suite Rooms in Adirampattinam with premium comfort and modern facilities for a relaxing stay.",
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
      desc: "Spacious AC suite room with attached toilet, living area, and essential facilities for family comfort.",
      features: [
        "AC",
        "WiFi",
        "TV",
        "Living Space",
        "Attached Toilet",
      ],
    },

    {
      title: "Non-AC Suite Room",
      price: "₹1450 / Night",
      image: "/rblog3.jpg",
      desc: "Affordable Non-AC suite room with clean environment and comfortable facilities for budget-friendly stay.",
      features: [
        "Fan",
        "WiFi",
        "TV",
        "Attached Toilet",
        "Comfort Stay",
      ],
    },
  ];

  return (
    <>
      {/* 🔥 PAGE BANNER */}
     <PageBanner
  image="/bgbanner.png"
  height="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
  title="Rooms & Stay"
  subtitle="Comfortable luxury rooms for a peaceful stay"
/>

      {/* 🔥 PAGE TITLE */}
    <section className="py-14 md:py-16 bg-white overflow-hidden">

  <div className="max-w-6xl mx-auto px-5 md:px-6 text-center">

    <h1
      className="
        text-[30px]
        sm:text-4xl
        md:text-5xl
        font-bold
        text-[#0B1F33]
        leading-tight
      "
    >
      Explore Our Premium Rooms
    </h1>

    <div className="w-20 h-1 bg-[#B89146] mx-auto my-5"></div>

    <p
      className="
        text-gray-600
        mt-4
        max-w-2xl
        mx-auto
        leading-8
        text-sm
        sm:text-base
        md:text-lg
      "
    >
      Discover affordable and comfortable AC and Non-AC suite rooms
      designed with modern amenities for families, travelers,
      and daily stay guests.
    </p>

  </div>

</section>

      {/* 🔥 ROOM CARDS */}
   <section className="py-16 md:py-20 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 md:px-6">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

      {/* 🔥 LEFT */}
      <div>

        <p
          className="
            uppercase
            tracking-[4px]
            text-[#B89146]
            font-semibold
            text-[13px]
            mb-4
          "
        >
          Luxury Stay Experience
        </p>

        <h2
          className="
            text-[30px]
            sm:text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F33]
            leading-tight
          "
        >
          Comfortable & Premium Rooms in Adirampattinam
        </h2>

        <div className="w-20 h-[2px] bg-[#B89146] my-5"></div>

        <p
          className="
            text-gray-600
            leading-8
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Landmark Residency offers a peaceful and comfortable stay
          with modern facilities for families, travelers, and business guests.
          Located in one of the landmark areas of Adirampattinam,
          our rooms are designed for luxury, convenience, and relaxation.
        </p>

      </div>

      {/* 🔥 RIGHT CARDS */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5">

        {/* CARD 1 */}
        <div
          className="
            bg-[#f5f3ef]
            rounded-2xl
            p-5
            sm:p-6
            shadow-sm
          "
        >

          <h3 className="text-3xl sm:text-4xl font-bold text-[#B89146]">
            5
          </h3>

          <p
            className="
              mt-2
              text-gray-700
              font-medium
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Total Suite Rooms
          </p>

        </div>

        {/* CARD 2 */}
        <div
          className="
            bg-[#f5f3ef]
            rounded-2xl
            p-5
            sm:p-6
            shadow-sm
          "
        >

          <h3 className="text-3xl sm:text-4xl font-bold text-[#B89146]">
            2
          </h3>

          <p
            className="
              mt-2
              text-gray-700
              font-medium
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Deluxe AC Rooms
          </p>

        </div>

        {/* CARD 3 */}
        <div
          className="
            bg-[#f5f3ef]
            rounded-2xl
            p-5
            sm:p-6
            shadow-sm
          "
        >

          <h3 className="text-3xl sm:text-4xl font-bold text-[#B89146]">
            3
          </h3>

          <p
            className="
              mt-2
              text-gray-700
              font-medium
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Non-AC Suite Rooms
          </p>

        </div>

        {/* CARD 4 */}
        <div
          className="
            bg-[#f5f3ef]
            rounded-2xl
            p-5
            sm:p-6
            shadow-sm
          "
        >

          <h3 className="text-2xl sm:text-3xl font-bold text-[#B89146]">
            ₹1450 - ₹1999
          </h3>

          <p
            className="
              mt-2
              text-gray-700
              font-medium
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Affordable Pricing
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


   {/* 🔥 LUXURY ROOM EXPERIENCE SECTION */}
{/* 🔥 LUXURY ROOM EXPERIENCE SECTION */}
<section className="py-16 md:py-24 bg-[#f5f3ef] overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 md:px-6">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* 🔥 IMAGE SIDE */}
      <div className="relative">

        {/* 🔥 MAIN IMAGE */}
        <div
          className="
            relative
            h-[320px]
            sm:h-[420px]
            md:h-[520px]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            group
          "
        >

          <Image
            src="/resiabout2.jpg"
            alt="Luxury Room"
            fill
            sizes="100vw"
            className="
              object-cover
              group-hover:scale-105
              transition
              duration-700
            "
          />

          {/* 🔥 OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

        </div>

        {/* 🔥 FLOAT CARD */}
{/* 🔥 FLOAT CARD */}
<div
  className="
    absolute
    -bottom-5
    -right-2
    sm:-bottom-8
    sm:right-4
    md:right-[-20px]
    bg-white
    shadow-2xl
    rounded-2xl
    px-5
    py-4
    sm:px-6
    sm:py-5
    w-[180px]
    sm:w-[220px]
    border
    border-gray-100
    z-20
  "
>

  <h3 className="text-3xl sm:text-4xl font-bold text-[#B89146]">
    5+
  </h3>

  <p
    className="
      text-gray-700
      font-medium
      mt-2
      leading-relaxed
      text-sm
      sm:text-base
    "
  >
    Premium Suite Rooms Available
  </p>

</div>
      </div>

      {/* 🔥 CONTENT SIDE */}
      <div className="mt-6 lg:mt-0">

        {/* 🔥 SMALL TITLE */}
        <p
          className="
            uppercase
            tracking-[4px]
            text-[#B89146]
            font-semibold
            text-[13px]
            mb-4
          "
        >
          Premium Room Experience
        </p>

        {/* 🔥 MAIN TITLE */}
        <h2
          className="
            text-[25px]
            sm:text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F33]
            leading-tight
          "
        >
          Comfortable Luxury Stay Designed for Every Guest
        </h2>

        {/* 🔥 LINE */}
        <div className="w-24 h-[2px] bg-[#B89146] my-5"></div>

        {/* 🔥 PARA 1 */}
        <p
          className="
            text-gray-600
            text-sm
            sm:text-base
            md:text-lg
            leading-8
            text-justify
          "
        >
          Landmark Residency offers a perfect combination of comfort,
          affordability, and luxury for travelers, families, and business guests.
          Our spacious suite rooms are thoughtfully designed to provide a peaceful
          and relaxing stay experience in one of the landmark locations of
          Adirampattinam.
        </p>

        {/* 🔥 PARA 2 */}
        <p
          className="
            text-gray-600
            text-sm
            sm:text-base
            md:text-lg
            leading-8
            text-justify
            mt-5
          "
        >
          We currently provide 5 premium suite rooms, including
          2 Deluxe AC Suite Rooms and 3 Non-AC Suite Rooms.
          Every room is maintained with cleanliness, comfort, and modern living
          standards to ensure a memorable hospitality experience for every guest.
        </p>

        {/* 🔥 PARA 3 */}
        <p
          className="
            text-gray-600
            text-sm
            sm:text-base
            md:text-lg
            leading-8
            text-justify
            mt-5
          "
        >
          Our Deluxe AC Suites include premium facilities such as air conditioning,
          free WiFi, smart TV, sofa seating, queen-size beds, kitchenette,
          attached bathrooms, spacious living areas, and private balcony access.
          Whether you are visiting for family trips, business stays, or short vacations,
          Landmark Residency ensures a comfortable and relaxing environment.
        </p>

        {/* 🔥 FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          {[
            "Luxury AC Rooms",
            "Affordable Pricing",
            "Free High-Speed WiFi",
            "Spacious Living Area",
            "Queen Size Beds",
            "Prime Landmark Location",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
            >

              <div className="w-2.5 h-2.5 rounded-full bg-[#B89146]"></div>

              <p
                className="
                  text-gray-700
                  font-medium
                  text-sm
                  sm:text-base
                "
              >
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-10">

          {/* CONTACT */}
          <a
            href="/contact"
            className="
              px-6
              sm:px-8
              py-3
              sm:py-4
              bg-[#0B1F33]
              text-white
              rounded-xl
              text-sm
              sm:text-base
              font-semibold
              hover:bg-black
              transition
              duration-300
              shadow-lg
            "
          >
            Contact Us
          </a>

          {/* CALL */}
          <a
            href="tel:+919840120595"
            className="
              px-6
              sm:px-8
              py-3
              sm:py-4
              bg-[#B89146]
              text-white
              rounded-xl
              text-sm
              sm:text-base
              font-semibold
              hover:bg-[#9a7a3d]
              transition
              duration-300
              shadow-lg
            "
          >
            Call Now
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

<RoomsSection />
    </>
  );
}