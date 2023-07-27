import React from "react";
import LogoB from "../Img/Logo.png";
import Logoin from "../Img/ingresar.png";
import Logomeg from "../Img/megusta.png";
import Carrito from "../Img/Carrito.png";
import Lupa from "../Img/lupa.png";
import Menu from "../Img/menu.png";
import { useNavigate } from "react-router-dom";

export default function Nabvar() {

    const navigate = useNavigate();

    const redireccionar = ()=>{

        navigate("/Inicio");
    }

    

    return (
        <nav className="navbar">
        <img src={LogoB} id="logo" />
        <div className="Contener-busqueda">
        <div className="Barra-buscas">
        <input type="search" id="Buscar" placeholder=" Busqueda"  onchange="error(event)"/>
        <button id="btn_buscar" onclick="ejecutar()"> <img src={Lupa}></img></button>
    </div>
    </div>
    <label for="toggler"><i><img id="imgtoggler" src={Menu} /></i></label>
            <div className="menu">
                <ul className="list">
                    <li className="aten">
                        <a>Atencion al cliente</a>
                    </li>
                    <div className="ini">
                    <li><a href="#"><img src={Logoin} alt="inicio/registro" id="logoin"/></a></li>
                    <li><select id="" onChange={redireccionar}>
                        <option value="0"></option>
                        <option className="inicio">Inicio</option>
                        <option value="2">Registro</option>
                        </select></li>
                      </div>
                    <li className="meg">
                    <img src={Logomeg} id="logomeg"  />
                    </li>
                    <li className="car">
                    <a href="/Inicio" ><img src={Carrito} id="Carrito"  /></a>
                    </li>
                  
                </ul>
            </div>
    </nav>
    )
}