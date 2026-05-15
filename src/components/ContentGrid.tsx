import { motion } from 'motion/react';
import { Link } from "react-router-dom";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  price?: string;
  href?: string;
}

interface ContentGridProps {
  sectionTitle: string;
  items: Item[];
}

export default function ContentGrid({ sectionTitle, items }: ContentGridProps) {
  return (
    <section
      className="bg-white"
      id={`section-${sectionTitle.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="border-t border-black p-6 md:p-8 flex justify-between items-end">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-none">
          {sectionTitle}
        </h2>
        <button className="font-display text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative overflow-hidden flex flex-col border-b border-black md:border-r ${
              (index + 1) % 4 === 0 ? "lg:border-r-0" : ""
            } ${(index + 1) % 2 === 0 ? "md:border-r-0 lg:border-r" : ""}`}
          >
            <Link
              to={item.href ?? "#"}
              tabIndex={0}
              aria-label={item.title}
              className="flex h-full flex-col bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300"
            >
              <div className="aspect-[2/3] overflow-hidden grayscale group-hover:grayscale-0 hover:grayscale-0 focus-within:grayscale-0 active:grayscale-0 transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                    {item.tag || "Film"}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-serif italic text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.subtitle}
                </p>

                {item.price && (
                  <div className="mt-auto pt-6 font-display font-bold text-lg">
                    {item.price}
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
