import { Instagram, Twitter, Youtube, Facebook, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { label: "Fashion", to: "/category/fashion" },
  { label: "Beauty", to: "/category/beauty" },
  { label: "Film & Commercial", to: "/category/film-commercial" },
  { label: "Advertising", to: "/category/advertising" },
  { label: "Music", to: "/category/music" },
  { label: "Bio", to: "/category/bio" },
  { label: "Clients", to: "/category/clients" },
  { label: "Contact Anita", to: "/category/contact-data" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-black" id="main-footer">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
        {/* Newsletter */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black col-span-1 md:col-span-2">
          <h4 className="text-3xl font-display font-black tracking-tighter uppercase mb-6">
            Stay Connected
          </h4>
          <div className="flex border-b border-black pb-2">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="bg-transparent w-full outline-none font-display font-bold tracking-widest text-sm uppercase"
            />
            <button className="font-display font-black tracking-widest text-sm uppercase hover:opacity-50 transition-opacity">
              Join
            </button>
          </div>
        </div>

        {/* Social & Back to Top */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div className="flex space-x-6">
            <Instagram size={20} className="hover:opacity-50 cursor-pointer" />
            <Twitter size={20} className="hover:opacity-50 cursor-pointer" />
            <Youtube size={20} className="hover:opacity-50 cursor-pointer" />
            <Facebook size={20} className="hover:opacity-50 cursor-pointer" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 font-display font-black uppercase tracking-widest text-xs mt-12 md:mt-0 hover:opacity-50 transition-opacity"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="font-display text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-5 select-none">
          Anita Winrow
        </div>
        <div className="mt-8 md:mt-0 space-y-4 md:space-y-0 md:text-right">
          <p className="font-display text-[10px] font-bold uppercase tracking-widest opacity-40">
            © 2026 Anita Winrow FILMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end font-display text-[10px] font-bold uppercase tracking-widest">
            <a
              href="#"
              className="hover:opacity-50 border-b border-black/20 pb-0.5"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:opacity-50 border-b border-black/20 pb-0.5"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
