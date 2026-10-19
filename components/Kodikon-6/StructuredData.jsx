import React from "react";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hackathon",
    name: "Kodikon 6.0",
    description:
      "The flagship 24-hour national undergraduate hackathon organized by The Embrione, Department of Computer Science & Engineering, PES University.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: "2026-10-31T08:00:00+05:30",
    endDate: "2026-11-01T18:00:00+05:30",
    location: {
      "@type": "Place",
      name: "PESU 52, PES University",
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
