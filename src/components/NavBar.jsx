import React from "react";
import "../styles/NavBar.css"
import CartWidget from "./cart/CartWidget";

export default function NavBar() {
    
    return(
        <>
        <nav className="nav">
            <section className="navSection">
                <div className="navSectionDiv">
                    <img src="" alt="" className="navImg"/>
                    <p className="navTittle"><strong>CELUSHOP</strong></p>
                </div>
                <div className="navSectionDiv">
                    <button className="navButton">Productos</button>
                    <button className="navButton">Servicio Tecnico</button>
                    <button className="navButton">Contacto</button>
                    <CartWidget/>
                </div>
            </section>
        </nav>
        </>
    )
    
}