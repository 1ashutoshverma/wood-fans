import React from 'react'
import logo from "./NavbarImages/Logo.svg"
import cart from "./NavbarImages/Cart.svg"
import search from "./NavbarImages/SearchIcon.svg"
import style from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div id={style.navbar_container}>
            <div className={style.navbar_bigscreen}>
                <div className={style.logo_navbar}><img src={logo} alt="Logo" /></div>
                <div className={style.navbar_content_container}>
                    <div className={style.navbar_top}>
                        <div>
                            <p>Individual projects</p>
                            <p>Delivery</p>
                            <p>Payment</p>
                            <p>Blog</p>
                            <p>Portfolio</p>
                            <p>About us</p>
                            <p>Dubai</p>
                            <p>Contacts</p>
                        </div>
                        <div>
                            <div className={style.search_icon}>
                                <input type="text" placeholder='Search Items...' />
                                <img src={search} alt="" />
                            </div>
                            <p>Login</p>
                            <img src={cart} alt="" style={{ width: "25px" }} />
                        </div>
                    </div>
                    <div className={style.navbar_bottom}>

                    </div >
                </div>
            </div>
        </div>
    )
}

export default Navbar