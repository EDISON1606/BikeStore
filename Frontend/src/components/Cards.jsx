import React, { useState, useEffect } from 'react';
import Bici from '../img/Bici 33.png';
import flecha1 from '../img/flecha-correcta.png';
import flecha2 from '../img/flecha-izquierda.png';

export default function Cards() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const redireccionamiento = (event) => {
    const selectedValue = event.target.value;
    console.log('Categoría seleccionada:', selectedValue);
  };

  useEffect(() => {
    const inputelement = document.querySelector('.numeropagina');
    let pagina = parseInt(inputelement.value);

    const btnAnterior = document.querySelector('.btn-inicio');
    const btnSiguiente = document.querySelector('.btn-final');

    btnSiguiente.addEventListener('click', () => {
      if (pagina < 50) {
        pagina += 1;
     
        updatePageNumber(pagina);
        window.scrollTo(0, 0);
      }
    });

    btnAnterior.addEventListener('click', () => {
      if (pagina > 1) {
        pagina -= 1;
      
        inputelement.value = pagina;
        window.scrollTo(0, 0);
      } else {
        alert('No hay más páginas atrás');
      }
    });
  }, []); 

  function updatePageNumber(page) {
    const inputelement = document.querySelector('.numeropagina');
    inputelement.value = page;
  }

  return (
    <div className='Principal'>
      <button className='filter-btn' onClick={toggleFilters}>
        Filtro
      </button>
      <div className={`menu ${showFilters ? 'show' : ''}`}>
      <ul className='list_uno'>
                    <li>
                        <h6>Categorias</h6>
                    </li>
                    <li>
                    <select className="categorias_uno" onChange={redireccionamiento}>
    <option className="opcion_uno" value="bicicletas">Bicicletas</option>
    <option className="A" value="montana">Montaña</option>
    <option className="opcion_uno" value="ruta">Ruta</option>
    <option className="A" value="bmx">BMX</option>
    <option className="opcion_uno" value="ninos">Niños</option>
    <option className="A" value="gravel">Gravel</option>
</select>
                    </li>
                    <li>
                        <select className="categorias_uno" onChange={redireccionamiento}>
                            <option className="opcion_uno" value="" >Marca</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Scott</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="oopcion_uno" value="">Trek</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Canyon</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Cannondale</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="A" value="">BMC</option>
                        </select>
                    </li>
                    <li>
                        <select className="categorias_uno" onChange={redireccionamiento}>
                            <option className="opcion_uno" value="" >Caracteristicas</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Carbon</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Aluminio</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Doble Suspencion</option>
                            <option className="A" value="" disabled="true"></option>
                            <option className="opcion_uno" value="">Hard Tail</option>
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
      <div className='opcion_dos'>
      <li>
                    <h4>Ordenado por</h4>
                    <select className="recomendado" onChange={redireccionamiento}>
                        <option className="opcion_uno" value="" >Recomendados</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">precio de menor a mayor </option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">precio de mayor a menor</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Marca</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="opcion_uno" value="">Nuevo Producto</option>
                        <option className="A" value="" disabled="true"></option>
                        <option className="A" value="">Los mejore evaluados</option>
                    </select>
                </li>
      </div>
      <div className='pagination'>
      <h3>Pagina:</h3>
                    <button className="btn-inicio"><img src={flecha2} /></button>
                    <div className='btn-selector'>
                        <input type="text" value="1" className="numeropagina" disabled="true"></input>
                    </div>
                    <button className="btn-final"><img src={flecha1} /></button>
      </div>
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
    </div>
  );
}
