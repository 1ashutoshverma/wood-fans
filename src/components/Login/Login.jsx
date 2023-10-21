import React, { useState } from 'react';
import './Login.css';
import background from "./Assets/background.jpg"
import google from "./Assets/google.jpg"
import facebook from "./Assets/facebook.png"
import { Navigate } from 'react-router';
import { auth } from './firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useHistory } from 'react-router-dom';

const Login = ({ isLoginSelected, setIsLoginSelected }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const history = useHistory();

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
      setRegister(true);
      alert("Your are logged succesfuly")

      // You can perform additional actions here, such as redirecting the user.

    } else {
      setError('Invalid email or password');
    }
  };

  const handleToggleForm = () => {
    setIsLoginSelected(!isLoginSelected);
  };


  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Sign-In Success', user);
      setRegister(true);
    } catch (error) {

      console.error('Google Sign-In Error', error);
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Google Sign-In Popup was closed by the user');
      } else {
        alert('An error occurred during Google Sign-In');
      }
    }
  };

  if (register) {
    return <Navigate to={'/'} />
  }
  return (

    <div className='loginPage'>
      <div className='backgroundImage'>
        <form onSubmit={handleSubmit} >
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <div className='inputCheckbox'>
            <p><input type="checkbox" /> <span>Rememeber me</span></p>
            <p>Forgot Password?</p>
          </div>
          <input type="submit" className='LoginButton' value="Login" />
          <button className='toggle' onClick={handleToggleForm}>
            Don't have an account? Sign Up
          </button>
          <div className='facebookAndGoogle'>
            <div><img src={facebook} alt="" /></div>
            <div><img src={google} onClick={handleGoogleSignIn} alt="" /></div>
          </div>
        </form>
        <div>
          {/* <img src={background} alt="" /> */}
          <h2>Furniture is meant<br /> <span style={{ color: "brown" }}>to be used</span> <br /> and enjoyed</h2>
        </div>
      </div>

    </div>
  );
};

export default Login;
