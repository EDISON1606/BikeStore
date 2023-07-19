import React from 'react'
import Bici from '../img/Bici 33.png'
import Bici1 from'../img/bici1 31.png'
import Bici2 from'../img/bici2 31.png'
 export default function Cards (){
    return(
        <div className='Principal'>
        <div className="menu">
        <ul className="list">
            <li>
                <h1>Categorias</h1>
            </li>
            <li>
                <select className="categorias" onchange="redireccionamiento(event);">
                    <option  className="opcion" value="" >Bicicletas</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Montaña</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Ruta</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">BMX</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Niños</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="A" value="">Gravel</option>
                </select>
            </li>
            <li>
                <select className="categorias" onchange="redireccionamiento(event);">
                    <option  className="opcion" value="" >Marca</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Scott</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Trek</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Canyon</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Cannondale</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="A" value="">BMC</option>
                </select>
            </li>
            <li>
                <select className="categorias" onchange="redireccionamiento(event);">
                    <option  className="opcion" value="" >Caracteristicas</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Carbon</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Aluminio</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Doble Suspencion</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="opcion" value="">Hard Tail</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="A" value="">Franos Disco</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="A" value="">1x Transmision</option>
                    <option className="A" value="" disabled="true"></option>
                    <option  className="A" value="">2x Transmision</option>
                </select>
            </li>
            <h1>Precios</h1>

        </ul>
    </div>
    <div className='products'>
    <div className='cards-products'>
     <img src={Bici} id='bici'/>
     <h2>Bicicleta de montaña marlin 5  2022</h2>
     <p>Próximamente</p>
     <h3>$ 2.299.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 
 <div className='cards-products'>
     <img src={Bici1} id='bici'/>
     <h2>Bicicleta Urbana FX 2 WSD DISC 2021</h2>
     <p>Próximamente</p>
     <h3>$ 1.890.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>

 <div className='cards-products'>
     <img src={Bici2} id='bici'/>
     <h2>BICICLETA DE MONTAÑA FUEL EX 5</h2>
     <p>Próximamente</p>
     <h3>$ 8.490.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 <div className='cards-products'>
     <img src={Bici} id='bici'/>
     <h2>Bicicleta de montaña marlin 5  2022</h2>
     <p>Próximamente</p>
     <h3>$ 2.299.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 
 <div className='cards-products'>
     <img src={Bici1} id='bici'/>
     <h2>Bicicleta Urbana FX 2 WSD DISC 2021</h2>
     <p>Próximamente</p>
     <h3>$ 1.890.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>

 <div className='cards-products'>
     <img src={Bici2} id='bici'/>
     <h2>BICICLETA DE MONTAÑA FUEL EX 5</h2>
     <p>Próximamente</p>
     <h3>$ 8.490.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 <div className='cards-products'>
     <img src={Bici} id='bici'/>
     <h2>Bicicleta de montaña marlin 5  2022</h2>
     <p>Próximamente</p>
     <h3>$ 2.299.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 
 <div className='cards-products'>
     <img src={Bici1} id='bici'/>
     <h2>Bicicleta Urbana FX 2 WSD DISC 2021</h2>
     <p>Próximamente</p>
     <h3>$ 1.890.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>

 <div className='cards-products'>
     <img src={Bici2} id='bici'/>
     <h2>BICICLETA DE MONTAÑA FUEL EX 5</h2>
     <p>Próximamente</p>
     <h3>$ 8.490.000</h3>
     <button className='btn'>Agregar Carrito</button>
 </div>
 </div>
    </div>
    )
 }