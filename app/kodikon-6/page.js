import NavbarKodikon6 from "@/components/Kodikon-6/NavbarKodikon6";
import HeroComponent from "@/components/Kodikon-6/HeroComponent";
import TracksComponent from "@/components/Kodikon-6/TracksComponent";
import InterestFormComponent from "@/components/Kodikon-6/InterestFormComponent";
import FAQComponent from "@/components/Kodikon-6/FAQComponent";
import FooterKodikon6 from "@/components/Kodikon-6/FooterKodikon6";
import StructuredData from "@/components/Kodikon-6/StructuredData";

export const metadata = {
  title: "Kodikon 6.0 | Flagship 24-Hour National Hackathon - PES University",
  description:
    "The flagship 24-hour national undergraduate hackathon organized by The Embrione, Department of Computer Science & Engineering, PES University at PESU 52, Bengaluru.",
  keywords: [
    "Kodikon 6.0",
    "Kodikon Hackathon",
    "PES University Hackathon",
    "PESU 52",
    "Bangalore Hackathon 2026",
    "The Embrione",
  ],
  alternates: {
    canonical: "https://embrionepes.in/kodikon-6",
  },
  openGraph: {
    title: "Kodikon 6.0 | Flagship 24-Hour National Hackathon - PES University",
    description:
      "Join South India's premier collegiate hackathon hosted by The Embrione, Department of CSE at PES University. In-person 24-hour sprint at PESU 52, Bengaluru.",
    url: "https://embrionepes.in/kodikon-6",
    siteName: "The Embrione",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodikon 6.0 Flagship Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodikon 6.0 | Flagship 24-Hour National Hackathon",
    description:
      "24-Hour Flagship National Hackathon at PESU 52, PES University. Organized by The Embrione.",
    images: ["/og-image.png"],
  },
};


export default function Kodikon6Page() {
  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <StructuredData />
      <NavbarKodikon6 />
      <main>
        <HeroComponent />
        <TracksComponent />
        <InterestFormComponent />
        <FAQComponent />
      </main>
      <FooterKodikon6 />
    </div>
  );
}
