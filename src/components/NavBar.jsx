import React from "react";
import "../styles/NavBar.css"
import CartWidget from "./cart/CartWidget";
import {NavLink} from "react-router-dom"

export default function NavBar() {
    
    return(
        <>
        <nav className="nav">
            <section className="navSection">
                <NavLink to="/" className="navLink">
                    <div className="navSectionDiv">
                        <img src="https://i.ibb.co/6rvTCdm/logo-Celushop.jpg" alt="" />
                        <p className="navTittle, navButton"><strong>Celushop</strong></p>
                    </div> 
                </NavLink>
                <div className="navSectionDiv">
                    <NavLink to="/productos" className={({isActive}) => (isActive ? "navLinkActive navLink" : "navNotActive, navLink")} ><p className="navButton">Productos</p></NavLink>
                    <NavLink to="/serviciotecnico" className={({isActive}) => (isActive ? "navLinkActive navLink" : "navNotActive, navLink")}><p className="navButton">Servicio Tecnico</p></NavLink>
                    <NavLink to="/contacto" className={({isActive}) => (isActive ? "navLinkActive navLink" : "navNotActive, navLink")}><p className="navButton">Contacto</p></NavLink>
                    <CartWidget/>
                </div>
            </section>
        </nav>
        </>
    )   
}