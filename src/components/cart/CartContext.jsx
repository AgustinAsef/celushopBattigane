import React, {createContext, useState} from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
     const [cart, setCart] = useState ([])

    const [cartCount, setCartCount] = useState (0)    

   const addToCart =(product)=>{
        if (cart.find(cart => cart.id == product.id)) {
            
            const index = cart.findIndex (cart => cart.id == product.id)
            
            cart.push(product.count)
            totalCart()
            console.log(index);
            
        } else {
            cart.push(product)
            totalCart()    
        }
    }

    const totalCart =()=>{
    setCartCount(cart.reduce ((total, item) => (total += item.count), 0))
    }

    const removeToCart = (id) =>{ 
        setCart(cart.filter(cart => cart.id !== id))
        totalCart()
    }

    const removeAll = () =>{
        setCart ([])
        totalCart()
    } 

    const buyAll = () =>{
       setCart ([])
       totalCart()   
    } 

    return (
        <>
        <CartContext.Provider  value={{cart, setCart, cartCount, addToCart, removeToCart, removeAll, buyAll}} >
            {children}
        </CartContext.Provider>
        </>
    )
} 