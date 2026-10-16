export type EventInfo = {
  id: number;
  name: string;
  edition: string;
  year: string;
  description: string;
  image: string;
};

export const events: EventInfo[] = [
  {
    id: 1,
    name: "KODIKON",
    edition: "EDITION 01",
    year: "PAST EVENT",
    description: "The beginning of the Kodikon hackathon journey.",
    image: "/images/events/kodikon-1.jpg.webp",
  },
  {
    id: 2,
    name: "KODIKON 2.0",
    edition: "EDITION 02",
    year: "PAST EVENT",
    description: "A new chapter in collaborative innovation.",
    image: "/images/events/kodikon-2.jpg.webp",
  },
  {
    id: 3,
    name: "KODIKON 3.0",
    edition: "EDITION 03",
    year: "PAST EVENT",
    description: "Ideas, teamwork, and technology in action.",
    image: "/images/events/kodikon-3.jpg.png",
  },
  {
    id: 4,
    name: "KODIKON 4.0",
    edition: "EDITION 04",
    year: "PAST EVENT",
    description: "Another milestone in the Kodikon journey.",
    image: "/images/events/kodikon-4.jpg.png",
  },
  {
    id: 5,
    name: "KODIKON 5.0",
    edition: "EDITION 05",
    year: "PAST EVENT",
    description: "The latest chapter in the Kodikon journey.",
    image: "/images/events/kodikon-5.jpg.webp",
  },
];