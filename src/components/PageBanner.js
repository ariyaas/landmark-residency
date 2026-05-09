"use client";

import Image from "next/image";

export default function PageBanner({ 
  image = "/bgbanner.png", 
  title = "Welcome to Landmark Residency",
  subtitle = "Experience Comfort & Luxury in the Heart of Adirampattinam",
  height = "h-[220px] sm:h-[280px] md:h-[400px] lg:h-[500px]"
}) {
  
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          
          <div className="w-20 h-1 bg-[#c19b76] mx-auto mb-5"></div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            {subtitle}
          </p>

        </div>
      </div>
      
    </section>
  );
}