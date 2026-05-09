import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Detect homepage
  const isHomePage = location.pathname === "/";

  // Shared styles
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-black";

  const headerBg = isHomePage && !isScrolled ? "bg-transparent" : "bg-white";

  const dotColor = isHomePage && !isScrolled ? "bg-white" : "bg-black";

  const getBreadcrumb = () => {
    const path = location.pathname.split("/").filter(Boolean)[0];

    if (!path) return null;

    return (
      <div className="flex items-center space-x-1 font-display text-[10px] font-bold uppercase tracking-widest opacity-60">
        <span>Menu</span>
        <ChevronRight size={10} />
        <span className="text-black">{path}</span>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll state when route changes
  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} py-8`} id="main-header">
        <nav className="mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Nav / Sidebar Toggle */}
          <div className="flex items-center space-x-6">
            <button className="group flex items-center space-x-2 p-2 hover:opacity-50 transition-opacity" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={20} strokeWidth={2.5} className={textColor} />

              <span className={`hidden md:block font-display text-xs font-bold uppercase tracking-widest ${textColor}`}>Menu</span>
            </button>

            <div className="hidden md:block">{getBreadcrumb()}</div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <div className={`font-display text-2xl md:text-4xl font-black tracking-tighter leading-none font-serif ${textColor}`}>ANITA WINROW</div>
          </Link>

          {/* Right Nav */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <button className="p-2 hover:opacity-50 transition-opacity">
              <Search size={20} strokeWidth={2.5} className={textColor} />
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-60 backdrop-blur-sm"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-100 bg-white z-70 border-r border-black flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 flex justify-between items-center border-b border-black">
                <div className="font-display text-2xl font-black tracking-tighter">Anita Winrow</div>

                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:opacity-50 transition-opacity">
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu */}
              <div className="grow overflow-y-auto p-8 md:p-12">
                <nav className="flex flex-col space-y-8">
                  {/* Main */}
                  <div className="space-y-4">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Main</span>

                    <Link
                      to="/films"
                      className="block text-4xl md:text-5xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Films
                    </Link>

                    <Link
                      to="/Fashion"
                      className="block text-4xl md:text-5xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fashion
                    </Link>
                  </div>

                  {/* Shop */}
                  <div className="space-y-4 pt-8 border-t border-black/10">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Shop</span>

                    <Link
                      to="/shop"
                      className="block text-3xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shop All
                    </Link>

                    <Link
                      to="/shop?category=fashion"
                      className="block text-3xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fashion
                    </Link>

                    <Link
                      to="/shop?category=music"
                      className="block text-3xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Music
                    </Link>

                    <Link
                      to="/shop?category=books"
                      className="block text-3xl font-display font-black tracking-tighter uppercase hover:translate-x-2 transition-transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Books
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-black bg-black text-white">
                <div className="flex justify-between items-center">
                  <span className="font-display text-xs font-bold uppercase tracking-widest">Anita Winrow Member?</span>

                  <button className="border border-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Login
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
