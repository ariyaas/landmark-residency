import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://landmarkresidency.co.in"),

  title: {
 
 default:
  "Landmark Residency | Affordable Rental Rooms in Adirampattinam",
    template: "%s | Landmark Residency",
  },

  description:
  "Landmark Residency offers affordable AC and Non-AC rental rooms in Adirampattinam with WiFi, attached bathroom, balcony, and comfortable family stay facilities.",

  // keywords: [
  //   "Landmark Residency",
  //   "Rooms in Adirampattinam",
  //   "Affordable Rooms",
  //   "AC Rooms",
  //   "Non AC Rooms",
  //   "Daily Stay",
  //   "Budget Stay",
  //   "Suite Rooms",
  //   "Room Booking Adirampattinam",
  // ],

  keywords: [
  "Landmark Residency",
  "Rental Rooms in Adirampattinam",
  "Rental Room near me",
  "Budget Stay",
  "Daily Stay",
  "Family Stay",
  "Guest House",
  "Lodge in Adirampattinam",
  "AC Rooms",
  "Non AC Rooms",
  "Room Booking",
  "Residency",
  "Accommodation",
],

  authors: [{ name: "Landmark Residency" }],

  alternates: {
    canonical: "https://landmarkresidency.co.in",
  },

  // ✅ Website Logo / Favicon
icons: {
  icon: "/favicon.png",
},

  openGraph: {
    title: "Landmark Residency",
    description:
      "Affordable and comfortable rooms in Adirampattinam with premium stay facilities.",
    url: "https://landmarkresidency.co.in",
    siteName: "Landmark Residency",
    images: [
      {
       url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Landmark Residency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Landmark Residency",
    description:
      "Affordable rooms and comfortable stay in Adirampattinam.",
  images: ["/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>

        
        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
            "@type": "LodgingBusiness",
              name: "Landmark Residency",
              url: "https://landmarkresidency.co.in",
           image: "https://landmarkresidency.co.in/favicon.png",
              description:
                "Affordable AC and Non-AC suite rooms in Adirampattinam.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Adirampattinam",
                addressCountry: "India",
              },
            }),

            
          }}
          
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}