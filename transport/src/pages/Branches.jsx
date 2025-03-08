import React from "react";
import { motion } from "framer-motion";

const branches = [
  {
    name: "Head Office",
    address: "UGC House Near BHEL Barrier NO.6 Behind Hanuman Mandir, Salempur Road, Bahadrabad, Haridwar-249402 (U.K)",
    phone: "+91-9837827450",
  },
  {
    name: "Delhi Branch",
    address: "Plot No. 12, Transport Nagar, New Delhi - 110037",
    phone: "+91-9359510201",
  },
  {
    name: "Mumbai Branch",
    address: "Warehouse 15, Andheri Industrial Area, Mumbai - 400053",
    phone: "+91-9876543210",
  },
  {
    name: "Kolkata Branch",
    address: "Sector 5, Salt Lake, Kolkata - 700091",
    phone: "+91-8765432109",
  },
];

const Branches = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Our Branches
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
            <p className="text-sm">{branch.address}</p>
            <p className="mt-2 font-semibold">📞 {branch.phone}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
