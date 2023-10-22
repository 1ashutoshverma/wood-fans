import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./productContainer.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './ProductReducer/action';
import { addToCart } from '../CartPage/redux/action';


const ProductContainer = () => {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
 const[type,setType]=useState("Sofas");
  const {productType}=useSelector((store)=>{return store.ProductReducer});
  const fetching =async () => {
    try {
    const res = await axios.get(`https://crudoperations-b7d45-default-rtdb.firebaseio.com/${productType}.json`)
    const jsonData=await (res.data);
    if(productType=="Beds"){
      setType("Beds");
    }
    else if(productType=="ChildrenFurniture"){
      setType("Children's furniture")
    }
    else if(productType=="ArmChair"){
      setType("ARMCHAIRS AND POUFS");
    }
    setData(jsonData);
    } catch (error) {
      console.log(error)
    }
  }
  const handleDetails = (ele) => {
    AddToCart(dispatch, ele)
  }
  useEffect(() => {
    fetching() }, [productType,type])


  return (
    <div className={styles.container}>
      <h1>{type}</h1>
      <div className={styles.singleCard}>
        {
          data.map((ele) => (<div key={ele.id}> 
            <img src={ele.image} alt="" />

            <div className={styles.nameDiv}>
              <h4>{ele.name}{ele.title}</h4>
              <p>RS {ele.price}</p>
            </div>
            <div className={styles.priceDiv}>
              <p style={{ "marginTop": "0em" }}>  <Link to={`productdetails/${ele.id}`}>More details</Link></p>
              <p> {ele.cost}</p>
              <button onClick={() => { dispatch(addToCart([{ ...ele, qty: 1 }])) }}>Add to Cart


              </button>

            </div>
          </div>
          ))
        }


      </div>
    </div>
  );
}

export default ProductContainer