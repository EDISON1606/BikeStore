import React, { useState } from 'react'
import * as  yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import Footer from '../Components/Footer';
import "../CSS/Footer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Iniciosesion = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({

  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  async function Login(dataLogin){
      console.log(dataLogin)
      let correo = dataLogin.correo
      let contraseña = dataLogin.contraseña
     try {
       const response = await fetch('http://localhost:3060/inicio', {
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
           toast.success("Bienvenido a BikeStore")
           setIsRegistered(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
         } else if(response.status === 401){
           console.log('El correo o la contraseña son incorrectas')
           toast.error('El correo o la contraseña son incorrectas', {
            position: "top-center",
            autoClose: 2050,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            closeButton: false,
            });
         }
       })
       .catch((err) => console.log('hay un err', err))
     } catch (err) {
       console.log(err);
     }
  }

  return (
    <>
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
        <input type="submit" value="Ingresar"/>
        <div className='Registrarse'>
        ¿Aun no tienes cuenta? <a href="Registro">Registrate aqui</a>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
    <ToastContainer
position="top-center"
autoClose={2050}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover={false}
theme="light"
limit={1}
/>
    </>
  )
}


export default  Iniciosesion
