import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahwacoffee.com"),

  title: {
    default: "Sahwa Coffee | Premium Ethiopian Coffee Experience",
    template: "%s | Sahwa Coffee",
  },

  description:
    "Experience the finest Ethiopian coffee at Sahwa Coffee. We serve premium, ethically sourced coffee in a warm and inviting atmosphere. Visit us for handcrafted beverages and authentic coffee culture.",

  authors: [{ name: "Sahwa Coffee" }],
  creator: "Sahwa Coffee",
  publisher: "Sahwa Coffee",

  applicationName: "Sahwa Coffee",
  category: "Coffee Shop",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://sahwacoffee.com",
  },

  keywords: [
    "Ethiopian coffee",
    "coffee export Ethiopia",
    "Ethiopian coffee beans",
    "wholesale coffee",
    "green coffee beans",
    "Arabica coffee",
    "Yirgacheffe coffee",
    "Sidamo coffee",
    "Harar coffee",
    "Ethiopian coffee exporter",
    "coffee supplier Ethiopia",
    "specialty coffee export",
    "bulk coffee beans",
    "premium Ethiopian coffee",
    "coffee import",
    "coffee sourcing Ethiopia",
    "coffee shop Addis Ababa",
    "Sahwa Coffee",
  ],

  openGraph: {
    title: "Sahwa Coffee | Premium Ethiopian Coffee Experience",
    description:
      "Experience the finest Ethiopian coffee at Sahwa Coffee. We serve premium, ethically sourced coffee in a warm and inviting atmosphere.",
    url: "https://sahwacoffee.com",
    siteName: "Sahwa Coffee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahwa Coffee - Premium Ethiopian Coffee Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@sahwacoffee",
    title: "Sahwa Coffee | Premium Ethiopian Coffee Experience",
    description:
      "Experience the finest Ethiopian coffee at Sahwa Coffee. Premium, ethically sourced coffee in a warm atmosphere.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = "G-G59SMTY5KQ";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    name: "Sahwa Coffee",
    url: "https://sahwacoffee.com",
    logo: "https://sahwacoffee.com/logo.png",
    image: "https://sahwacoffee.com/og-image.png",
    description:
      "Premium Ethiopian coffee shop serving handcrafted beverages in a warm and inviting atmosphere.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tirtira Building",
      addressLocality: "Bole Atlas",
      addressRegion: "Addis Ababa",
      postalCode: "1000",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.9978293,
      longitude: 38.7795714,
    },
    telephone: "+251-940-404422",
    servesCuisine: "Coffee, Ethiopian Coffee",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.tiktok.com/@sahwacoffee",
      "https://x.com/sahwacoffee",
      "https://www.instagram.com/sahwacoffee_",
      "https://t.me/sahwacoffee",
      "https://www.facebook.com/sahwacoffee.et",
    ],
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${dancing_script.variable} h-full antialiased`}
    >
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="EFmfeIspv74mRNPNfIB0ss3qHhOPTihxkIMqXDwJP1c"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
