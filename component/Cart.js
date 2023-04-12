import React from 'react'
import "../component/Cart.css"

const Cart = ({cartItem,addProduct,removeProduct,clearCart}) => {
    const total = cartItem.reduce((acu,curr)=> acu + curr.price*curr.quantity,0)
  return (
    <div className='cart-container'>
        <button className='clear-cart' onClick={()=>clearCart()}>clear Cart</button>
        <div className='cart-element'>
            <div className='cart-element-top'>
                <h3>List of Items</h3>
           
                 {cartItem.length===0 && (<p> no item selected </p>)}

            </div>
            <div className='cart-botton'>
            {cartItem.map(item=>(
                <div className='cart-botton-item'>
                <div className='cart-botton-list'>
                      <img src={item.image} alt={item.name}/>
                      <h2>{item.name}</h2>
                      <h3>{item.price} *{ item.quantity}</h3>
                
                    <div className='cart-btn-list'>
                        <button onClick={()=>addProduct(item)}>+</button>
                        <button onClick={()=>removeProduct(item)}>-</button>
                    </div>
                </div>
            </div>
            ))}
            <div className='cart-total-list'>
                <div className='cart-line'></div>
                <div className='cart-total'><span>Total Price</span>${total}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart