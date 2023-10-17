
import React from 'react'
import './Footer.css'

const footer = () => {
  return (
     <footer className="footer">
      <div className="footer-left">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="footer-links">
        <a href='#'>Individual project</a>
        <a href="#">Payment</a>
        <a href="#">Portfolio</a>
        <a href="#">Dubai</a>
        <a href="#">Site Map</a>

      </div>

       <div className="footer-links">
        <a href="#">Delivery</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contacts</a>
      </div>
      
      <div className="footer-links">
        <a href="#">Upholstered furniture to order</a>
        <a href="#">Custom sofas</a>
        
      </div>


      <div className="footer-right">
        <div className="footer-contact-info">
          <div>
            <a href="tel:+79267871100">+7 (926) 787-11-00</a>
          </div>
          <div>
            <a href="tel:+74951479777">+7 (495) 147-97-77</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer



{/* 
        <a href="#">Upholstered furniture to order</a>
        <a href="#">Custom sofas</a> */}
