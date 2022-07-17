import React, {useState} from "react";
import { CartContext } from "../cart/CartContext";
import { useContext } from "react";
import "../../styles/ItemCount.css"

export default function ItemCount({stock, initial, product}) {
    
    const {addToCart} = useContext (CartContext);

    const [count, setCount] = useState(initial)

    const inCart = "true"

    function sumarProducto(){
        if (count < stock) setCount (count +1)
    }

    function restarProducto(){
        if (count > initial) setCount (count -1)
    }

    return(
        <div className="itemCountDivContainer">
            <div className="itemCountDiv">
                <button onClick={sumarProducto} className="itemCountButton"><h1>+</h1></button>
                <h1>{count}</h1>
                <button onClick={restarProducto} className="itemCountButton"><h1>-</h1></button>
            </div>
            <div className="itemCountDiv">
                <button className="itemCountBuyButton" onClick={()=>addToCart({...product, count, inCart }) } ><strong>Agregar al carrito</strong></button>
            </div>
        </div>
    );
}