
import React from 'react';
import Cards from './components/principal/Cards';
import"./CSS/principal/Cards.css";
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards_detail from './components/Cards_detail';
import "./CSS/Cards_detail.css"



function App() {


  return (
    <>
    <Router>
    <Routes>
        <Route path='/detail'  element={<Cards_detail/>}/>
        <Route path='/' element={<Cards/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
