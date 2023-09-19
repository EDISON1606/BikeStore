import React from "react";
import bici from "../../Img/Bici 5.png";
import ResumenC from "./ResumenC";
import "../../CSS/ResumenC.css";
import Footer from "../Footer";

const Carrito = () => {
  /*
  const [productCount, setProductCount] = useState(1);

 
  const incrementProductCount = () => {
    if (productCount < 20) {
      setProductCount(productCount + 1);
    } else {
      alert('No puedes agregar más de 20 productos');
    }
  };


  const decrementProductCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };
  */
  return (
    <>
    <div className="contenedor-titulo-cantidad">
      <h1 className="titulo">Carrito ({1}) producto</h1>
    </div>
      <div className="contenedor-principal-carrito">
        <div className="contenedor-todo">
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
                <div className="contador">
                  <button className="btn-menos">-</button>

                  <div className="btn-numer">
                    <input
                      type="text"
                      value="1"
                      className="numer-produ"
                      disabled="true"
                    ></input>
                  </div>

                  <button className="btn-más">+</button>
                  <p>Máximo 20 Unidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ResumenC></ResumenC>
      </div>
      <Footer/>
    </>
  );
};

export default Carrito;
