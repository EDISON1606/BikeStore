import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Footer from '../Components/Footer';
import "../CSS/Footer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Iniciosesion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    correo: yup.string().required('Correo electrónico es requerido'),
    contraseña: yup.string().required('Contraseña es requerida'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Verifica si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  async function Login(dataLogin) {
    console.log(dataLogin);
    let correo = dataLogin.correo;
    let contraseña = dataLogin.contraseña;

    try {
      const response = await fetch('http://localhost:3060/inicio', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correo,
          contraseña
        })
      });

      if (response.ok) {
        const { token } = await response.json();
        // Guarda el token en el localStorage al iniciar sesión
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        console.log('Bienvenido a BikeStore');
        toast.success("Bienvenido a BikeStore");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else if (response.status === 401) {
        console.log('El correo o la contraseña son incorrectas');
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
    } catch (err) {
      console.log(err);
    }
  }

  function Logout() {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // Otras acciones de cierre de sesión si es necesario
  }

  return (
    <>
      <div className='fondo-ini2'>
        <div className="formulario">
          {isAuthenticated ? (
            <>
              <h1>¡Bike Store!</h1>
              <input type="submit" onClick={Logout} value="Cerrar Sesion"/>
            </>
          ) : (
            <>
              <h1>Iniciar Sesión</h1>
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
              </form>
              <div className='Registrarse'>
                ¿Aún no tienes cuenta? <Link to="Registro">Regístrate aquí</Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
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
  );
}

export default Iniciosesion;
