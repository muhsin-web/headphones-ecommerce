import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
<<<<<<< HEAD
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const navbar = () => {
  const {showCart, setShowCart, totalQuantity} = useStateContext()
=======

const navbar = () => {
>>>>>>> 005cf73b953e0ca79299e90364d7b5ecc052016c
  return (
    <div className="navbar-container">
        <p className="logo">
            <Link href="/">MKD Headphones</Link>
        </p>

<<<<<<< HEAD
        <button type='button' className='cart-icon' onClick={()=> setShowCart(true )}>
            <AiOutlineShopping />

            <span className="cart-item-qty">{totalQuantity}</span>
        </button>

        {showCart && <Cart/>}
=======
        <button type='button' className='cart-icon' onClick="">
            <AiOutlineShopping />

            <span className="cart-item-qty">1</span>
        </button>
>>>>>>> 005cf73b953e0ca79299e90364d7b5ecc052016c
    </div>
  )
}

export default navbar