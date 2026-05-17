import { Inter, Lexend, Anta, Open_Sans, Inika, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const anta = Anta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anta",
});

export const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-open-sans",
});

export const inika = Inika({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inika",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});