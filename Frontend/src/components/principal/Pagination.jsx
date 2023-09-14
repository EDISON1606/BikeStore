import React from "react"
import flecha1 from '../../img/flecha-correcta.png';
import flecha2 from '../../img/flecha-izquierda.png';

export default function pagination() {

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



<div className='pagination'>
<h3>Pagina:</h3>
              <button className="btn-inicio"><img src={flecha2} /></button>
              <div className='btn-selector'>
                  <input type="text" value="1" className="numeropagina" disabled="true"></input>
              </div>
              <button className="btn-final"><img src={flecha1} /></button>
</div>
    );
}