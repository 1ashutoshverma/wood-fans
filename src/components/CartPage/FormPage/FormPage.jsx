import { useState } from "react";
import "./Formpage.css"; // Import the CSS for styling

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="form-container">
      <h1>Fill Your Address</h1>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Contact:</label>
          <input
            placeholder="Enter your Contact"
            type="number"
            name="number"
            id="number"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Address:</label>
          <textarea
            placeholder="Enter your Address"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          PAYMENT
        </button>
      </form>
    </div>
  );
}

export default FormPage;
