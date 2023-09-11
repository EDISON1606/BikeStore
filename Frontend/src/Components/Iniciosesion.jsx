import React, { useState } from 'react'
import * as  yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

const Iniciosesion = () => {
  const schema = yup.object().shape({

  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  async function Login(dataLogin){
      console.log(dataLogin)
     try {
       const response = await fetch('http://localhost:3060/clientes', {
         method:'POST',
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           correo,
           contraseña
         })
       })
       .then((response)=> {
         if (!response) {
           console.log('No se recibio una respuesta')
         }
         if (response.ok) {
           console.log('Bienvenido a BikeStore')
         } else if(response.status === 401){
           console.log('El correo o la contraseña son incorrectas')
         }
       })
       .catch((err) => console.log('hay un err', err))
     } catch (err) {
       console.log(err);
     }
  }

  return (
    <div className='fondo-ini2'>
      <div className="formulario">
      <h1>Bienvenido a Bike Store!</h1>
      <form method="POST" onSubmit={handleSubmit(Login)}>
        <div className="username" value={1}>
          <input type="email" placeholder=' ' name="correo" {...register("correo")}/> 
            <label>Correo electronico</label>
        </div>
        <div className="username" value={2}>
          <input type="password" placeholder=' ' name="contraseña" {...register("contraseña")}/>
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
