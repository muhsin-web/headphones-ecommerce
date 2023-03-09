import React, {useState, useEffect} from 'react';
import { useStateContext } from "../context/StateContext";
import Link from 'next/link';

import{ BsBagCheckFill } from 'react-icons/bs';
import {runFirework} from '../lib/utils'

const Success = () => {
     const {setCartItem, setTotalPrice, setTotalQuantity} = useStateContext()

     useEffect(() =>{
          localStorage.clear();
          setCartItem([]);
          setTotalQuantity(0);
          setTotalPrice(0);
          runFirework();
     }, [])
     return(
          <div className='success-wrapper'>
               <div className='success'>
                    <p className='icon'>

                         <BsBagCheckFill/>
                    </p>
                         <h2>Thank you for your order!</h2>
                         <p>check you email inbox for your receipt</p>

                         <p className='description'>If you have any question please email
                         <a className='email' href ="mailto:muhsinabdulrasheed@gmail.com">muhsinabdulrasheed@gmail.com</a></p>

                         <Link href="/">
                              <button type='button' width ='360px' className='btn'>
                                        CONTINUE SHOPPING
                              </button>
                         </Link>
               </div>
          </div>
     )

}

export default Success;