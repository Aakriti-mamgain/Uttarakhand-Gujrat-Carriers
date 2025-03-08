import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import companyLogo from "../assets/images/Adobe Express - file.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#323555] to-[#040727] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section: Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center">
          {/* Company Logo & Info */}
          <div>
            <img src={companyLogo} alt="Company Logo" className="mx-auto md:mx-0 w-32 h-auto" />
            <h3 className="text-lg font-semibold mt-4">Uttarakhand Gujrat Carriers</h3>
            <p className="mt-2 text-gray-100 text-sm">
              UGC House Near BHEL Barrier NO.6 Behind Hanuman Mandir, Salempur Road Bahadrabad, Haridwar-249402 (U.K.)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Home</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">About</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Services</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Road Transportation</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Ship Transportaion</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Rail Transportaion</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#DFB163]">Warehousing</a></li>
            </ul>
          </div>

          {/* Contact Information (Moved Above Social Media) */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-100 flex justify-center md:justify-start items-center">
              <FaPhoneAlt className="mr-2" /> +91-9837827450
            </p>
            <p className="mt-2 text-gray-100 flex justify-center md:justify-start items-center">
              <FaPhoneAlt className="mr-2" /> +91-9359510201
            </p>

            {/* Social Media Below Contact */}
            <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-[#DFB163]"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-[#DFB163]"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-[#DFB163]"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-[#DFB163]"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-200">
          <p>© 2025 Uttarakhand Gujrat Carriers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
