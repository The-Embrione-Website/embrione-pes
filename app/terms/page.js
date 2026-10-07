import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | The Embrione - PES University",
  description:
    "Terms and Conditions governing website usage and hackathon participation with The Embrione, Department of CSE, PES University.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020510] text-slate-200">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#000514]/90 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <span className="text-xs font-mono text-cyan-400">
            PES CSE • LEGAL
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono mb-4 border border-slate-700">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-400 font-mono">
            Last Updated: October 2026 | Department of Computer Science & Engineering, PES University
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-slate-300 border-t border-slate-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the website at embrionepes.in or participating in competitions, workshops, and hackathons organized by The Embrione (Department of Computer Science &amp; Engineering, PES University), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, you should not access our portal or register for our events.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Eligibility and Participation</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Student Status:</strong> Participation in our hackathons (e.g., Kodikon) and internal technical contests is open to bona fide undergraduate students enrolled in recognized universities and colleges, unless explicitly designated otherwise.
              </li>
              <li>
                <strong className="text-white">Identification:</strong> All participants must present a valid college identity card (or institutional verification) during check-in and prize verification.
              </li>
              <li>
                <strong className="text-white">Team Integrity:</strong> Teams must consist strictly of eligible students who register within designated deadlines. Impersonation or undeclared substitute members will result in immediate disqualification.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Code of Conduct and Fair Play</h2>
            <p>The Embrione enforces a strict code of conduct across all physical and virtual platforms:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Original Work:</strong> All code, designs, and prototypes submitted to hackathons must be developed during the officially designated event timeframe. Open-source libraries, APIs, and frameworks may be utilized provided they are publicly available and explicitly credited in the project submission.
              </li>
              <li>
                <strong className="text-white">Zero Tolerance for Harassment:</strong> We maintain a safe, welcoming, and inclusive environment. Harassment, abusive language, discrimination, or intimidation of any participant, mentor, judge, or organizer will lead to immediate expulsion from the venue and reporting to campus authorities.
              </li>
              <li>
                <strong className="text-white">Facility Respect:</strong> Participants attending in-person events at the PES University campus must respect university infrastructure, laboratory equipment, and campus security guidelines.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Intellectual Property Rights</h2>
            <p>
              Participants retain 100% intellectual property ownership of the software, hardware, and artifacts developed during Embrione hackathons.
            </p>
            <p>
              By submitting a project for evaluation, teams grant The Embrione and PES University a non-exclusive, royalty-free, worldwide license to display project summaries, demonstration videos, code snippets, and team photographs for academic, non-commercial, and historical promotional purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Judging and Prize Distribution</h2>
            <p>
              All judging decisions delivered by the appointed panel of industry experts, faculty members, and research mentors are final and binding. Prizes and sponsor grants are awarded subject to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Verification of participant credentials and repository commit histories.</li>
              <li>Compliance with all problem statement track guidelines.</li>
              <li>Timely provision of necessary disbursement documentation required by PES University accounting and legal procedures.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Disclaimers and Governing Law</h2>
            <p>
              The website and all materials are provided on an &quot;as is&quot; and &quot;as available&quot; basis. The Embrione does not warrant uninterrupted uptime or absence of technical errors.
            </p>
            <p>
              These terms are governed by the regulations of PES University and the laws applicable in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Official Contact</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>embrione_cse@pes.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Department of CSE, MRD Block, PES University, BSK III Stage, Bengaluru - 560085</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} The Embrione • Department of CSE, PES University. All rights reserved.
      </footer>
    </div>
  );
}
