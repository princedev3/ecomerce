import React from 'react'
import "./Home.css"


const Home = ({productItems,addProduct}) => {
  return (
    <div className='home-card'>
        <div className='card-element'>
        {productItems.map(item=>(
            <div className='card-container'>
                <div className='card'>
                    <img src={item.image} alt="hello"/>
                         <h3>
                             {item.name}
                         </h3>

                             <p> <span>$</span>{item.price}</p>
                <div className='card-btn'>
                    <button onClick={()=>addProduct(item)}>
                        Add Cart
                    </button>
                </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}


export default Home
//{}[]