import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import QuoteForm from "./pages/QuoteForm";
import QueryPage from "./pages/QueryPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Branches from "./pages/Branches";
import QueryPopup from "./components/QueryPopup"; // ✅ Popup component

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true); // ✅ Website load hone ke 1 sec baad popup open hoga
    }, 1000);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      {/* ✅ Popup Component */}
      {showPopup && <QueryPopup onClose={handlePopupClose} />}

      {/* ✅ Brightness effect & Transition */}
      <div
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          showPopup ? "brightness-80" : "brightness-100"
        }`}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <WhyChooseUs />
                <OurServices />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/query" element={<QueryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;