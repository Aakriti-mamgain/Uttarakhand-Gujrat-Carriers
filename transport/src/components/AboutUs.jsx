import React from "react";
import { FaUsers, FaThumbsUp, FaTruck, FaShieldAlt } from "react-icons/fa";
import img from "../assets/images/truck.png"

const ExperienceSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-screen-xl mx-auto p-10">
      {/* Left Section */}
      <div className="bg-[#323555] text-white pt-[10rem] pb-[3rem] px-10 flex flex-col items-center justify-center w-full md:w-1/2 relative text-center">
  {/* Truck Image */}
  <img
    src={img}
    alt="Truck"
    className="w-[10rem] h-[10rem] absolute -top-16"
  />

  {/* Experience Section */}
  <div className="flex flex-col items-center justify-center">
    <h2 className="text-6xl font-bold mt-6">5+</h2>
    <p className="text-2xl font-medium mt-2">Years Experience</p>
  </div>
</div>


      {/* Right Section */}
      <div className="bg-white p-10 w-full md:w-1/2">
        <h4 className="text-[#323555] font-bold text-2xl">LEARN ABOUT US</h4>
        <h2 className="text-3xl font-bold mt-2">
          Welcome to Uttarakhand Gujrat Carriers
        </h2>
        <p className="text-gray-700 mt-4">
        At Uttarakhand Gujarat Carriers, we are committed to providing reliable, efficient, and cost-effective logistics solutions. With a strong focus on customer satisfaction, we ensure safe and timely transportation of goods across regions. Our mission is to bridge distances with trust, integrity, and excellence in logistics, making supply chain management seamless for businesses of all sizes.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-black">
          <div className="flex items-center space-x-2">
            <FaUsers className="text-[#323555] text-2xl" />
            <p className="font-semibold">100% Satisfied Customers</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaThumbsUp className="text-[#323555] text-2xl" />
            <p className="font-semibold">Quality and Commitment</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaTruck className="text-[#323555] text-2xl" />
            <p className="font-semibold">Best Transportation</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-[#323555] text-2xl" />
            <p className="font-semibold">100% Safe Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
