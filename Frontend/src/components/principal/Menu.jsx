import React from "react";

export default function Menu(){
   
return(
  
    <div className="menu_principal">
    <button className='filter-btn'>
    Filtro
  </button>
  <div className='menu'>
  <ul className='list_uno'>
                <li>
                    <h6>Categorias</h6>
                </li>
                <li>
                <select className="categorias_uno">
<option className="opcion_uno" value="bicicletas">Bicicletas</option>
<option className="A" value="montana">Montaña</option>
<option className="opcion_uno" value="ruta">Ruta</option>
<option className="A" value="bmx">BMX</option>
<option className="opcion_uno" value="ninos">Niños</option>
<option className="A" value="gravel">Gravel</option>
</select>
                </li>
                <li>
                    <select className="categorias_uno">
                        <option className="opcion_uno" value="" >Marca</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Scott</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="oopcion_uno" value="">Trek</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Canyon</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Cannondale</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">BMC</option>
                    </select>
                </li>
                <li>
                    <select className="categorias_uno">
                        <option className="opcion_uno" value="" >Caracteristicas</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Carbon</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Aluminio</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Doble Suspencion</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Hard Tail</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">Frenos Disco</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">1x Transmision</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">2x Transmision</option>
                    </select>
                </li>
                <h6>Precios</h6>
                <div className='precios'>
                    <input type="number" id='precio' name='precio' />
                    <h5>Min</h5>
                    <input type="number" />
                    <h5>Max</h5>
                </div>
            </ul>
  </div>
  </div>

);
}