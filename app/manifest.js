export default function manifest() {
  return {
    name: "The Embrione - PES University",
    short_name: "The Embrione",
    description:
      "Official technical vertical under the Department of Computer Science and Engineering, PES University, Bengaluru. Organizers of the Kodikon 24-hour national hackathon.",
    start_url: "/",
    display: "standalone",
    background_color: "#000514",
    theme_color: "#000514",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
