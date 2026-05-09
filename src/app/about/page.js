import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import FacilitiesSection from "@/components/FacilitiesSection";

export const metadata = {
  title: "About Us | Landmark Residency",
  description:
    "Learn about Landmark Residency, offering clean and affordable rooms in Adirampattinam with premium facilities.",
};

export default function AboutPage() {
  return (
    <>
      {/* 🔥 BANNER */}
      <PageBanner
        image="/bgbanner.png"
        height="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
        title="About Us"
        subtitle="Discover our story of providing comfort and luxury"
      />

      {/* 🔥 ABOUT INTRO */}
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
            About Landmark Residency
          </h1>

          <div className="w-20 h-1 bg-[#c19b76] mx-auto my-5"></div>

          <p
            className="
              text-gray-600
              mt-4
              max-w-3xl
              mx-auto
              leading-8
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            Landmark Residency offers clean, affordable,
            and comfortable rooms in Adirampattinam.
            We provide both AC and Non-AC suite rooms
            with modern amenities for a relaxing and
            convenient stay experience.
          </p>

        </div>

      </section>

      {/* 🔥 ABOUT CONTENT */}
      <section className="py-14 md:py-16 bg-[#f5f3ef] overflow-hidden">

        <div
          className="
            max-w-6xl
            mx-auto
            px-5
            md:px-6
            grid
            md:grid-cols-2
            gap-10
            md:gap-14
            items-center
          "
        >

          {/* 🔥 IMAGE */}
          <div
            className="
              relative
              h-[280px]
              sm:h-[350px]
              md:h-[420px]
              w-full
              rounded-2xl
              overflow-hidden
              shadow-xl
            "
          >

            <Image
              src="/resiabout2.jpg"
              alt="About Rooms"
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>

          {/* 🔥 CONTENT */}
          <div>

            <h2
              className="
                text-[28px]
                sm:text-3xl
                md:text-4xl
                font-bold
                text-[#0B1F33]
                leading-tight
              "
            >
              Comfortable Stay in Prime Location
            </h2>

            <div className="w-16 h-1 bg-[#c19b76] my-5"></div>

            <p
              className="
                text-gray-600
                leading-8
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Located in a landmark area of Adirampattinam,
              our residency provides easy access to transport,
              restaurants, and essential services.
              We focus on cleanliness, safety,
              and customer comfort.
            </p>

            {/* 🔥 FEATURES */}
            <ul className="mt-7 space-y-3 text-gray-700">

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span>✅</span>
                <span>AC & Non-AC Rooms</span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span>✅</span>
                <span>Free WiFi</span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span>✅</span>
                <span>Attached Bathroom</span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span>✅</span>
                <span>Balcony & Living Space</span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span>✅</span>
                <span>Family Friendly Stay</span>
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* 🔥 FACILITIES */}
      <FacilitiesSection />

    </>
  );
}