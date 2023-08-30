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
                        
                    </li>
                    </ul>
                    <button className=''></button>
                </div>      
                <button className='btn2'>Agregar Carrito</button>                              
        </div>
    );
};
