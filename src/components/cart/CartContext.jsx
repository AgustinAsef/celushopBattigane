import React, {createContext, useState} from "react";
import swal from "sweetalert";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState ([])

    const [cartCount, setCartCount] = useState (0)    

   const addToCart =(product)=>{
        if (cart.find(cart => cart.id == product.id)) {

            swal("Se modificó el artículo correctamente.")

            
            const index = cart.findIndex (cart => cart.id == product.id)

            const remplace = cart.splice(index, 1, product)

            totalCart()

        } else {
            
            swal("Se agregó correctamente al carrito.", "si lo agregas nuevamente se modificará.")

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