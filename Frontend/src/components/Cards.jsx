import React from 'react'
import Bici from '../img/Bici 33.png'
import Bici1 from '../img/bici1 31.png'
import Bici2 from '../img/bici2 31.png'
import flecha1 from '../img/flecha-correcta.png'
import flecha2 from '../img/flecha-izquierda.png'

export default function Cards() {
    return (
        <div className='Principal'>
            <button className='filter-btn'>Filtro</button>
            <div className="menu">
                <ul className='list'>
                    <li>
                        <h6>Categorias</h6>
                    </li>
                    <li>
                        <select className="categorias" onchange="redireccionamiento(event);">
                            <option className="opcion" value="" >Bicicletas</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Montaña</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Ruta</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">BMX</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Niños</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">Gravel</option>
                        </select>
                    </li>
                    <li>
                        <select className="categorias" onchange="redireccionamiento(event);">
                            <option className="opcion" value="" >Marca</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Scott</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Trek</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Canyon</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Cannondale</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">BMC</option>
                        </select>
                    </li>
                    <li>
                        <select className="categorias" onchange="redireccionamiento(event);">
                            <option className="opcion" value="" >Caracteristicas</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Carbon</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Aluminio</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Doble Suspencion</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion" value="">Hard Tail</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">Frenos Disco</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">1x Transmision</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">2x Transmision</option>
                        </select>
                    </li>
                    <h6>Precios</h6>
                    <div className='precios'>
                        <input type="number" id='precio' name='precio' />
                        <h5>Min</h5>
                        <input type="number" />
                        <h5>Max</h5>
                    </div>
                </ul>
            </div>
            <div className='opcion'>
                <li>
                    <h4>Ordenado por</h4>
                    <select className="recomendado" onchange="redireccionamiento(event);">
                        <option className="opcion" value="" >Recomendados</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion" value="">precio de menor a mayor </option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion" value="">precio de mayor a menor</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion" value="">Marca</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion" value="">Nuevo Producto</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">Los mejore evaluados</option>
                    </select>
                </li>
                <div class="pagination">
                    <h3>Pagina:</h3>
                    <button className="btn-inicio"><img src={flecha2} /></button>
                    <div className='btn-selector'>
                        <input type="text" value="1" className="numeropagina" disabled="true"></input>
                    </div>
                    <input type="text" value="2" className="numeropagina" disabled="true"></input>
                    <input type="text" value="3" className="numeropagina" disabled="true"></input>
                    <input type="text" value="64" className="numeropagina" disabled="true"></input>
                    <button className="btn-final"><img src={flecha1} /></button>
                </div>
            </div>


                <div className='products'>
                    <div className='cards-products'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                    <div className='cards-products'>
                        <img src={Bici} className='bici' />
                        <h2>Bicicleta de montaña marlin 5  2022</h2>
                        <p>Próximamente</p>
                        <h3>$ 2.299.000</h3>
                        <button className='btn'>Agregar Carrito</button>
                    </div>
                </div>
            </div>


)
}