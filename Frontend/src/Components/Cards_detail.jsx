import React from 'react';
import Bici1 from '../img/bici1 31.png';
import Bici2 from '../img/bici2 31.png';
import flecha3 from '../img/flecha-correcta.png';
import flecha4 from '../img/flecha-izquierda.png';
import Footer from '../Components/Footer';
import "../CSS/Footer.css";
export default function Cards_detail (){
    
  
    return(
        <>
        <div className='todooo'>
        <div className='cards_detail'>
         <img src={Bici1} className='bici1'/>
         <h1>Bicicleta de montaña marlin 5  2022</h1>
         <h2>Vendido por BikeStore</h2>
         <h3>$ 2.299.000</h3>  
            <div className='menu_detail'>
            <ul className='list_dos'>
                    <li>
                        <h6>Talla:</h6>
                        <select className="talla" >
                        <option className="opcion_cero" value="" ></option>
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
     
                </div>      
                <button className='btn2'>Agregar Carrito</button>  


                <div className='informe'>
                        <h1>Información del articulo</h1>
        
                        <h1>Especificaciones</h1>
                </div>

                <div className='carousel_princ'>
                        <h1>Recomendados</h1>
                        <button className="btn-initiation" ><img src={flecha4} /></button>
                      <div className='Carousel'>
                    <div className='product_caro'>
                    <img src={Bici2} className='bici2' />
                        <h4>Bicicleta de montaña marlin 5  2022</h4>
                        <h3>$ 2.299.000</h3>
                        <button className='btn3'>Agregar Carrito</button>
                    </div>
                    <div className='product_caro'>
                    <img src={Bici2} className='bici2' />
                        <h4>Bicicleta de montaña marlin 5  2022</h4>
                        <h3>$ 2.299.000</h3>
                        <button className='btn3'>Agregar Carrito</button>
                    </div>
                    <div className='product_caro'>
                    <img src={Bici2} className='bici2' />
                        <h4>Bicicleta de montaña marlin 5  2022</h4>
                        <h3>$ 2.299.000</h3>
                        <button className='btn3'>Agregar Carrito</button>
                    </div>
                    <div className='product_caro'>
                    <img src={Bici2} className='bici2' />
                        <h4>Bicicleta de montaña marlin 5  2022</h4>
                        <h3>$ 2.299.000</h3>
                        <button className='btn3'>Agregar Carrito</button>
                    </div>
                    <div className='product_caro'>
                    <img src={Bici2} className='bici2' />
                        <h4>Bicicleta de montaña marlin 5  2022</h4>
                        <h3>$ 2.299.000</h3>
                        <button className='btn3'>Agregar Carrito</button>
                    </div>
                    <button className="btn-end"><img src={flecha3} /></button>             
                </div>
                </div>     
                </div> 
                </div>
               
                </>
    );
};
