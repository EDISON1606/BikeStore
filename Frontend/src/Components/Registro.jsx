import React from 'react';
import * as  yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

const shema = yup.object().shape({
  nombres: yup.string().required('debes ingresar al menos tu primer nombre'),
  apellidos: yup.string().required('debes ingresar al menos tu primer apellido'),
  correo: yup.string().email('correo no valido').required('correo requerido'),
  contraseña: yup.string().min(8, '8 caracteres como minimo').required('contraseña requerida'),
  confirmar: yup.string().min(8, 'Confirma tu contraseña').oneOf([yup.ref('contraseña'), null], 'Las contraseñas deben coincidir').required()
})

const Registro = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(shema),
  });


  async function onSubmit (DataRegister) {
    console.log(DataRegister)

    try{
      const response = await fetch ('http://localhost:3060/clientes' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataRegister)
      });
      if (response.ok){
        console.log(DataRegister);
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

  return (
    <div className='fondo-ini'>
      <div className="formulario2">
      <h1>Registrate en Bike Store!</h1>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="username2" value={1}>
          <input type="text" placeholder=' ' name="nombres" {...register('nombres')} /> 
            <label>Nombres</label>
        </div>
        <span className='error'>{errors.nombres?.message}</span>
        <div className="username2" value={2}>
          <input type="text" placeholder='' name="apellidos"  {...register('apellidos')} />
            <label>Apellidos</label>
        </div>
        <span className='error'>{errors.apellidos?.message}</span>
        <div className="username2" value={3}>
          <input type="email" placeholder='' name="correo"  {...register('correo')} />
            <label>Correo electronico</label>
        </div>
        <span className='error'>{errors.correo?.message}</span>
        <div className="username2"  value={4}>
          <input type="password" placeholder='' name="contraseña"  {...register('contraseña')} />
            <label>Contraseña</label>
        </div>
        <span className='error'>{errors.contraseña?.message}</span>
        <div className="username2" value={5}>
          <input type="password" placeholder=' ' name="confirmar"  {...register('confirmar')}  />
            <label>Confirmar contraseña</label>
        </div>
        <span className='error'>{errors.confirmar?.message}</span>
        <input  className="Registro" type="submit" value="Registrate"/>
        <div className='inicia'>
        ¿Ya tienes cuenta? <a href="./Inicio">Inicia Sesion</a>
        </div>
      </form>
    </div>
    </div>
  ) 
}

export default  Registro