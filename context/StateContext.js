import React, {createContext, useContext, useState, useEffect} from 'react'
import { toast, Toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) => {
    const[showCart, setShowCart] = useState(false);
    const[cartItem, setCartItem] = useState([]);
    const[totalPrice, setTotalPrice] = useState(0);
    const[totalQuantity, setTotalQuantity] = useState(0);
    const[qty, setQty] = useState(1)

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = (cartItem.find((item) => item._id === product._id));

        if(checkProductInCart) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity +  quantity)

            const updatesCartItem = cartItem.map((cartProuct) => {
                if(cartProuct._id === product._id) return {
                    ...cartProuct, quantity: cartProuct.quantity + quantity
                }
            })
            setCartItem(updatesCartItem)
        }else{
            product.quantity = quantity;
            setCartItem([...cartItem, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    const onRemove = (product) => {
        foundProduct = cartItem.find((item) => item._id === product._id)
        const newCartItem = cartItem.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity)
        setCartItem(newCartItem)
    }
    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItem.find((item) => item._id === id)
        index = cartItem.findIndex((product) => product._id === id)

        const newCartItem = cartItem.filter((item) => item._id !== id)

        if(value == 'inc'){
            setCartItem([...newCartItem, {...foundProduct, quantity:foundProduct.quantity + 1}])

            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)

            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1)

        }else if(value == 'dec'){
            if(foundProduct.quantity > 1){
                setCartItem([...newCartItem, {...foundProduct, quantity:foundProduct.quantity - 1}])

                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
    
                setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1)
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty - 1
        });
    }

    return (
        <Context.Provider
        value={{
            showCart,
            cartItem,
            totalPrice,
            totalQuantity,
            qty,
            setShowCart,
            decQty,
            incQty,
            onAdd,
            onRemove,
            toggleCartItemQuantity,
            setCartItem,
            setTotalPrice,
            setTotalQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)