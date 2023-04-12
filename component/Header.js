import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill} from "react-icons/bs"
import { FaBars,FaTimes} from "react-icons/fa"
import "./Header.css"

const Header = ({cartItem}) => {
    const[mobile,setMobile]= useState(false)
    const handleclick = ()=>setMobile(!mobile)

const remove = ()=>{
    setMobile(false)
}
  return (

    <div className='header'>
        <h1>
            <Link to="/" className='logo'>
                filma-X
            </Link>
        </h1>
        <div className='togglebar' onClick={handleclick}>
        {
            mobile?<FaTimes/>:<FaBars/>
        }
        </div>
        <div className={mobile? "header-links active":"header-links"}>
            <ul>
                <li><Link className='link' to="/" onClick={remove}>Home</Link></li>
                <li><Link className='link' to="/about" onClick={remove}>About us</Link></li>
                <li><Link className='link' to="/cart" onClick={remove}><BsCartFill/><span>{cartItem.length}</span></Link></li>
            </ul>
        </div>
       
    </div>
  )
}

export default Header

//{}[]