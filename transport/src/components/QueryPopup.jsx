import React, { useState, useEffect } from "react";
import axios from "axios";

const QueryPopup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Automatically visible on page load

  // Disable scrolling when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isVisible]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setLoading(true);

    if (!/^\d{10}$/.test(formData.contact)) {
      setResponseMessage("❌ Please enter a valid 10-digit contact number.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/send-query", formData);
      setResponseMessage("✅ Query submitted successfully!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      setResponseMessage("❌ Failed to send query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Close Popup
  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-[450px] relative animate-fadeInDown">
            <button
              className="absolute top-3 right-3 text-gray-500 text-xl hover:text-red-600"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800">Submit Your Query</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Your Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Your Query"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
                rows="4"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>
            </form>
            {responseMessage && (
              <p className="text-center mt-2 text-lg font-medium text-green-600">
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QueryPopup;
