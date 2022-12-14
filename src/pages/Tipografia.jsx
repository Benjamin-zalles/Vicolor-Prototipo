import '../stylesheets/styleComponentType/tipografiaPage.css';
import circle1 from '../img/circleType1.svg';
import circle2 from '../img/cricleType2.svg';
import { Link } from 'react-router-dom'

import pizarra from '../img/pizarra.gif'

export default function Tipografia() {
  return (
    <div className="container-tipography">

      {/* PRIMERA SECCION */}
      <div className="container-tipography-one">

        <div className="container-type-img">
          <div className="type-img1">
            <img src={circle1} className="img-type-1"/>
          </div>
          <div className="type-img2">
            <img src={circle2} className="img-type-2"/>
          </div>
        </div>
        11
        <div className="container-one-content">
            <h1>Manejo de Tipografía</h1>
            <p>La tipografía es la gran salvadora al momento de comunicar lo que el color no puede hacer, la gran mayoría de las personas pueden leer y de esa manera poder ejecutar acciones o tomar decisiones dentro de un producto digital. </p>
        </div>
      </div>


      {/* SEGUNDA SECCION */}
      <div className="container-tipography-two">
       
        <div className="tipography-two-1">
          <div className="content-1">
            <p>Antes que nada la tipografía para que sea 100% efectiva requiere que cumplir la relación de contraste (contrast ratio). </p>
          </div>
          <div className="content-2">
            <p>¿Por que?</p>
            <p>El hecho es, si no existe buen contraste de color puede dificultar la lectura hasta del mas grande texto.</p>
            <Link to='/color'>ir a contrast Ratio</Link>
          </div>
        </div>
       
        <div className="tipography-two-2">
          <div className="type-1">
            <p>Correcto</p>
            <p className="Aa">Aa</p>
          </div>
          <div className="type-1">
            <p>Incorrecto</p>
            <p className="Aa Aa-2">Aa</p>
          </div>
        </div>
      
      </div>

      <div className="proceso3">
        <h1 className="proceso-construcción">En proceso de construcción....</h1>
        <img src={pizarra}/>
      </div>

    </div>
  );
}
