import React from "react";
import { FaTruckMoving, FaUsers, FaShieldAlt, FaThumbsUp } from "react-icons/fa";
import courierImage from "../assets/images/courier-service.jpg";
import img from "../assets/images/logisticstransport.jpg";
import img1 from "../assets/images/img1.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${courierImage})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            Reliable, efficient, and cost-effective logistics solutions with a
            strong focus on customer satisfaction.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-blue-50 py-12 px-6">
        <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5+ Years Experience In The Logistics Industry
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Shubh Express Logistics is the pioneer company in the field of cargo. 
              Established in 2019, it has developed into a reputed cargo company in the national market. 
              With a strong national network, we ensure prompt delivery across various cities.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-6">What We Do</h3>
            <p className="text-gray-700 leading-relaxed">
              We assist businesses in achieving optimized logistics at minimum cost, 
              providing a competitive advantage. Our goal is to ensure high customer 
              satisfaction while continuously improving our services.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Logistics"
              className="w-3/4 md:w-full"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-yellow-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={img1}
              alt="Experience"
              className="w-32"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">5+ Years Experience</h2>
            <p className="text-gray-700 leading-relaxed">
              Providing top-quality logistics solutions with zero defect assurance, 
              ensuring safe and reliable transportation of goods.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto py-12 px-6">
        {[
          {
            icon: <FaTruckMoving className="text-5xl text-blue-500 mb-4" />,
            title: "Fast & Reliable",
            subtitle: "Quick & secure deliveries",
          },
          {
            icon: <FaUsers className="text-5xl text-green-500 mb-4" />,
            title: "100% Customer Satisfaction",
            subtitle: "Trusted by Businesses",
          },
          {
            icon: <FaThumbsUp className="text-5xl text-yellow-500 mb-4" />,
            title: "Quality & Commitment",
            subtitle: "Ensuring the Best Service",
          },
          {
            icon: <FaShieldAlt className="text-5xl text-red-500 mb-4" />,
            title: "Safe & Secure",
            subtitle: "Secure & Reliable Logistics",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:shadow-lg hover:scale-105"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Partner with Us</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-700 mt-2 leading-relaxed">
          Experience hassle-free transportation and efficient logistics
          solutions tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
