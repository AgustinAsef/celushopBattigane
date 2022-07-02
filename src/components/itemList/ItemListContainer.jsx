import React, {useEffect, useState} from "react";
import { productsList } from "../ProductsPromise";
import ItemList from "./ItemList"

export default function ItemListContainer() {
    
    const [products, setProducts] = useState([])


    useEffect(()=>{
        productsList
        .then(res => setProducts(res))
        .catch(err => console.log(err)) 
        console.log(products);
    },[])

    return(
        <>
        <ItemList products={products}/>
        </>
    )
}
