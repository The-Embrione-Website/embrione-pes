
import NavbarKodikon4 from "@/components/Kodikon-4/NavbarKodikon4";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
import HeroComponent from "@/components/Kodikon-4/HeroComponent";
import AboutTheEvent from "@/components/Kodikon-4/AboutTheEvent/AboutTheEvent";
import PreviousEditionComponent from "@/components/Kodikon-4/PreviousEditions/PreviousEditionComponent";
import HackathonThemes from "@/components/Kodikon-4/HackathonThemes/HackathonThemes";
import EventTimeline from "@/components/Kodikon-4/Timeline/EventTimeline";
import SponsorsComponent from "@/components/Kodikon-4/Sponsors/SponsorsComponent";
import PrizesComponent from "@/components/Kodikon-4/Prizes/PrizesComponent";
import Footer from "@/components/Footer/Footer";
import EventCountdown  from "@/components/Kodikon-4/Countdown/EventCountdown";

import FAQ from "@/components/Kodikon-4/FAQComponent";
import Map from "@/components/Kodikon-4/MapComponent";

export const metadata = {
  title: "Kodikon 4.0 | Archive - The Embrione, PES University",
  description:
    "Explore the event archive, themes, sponsors, and timeline of Kodikon 4.0 organized by The Embrione, Department of CSE, PES University.",
  alternates: {
    canonical: "https://embrionepes.in/kodikon-4",
  },
  openGraph: {
    title: "Kodikon 4.0 Archive | The Embrione - PES University",
    description: "Explore the archive, themes, and results of Kodikon 4.0.",
    url: "https://embrionepes.in/kodikon-4",
    siteName: "The Embrione",
    images: ["/og-image.png"],
  },
};

export default function LandingPage() {

  return (
    <>
      
      <div className="relative flex justify-center items-center">
        <NavbarKodikon4/>
      </div>
      <ScrollProgressComponent />
      <div className=" relative flex justify-center items-center flex-col md:px-32 gap-y-9">
        <HeroComponent />
        <AboutTheEvent />
        {<EventCountdown/>}
        {/* <PreviousEditionComponent /> */}
        <HackathonThemes/>
        <EventTimeline/>
        <SponsorsComponent/>
        <PrizesComponent/>
        <FAQ />
        <Map />
        <Footer/>

      </div>

    </>
  );
}
