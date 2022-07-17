import React, {useContext} from "react";
import { CartContext } from "./CartContext";

export default function Cart(){
  
    const {cart, removeToCart} = useContext (CartContext);

    return(
    cart.map((cart) => (
        <tr>
            <td>
                <p><img src={cart.imagen} alt="" /></p>
                <p>{cart.name}</p>
            </td>
            <td>
                <p>Precio: {cart.price}</p>
            </td>
            <td>
                <p>Cantidad: {cart.count}</p>
                <button onClick={()=>removeToCart(cart.id)}>remove item</button>
            </td> 
        </tr>         
    ))
)}