import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this container
  // Start start = when top of container hits top of viewport
  // End end = when bottom of container hits bottom of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${slides.length * 100}vh` }} id="hero-carousel-container">
      {/* Sticky container that stays fixed while slides transition */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, index) => {
          // Determine the range in 0-1 scale for this specific slide
          const slideStart = index / slides.length;
          const slideEnd = (index + 1) / slides.length;

          // Calculate vertical movement:
          // We apply z-index so next slides are visible as previous slides move up.
          const y = useTransform(scrollYProgress, [slideStart, slideEnd], ["0%", "-100%"]);

          return (
            <motion.section
              key={slide.title + index}
              style={{
                y: index === slides.length - 1 ? 0 : y, // Last slide stays until container ends
                zIndex: slides.length - index,
              }}
              className="absolute inset-0 h-full w-full bg-white"
            >
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-6 md:p-12 text-white">
                <div className="max-w-4xl">
                  <div className="font-display text-xs md:text-sm font-bold uppercase tracking-widest mb-4 inline-block px-2 py-1 bg-white text-black">{slide.subtitle}</div>
                  <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] my-8 text-white">{slide.title}</h1>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
