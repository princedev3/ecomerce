import '../App.css'
import BacktoTop from './BacktoTop'
import data from "./Data"
import {BrowserRouter } from "react-router-dom"
import Rout from './Rout'

import Header from './Header'
import { useState } from 'react'
const SignupFormSucess = () => {

  const {productItems} = data

  const [cartItem,setCartItem]=useState([])

  const addProduct = (product)=>{
    const productExist= cartItem.find(item=>item.id===product.id)
    if(productExist){
      setCartItem(cartItem.map(item=>item.id ===product.id?
        {...productExist,quantity:productExist.quantity+1}:item))
    }else{
      setCartItem([...cartItem,{...product,quantity:1}])
    }
  }

  const removeProduct = (product)=>{
    const productExist = cartItem.find(item=>item.id === product.id)
    if(productExist.quantity===1){
     setCartItem( cartItem.filter(item =>item.id !==product.id))
    }else{
      setCartItem(cartItem.map(item=>item.id===product.id?{...productExist,quantity:productExist.quantity-1}:item))
    }
  }
  const clearCart= ()=>{
    setCartItem([])
  }

  return (
    <div>
      <BrowserRouter>

       <Header cartItem={cartItem}/>
       <Rout productItems={productItems} cartItem={cartItem} addProduct={addProduct} removeProduct={removeProduct} clearCart={clearCart}/>
      </BrowserRouter>
      <BacktoTop/>
    </div>
  )
}

export default SignupFormSucess