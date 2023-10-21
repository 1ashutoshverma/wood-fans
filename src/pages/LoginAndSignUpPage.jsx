import React, { useState } from 'react';
// import Footer from '../components/Footer/Footer';
import Signup from '../components/Login/Signup';
import Login from '../components/Login/Login';
import '../components/Login/Login.css';

const LoginAndSignUpPage = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(false);

  // const handleToggleForm = () => {
  //   setIsLoginSelected(!isLoginSelected);
  // };

  return (

    <div className='loginPageWrapper'>
      <div className='main-container'>
        {/* <div className='image-container'>
        <img src='https://api.woodfans.ru/storage/uploads/images/X1nlKgODlDigtd42ANZH64N0sqxb8ArcMGe8w8WP_widened_540.webp' alt='image'/> */}
        {/* </div> */}
        <div className='handlesignupandlogin'>
          {isLoginSelected ? (
            <Signup isLoginSelected={isLoginSelected} setIsLoginSelected={setIsLoginSelected} />
          ) : (
            <Login isLoginSelected={isLoginSelected} setIsLoginSelected={setIsLoginSelected} />
          )}
          {/* <button className='toggle' onClick={handleToggleForm}>
            {isLoginSelected ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUpPage;
