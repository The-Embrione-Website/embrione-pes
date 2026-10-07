import NavbarHome from "@/components/HomeRedesign/NavbarHome";
import HeroSection from "@/components/HomeRedesign/HeroSection";
import AboutSection from "@/components/HomeRedesign/AboutSection";
import KodikonSpotlight from "@/components/HomeRedesign/KodikonSpotlight";
import TeamSection from "@/components/HomeRedesign/TeamSection";
import PartnersSection from "@/components/HomeRedesign/PartnersSection";
import CTASection from "@/components/HomeRedesign/CTASection";
import FooterHome from "@/components/HomeRedesign/FooterHome";

export const metadata = {
  title: "The Embrione | Department of Computer Science & Engineering, PES University",
  description:
    "Official portal of The Embrione, the student computing and hackathon society of the Department of Computer Science & Engineering, PES University (Ring Road Campus, Bengaluru). Organizers of the Kodikon 24-hour national hackathon.",
  alternates: {
    canonical: "https://embrionepes.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://embrionepes.in/#organization",
      "name": "The Embrione",
      "alternateName": [
        "Embrione PES",
        "Embrione PES University",
        "The Embrione PESU",
        "PES University CSE Club",
      ],
      "url": "https://embrionepes.in",
      "logo": "https://embrionepes.in/embrionelogo.png",
      "image": "https://embrionepes.in/og-image.png",
      "description":
        "The official technical vertical under the Department of Computer Science and Engineering at PES University, Bengaluru. Organizers of Kodikon 24-hour national hackathon.",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "PES University",
        "url": "https://www.pes.edu",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 Feet Ring Road, BSK III Stage",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560085",
          "addressCountry": "IN",
        },
      },
      "sameAs": [
        "https://www.instagram.com/the.embrione/",
        "https://www.linkedin.com/company/the-embrione/",
        "https://github.com/the-embrione",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://embrionepes.in/#website",
      "url": "https://embrionepes.in",
      "name": "The Embrione - PES University",
      "publisher": {
        "@id": "https://embrionepes.in/#organization",
      },
    },
    {
      "@type": "Hackathon",
      "@id": "https://embrionepes.in/#kodikon6",
      "name": "Kodikon 6.0",
      "description":
        "South India's premier 24-hour national undergraduate hackathon organized by The Embrione, Department of CSE, PES University.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "PESU 52, PES University",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 Feet Ring Road, BSK III Stage",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560085",
          "addressCountry": "IN",
        },
      },
      "organizer": {
        "@id": "https://embrionepes.in/#organization",
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/PreOrder",
      },
    },
  ],
};

export default function RedesignedLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#000514] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
