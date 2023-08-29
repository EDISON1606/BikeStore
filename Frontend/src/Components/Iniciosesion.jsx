import React from 'react'

const Iniciosesion = () => {
  return (
    <div className='fondo-ini2'>
      <div className="formulario">
      <h1>Bienvenido a Bike Store!</h1>
      <form method="post">
        <div className="username">
          <input type="email" placeholder=' ' required/> 
            <label>Correo electronico</label>
        </div>
        <div className="username">
          <input type="password" placeholder=' ' required/>
            <label>Contraseña</label>
        </div>
        <div className='recordar'><a href="#">Restablecer contraseña</a></div>
        <input type="submit" value="Ingresar"/>
        <div className='Registrarse'>
        ¿Aun no tienes cuenta? <a href="Registro">Registrate</a>
        </div>
      </form>
    </div>
    </div>
  )
}


export default  Iniciosesion
