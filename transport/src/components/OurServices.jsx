import React from "react";
import { motion } from "framer-motion";
import roadtransport from "../assets/images/RoadtransportImage.jpg";
import couriertransport from "../assets/images/courier-service.jpg";
import freighttransport from "../assets/images/images.jpg";
import railtransport from "../assets/images/railtransport.jpg";
import logistics from "../assets/images/logisticstransport.jpg";
import warehousing from "../assets/images/warehousing.webp";

const services = [
  {
    title: "Road Transport",
    image: roadtransport,
    description:
      "The kind of road transportation of goods is ascertained by the distance traveled, the weight and volume of each cargo, the nature of items being transported, and the degree of local infrastructure development.",
  },
  {
    title: "Courier Service",
    image: couriertransport,
    description:
      "Courier services ensure fast and secure delivery of documents, parcels, and small packages. We provide same-day, next-day, and express delivery options for individuals and businesses.",
  },
  {
    title: "Freight Transport",
    image: freighttransport,
    description:
      "Freight transport is essential for moving heavy and bulk goods across cities and countries using trucks, trailers, and specialized cargo carriers.",
  },
  {
    title: "Rail Transport",
    image: railtransport,
    description:
      "Rail transportation, commonly referred to as train transportation, is the movement of commodities by wheeled vehicles that travel on rail tracks.",
  },
  {
    title: "Logistics",
    image: logistics,
    description:
      "For quick delivery, we offer Express and Air Express options. Choose from a variety of our freight shipping services.",
  },
  {
    title: "Warehousing",
    image: warehousing,
    description:
      "Are you in dire need of the best product storage services available in India? If so, you’ve come to the right place.",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">Our Services</h2>
        <p className="text-gray-600 mt-2">The Main Feature of Our Service</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
