import PageBanner from "@/components/PageBanner";
import Image from "next/image";

export const metadata = {
  title: "Gallery | Landmark Residency",
  description:
    "Explore luxury room interiors, suite rooms, balcony views, and premium facilities at Landmark Residency Adirampattinam.",
};

export default function GalleryPage() {

  // 🔥 LANDSCAPE IMAGES
  const landscapeImages = [
    "/gallery/land1.jpg",
    "/gallery/land2.jpg",
    "/gallery/land3.jpg",
    "/gallery/land4.jpg",
    "/gallery/land5.jpg",
    "/gallery/land6.jpg",
    "/gallery/land7.jpg",
    "/gallery/land8.jpg",
  ];

  // 🔥 PORTRAIT IMAGES
  const portraitImages = [
    "/gallery/port1.jpg",
    "/gallery/port2.jpg",
    "/gallery/port3.jpg",
    "/gallery/port4.jpg",
    "/gallery/port5.jpg",
    "/gallery/port6.jpg",
  ];

  return (
    <>
      {/* 🔥 BANNER */}
      <PageBanner
        image="/bgbanner.png"
        height="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
        title="Gallery"
        subtitle="Explore Our Premium Residency Experience"
      />

      {/* 🔥 GALLERY SECTION */}
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
              Residency{" "}
              <span className="text-[#B89146]">
                Gallery
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
              Explore our luxury AC suite rooms,
              spacious interiors, balcony views,
              and comfortable stay experience at
              Landmark Residency Adirampattinam.
            </p>

          </div>

          {/* 🔥 LANDSCAPE SECTION */}
          <div className="mb-16 md:mb-20">

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#0B1F33]
                mb-8
                md:mb-10
                text-center
              "
            >
              Landscape{" "}
              <span className="text-[#B89146]">
                Views
              </span>
            </h2>

            {/* 🔥 MOBILE = 1 IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

              {landscapeImages.map((img, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    shadow-xl
                  "
                >

                  <div
                    className="
                      relative
                      h-[220px]
                      sm:h-[240px]
                      md:h-[260px]
                      w-full
                    "
                  >

                    <Image
                      src={img}
                      alt={`Landscape Image ${i + 1}`}
                      fill
                      sizes="100vw"
                      className="
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-700
                      "
                    />

                    {/* 🔥 OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

                    {/* 🔥 SHINE */}
                    <div className="absolute -left-[100%] top-0 h-full w-[40%] bg-white/20 skew-x-12 group-hover:left-[140%] transition-all duration-1000"></div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* 🔥 PORTRAIT SECTION */}
          <div>

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#0B1F33]
                mb-8
                md:mb-10
                text-center
              "
            >
              Premium{" "}
              <span className="text-[#B89146]">
                Room Views
              </span>
            </h2>

            {/* 🔥 MOBILE = 1 IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

              {portraitImages.map((img, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    shadow-xl
                  "
                >

                  <div
                    className="
                      relative
                      h-[420px]
                      sm:h-[420px]
                      md:h-[450px]
                      w-full
                    "
                  >

                    <Image
                      src={img}
                      alt={`Portrait Image ${i + 1}`}
                      fill
                      sizes="100vw"
                      className="
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-700
                      "
                    />

                    {/* 🔥 OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

                    {/* 🔥 SHINE */}
                    <div className="absolute -left-[100%] top-0 h-full w-[40%] bg-white/20 skew-x-12 group-hover:left-[140%] transition-all duration-1000"></div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}