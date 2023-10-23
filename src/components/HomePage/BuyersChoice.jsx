import React, { useEffect, useState } from 'react'
import style from "./BuyersChoice.module.css"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addToCart } from '../CartPage/redux/action';
import { AddDetailsObj } from '../ProductPage/Redux/ProductDetailReducer/action';
import { useNavigate } from 'react-router-dom';

const BuyersChoice = () => {
    const [type, setType] = useState("Sofas");
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = async (type) => {
        try {
            const res = await axios(`https://crudoperations-b7d45-default-rtdb.firebaseio.com/${type}.json`)
            const gotdata = res.data;
            console.log(res.data)
            let arr = [];
            for (let i = 0; i < gotdata.length; i++) {
                if (i < 4) {
                    arr.push(gotdata[i])
                } else {
                    break;
                }
            }
            setData(arr);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData(type)
    }, [type])
    console.log(data);
    return (
        <div className={style.BuyersChoice}>
            <div>
                <h1>Buyers' choice</h1>
                <div className={style.linkProvider}>
                    <div>
                        <p id={type == "Sofas" ? style.selectedEffect : ""} onClick={() => { setType("Sofas") }}>SOFAS</p>
                        <p id={type == "Beds" ? style.selectedEffect : ""} onClick={() => { setType("Beds") }}>BEDS</p>
                        <p id={type == "ChildrenFurniture" ? style.selectedEffect : ""} onClick={() => { setType("ChildrenFurniture") }}>CHILDREN FURNITURE</p>
                        <p id={type == "ArmChair" ? style.selectedEffect : ""} onClick={() => { setType("ArmChair") }}>ARMCHAIRS AND POUFS</p>
                    </div>
                    <div>
                        <h2>GO TO CATALOG</h2>
                    </div>
                </div>
                <div className={style.cardWrapper}>
                    {
                        data.map((e) => {
                            return (
                                <div key={e.id}>
                                    <img src={e.image} alt="" />
                                    <p> from ₹{e.price} </p>
                                    <h3 >{e.title}</h3>
                                    <div>
                                        <h4 onClick={() => { AddDetailsObj(dispatch, e.id); navigate(`/product/productdetails/${type}/${e.id}`) }}>Details</h4>
                                        <button onClick={() => { dispatch(addToCart([{ ...e, qty: 1 }])) }}>Buy Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BuyersChoice