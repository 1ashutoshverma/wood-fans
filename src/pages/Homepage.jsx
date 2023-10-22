import React from 'react'
import Carousel from '../components/HomePage/Carousel'
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Photogallary from '../components/HomePage/Photogallary'
import Team from '../components/HomePage/Team'
import ContactsUs from '../components/HomePage/ContactsUs'
import { useSelector } from 'react-redux'


const Homepage = () => {
    return (
        <div>
            <Carousel />
            <Section1 />
            <Section2 />
            <Photogallary />
            <Team />
            <ContactsUs />
            {/* <div style={{ height: "500px", border: "1px solid red" }} ></div> */}
        </div>

    )
}

export default Homepage