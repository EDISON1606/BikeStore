import React from "react";
import face from "../Img/facebook.png";
import x from "../Img/twitter-x.png";
import ig from "../Img/instagram.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="img-redes">
            <a className="facebook" href="#!">
              <img src={face} id="face" alt="face" />
            </a>
            <a className="X" href="#">
              <img src={x} id="equis" alt="X" />
            </a>
            <a className="instagram" href="#!">
              <img src={ig} id="inst" alt="ig" />
            </a>
          </div>

          <div className="text-terminos">
            <a>Términos y condiciones</a>
            <a>Política de cookies</a>
            <a>Política de privacidad</a>
          </div>
        </div>

        <div className="textcopy">© BikeStore Todos los derechos reservados.</div>
      </footer>
    </>
  ); 
}