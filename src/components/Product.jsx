import React from 'react'
import '../css/Product.css'
import {useNavigate} from 'react-router-dom'


function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate= useNavigate();


  return (
    <div className='card' >
      <img className='image' src={image} />
      <div>
        <p style={{ textAlign: "center", height: "55px" }} >{title}</p>
        <h2 style={{ textAlign: "center", height: "20px" }} > {price} ₺</h2>
      </div>
      <div>
        <button onClick={()=>navigate("/product-details/"+id)} className='button-detay' >Ürün Detayı</button>
      </div>



    </div>
  )
}

export default Product