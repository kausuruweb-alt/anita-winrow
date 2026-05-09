import { motion } from 'motion/react';
import { FILMS, UPCOMING_FILMS } from '../data/films';
import { ChevronDown } from 'lucide-react';

export default function FilmsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Upcoming Section */}
      <section className="px-4 md:px-6 mb-16">
        <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-8">
          Upcoming
        </h1>
        <div className="space-y-12">
          {UPCOMING_FILMS.map((film) => (
            <div key={film.id} className="group relative overflow-hidden">
              <div className="aspect-[16/7] md:aspect-[21/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mt-4 border-t border-black pt-2">
                <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight">
                  {film.title}
                </h3>
                <span className="font-display text-xs md:text-sm font-bold uppercase tracking-widest opacity-40">
                  {film.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Films Section */}
      <section className="px-4 md:px-6 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-black pt-8 mb-12 space-y-4 md:space-y-0">
          <h2 className="text-4xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">
            All Films
          </h2>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest opacity-40">Sort By:</span>
              <button className="font-display text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-0.5">Newest</button>
              <button className="font-display text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">A-Z</button>
            </div>
            {/* Mobile Select */}
            <div className="md:hidden flex items-center justify-between w-full border border-black p-3">
              <span className="font-display text-xs font-bold uppercase tracking-widest">Newest</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Irregular Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {FILMS.map((film, index) => (
            <motion.div 
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col ${
                index % 3 === 1 ? 'md:mt-12 lg:mt-24' : ''
              } ${index % 3 === 2 ? 'md:mt-6 lg:mt-12' : ''}`}
            >
              <div className={`overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-6 ${
                film.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
              }`}>
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-display text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">
                  {film.year}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight leading-none group-hover:underline">
                  {film.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Huge Bottom Title */}
        <div className="mt-32 pt-24 border-t border-black">
          <h1 className="text-[15vw] font-display font-black tracking-tighter leading-[0.8] uppercase flex items-baseline">
            The Smashing Machine
            <span className="text-[2vw] ml-4 opacity-40 align-top">2026</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
