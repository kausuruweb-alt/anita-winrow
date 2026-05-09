import { motion } from "motion/react";
import { SHOP_DATA } from "../data/shop";
import { Search, Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface ShopPageProps {
  category?: "fashion" | "music" | "books" | "objects" | null;
}

export default function ShopPage({ category: propCategory }: ShopPageProps) {
  const [searchParams] = useSearchParams();
  const searchCategory = searchParams.get("category") as ShopPageProps["category"];

  const categoryFilter = propCategory || searchCategory;

  const filteredItems = categoryFilter ? SHOP_DATA.filter((item) => item.category === categoryFilter) : SHOP_DATA;

  const currentTitle = categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : "Shop All";

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Category Header */}
      <section className="px-4 md:px-6 mb-12 border-b border-black pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-8 md:space-y-0">
          <div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-4">{currentTitle}</h1>
            <div className="flex space-x-6 font-display text-xs font-bold uppercase tracking-widest overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <a href="/shop" className={!categoryFilter ? "underline" : "opacity-40 hover:opacity-100 transition-opacity"}>
                All
              </a>
              <a href="/shop?category=fashion" className={categoryFilter === "fashion" ? "underline" : "opacity-40 hover:opacity-100 transition-opacity"}>
                Fashion
              </a>
              <a href="/shop?category=music" className={categoryFilter === "music" ? "underline" : "opacity-40 hover:opacity-100 transition-opacity"}>
                Music
              </a>
              <a href="/shop?category=books" className={categoryFilter === "books" ? "underline" : "opacity-40 hover:opacity-100 transition-opacity"}>
                Books
              </a>
              <a href="/shop?category=objects" className={categoryFilter === "objects" ? "underline" : "opacity-40 hover:opacity-100 transition-opacity"}>
                Objects
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 font-display text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 font-display text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              <Search size={16} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col border-b border-black md:border-r ${
                (index + 1) % 4 === 0 ? "lg:border-r-0" : ""
              } ${(index + 1) % 2 === 0 ? "md:border-r-0 lg:border-r" : ""}`}
            >
              <div className="aspect-square overflow-hidden group-hover:grayscale transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{item.tag || item.category}</span>
                  <span className="font-display text-sm font-bold">{item.price}</span>
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter leading-tight mb-2">{item.title}</h3>
                <p className="font-serif italic text-sm opacity-60 group-hover:opacity-100 transition-opacity">{item.subtitle}</p>
                <div className="mt-12 pt-6 border-t border-black/10 group-hover:border-white/20">
                  <button className="w-full font-display text-xs font-bold uppercase tracking-[0.2em] py-2 hover:opacity-50 transition-all">Add to Bag</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Massive Promotion */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6">
        <div className="font-display text-[20vw] font-black tracking-tighter leading-none opacity-5 absolute select-none pointer-events-none">MEMBER</div>
        <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6 z-10">Anita Winrow Shop Early Access</h2>
        <p className="max-w-xl font-serif italic text-lg opacity-60 mb-8 z-10">Members get 24-hour early access to all limited-edition drops and exclusive colorways.</p>
        <button className="bg-black text-white px-12 py-4 font-display font-bold uppercase tracking-widest hover:opacity-80 transition-all z-10">Explore Membership</button>
      </section>
    </div>
  );
}
