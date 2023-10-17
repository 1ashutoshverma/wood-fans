import React, { useState } from 'react'
import logo from "./NavbarImages/Logo.svg"
import cart from "./NavbarImages/Cart.svg"
import search from "./NavbarImages/SearchIcon.svg"
import burger from "./NavbarImages/BurgerMenu.svg"
import style from "./Navbar.module.css"
// import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [clickedHumburger, setClickedHumburger] = useState(false)
    return (
        <div id={style.navbar_container}>
            {/* ----------Navbar for Laptop Screen Starts Here ------------ */}
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
                        </div>
                        <div>
                            <div className={style.search_icon}>
                                <input type="text" placeholder='Search Items...' />
                                <img src={search} alt="" />
                            </div>
                            <p><b>Login</b></p>
                            <img src={cart} className={style.navbar_cart} />
                        </div>
                    </div>
                    <div className={style.navbar_bottom}>
                        <div>
                            <p>SOFAS</p>
                            <p>BED</p>
                            <p>CHILDREN'S FURNITURE</p>
                            <p>ARMCHAIRS AND POUFS</p>
                        </div>
                        <div>
                            <div><b>+7 (926) 787-11-00</b></div>
                            <p>Modern Furniture factory</p>
                        </div>

                    </div >
                </div>
            </div>
            {/* ----------Navbar for Laptop Screen Ends Here ------------ */}
            <div className={style.navbar_smallscreen}>
                <div className={style.logo_mobile}><img src={logo} alt="Logo" /></div>
                <div className={style.navbar_mobile}>
                    <div className={style.search_icon}>
                        <input type="text" placeholder='Search Items...' />
                        <img src={search} alt="" />
                    </div>
                    <p><b>Login</b></p>
                    <img src={cart} className={style.navbar_cart} />
                    {/* {MenuIcon} */}
                    <img src={burger} className={style.navbar_humburger} />
                </div>
            </div>
        </div>
    )
}

export default Navbar