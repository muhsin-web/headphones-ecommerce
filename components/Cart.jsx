import React from 'react'

import { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import { useStateContext } from '@/context/StateContext'
import { urlFor } from '@/lib/client'

import getStripe from '../lib/getStripe'
import { toast } from 'react-hot-toast'

const Cart = () => {

  const cartRef = useRef()
  const {totalPrice, toggleCartItemQuantity, totalQuantity, cartItem, setShowCart, onRemove} = useStateContext()

  const  handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/strip', {
      method: 'POST',
      body: JSON.stringify(cartItem),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
    });

    console.log(response)

    if(response.status == 500) return;

      const data = await response.json();
      toast.loading('Redirecting...')
  
      stripe.redirectToCheckout({sessionId: data.id})
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type = "button" className="cart-heading" onClick={()=>setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantity})</span>
        </button> 

        {cartItem.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={150}/>
            <h3>Your shopping cart is empty</h3>

            <Link href="/">
              <button type='button' className='btn' onClick={()=> setShowCart(false)}>Continue Shopping</button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItem.length >= 1 && cartItem.map((item, idnex) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image' />
             
             <div className="item-desc">
                <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                    <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                        <span className="minus">{item.quantity}</span>
                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                    </div>

                    <button onClick= {() => onRemove(item)}
                     type='button' className="remove-item"
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
             </div>
            </div>
          ))}
        </div>

        {cartItem.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>subtotal</h3>
              <h3>{totalPrice}</h3>
            </div>

            <div className="btn-container">
              <button className="btn" onClick={handleCheckOut}>Pay With Strip</button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart;