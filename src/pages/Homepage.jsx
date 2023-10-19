import React from 'react'
import Carousel from '../components/HomePage/Carousel'
import Section1 from '../components/HomePage/Section1'


const Homepage = () => {
    return (
        <div>
            <Carousel />
            <Section1 />
            <div style={{ height: "500px", border: "1px solid red" }} ></div>
            <div style={{ height: "500px", border: "1px solid red" }} ></div>
            <div style={{ height: "500px", border: "1px solid red" }} ></div>
        </div>

    )
}

export default Homepage