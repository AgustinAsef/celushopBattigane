import React from "react";
import "../../styles/Items.css";

export default function ItemList({products}){

    return(
        products.map((product) => (
            <button className="itemListButton">
                <div className="itemListDiv">
                    <p>{product.description}</p>
                </div>
                <div className="itemListDiv">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                </div>
            </button>
        ))
    )
}