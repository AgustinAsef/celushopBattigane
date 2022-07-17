import React from "react";
import "../../styles/Items.css";
import {Link} from "react-router-dom"

export default function ItemList({products}){

    return(
        products.map((products) => (
            <div key={products.id}>
                <Link to={`/detalle/${products.id}`} className="itemListText">
                    <div>
                        <button className="itemListButton" >
                            <div className="itemListDiv">
                                <img src={products.img} alt="" className="itemListImg"/>
                            </div>
                            <div className="itemListDiv">
                                <h1>{products.name}</h1>
                                <p>{products.description}</p>
                                <p>Tipo: {products.class}</p>
                                <p>Color: {products.color}</p>
                                <h3>{products.price}</h3>
                            </div>
                        </button>
                       
                    </div>
                </Link>
            </div>
        ))
    )
}