import React from "react";
import Footer from "../Footer";
import "../../CSS/Footer.css";
const ResumenC = () => {
  return (
    <>
      <div className="cotenedor-resumen">
        <div className="carta-resumen">
          <h1 className="titulo-r">Resumen de orden</h1>
          <div className="info-res">
            <h2>Productos (1)</h2>
            <h2>Total: $1.299.000</h2>
          </div>
          <div className="boton-c">
            <input type="submit" value="Continuar con la compra" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumenC;
