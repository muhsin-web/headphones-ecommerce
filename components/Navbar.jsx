import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const navbar = () => {
  const {showCart, setShowCart, qty, totalQuantity} = useStateContext()

  return (
    <div className="navbar-container">
        <h1 className="logo">
            <Link href="/">Ara'scos</Link>
        </h1>

        <p className="logo">Natural Organic cosmetics</p>

        <button type='button' className='cart-icon' onClick={()=> setShowCart(true )}>
            <AiOutlineShopping />

            <span className="cart-item-qty">{totalQuantity}</span>
        </button>

        {showCart && <Cart/>}

    </div>
  )
}

export default navbar