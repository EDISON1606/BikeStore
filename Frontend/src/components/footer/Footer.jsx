import React from "react";
import "../footer/Footer.css";
import "../registro/Registro.css";
import face from "../../assets/logos/facebook.png";
import tw from "../../assets/logos/gorjeo.png";
import ig from "../../assets/logos/instagram.png";

export default function Footer() {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="epaa">
            <div className="form-group">
              <label htmlFor="inputNombre">Nombre</label>
              <input type="text" className="form-control" id="inputNombre" />
            </div>
            <div className="form-group">
              <label htmlFor="inputApellido">Apellido</label>
              <input type="text" className="form-control" id="inputApellido" />
            </div>
            <div className="form-group">
              <label htmlFor="inputCelular">Celular</label>
              <input type="text" className="form-control" id="inputCelular" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Correo electrónico</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="form-group">
              <label htmlFor="inputFechaNacimiento">Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                id="inputFechaNacimiento"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="boton">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
        </div>
      <footer className="footer">
        <div className="container">
          <div className="img-redes">
            <a className="facebook" href="#!">
              <img src={face} alt="face" />
            </a>
            <a className="twitter" href="#">
              <img src={tw} alt="tw" />
            </a>
            <a className="instagram" href="#!">
              <img src={ig} alt="ig" />
            </a>
          </div>

          <div className="text-terminos">
            <a>Términos y condiciones</a>
            <a>Política de cookies</a>
            <a>Política de privacidad</a>
          </div>
        </div>

        <div className="text">© Todos los derechos reservados</div>
      </footer>
    </>
  ); 
}