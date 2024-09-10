import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import {addToBasket, calculateBasket} from '../redux/slices/basketSlice'



function ProductDetails() {

  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product)
  const { price, image, title, description } = selectedProduct;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  const addBasket =()=>{
    const payload={
      id,
      price,
      image,
      title,
      description,
      count

    }
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  }



  useEffect(() => {
    getProductById();

  }, [])

  const getProductById = () => {
    products && products.map((product) => {
      if (product.id == id) {
        dispatch(setSelectedProduct(product));

      }

    })

  }

  return (

    <div style={{ marginTop: "45px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <div style={{ marginRight: "46px" }} >
        <img src={image} style={{ width: "300px", height: "450px" }} />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial", }} >{title}</h1>
        <p style={{ fontFamily: "arial", fontSize: "25px" }}> {description} </p>
        <h2 style={{ fontSize: "48px", fontFamily: "arial", fontWeight: "bold", color: "blue" }}>{price} ₺</h2>
        <div>
          <FaSquareMinus onClick={decrement} style={{ fontSize: "24px", marginLeft: "9px",cursor:"pointer" }} />
          <span style={{ fontSize: "25px", fontWeight: "bolder", paddingBottom: "20px" }}>{count}</span>
          <FaSquarePlus onClick={increment} style={{ fontSize: "24px", marginRight: "9px",cursor:"pointer" }} />


        </div>
        <div>
          <button
          onClick={addBasket}
            style={{ marginTop: "28px", border: "none", padding: "9px", background: "rgb(106, 90, 205)", color: "#fff", borderRadius: "6px", cursor:"pointer" }}>Sepete Ekle</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails