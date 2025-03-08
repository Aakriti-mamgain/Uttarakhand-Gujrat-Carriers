import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Adobe Express - file.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Section (Login, Track Shipment, Quote) */}
      <div className="w-full px-4 bg-gradient-to-r from-[#323555] to-[#040727] py-3 flex justify-end space-x-6 text-white font-semibold pr-8">
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <span className="text-gray-400">|</span>
        <Link to="/track" className="hover:text-gray-300">Track Your Shipment</Link>
        <span className="text-gray-400">|</span>
        <Link to="/quote" className="bg-white text-[#323555] py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
          Request a Quote
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 left-0 w-full z-50 bg-white ">
      <div className="relative bg-white px-6 py-4 rounded-2xl shadow-md flex items-center justify-between w-[90%] md:w-[80%] mx-auto border border-gray-200">

          <img src={logo} alt="Shubh Express Logistics" className="w-auto object-contain pl-4" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-x-10 text-black">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/services" className="hover:text-gray-600">Service</Link>
            <Link to="/branches" className="hover:text-gray-600">Our Branches</Link>
            <Link to="/query" className="bg-[#323555] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1d203f]">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-3xl text-[#323555]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setMenuOpen(false)}></div>
          <div className="md:hidden bg-white fixed top-20 left-0 w-full shadow-md py-4 z-50">
            <nav className="flex flex-col text-center space-y-4 text-black">
              <Link to="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/services" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Service</Link>
              <Link to="/branches" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Our Branches</Link>
              <Link to="/query" className="bg-[#323555] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1d203f]" onClick={() => setMenuOpen(false)}>
  Contact Us
</Link>

            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
