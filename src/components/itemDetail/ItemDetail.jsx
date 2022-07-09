import React from "react";
import "../../styles/ItemDetail.css"

export default function ItemDetail({product}) {

    return(
        product.map((product)=>(
            <div className="itemDetailContiner">
                <div className="itemDetailImgContainer">
                    <img src={product.img} alt="" className="itemDetailImg"/>
                </div>
                <div className="itemDetailDescriptionContainer">
                    <h1>{product.name}</h1>
                    <hr />
                    <p>Description: {product.description}</p>
                    <p>Color: {product.color}</p>
                    <hr />
                    <div className="itemDetailPriceContainer">
                        <h3>Valor: {product.price}</h3>
                    </div>
                    <button className="itemDetailBuyButton"><strong>Agregar al carrito</strong></button>
                </div>
            </div>
            ))
    )
}