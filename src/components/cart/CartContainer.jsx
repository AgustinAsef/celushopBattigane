import React, {useContext} from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

export default function CartContainer(){

    const {cartCount, buyAll, removeAll} = useContext (CartContext);

    if (cartCount !== 0) {    
        return( 
            <>
                <div>
                    <h3><p><strong>Productos en tu carrito:{cartCount}</strong></p></h3>
                    <Cart/>
                    <button onClick={() => buyAll()}>Comprar</button>
                    <button onClick={() => removeAll()}>Eliminar carrito</button>
                </div>
            </>
        ) 
    }else{
        return(
            <>
                <div>
                    <h1><strong>No hay productos en tu carrito¡¡</strong></h1>
                </div>
            </>
        )
    }
}