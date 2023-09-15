import React from 'react';
import Nabvar from './Components/Nabvar';
import "./CSS/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Iniciosesion from "./Components/Iniciosesion";
import "./CSS/InicioS.css";
import Registro from './Components/Registro';
import "./CSS/Registro.css";
import Footer from './Components/Footer';
import Carrito from './Components/carrito/Carrito';
import "./CSS/Carrito.css";
import "./CSS/footer.css";
import Productos from './Components/Cards'
import Detalles from './Components/Cards_detail'
import "./CSS/Cards.css"
import "./CSS/Cards_detail.css"


function App() {

  return (
   <>
    <Router>
    <Nabvar/>
      <Routes>
      <Route path='/' element={<Productos/>}/>
      <Route path='/Home' element={<Productos/>}/>
      <Route path='/Detalles' element={<Detalles/>}/>
        <Route path='/Inicio' element={<Iniciosesion/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
