import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SERVICE_CITIES } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Real Estate, Rendered in Reality`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "luxury real estate India",
    "3D property tour",
    "360 virtual tour real estate",
    "RERA registered properties",
    "Mumbai luxury homes",
    "Delhi luxury real estate",
    "Bangalore villas",
    "Goa villas for sale",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Real Estate, Rendered in Reality`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Real Estate, Rendered in Reality`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  areaServed: SERVICE_CITIES.map((city) => ({
    "@type": "City",
    name: city,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
