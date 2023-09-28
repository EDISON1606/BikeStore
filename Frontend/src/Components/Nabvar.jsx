import React, {useState} from "react";
import LogoB from "../Img/Logo.png";
import Logoin from "../Img/ingresar.png";
import Logomeg from "../Img/megusta.png";
import Carrito from "../Img/Carrito.png";
import Lupa from "../Img/lupa.png";
import { Link, useNavigate } from "react-router-dom";
import Iniciosesion from './Iniciosesion';



export default function Nabvar() {

  
  const navigate = useNavigate();

  const redireccionar = (event) => {
    const opcionSeleccionada = event.target.value;
    
    if (opcionSeleccionada === 'opcion1') {
      navigate('/Inicio');
    } 
    else if (opcionSeleccionada === 'opcion2') {
      navigate('/Registro');
    }
  };

    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
        <div className="logob"><Link to={"./"}><img src={LogoB} id="logo"/></Link></div>
        <div className="Contener-busqueda">
        <div className="Barra-buscas">
        <input type="search" id="Buscar" placeholder=" Busqueda"  onchange="error(event)"/>
        <button id="btn_buscar" onclick="ejecutar()"> <img src={Lupa} className="lupa"></img></button>
    </div>
    </div>
    <div className="icon3">
    <div className="ini2">
                    <abbr title="Opciones"><li><a href="#"><img src={Logoin} alt="inicio/registro" id="logoin"/></a></li>
                    <select id="selector" onChange={redireccionar}>
                      
                        <option value="opcion0"></option>
                        <option value="opcion1">Inicio   </option> 
                        <option value="opcion2">Registro</option>
                        </select></abbr>
                      </div>
                      <div className="car">
                    <abbr title="Carrito2"><a href="./Carrito"><img src={Carrito} id="Carrito"  /></a></abbr>
                    </div>
                   
      <header className="App-header">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`line line1`} />
          <div className={`line line2`} />
          <div className={`line line3`} />
        </div>
        <nav className={`menu2 ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Atencion al cliente</a></li>
          </ul>
        </nav>
      </header>
      
</div>
            <div className="menu">
                <ul className="list">
                    <li className="aten">
                        <a href="/">Atencion al cliente</a>
                    </li>
                    <div className="ini">
                    <abbr title="Opciones"><li><a href="#"><img src={Logoin} alt="inicio/registro" id="logoin"/></a></li>
                    <select id="selector" onChange={redireccionar}>
                        <option value="opcion0"></option>
                        <option value="opcion1">Inicio</option> 
                        <option value="opcion2">Registro</option>
                        </select></abbr>
                      </div>
                    <li className="meg">
                    <abbr title="Favoritos"><a href="/"><img src={Logomeg} id="logomeg"  /></a></abbr>
                    </li>
                    <li className="car">
                    <abbr title="Carrito"><a href="./Carrito"><img src={Carrito} id="Carrito"  /></a></abbr>
                    </li>
                </ul>
            </div>
    </nav>
    )
}