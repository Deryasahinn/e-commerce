import React from 'react'
import '../css/Header.css'
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

  const [theme, setTheme] = useState(false);
  const dispatch=useDispatch();

  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket)

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff"

    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black"
    }

    setTheme(!theme);

  }




  return (
    <div style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "space-between", }} >
      <div className='flex-row' onClick={() => navigate("/")} >
        <img className='logo' src="./src/images/sonlogo.png" />
        <p className='logo-text' >React</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type='text' placeholder='Arama' />

        {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}


        <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length}   color="primary">
          <FaShoppingBasket className='icon' />
        </Badge>


      </div>




    </div>
  )
}

export default Header;