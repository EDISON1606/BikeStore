import React from 'react';
import Nabvar from './Components/Nabvar';
import "./CSS/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Iniciosesion from "./Components/Iniciosesion";
import "./CSS/InicioS.css";
import Registro from './Components/Registro';
import "./CSS/Registro.css";
import Footer from './Components/Footer';
import "./CSS/footer.css";


function App() {

  return (
   <>
    <Router>
    <Nabvar/>
      <Routes>
        <Route path='/Inicio' element={<Iniciosesion/>}/>
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
