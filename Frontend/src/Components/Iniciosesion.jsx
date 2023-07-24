import React from 'react'

const Iniciosesion = () => {
  return (
    
      <div className="formulario">
      <h1>Inicio de sesion</h1>
      <form method="post">
        <div className="inicioS">
          <input type="text" required/> 
            <label>Correo electronico</label>
        </div>
        <div className="contraseña">
          <input type="password" required/>
            <label>Contraseña</label>
        </div>
        <div className='recordar'>Restablecer contraseña</div>
        <input type="submit" value="Iniciar"/>
        <div className='Registrarse'>
          <a href="#">Registrarse</a>
        </div>
      </form>
    </div>
   
    
  )
}


export default  Iniciosesion
