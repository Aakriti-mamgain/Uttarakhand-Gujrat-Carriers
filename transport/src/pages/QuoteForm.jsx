import React from "react";

const QuoteForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-50 shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">REQUEST A QUOTE</h2>
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <input type="email" placeholder="Email ID" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <input type="text" placeholder="Mobile Number" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <select className="p-3 border border-gray-300 rounded-md outline-none w-full">
            <option>Select Transportation</option>
            <option>Air</option>
            <option>Road</option>
            <option>Sea</option>
          </select>
          <input type="text" placeholder="Location From" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <input type="text" placeholder="Location To" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <input type="text" placeholder="Gross Weight" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <input type="text" placeholder="Dimensions" className="p-3 border border-gray-300 rounded-md outline-none w-full" />
          <textarea placeholder="Enter Your Message Here...(Max 500 Characters)" className="p-3 border border-gray-300 rounded-md outline-none w-full col-span-2 h-24"></textarea>
          <button className="bg-[#323555] text-white py-3 rounded-md font-semibold w-full col-span-2 hover:bg-[#040727]">🚀 REQUEST A QUOTE</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
