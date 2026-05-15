import { motion } from "motion/react";
import { Navigate, useParams } from "react-router-dom";

type CategoryKey =
  | "fashion"
  | "beauty"
  | "film-commercial"
  | "advertising"
  | "music"
  | "bio"
  | "clients"
  | "contact-data";

type CategoryVideo = {
  title: string;
  description: string;
  videoId: string;
};

type CategoryContent = {
  title: string;
  intro: string;
  heroImage: string;
  detailLabel: string;
  detailText: string;
  videos?: CategoryVideo[];
  clients?: {
    title: string;
    columns: string[][];
  };
  isContactPage?: boolean;
};

const CATEGORY_CONTENT: Record<CategoryKey, CategoryContent> = {
  fashion: {
    title: "Fashion",
    intro: "Editorial looks, runway energy, and styling studies.",
    heroImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Focus",
    detailText: "Looks, styling language, and campaign direction.",
  },
  beauty: {
    title: "Beauty",
    intro: "Beauty close-ups, texture studies, and mood-driven imagery.",
    heroImage:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Focus",
    detailText: "Skin, makeup, and polished portrait work.",
  },
  "film-commercial": {
    title: "Film & Commercial",
    intro: "Selected moving-image work and cinematic references.",
    heroImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Focus",
    detailText: "Short films, commercials, and visual storytelling.",
    videos: [
      {
        title: "Cinematic Campaign Direction",
        description: "Visual pacing and motion language for branded stories.",
        videoId: "M7lc1UVf-VE",
      },
      {
        title: "Commercial Mood Board",
        description:
          "A reference reel for lighting, camera movement, and rhythm.",
        videoId: "kJQP7kiw5Fk",
      },
      {
        title: "Film Craft References",
        description: "Framing studies for narrative and commercial projects.",
        videoId: "dQw4w9WgXcQ",
      },
    ],
  },
  advertising: {
    title: "Advertising",
    intro: "Campaign concepts, layouts, and brand-driven storytelling.",
    heroImage:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Focus",
    detailText: "Art direction, campaign systems, and visual identity.",
  },
  music: {
    title: "Music",
    intro: "Artwork, live visuals, and identity work for sound-led projects.",
    heroImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Focus",
    detailText: "Artwork, visualizers, and stage imagery.",
  },
  bio: {
    title: "Bio",
    intro: "Anita Winrow is a professional make-up artist and hair stylist.",
    heroImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "About",
    detailText:
      "From editorial to TV commercials and fashion to feature films, Anita has been working in the industry for ten years. 2012 sees Anita not only continuing her commercial work but also providing hair and make-up for the Olympics 2012.",
  },
  clients: {
    title: "Clients",
    intro: "Selected collaborators and commissions.",
    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Selected Work",
    detailText: "Editorial, campaign, and moving-image partnerships.",
    clients: {
      title: "Clients",
      columns: [
        [
          "Olympics 2012",
          "Waitrose",
          "Morrisons",
          "Jordans Cereal",
          "Heart FM",
          "T-Mobile",
          "Terrence Higgins Trust",
          "Mail On Sunday",
          "Chivas Whisky",
          "CLS Sofas",
        ],
        [
          "House of Fraser",
          "Debenhams",
          "George",
          "Jasper Conran",
          "Fred Perry",
          "Star Julien Macdonald",
          "Heston Blumenthal",
          "Charles Worthington",
        ],
        [
          "Top Shop",
          "New Look",
          "Dorothy Perkins",
          "Lipsy",
          "Mantaray",
          "Brand Alley",
          "Agent Provocateur",
          "Dynasty Clothing",
          "Ben Sherman",
          "Speedo",
        ],
      ],
    },
  },
  "contact-data": {
    title: "Contact Anita",
    intro: "Get in touch for inquiries and professional bookings.",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    detailLabel: "Contact",
    detailText: "Reach out via phone, email, or the contact form below.",
    isContactPage: true,
  },
};

