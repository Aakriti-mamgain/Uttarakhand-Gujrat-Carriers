import React from "react";
import { motion } from "framer-motion";
import roadtransport from "../assets/images/RoadtransportImage.jpg";
import couriertransport from "../assets/images/courier-service.jpg";
import freighttransport from "../assets/images/images.jpg";
import railtransport from "../assets/images/railtransport.jpg";
import logistics from "../assets/images/logisticstransport.jpg";
import warehousing from "../assets/images/warehousing.webp";

const data = [
  {
    title: "Road Transport",
    image: roadtransport,
    description:
      "Road transport is the backbone of domestic and international logistics, offering flexible and cost-effective delivery solutions. It allows businesses to transport goods swiftly across short and long distances, with multiple vehicle options ranging from small vans to large trucks. Our road transport service ensures safety, reliability, and on-time delivery with real-time tracking.",
  },
  {
    title: "Courier Service",
    image: couriertransport,
    description:
      "Our courier services provide rapid and secure delivery for essential documents, parcels, and small packages. With same-day, next-day, and express delivery options, we cater to both individuals and businesses. We guarantee safe handling, real-time tracking, and door-to-door service to ensure your shipments reach their destinations hassle-free.",
  },
  {
    title: "Freight Transport",
    image: freighttransport,
    description:
      "Freight transport plays a crucial role in moving bulk and heavy goods efficiently. Our dedicated network of trucks, trailers, and specialized cargo carriers ensures that industrial and commercial shipments are transported securely. Whether it's intercity logistics or cross-country freight, we provide customized solutions to meet your needs.",
  },
  {
    title: "Rail Transport",
    image: railtransport,
    description:
      "Rail transport is a cost-effective and eco-friendly mode of moving large-scale goods across vast distances. With high load capacity and minimal environmental impact, our rail logistics solutions provide a reliable alternative for bulk shipments, reducing transit times and optimizing supply chain operations.",
  },
  {
    title: "Logistics",
    image: logistics,
    description:
      "Our logistics services offer end-to-end supply chain solutions, including Express and Air Express options for time-sensitive deliveries. We streamline transportation, inventory management, and warehousing to ensure your goods are handled with precision and care, allowing businesses to operate seamlessly.",
  },
  {
    title: "Warehousing",
    image: warehousing,
    description:
      "We provide top-tier warehousing solutions designed to accommodate various storage needs. Whether you require short-term storage for seasonal inventory or long-term warehousing for bulk stock, our facilities are equipped with advanced security systems and climate control to ensure product safety.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-10 p-6 rounded-xl shadow-md transition-all duration-300 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } hover:bg-gray-100 hover:shadow-lg`}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full flex justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 w-full"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
