import Hero from "../components/Hero";
import ContentGrid from "../components/ContentGrid";

const CATEGORIES = [
  {
    id: "1",
    title: "Fashion",
    subtitle: "Editorial looks, campaigns, and styling stories.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/fashion",
  },
  {
    id: "2",
    title: "Beauty",
    subtitle: "Makeup, skin, and close-up visual direction.",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/beauty",
  },
  {
    id: "3",
    title: "Film & Commercial",
    subtitle: "Moving image projects with a cinematic edge.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/film-commercial",
  },
  {
    id: "4",
    title: "Advertising",
    subtitle: "Campaign concepts, art direction, and brand work.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/advertising",
  },
  {
    id: "5",
    title: "Music",
    subtitle: "Cover art, live visuals, and sonic identities.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/music",
  },
  {
    id: "6",
    title: "Bio",
    subtitle: "A short portrait of the world behind the work.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/bio",
  },
  {
    id: "7",
    title: "Clients",
    subtitle: "Selected partners and published collaborations.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/clients",
  },
  {
    id: "8",
    title: "Contact Data",
    subtitle: "Inquiry details, booking notes, and response info.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    tag: "CATEGORY",
    href: "/category/contact-data",
  },
];

const HERO_SLIDES = [
  {
    title: "",
    subtitle: "",
    image: "/anita-winrow/Images/1.jpeg",
  },
  {
    title: "",
    subtitle: "",
    image: "/anita-winrow/Images/2.jpeg",
  },
  {
    title: "",
    subtitle: "",
    image: "/anita-winrow/Images/3.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero slides={HERO_SLIDES} />

      <ContentGrid sectionTitle="CATEGORIES" items={CATEGORIES} />

      <section className="bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden relative">
        <div className="font-display text-[15vw] font-black tracking-tighter leading-[0.8] mb-12 opacity-10 select-none pointer-events-none">
          MEMBERSHIP
        </div>
        <div className="max-w-2xl -mt-[10vw] z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">
            Anita Winrow
          </h2>
          <p className="font-serif italic text-lg md:text-2xl mb-8 opacity-80">
            Join the loyal society. Monthly magaFashions, birthday gifts, and
            early access to the shop.
          </p>
          <button className="bg-white text-black px-12 py-4 font-display font-bold uppercase tracking-widest hover:bg-white/80 transition-colors">
            JOIN Anita Winrow
          </button>
        </div>
      </section>
    </>
  );
}
