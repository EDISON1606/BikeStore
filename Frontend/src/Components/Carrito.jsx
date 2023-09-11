import React from 'react'
import bici from '../Img/Bici 5.png'

const Carrito = () => {
  return (
   
    <div className='carta-carrito'>
    <div className='bicicleta'>
    <a href="#"><img src={bici} alt="inicio/registro" id="bici"/></a>
    </div>
    <div className='info'>
        <h1>Bicicleta de montaña marlin 5  2022</h1>
        <br></br>
        <p>Vendidio por BikeStore   Talla
          <br></br>
        <br></br>
        $2.299.000
        </p>

        </div>
    </div>
   
  )
}
export default Carrito