export default function CategoryPage() {
  const { slug } = useParams();

  if (!slug || !(slug in CATEGORY_CONTENT)) {
    return <Navigate to="/" replace />;
  }

  const content = CATEGORY_CONTENT[slug as CategoryKey];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="px-4 md:px-6 pb-16 border-b border-black">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
          <div>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 block mb-4">
              Category
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.85]">
              {content.title}
            </h1>
            <p className="max-w-2xl mt-6 font-serif italic text-lg md:text-2xl opacity-70">
              {content.intro}
            </p>
          </div>
          <div className="lg:text-right">
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">
              {content.detailLabel}
            </div>
            <p className="max-w-xl lg:ml-auto font-serif italic text-base md:text-lg opacity-70">
              {content.detailText}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-12 border-b border-black">
        <div className="overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src={content.heroImage}
            alt={content.title}
            className="w-full h-[50vh] md:h-[70vh] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {content.isContactPage ? (
        <section className="bg-[#5a5a5a] text-white px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase mb-12">
              Contact Anita
            </h2>

            <div className="mb-12">
              <p className="text-lg md:text-xl font-serif italic mb-6 opacity-90">
                mobile: +44 (0) 7947470046
              </p>
              <p className="text-lg md:text-xl font-serif italic opacity-90">
                email: info@anitawinrow.com
              </p>
            </div>

            <div className="border-t border-white/30 pt-12">
              <h3 className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase mb-8">
                Please leave your contact details
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-display font-bold uppercase tracking-widest mb-3">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white text-black font-serif text-base focus:outline-none"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-display font-bold uppercase tracking-widest mb-3">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white text-black font-serif text-base focus:outline-none"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-display font-bold uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white text-black font-serif text-base focus:outline-none"
                    placeholder=""
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 px-6 py-3 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-white/80 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : content.clients ? (
        <section className="bg-[#4a4a4a] text-white px-4 md:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8">
                {content.clients.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {content.clients.columns.map((column, columnIndex) => (
                  <ul
                    key={`${content.title}-${columnIndex}`}
                    className="space-y-2 md:space-y-3 text-lg md:text-xl leading-tight"
                  >
                    {column.map((item) => (
                      <li key={item} className="font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8">
                  Film Directors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg md:text-xl leading-tight">
                  {[
                    "Nicolas Roeg",
                    "Richard Dale",
                    "Tom Green",
                    "Andrew Goth",
                    "Alan Friel",
                  ].map((name) => (
                    <div key={name} className="font-medium">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8">
                  TV Commercials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 text-lg md:text-xl leading-tight">
                  {[
                    "Burger King",
                    "Tesco",
                    "Jordans Cereal",
                    "Activia Danone",
                    "Mail On Sunday",
                    "Chivas Whisky",
                    "Terrence Higgins Trust",
                    "Morrisons",
                    "Heart FM",
                    "CLS Sofas",
                    "T-Mobile",
                  ].map((name) => (
                    <div key={name} className="font-medium">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : content.videos ? (
        <section className="px-4 md:px-6 py-16">
          <div className="flex items-end justify-between mb-10 border-t border-black pt-8">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase">
              YouTube Videos
            </h2>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              Film topics
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.videos.map((video, index) => (
              <motion.article
                key={video.videoId}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="aspect-video overflow-hidden border border-black bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-display font-black tracking-tighter uppercase leading-tight mb-2 group-hover:underline">
                    {video.title}
                  </h3>
                  <p className="font-serif italic text-sm md:text-base opacity-70">
                    {video.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      ) : (
        <section className="px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black pt-8">
            <div>
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">
                Overview
              </div>
              <p className="font-serif italic text-lg md:text-xl opacity-70 max-w-xl">
                {content.detailText}
              </p>
            </div>
            <div className="bg-black text-white p-8 md:p-10">
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-4">
                Navigation
              </div>
              <p className="font-display text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Explore related projects and category archives.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}