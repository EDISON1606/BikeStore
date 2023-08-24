import React from 'react'
/*
async function onSubmit(DataRegister){
  setIsLoader(true);
  console.log(DataRegister);
}
*/
  try {
    const response = await fetch('http://localhost:3060/registrar',{
      method: 'POST',
      headers: {
        'Content--Type': 'application/json'
      },
      body: JSON.stringify(DataRegister)
    });
  }
  finally{
    setIsLoader(false);
  }




const Registro = () => {
  return (
    <div className='fondo-ini'>
      <div className="formulario2">
      <h1>Registrate en Bike Store!</h1>
      <form method="post">
        <div className="username2" name="nombres" value={1}>
          <input type="text" placeholder=' ' required/> 
            <label>Nombres</label>
        </div>
        <div className="username2" name="apellidos" value={2}>
          <input type="text" placeholder=' ' required/>
            <label>Apellidos</label>
        </div>
        <div className="username2" name="correo" value={3}>
          <input type="Email" placeholder=' ' required/>
            <label>Correo electronico</label>
        </div>
        <div className="username2" name="contraseña" value={4}>
          <input type="Password" placeholder=' ' required/>
            <label>Contraseña</label>
        </div>
        <div className="username2" value={5}>
          <input type="Password" placeholder=' ' required/>
            <label>Confirmar contraseña</label>
        </div>
        <input  className="Registro" type="submit" value="Registrate"/>
        <div className='inicia'>
        ¿Ya tienes cuenta? <a href="./InicioSe">Inicia Sesion</a>
        </div>
      </form>
    </div>
    </div>
  ) 
}

export default  Registro