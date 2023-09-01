import React from 'react'
import Bici1 from '../img/bici1 31.png'

export default function Cards_detail (){

    return(
        <div className='cards_detail'>
         <img src={Bici1} className='bici2'/>
         <h1>Bicicleta de montaña marlin 5  2022</h1>
         <h2>Vendido por BikeStore</h2>
         <h3>$ 2.299.000</h3>  
            <div className='menu_detail'>
            <ul className='list_dos'>
                    <li>
                        <h6>Talla:</h6>
                        <select className="talla" >
                            <option className="opcion_uno" value="" >XS</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_dos" value="">S</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_tres" value="">M</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_cuatro" value="">L</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_cinco" value="">XL</option>
                            <option className="A" value="" disabled="true"></option>
                        </select>
                    </li>
                    <li>
                        <h6>Color:</h6>
                        <select className="talla" >
                            <option className="opcion_uno" value="" ></option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_dos" value="">Rojo</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_tres" value="">Blanco</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_cuatro" value="">Negro</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_cinco" value="">Azul</option>
                            <option className="A" value="" disabled="true"></option>
                        </select>
                    </li>
                    </ul>
                    <div className='colores'>
                    <button className='color-1'></button>
                        <button className='color-2'></button>
                        <button className='color-3'></button>
                        <button className='color-4'></button>
                        </div>
                    <div className='contador'>
                    <button className="btn-menos">-</button>
                    
                    <div className='btn-numer'>
                        <input type="text" value="1" className="numer-produ" disabled="true"></input>
                    </div>
                 
                    <button className="btn-más">+</button>
                    <p>Máximo 20 Unidades</p>
                    </div>
     
                </div>      
                <button className='btn2'>Agregar Carrito</button>                              
        </div>
        
    );
};
