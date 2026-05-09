import { motion } from "motion/react";

const Fashion_ARTICLES = [
  {
    id: "z1",
    title: "THE MAKING OF CIVIL WAR",
    subtitle: "Behind the scenes with Alex Garland",
    image: "https://img.freepik.com/premium-photo/woman-black-hat-with-red-lips-gray-background-selective-focus-elegance-feminine-sensuality_754108-1509.jpg",
    category: "Interview",
  },
  {
    id: "z2",
    title: "BEYOND THE ZONE",
    subtitle: "Capturing the sound of The Zone of Interest",
    image: "https://tse3.mm.bing.net/th/id/OIP.EYs_9YihWWQWnuG8YfuqTQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Craft",
  },
  {
    id: "z3",
    title: "SOFIA COPPOLA'S PRISCILLA",
    subtitle: "A new look at an American icon",
    image: "https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg",
    category: "Feature",
  },
];

export default function FashionPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="px-4 md:px-6 mb-12">
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12">Fashion</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black pt-12">
          {Fashion_ARTICLES.map((article, index) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group">
              <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2 block">{article.category}</span>
                <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none group-hover:underline">{article.title}</h2>
                <p className="font-serif italic text-lg opacity-60 mt-4">{article.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Massive Newsletter section */}
      <section className="bg-black text-white py-32 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-8">The Weekly Fashion</h2>
        <p className="max-w-xl mx-auto font-serif italic text-xl opacity-60 mb-12">Essays, interviews, and deep dives delivered to your inbox every Friday.</p>
        <div className="max-w-md mx-auto flex border-b border-white pb-2 focus-within:border-white/50 transition-colors">
          <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full outline-none font-display text-sm uppercase tracking-widest border-none" />
          <button className="font-display font-black uppercase tracking-widest text-sm ml-4">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
