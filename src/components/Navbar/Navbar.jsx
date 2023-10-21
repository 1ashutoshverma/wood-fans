import React, { useState } from 'react'
import logo from "./NavbarImages/Logo.svg"
import cart from "./NavbarImages/Cart.svg"
import search from "./NavbarImages/SearchIcon.svg"
import burger from "./NavbarImages/BurgerMenu.svg"
import cross from "./NavbarImages/Cross.svg"
import human from "./NavbarImages/human-icon.svg"
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [clickedHumburger, setClickedHumburger] = useState(false)
    const [humanIcon, setHumanIcon] = useState(true)
    const [dropDownLogin, setDropDownLogin] = useState(false)
    const [dropDownSearch, setDropDownSearch] = useState(false)
    return (
        <div id={style.navbar_container}>
            {/* ----------Navbar for Laptop Screen Starts Here ------------ */}
            <div className={style.navbar_bigscreen}>
                <div className={style.logo_navbar}><img src={logo} alt="Logo" /></div>
                <div className={style.navbar_content_container}>
                    <div className={style.navbar_top}>
                        <div>
                            <p><Link to={"#"} className={style.link}>Indivisual project</Link></p>
                            <p><Link to={"#"} className={style.link}>Delivery</Link></p>
                            <p><Link to={"#"} className={style.link}>Payment</Link></p>
                            <p><Link to={"#"} className={style.link}>Blog</Link></p>
                            <p><Link to={"#"} className={style.link}>Portfolio</Link></p>
                            <p><Link to={"#"} className={style.link}>About us</Link></p>
                        </div>
                        <div>
                            <div className={style.search_icon}>
                                <input type="text" placeholder='Search Items...' onClick={() => { setDropDownSearch(!dropDownSearch); setDropDownLogin(false) }} />
                                <img src={search} alt="" />
                            </div>
                            {
                                humanIcon ? (<p><Link to={"/login"} className={style.link}><b>Login</b></Link></p>) : (<div className={style.humanIcon}><img src={human} alt="" onClick={() => { setDropDownLogin(!dropDownLogin); setDropDownSearch(false) }} /></div>)
                            }

                            <Link><img src={cart} className={style.navbar_cart} /></Link>
                        </div>
                    </div>
                    <div className={style.navbar_bottom}>
                        <div>
                            <p><Link to={"#"} className={style.link}>SOFAS</Link></p>
                            <p><Link to={"#"} className={style.link}>BED</Link></p>
                            <p><Link to={"#"} className={style.link}>CHILDREN'S FURNITURE</Link></p>
                            <p><Link to={"#"} className={style.link}>ARMCHAIRS AND POUFS</Link></p>
                        </div>
                        <div>
                            <div><b style={{ fontSize: "0.9rem" }}>+7 (926) 787-11-00</b></div>
                            <p style={{ fontSize: "0.9rem" }}>Modern Furniture factory</p>
                        </div>

                    </div >
                </div>
            </div>
            <div className={style.navbarDropdown}>
                <div>
                    {
                        dropDownSearch ? (<div className={style.navbarDropdownSearch}>
                            <div>Ashutosh Verma</div>
                            <div>My Cart</div>
                            <div>Logout</div>
                            <div>Logout</div>
                        </div>) : (<></>)
                    }
                </div>
                <div>
                    {
                        dropDownLogin ? (<div className={style.navbarDropdownLogin}>
                            <div>Ashutosh Verma</div>
                            <div>My Cart</div>
                            <div>Logout</div>
                        </div>) : (<></>)
                    }
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
                    <img src={clickedHumburger ? cross : burger} className={style.navbar_humburger} onClick={() => { setClickedHumburger(!clickedHumburger) }} />
                </div>
            </div>
            {
                clickedHumburger ? (<div className={style.main_dropdown}>
                    <div className={style.mobile_dropdown}>
                        <div>
                            <p>SOFAS</p>
                            <p>BED</p>
                            <p>CHILDREN'S FURNITURE</p>
                            <p>ARMCHAIRS AND POUFS</p>
                        </div>
                        <div>
                            <div>
                                <p>Individual project</p>
                                <p>Payment</p>
                                <p>Portfolio</p>
                                <p>Dubai</p>
                            </div>
                            <div>
                                <p>Delivery</p>
                                <p>Blog</p>
                                <p>About us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div>
                            <h1>+7 (926) 787-11-00</h1>
                            <p>Modern Furniture Factory</p>
                        </div>
                    </div>
                </div>) : (<></>)
            }
        </div>
    )
}

export default Navbar