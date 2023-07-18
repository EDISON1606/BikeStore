import React from "react";
import LogoB from "../Img/Logo.png"
import Logoin from "../Img/ingresar.png"
import Logomeg from "../Img/megusta.png"

export default function Nabvar() {
    return (
        <nav className="navbar">
        <img src={LogoB} id="logo" />
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i><img id="imgtoggler" src="./Img/NavBar/toggler.png" /></i></label>
            <div className="menu">
                <ul className="list">
                    <li>
                        <a>Atencion al cliente</a>
                    </li>
                    <img src={Logoin} id="logoin"  />
                    <img src={Logomeg} id="logomeg"  />
                  
                    <li className="listacerca">
                        <a href="./Pages/acerca_de.html"> ACERCA DE</a>
                    </li>
                    <li>
                        <a href="./Pages/Busqueda.html"><button class="btnlupa"><img id="lupa" src="./Img/NavBar/lupa.png" /></button></a>
                    </li>
                </ul>
            </div>
    </nav>
    )
}