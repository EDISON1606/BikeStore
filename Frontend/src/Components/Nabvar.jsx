import React from "react";
import Logo from "../Img/Logo.png"

export default function Nabvar() {
    return (
        <nav className="navbar">
        <img src={Logo} id="logo" />
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i><img id="imgtoggler" src="./Img/NavBar/toggler.png" /></i></label>
            <div className="menu">
                <ul className="list">
                    <li>
                        <a>Atencion al cliente</a>
                    </li>
                    <li>
                        <select className="categorias" onchange="redireccionamiento(event);">
                            <option  className="opcion" value="" >CATEGORIAS</option>
                            <option className="A" value="" disabled="true"></option>
                            <option  className="opcion" value="./Pages/Peliculas.html">Peliculas</option>
                            <option className="A" value="" disabled="true"></option>
                            <option  className="opcion" value="./Pages/Television.html">Television</option>
                            <option className="A" value="" disabled="true"></option>
                            <option  className="opcion" value="./Pages/Populares.html">Populares</option>
                            <option className="A" value="" disabled="true"></option>
                            <option  className="opcion" value="./Pages/Todo.html">Todo</option>
                        </select>
                    </li>
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