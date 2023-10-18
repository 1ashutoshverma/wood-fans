import React from 'react'
import style from "./TopSection.module.css"

const TopSection = () => {
    return (
        <div className={style.container}>
            <div className="bg-primary text-white">
                <h1 className="display-4">Component Title</h1>
                <p className="lead">Some content within the component.</p>
            </div>
        </div>
    )
}

export default TopSection