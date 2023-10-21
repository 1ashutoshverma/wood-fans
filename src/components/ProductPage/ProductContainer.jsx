import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./productContainer.module.css"
const ProductContainer = () => {
  const [data, setData] = useState([]);
  const fetching = () => {
    const res = axios.get("http://localhost:8080/sofas")
      .then((res) => { setData(res.data) })

  }
  const handleDetails = (ele) => {
    console.log(ele)
  }
  useEffect(() => { fetching() }, [])
  return (
    <div className={styles.container}>
      <h1>Sofas</h1>
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
              <button onClick={() => { handleDetails(ele) }}>Add to Cart


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