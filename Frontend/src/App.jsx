import React from 'react';
import Nabvar from './Components/Nabvar';
import "./CSS/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Iniciosesion from "./Components/Iniciosesion";
import "./CSS/InicioS.css";
import "../hooks/Boton"


function App() {

  return (
   <>
    <Router>
    <Nabvar/>
      <Routes>
        <Route path='/Inicio' element={<Iniciosesion/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
