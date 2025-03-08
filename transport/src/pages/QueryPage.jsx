import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QueryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setLoading(true); // Start loading

    // Contact Number Validation (10 Digits)
    if (!/^\d{10}$/.test(formData.contact)) {
      setResponseMessage("❌ Please enter a valid 10-digit contact number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-query", formData);
      setResponseMessage("✅ Query submitted successfully!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      console.error("Error submitting query:", error);
      setResponseMessage("❌ Failed to send query. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">Submit Your Query</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact Number Field */}
        <div>
          <label className="block text-gray-700 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength="10"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium">Your Query</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
          disabled={loading} // Disable while loading
        >
          {loading ? "Submitting..." : "Submit Query"}
        </button>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <p className="text-center mt-4 text-lg font-medium text-green-600">{responseMessage}</p>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default QueryPage;
