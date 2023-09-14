import React, { useState, useEffect } from 'react';
import Bici from '../../img/Bici 33.png';
import Menu from './Menu'
import '../../CSS/principal/Menu.css'
import pagination from './Pagination';
import'../../CSS/principal/Pagination.css'

export default function Cards(){

    return(
        <>
        <Pagination></Pagination>
<div className='products'>
                       <div className='cards-products'>
                <a href='detail'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        </a>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                <a href='detail'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        </a>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                   
                    <div className='cards-products'>
                <a href='detail'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        </a>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                <a href='detail'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        </a>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
      </div>
      <Menu></Menu>
  </>
    );
}