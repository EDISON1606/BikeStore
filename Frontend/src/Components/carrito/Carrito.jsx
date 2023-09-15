import React from "react";
import bici from "../../Img/Bici 5.png";
import ResumenC from "./ResumenC";
import "../../CSS/ResumenC.css"

const Carrito = () => {
  return (
    <>
      <div className="contenedor-todo">
        <h1 className="titulo">Carrito (1) producto</h1>
        <div className="carta-carrito">
          <div className="bicicleta">
            <a href="#">
              <img src={bici} alt="inicio/registro" id="bici" />
            </a>
          </div>
          <div className="info">
            <h1>Bicicleta de montaña marlin 5 2022</h1>
            <br></br>
            <h2>
              Vendidio por BikeStore
              <br></br>
              <br></br>
              $2.299.000
            </h2>
            <div className="info2">
              <h2>Talla: M</h2>
              <h2 className="color-info">Color: Rojo</h2>
              <div className='contador'>
                    <button className="btn-menos">-</button>
                    
                    <div className='btn-numer'>
                        <input type="text" value="1" className="numer-produ" disabled="true"></input>
                    </div>
                 
                    <button className="btn-más">+</button>
                    <p>Máximo 20 Unidades</p>
                    </div>
            </div>
          </div>
        </div>
      </div>
     
      <ResumenC></ResumenC>
    </>
  );
};

export default Carrito;
