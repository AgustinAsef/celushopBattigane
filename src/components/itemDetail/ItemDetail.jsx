import React, {useContext} from "react";
import "../../styles/ItemDetail.css"
import ItemCount from "../itemCount/ItemCount";

export default function ItemDetail({product}) {

        return(
            product.map((product)=>(
                <div className="itemDetailContiner" key={product.id}>
                    <div className="itemDetailImgContainer">
                        <img src={product.img} alt="" className="itemDetailImg"/>
                    </div>
                    <div className="itemDetailDescriptionContainer">
                        <h1>{product.name}</h1>
                        <hr />
                        <p>Description: {product.description}</p>
                        <p>Color: {product.color}</p>
                        <p>Stock Disponible: {product.stock}</p>
                        <hr />
                        <div className="itemDetailPriceContainer">
                            <h3>Valor: {product.price}</h3>
                        </div>
                        {<ItemCount product={product} stock={product.stock} initial={1} />}
                    </div>
                </div>
            ))
        )
    }