import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import { productsList } from "../ProductsPromise";
import ItemList from "./ItemList";
import "../../styles/ItemList.css";


export default function ItemListContainer() {
    
    const {categori}= useParams()

    const [products, setProducts] = useState([])

    useEffect(()=>{
        if (categori) {
            productsList
            .then(res => setProducts(res.filter(products => products.categori == categori)))
            .catch(err => console.log(err)) 
        }else{
            productsList
            .then(res => setProducts(res))
            .catch(err => console.log(err)) 
            console.log(products);
        }
    },[categori])
    

    return(
        <>
        <div className="productsLinkContainer">
            <NavLink to= "/productos/TPU" className={({isActive}) => (isActive ? "itemLinkActive" : "itemLinkNotActive" )}>Fundas</NavLink>
            <NavLink to= "/productos/CABLE" className={({isActive}) => (isActive ? "itemLinkActive" : "itemLinkNotActive" )}>Cables</NavLink>
            <NavLink to= "/productos/ACCESORIOS" className={({isActive}) => (isActive ? "itemLinkActive" : "itemLinkNotActive" )}>Accesorios</NavLink>
        </div>
        <div className="productContainer">
            <ItemList products={products}/>
        </div>
        </>
    )
}
