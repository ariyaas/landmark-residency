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

// ✅ Enhanced SEO Metadata
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Room Booking App | Affordable Rooms",
    template: "%s | Room Booking",
  },

  description:
    "Book clean and comfortable rooms at the best price. Easy online booking with real-time availability.",

  keywords: [
    "room booking",
    "hotel booking",
    "rent rooms",
    "budget rooms",
    "stay booking",
  ],

  authors: [{ name: "Your Name" }],

  // Canonical URL
  alternates: {
    canonical: "https://yourdomain.com",
  },

  // Favicons & Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Room Booking App",
    description: "Find and book rooms easily with real-time availability.",
    url: "https://yourdomain.com",
    siteName: "Room Booking",
    images: [
      {
        url: "/room.jpg",
        width: 1200,
        height: 630,
        alt: "Clean and affordable room",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Room Booking App",
    description: "Book rooms easily at best price",
    images: ["/room.jpg"],
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
        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Room Booking App",
              "url": "https://yourdomain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
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
