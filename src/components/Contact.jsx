import React from "react";
import "./styles/Contact.css";
import { useState } from "react";
import axios from "axios";


const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });

    try {
      const response = await axios.post(
        'http://localhost:5000/api/contact/',
        formData
      );

      if (response.status === 201) {
        setStatus({
          message: "Message sent successfully!",
          type: "success"
        });
        setFormData({
          fname: "",
          lname: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        message: error.response?.data?.error || "Failed to send message. Please try again.",
        type: "error"
      });
    }
  };


  return (
    <div className="contact-us">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "225px",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          gap: "25px",
          padding: "14px",
        }}
      >
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          required
        />

        <label htmlFor="">Second Name</label>
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          value={formData.lname}
          required
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <label htmlFor="">Message Us</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ height: "126px", width: "246px" }}
          required
        />

        <button
          type="submit"
          style={{ backgroundColor: "black", color: "white", padding: "10px" }}
        >
          Submit
        </button>

        {status.message && (
          <p className={`status-message ${status.type}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
