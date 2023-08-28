import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

const schema  = yup 

async function onsumit (dataregister){
  try{
    const response = await fetch('http://localhost:3060/Clientes', {
      method: 'POST' ,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataregister)
    });
    if (response.ok){
      console.log("Usuario registrado con exito")
    }
    else {
      console.log("Error al registrar Front")
    }
  }
  catch(error){
    console.error("Error al conectar con el servidor", error)
  }

}



const Registro = () => {
  return (
    <div className='fondo-ini'>
      <div className="formulario2">
      <h1>Registrate en Bike Store!</h1>
      <form method="post" onSubmit={onsumit}>
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