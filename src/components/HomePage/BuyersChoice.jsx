import React from 'react'
import style from "./BuyersChoice.module.css"

const BuyersChoice = () => {
    return (
        <div className={style.BuyersChoice}>
            <div>
                <h1>Buyers' choice</h1>
                <div className={style.linkProvider}>
                    <div>
                        <p>SOFAS</p>
                        <p>SOFAS</p>
                        <p>SOFAS</p>
                        <p>SOFAS</p>
                    </div>
                    <div>
                        <h2>GO TO CATALOG</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyersChoice