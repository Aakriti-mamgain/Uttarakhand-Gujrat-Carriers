import React from "react";
import { FaTruck, FaMapMarkerAlt, FaDollarSign, FaUsers, FaClock, FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/images/img1.jpg";

const features = [
  {
    icon: <FaTruck size={30} className="text-orange-500" />,
    title: "High-Tech Vehicles",
    description: "Equipped with telematics, data analysis tools & reefer units with an environment-friendly fleet.",
  },
  {
    icon: <FaMapMarkerAlt size={30} className="text-orange-500" />,
    title: "Real Time Track and Trace",
    description: "GPS with real-time tracking & temperature sensors for accurate reporting.",
  },
  {
    icon: <FaDollarSign size={30} className="text-orange-500" />,
    title: "Best Services at Better Rates",
    description: "Reliable and efficient services to provide value to our clients.",
  },
  {
    icon: <FaUsers size={30} className="text-orange-500" />,
    title: "Skilled and Trained Team",
    description: "Our team is our biggest asset, building a culture of hard work.",
  },
  {
    icon: <FaClock size={30} className="text-orange-500" />,
    title: "Just-in-Time",
    description: "Delivering goods safely and on time for customer satisfaction.",
  },
  {
    icon: <FaExchangeAlt size={30} className="text-orange-500" />,
    title: "Redefining Transportation",
    description: "Consistent training fosters growth and credibility for our team and drivers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 uppercase">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">Navigating the Path Forward</p>
        </div>

        {/* Image Centered with Features Left & Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Features */}
          <div className="flex flex-col space-y-8 w-full lg:w-1/3">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-orange-100 rounded-full">{feature.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image in Center */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt="Truck"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col space-y-8 w-full lg:w-1/3">
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-orange-100 rounded-full">{feature.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
