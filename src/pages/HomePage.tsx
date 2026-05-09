import { motion } from "motion/react";
import Hero from "../components/Hero";
import ContentGrid from "../components/ContentGrid";

const MOVIES = [
  {
    id: "1",
    title: "Civil War",
    subtitle: "Directed by Alex Garland",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    tag: "Now In Theaters",
  },
  {
    id: "2",
    title: "The Zone of Interest",
    subtitle: "Directed by Jonathan Glazer",
    image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1000&auto=format&fit=crop",
    tag: "Winner: Best International Feature",
  },
  {
    id: "3",
    title: "Priscilla",
    subtitle: "Directed by Sofia Coppola",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    tag: "Watch At Home",
  },
  {
    id: "4",
    title: "The Iron Claw",
    subtitle: "Directed by Sean Durkin",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000&auto=format&fit=crop",
    tag: "Now Streaming",
  },
];

const SHOP_ITEMS = [
  {
    id: "s1",
    title: "Anita Winrow Fashion: ISSUE 24",
    subtitle: "Featuring exclusive interviews and art",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    tag: "New Release",
    price: "$16.00",
  },
  {
    id: "s2",
    title: "PUBLIC ACCESS TEE",
    subtitle: "Limited edition collaboration",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    tag: "Apparel",
    price: "$45.00",
  },
];

const HERO_SLIDES = [
  {
    title: "CIVIL WAR",
    subtitle: "NOW IN THEATERS",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "MOTHER MARY",
    subtitle: "COMING 2026",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "THE DRAMA",
    subtitle: "DIRECTED BY JONATHAN GLAZER",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero slides={HERO_SLIDES} />

      <ContentGrid sectionTitle="CURRENTLY SHOWING" items={MOVIES} />

      <ContentGrid sectionTitle="Anita Winrow SHOP" items={SHOP_ITEMS} />

      <section className="bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden relative">
        <div className="font-display text-[15vw] font-black tracking-tighter leading-[0.8] mb-12 opacity-10 select-none pointer-events-none">MEMBERSHIP</div>
        <div className="max-w-2xl -mt-[10vw] z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">Anita Winrow</h2>
          <p className="font-serif italic text-lg md:text-2xl mb-8 opacity-80">Join the loyal society. Monthly magaFashions, birthday gifts, and early access to the shop.</p>
          <button className="bg-white text-black px-12 py-4 font-display font-bold uppercase tracking-widest hover:bg-white/80 transition-colors">JOIN Anita Winrow</button>
        </div>
      </section>
    </>
  );
}
