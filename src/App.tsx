import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import ShopPage from "./pages/ShopPage";
import FashionPage from "./pages/FashionPage";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className={`flex-grow ${isHomePage ? "" : "md:pt-10"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/Fashion" element={<FashionPage />} />
          <Route path="/fashion" element={<ShopPage category="fashion" />} />
          <Route path="/music" element={<ShopPage category="music" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

interface ShopPageProps {
  category?: "fashion" | "music" | "books" | "objects";
}

// Minimal wrapper if needed, but ShopPage already handles category via search params.
// I'll update ShopPage to handle both props and search params for flexibility.
