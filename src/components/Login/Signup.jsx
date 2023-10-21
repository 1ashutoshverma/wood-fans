import React, { useState } from 'react';
import userIcon from './Assets/person.png';
import emailIcon from './Assets/Email.png';
import passwordIcon from './Assets/password.png';
import google from "./Assets/google.jpg"
import facebook from "./Assets/facebook.png"
import { Navigate } from 'react-router';
import { auth } from './firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { firebase } from './firebase';




const Signup = ({ isLoginSelected, setIsLoginSelected }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.email === formData.email);

    if (userExists) {
      setError('User already exists');
      alert("User already exists");
    } else {
      // Store the new user in local storage
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Clear the form and reset the error
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      // setError('User registered successfully!');
      setRegister(true);
      alert('User registered successfully!')


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

        <form onSubmit={handleSubmit} id='signupForm'>
          <h2>Signup</h2>
          <div>
            <div className="input-group">
              <img src={userIcon} alt="User" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="input-group">
              <img src={emailIcon} alt="Email" />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="input-group">
              <img src={passwordIcon} alt="Password" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <input type="submit" className='LoginButton' value="Sign Up" />
          <button className='toggle' onClick={handleToggleForm}>
            {!isLoginSelected ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
          <div className='facebookAndGoogle'>
            <div><img src={facebook} alt="" /></div>
            <div><img src={google} onClick={handleGoogleSignIn} alt="" /></div>
          </div>
        </form>
        <div className='signUpBackground'>
          {/* <img src={background} alt="" /> */}
          <h2>Unlock a world! <br /> <span style={{ color: "brown" }}>of furniture</span> <br /> Designs</h2>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
