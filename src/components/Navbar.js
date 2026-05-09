// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
//       ${
//         scrolled
//           ? "bg-white text-black shadow-md"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

//         {/* Logo */}
//         <Image
//           src="/resilogo.png"
//           alt="Landmark Residency Logo"
//           width={140}
//           height={40}
//           priority
//         />

//         {/* Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide font-semibold">

//           <Link
//             href="/"
//             className="transition hover:text-[#c19b76]"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className="transition hover:text-[#c19b76]"
//           >
//             About Us
//           </Link>

//           <Link
//             href="/rooms"
//             className="transition hover:text-[#c19b76]"
//           >
//             Rooms & Stay
//           </Link>

//           <Link
//             href="/services"
//             className="transition hover:text-[#c19b76]"
//           >
//             Services
//           </Link>

//           <Link
//             href="/gallery"
//             className="transition hover:text-[#c19b76]"
//           >
//             Gallery
//           </Link>

//           {/* Contact Button */}
//           <Link
//             href="/contact"
//             className="px-5 py-2 rounded-lg font-semibold 
//             bg-[#c19b76] text-white 
//             hover:bg-[#a37f5f] transition duration-300"
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden text-2xl cursor-pointer">
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const pathname = usePathname();
const isHome = pathname === "/";
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 NAVBAR */}
     <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
  ${
    scrolled
      ? "bg-white text-black shadow-md"
      : isHome
      ? "bg-transparent text-black font-semibold"   // 🏠 HOME → BLACK
      : "bg-transparent text-white font-semibold"   // 📄 OTHER → WHITE
  }`}
>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <Image
            src="/resilogo.png"
            alt="Landmark Residency Logo"
            width={110}
            height={35}
            priority
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide font-semibold">

            <Link href="/" className="hover:text-[#B89146] transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-[#B89146] transition">
              About Us
            </Link>

            <Link href="/rooms" className="hover:text-[#B89146] transition">
              Rooms & Stay
            </Link>


            <Link href="/gallery" className="hover:text-[#B89146] transition">
              Gallery
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg font-semibold 
              bg-[#B89146] text-white 
              hover:bg-[#9a7a3d] transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* 🔥 MOBILE FULL MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#B89146] text-black z-50 
        transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-black/20">
          <Image
            src="/resilogo.png"
            alt="Logo"
            width={110}
            height={35}
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Menu List */}
        <div className="px-6 mt-6 space-y-6 font-semibold">

          {[
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about" },
            { name: "Rooms & Stay", link: "/rooms" },
            { name: "Services", link: "/services" },
            { name: "Gallery", link: "/gallery" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="flex justify-between items-center border-b border-black/30 pb-3 text-lg"
            >
              {item.name}
              <span className="text-xl">+</span>
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-6 text-center px-6 py-3 bg-black text-white rounded-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-10 px-6">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Call Us</p>
              <p>+91 9500699955</p>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p>info@landmark.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}