import React from 'react'
import Home from './Home'
import About from './About'
import { Route,Routes } from 'react-router-dom'
import Cart from './Cart'

const Rout = ({productItems,cartItem,addProduct,removeProduct,clearCart={clearCart}}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home productItems={productItems} addProduct={addProduct}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart cartItem={cartItem} addProduct={addProduct} removeProduct={removeProduct} clearCart={clearCart}/>}/>
        </Routes>
    </div>
  )
}

export default Rout