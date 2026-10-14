import NavbarKodikon5 from "@/components/Kodikon-5/NavbarKodikon5";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
import HeroComponent from "@/components/Kodikon-5/HeroComponent";
import AboutTheEvent from "@/components/Kodikon-5/AboutTheEvent/AboutTheEvent";
import HackathonThemes from "@/components/Kodikon-5/HackathonThemes/HackathonThemes";
import EventTimeline from "@/components/Kodikon-5/Timeline/EventTimeline";
import SponsorsComponent from "@/components/Kodikon-5/Sponsors/SponsorsComponent";
import PrizesComponent from "@/components/Kodikon-5/Prizes/PrizesComponent";
import Footer from "@/components/Footer/Footer";
import EventCountdown from "@/components/Kodikon-5/Countdown/EventCountdown";
import FAQ from "@/components/Kodikon-5/FAQComponent";
import Map from "@/components/Kodikon-5/MapComponent";
import PartnersComponent from "@/components/Kodikon-5/Partners/PartnersComponent"; 

export const metadata = {
  title: "Kodikon 5.0 | Flagship National Hackathon - PES University",
  description:
    "Official portal for Kodikon 5.0, South India's premier national hackathon hosted by The Embrione, Department of CSE, PES University. Research tracks, prizes, and partners.",
  keywords: [
    "Kodikon 5.0",
    "Kodikon",
    "PES University Hackathon",
    "The Embrione",
    "Pixcellence",
  ],
  alternates: {
    canonical: "https://embrionepes.in/kodikon-5",
  },
  openGraph: {
    title: "Kodikon 5.0 | Flagship National Hackathon - PES University",
    description:
      "Official portal for Kodikon 5.0 hosted by The Embrione, Department of CSE, PES University.",
    url: "https://embrionepes.in/kodikon-5",
    siteName: "The Embrione",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodikon 5.0 Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodikon 5.0 | PES University Hackathon",
    description:
      "Official portal for Kodikon 5.0 hosted by The Embrione, Department of CSE, PES University.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hackathon",
  name: "Kodikon 5.0",
  description:
    "The flagship 24-hour national hackathon hosted by The Embrione, Department of CSE, PES University at PES University, Bengaluru.",
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Dr. MRD Block, PES University",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Feet Ring Road, BSK III Stage",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560085",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "The Embrione",
    url: "https://embrionepes.in",
  },
};

export default function LandingPage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex justify-center items-center">

        <NavbarKodikon5 />
      </div>
      <ScrollProgressComponent />
      <div className="relative flex justify-center items-center flex-col md:px-32 gap-y-9">
        <HeroComponent />
        <AboutTheEvent />
        {<EventCountdown />}
        <HackathonThemes />
        <EventTimeline />
        <SponsorsComponent />
        <br/><br/>
        <PartnersComponent />
        <PrizesComponent />
        <FAQ />
        <Map />
        <Footer />
      </div>
    </>
  );
}
