import React, {createContext, useContext, useState, useEffect} from 'react'
import { Toast } from 'react-hot-toast'

const context = createContext();

export const StateContext = ({children}) => {
    const[showCart, setShowCart] = useState(false);
    const[cartItem, setCartItem] = useState();
    const[totalPrice, setTotalPrice] = useState();
    const[totalQuantity, setTotalQuantity] = useState();
    const[qty, setQty] = useState(1)

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty + 1
        });
    }

    return (
        <context.Provider
        value={{
            showCart,
            cartItem,
            totalPrice,
            totalQuantity,
            qty,
            decQty,
            incQty
        }}>
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context)