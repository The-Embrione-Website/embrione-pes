import NavbarHome from "@/components/HomeRedesign/NavbarHome";
import HeroSection from "@/components/HomeRedesign/HeroSection";
import AboutSection from "@/components/HomeRedesign/AboutSection";
import KodikonSpotlight from "@/components/HomeRedesign/KodikonSpotlight";
import TeamSection from "@/components/HomeRedesign/TeamSection";
import PartnersSection from "@/components/HomeRedesign/PartnersSection";
import CTASection from "@/components/HomeRedesign/CTASection";
import FooterHome from "@/components/HomeRedesign/FooterHome";

export const metadata = {
  metadataBase: new URL("https://embrionepes.in"),
  title: "The Embrione | Department of Computer Science & Engineering, PES University",
  description:
    "Official portal of The Embrione, the student computing and hackathon society of the Department of Computer Science & Engineering, PES University (Ring Road Campus, Bengaluru). Organizers of the Kodikon 24-hour national hackathon.",
  keywords: [
    "The Embrione",
    "PES University",
    "CSE Department PESU",
    "Kodikon",
    "Kodikon 6.0",
    "Kodikon 5.0",
    "Hackathon Bangalore",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "The Embrione | PES University CSE Club",
    description:
      "Department of Computer Science & Engineering, PES University. Organizing Kodikon, collegiate technical workshops, and engineering initiatives.",
    url: "https://embrionepes.in",
    siteName: "The Embrione",
    locale: "en_US",
    type: "website",
  },
};

export default function RedesignedLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#000514] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <NavbarHome />
      <main>
        <HeroSection />
        <AboutSection />
        <KodikonSpotlight />
        <TeamSection />
        <PartnersSection />
        <CTASection />
      </main>
      <FooterHome />
    </div>
  );
}
