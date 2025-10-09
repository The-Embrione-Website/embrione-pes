import Navbar from "@/components/Navbar";
import NavbarKodikon5 from "@/components/Kodikon-5/NavbarKodikon5";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
import HeroComponent from "@/components/Kodikon-5/HeroComponent";
import AboutTheEvent from "@/components/Kodikon-5/AboutTheEvent/AboutTheEvent";
import PreviousEditionComponent from "@/components/Kodikon-5/PreviousEditions/PreviousEditionComponent";
import HackathonThemes from "@/components/Kodikon-5/HackathonThemes/HackathonThemes";
import EventTimeline from "@/components/Kodikon-5/Timeline/EventTimeline";
import SponsorsComponent from "@/components/Kodikon-5/Sponsors/SponsorsComponent";
import PrizesComponent from "@/components/Kodikon-5/Prizes/PrizesComponent";
import Footer from "@/components/Footer/Footer";
import EventCountdown from "@/components/Kodikon-5/Countdown/EventCountdown";
import FAQ from "@/components/Kodikon-5/FAQComponent";
import Map from "@/components/Kodikon-5/MapComponent";
import PartnersComponent from "@/components/Kodikon-5/Partners/PartnersComponent"; 

export default function LandingPage() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <NavbarKodikon5 />
      </div>
      <ScrollProgressComponent />
      <div className="relative flex justify-center items-center flex-col md:px-32 gap-y-9">
        <HeroComponent />
        <AboutTheEvent />
        {<EventCountdown />}
        {/* <PreviousEditionComponent /> */}
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
