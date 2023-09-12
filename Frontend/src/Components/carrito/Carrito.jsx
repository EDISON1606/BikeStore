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
            <p>
              Vendidio por BikeStore Talla
              <br></br>
              <br></br>
              $2.299.000
            </p>
          </div>
        </div>
      </div>
      <ResumenC></ResumenC>
    </>
  );
};

export default Carrito;
