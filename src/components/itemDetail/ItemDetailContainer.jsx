import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import { productsList } from "../ProductsPromise";
import ItemDetail from "./ItemDetail";
 
export default function ItemDetailContainer() {

    const {id}= useParams()

    const [product, setProduct] = useState([])


    useEffect(()=>{
        if (id) {
            productsList
            .then(res => setProduct(res.filter(product => product.id == id)))
            .catch(err => console.log(err)) 
        }else{
            <p>Selecciona un producto para ver en esta seccion</p>
        }

    },[id])

    return(
        <>
        <ItemDetail product={product}/>
        </>
    )
    
} 