import React from "react";
import LogoB from "../Img/Logo.png"
import Logoin from "../Img/ingresar.png"
import Logomeg from "../Img/megusta.png"
import Carrito from "../Img/Carrito.png"
import Lupa from "../Img/lupa.png"

export default function Nabvar() {
    return (
        <nav className="navbar">
        <img src={LogoB} id="logo" />
        <div className="Contener-busqueda">
        <div className="Barra-buscas">
        <input type="search" id="Buscar" placeholder=" Busqueda"  onchange="error(event)"/>
        <button id="btn_buscar" onclick="ejecutar()"> <img src={Lupa}></img></button>
    </div>
    </div>
            <div className="menu">
                <ul className="list">
                    <li className="aten">
                        <a>Atencion al cliente</a>
                    </li>
                    <li className="ini">
                    <img src={Logoin} id="logoin"  />
                    </li>
                    <li className="meg">
                    <img src={Logomeg} id="logomeg"  />
                    </li>
                    <li className="car">
                    <img src={Carrito} id="Carrito"  />
                    </li>
                </ul>
            </div>
    </nav>
    )
}