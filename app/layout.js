import "./globals.css";
import AosInit from "@/components/AosInit";
import { Analytics } from "@vercel/analytics/react";
import {
  Plus_Jakarta_Sans,
  Syne,
  Bricolage_Grotesque,
  Righteous,
  JetBrains_Mono,
} from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const curvy = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-curvy",
  weight: ["600", "700", "800"],
  adjustFontFallback: false,
  display: "swap",
});

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: ["400"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000514",
};

export const metadata = {
  metadataBase: new URL("https://embrionepes.in"),
  title: {
    default: "The Embrione | Department of Computer Science & Engineering, PES University",
    template: "%s | The Embrione - PES University",
  },
  description:
    "Official technical vertical under the Department of Computer Science & Engineering at PES University (Ring Road Campus, Bengaluru). Organizers of the premier Kodikon 24-hour national hackathon series.",
  applicationName: "The Embrione",
  keywords: [
    "The Embrione",
    "Embrione PES",
    "Embrione PES University",
    "PES University CSE Club",
    "Kodikon",
    "Kodikon 6.0",
    "Kodikon 5.0",
    "PESU Hackathon",
    "Bangalore Student Hackathon",
    "PES University Bangalore Hackathon",
    "Department of Computer Science PESU",
    "PESU 52",
    "PES University MRD Block",
    "Embrione Tech Lab",
  ],
  authors: [{ name: "The Embrione Web Team", url: "https://embrionepes.in" }],
  creator: "The Embrione, Department of CSE, PES University",
  publisher: "PES University",
  alternates: {
    canonical: "https://embrionepes.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "The Embrione | Department of Computer Science & Engineering, PES University",
    description:
      "Official technical vertical under the Department of Computer Science & Engineering at PES University. Organizers of the Kodikon 24-hour national hackathon.",
    url: "https://embrionepes.in",
    siteName: "The Embrione",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Embrione - Department of CSE, PES University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Embrione | PES University",
    description:
      "Official computing society of Department of CSE, PES University. Organizers of Kodikon 24H National Hackathon.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${curvy.variable} ${righteous.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-black text-white antialiased">
        {children}
        <AosInit />
        <Analytics />
      </body>
    </html>
  );
}