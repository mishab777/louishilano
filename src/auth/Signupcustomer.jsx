import React, { useState } from "react";
import axios from "axios";
import apiClient from "../services/api";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "", // Updated to match "username" field in backend
    phone_number: "", // Updated to match "phone_number" field in backend
    user_type: "customer", // Hardcoded user type for this form
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous success message

    try {
      const response = await apiClient.post("/user_acc/signup/", formData); // Replace with your actual API endpoint
      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "An error occurred");
      } else {
        setError("Unable to connect to the server");
      }
    }
  };

  return (
    <div className="container">
      <form
        className="w-full h-screen flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center w-96 h-auto m-auto flex-col gap-3">
          <h1 className="text-center text-3xl text-black mb-4">Sign Up</h1>
          <input
            type="text"
            name="username" // Updated to "username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Name"
          />
          <input
            type="text"
            name="phone_number" // Updated to "phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Phone Number"
          />
          <button type="submit" className="bg-black w-full rounded text-white p-2">
            Sign Up
          </button>
          {message && <p className="text-green-500 mt-2">{message}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
