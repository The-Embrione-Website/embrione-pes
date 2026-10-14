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
  alternates: {
    canonical: "https://embrionepes.in/kodikon-6",
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
