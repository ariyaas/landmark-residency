import PageBanner from "@/components/PageBanner";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Landmark Residency",
  description:
    "Contact Landmark Residency Adirampattinam for room booking, stay details, and premium accommodation inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* 🔥 PAGE BANNER */}
      <PageBanner
        image="/bgbanner.png"
        height="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
        title="Contact Us"
        subtitle="Get in touch with Landmark Residency"
      />

      {/* 🔥 CONTACT SECTION */}
      <section className="py-14 md:py-20 bg-[#f5f3ef] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* 🔥 TITLE */}
          <div className="text-center mb-14 md:mb-16">

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
              Contact{" "}
              <span className="text-[#B89146]">
                Landmark Residency
              </span>
            </h1>

            <div className="w-24 h-[2px] bg-[#B89146] mx-auto mt-5"></div>

            <p
              className="
                text-gray-600
                mt-5
                max-w-2xl
                mx-auto
                leading-8
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Feel free to contact us for room booking,
              stay inquiries, and premium accommodation
              support in Adirampattinam.
            </p>

          </div>

          {/* 🔥 GRID */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* 🔥 LEFT CONTACT INFO */}
            <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">

              <h2 className="text-2xl font-bold text-[#0B1F33] mb-8">
                Get In Touch
              </h2>

              {/* 🔥 PHONE */}
              <div className="flex items-start gap-4 sm:gap-5 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#B89146]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    sm:text-xl
                    shrink-0
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-[#0B1F33]">
                    Phone Number
                  </h3>

                  <a
                    href="tel:+919840120595"
                    className="text-gray-600 hover:text-[#B89146] transition text-sm sm:text-base"
                  >
                    +91 98401 20595
                  </a>
                </div>

              </div>

              {/* 🔥 EMAIL */}
              <div className="flex items-start gap-4 sm:gap-5 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#B89146]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    sm:text-xl
                    shrink-0
                  "
                >
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-[#0B1F33]">
                    Email Address
                  </h3>

                  <a
                    href="mailto:info@landmarkresidency.com"
                    className="text-gray-600 hover:text-[#B89146] transition text-sm sm:text-base break-all"
                  >
                    info@landmarkresidency.com
                  </a>
                </div>

              </div>

              {/* 🔥 ADDRESS */}
              <div className="flex items-start gap-4 sm:gap-5 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#B89146]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    sm:text-xl
                    shrink-0
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-[#0B1F33]">
                    Address
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm sm:text-base">
                    Adirampattinam,
                    Tamil Nadu 614701
                  </p>
                </div>

              </div>

              {/* 🔥 TIMING */}
              <div className="flex items-start gap-4 sm:gap-5">

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#B89146]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    sm:text-xl
                    shrink-0
                  "
                >
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-[#0B1F33]">
                    Available
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base">
                    24/7 Booking Support
                  </p>
                </div>

              </div>

            </div>

            {/* 🔥 CONTACT FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">

              <h2 className="text-2xl font-bold text-[#0B1F33] mb-8">
                Send Message
              </h2>

              <form className="space-y-5 sm:space-y-6">

                {/* 🔥 NAME */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-[#B89146]
                    transition
                  "
                />

                {/* 🔥 PHONE */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-[#B89146]
                    transition
                  "
                />

                {/* 🔥 EMAIL */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-[#B89146]
                    transition
                  "
                />

                {/* 🔥 MESSAGE */}
                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-[#B89146]
                    transition
                    resize-none
                  "
                ></textarea>

                {/* 🔥 BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#0B1F33]
                    hover:bg-black
                    text-white
                    py-3
                    sm:py-4
                    rounded-xl
                    text-sm
                    sm:text-base
                    font-semibold
                    transition
                    duration-300
                    shadow-lg
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* 🔥 GOOGLE MAP */}
      <section className="py-14 md:py-20 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* 🔥 TITLE */}
          <div className="text-center mb-10">

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
              Find Our{" "}
              <span className="text-[#B89146]">
                Location
              </span>
            </h2>

            <div className="w-20 h-[2px] bg-[#B89146] mx-auto mt-4"></div>

            <p
              className="
                text-gray-600
                mt-4
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Easily locate Landmark Residency in Adirampattinam.
            </p>

          </div>

          {/* 🔥 MAP BOX */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0216090202357!2d79.38356639999999!3d10.3401556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afffdc674d92439%3A0x437231f9d782f2a3!2sLandmark%20Residency!5e0!3m2!1sen!2sin!4v1778335032747!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          {/* 🔥 MAP BUTTON */}
          <div className="flex justify-center mt-8">

            <a
              href="https://maps.app.goo.gl/AoXTMnBAeqkD1ugX8"
              target="_blank"
              rel="noopener noreferrer"
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
              Open In Google Maps
            </a>

          </div>

        </div>

      </section>
    </>
  );
}