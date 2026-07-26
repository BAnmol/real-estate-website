/**
 * Set NEXT_PUBLIC_SITE_URL in your deployment environment (e.g. Vercel
 * project settings) once you have a real domain — everything reading
 * SITE_URL (metadata, sitemap, robots, JSON-LD) picks it up automatically.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aris-estates.vercel.app";

export const SITE_NAME = "ARIS Estates";

export const SITE_DESCRIPTION =
  "ARIS Estates — luxury real estate reimagined with photorealistic 3D tours, immersive walkthroughs, and premium listings across India.";

export const SERVICE_CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Goa",
];
