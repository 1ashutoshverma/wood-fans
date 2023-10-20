import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the list of stored users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the provided email and password match any stored user
    const user = existingUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setError(null);
      console.log('User logged in successfully!');
      alert("Your are logged succesfuly")
      // You can perform additional actions here, such as redirecting the user.
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='loginPage'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
