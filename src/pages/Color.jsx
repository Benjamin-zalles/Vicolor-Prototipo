import {Link} from 'react-router-dom';
import computer from '../img/computer.png';
import '../stylesheets/colorpage.css';
import CombinationsColor from '../components/componentesColor/CombinationsColor';
import ruedaCromatica from '../img/rueda-cromatica.svg';
import rueda1 from '../img/rueda1.svg';
import rueda2 from '../img/rueda2.svg';
import rueda3 from '../img/rueda3.svg';

// import formas
import circleFill2 from '../img/formas-home2/circle-fill.svg';
import circlePoints2 from '../img/formas-home2/circle-points.svg';
import circleStroke2 from '../img/formas-home2/circle-stroke.svg';
import circleStroke22 from '../img/formas-home2/circle-stroke2.svg';
import circleWhite2 from '../img/formas-home2/circle-white.svg';
import circleStrokes2 from '../img/formas-home2/circles-strokes.svg';
import line2 from '../img/formas-home2/line.svg';
import medioArco2 from '../img/formas-home2/medio-arco.svg';
import trianguloStroke2 from '../img/formas-home2/triangulo-stroke.svg';
import triangulo2 from '../img/formas-home2/triangulo.svg';

import paleta from '../img/paleta-de-pintura.gif'

export default function Color() {
  return (
    <>
    <div className="page-color">
      <div className="img-forms-color">
        <img src={circleFill2} className="svg1"/>
        <img src={circlePoints2} className="svg2"/>
        <img src={circleStroke2} className="svg3"/>
        <img src={circleStroke22} className="svg4"/>
        <img src={circleWhite2} className="svg5"/>
        <img src={circleStrokes2} className="svg6"/>
        <img src={line2} className="svg7"/>
        <img src={medioArco2} className="svg8"/>
        <img src={trianguloStroke2} className="svg9"/>
        <img src={triangulo2} className="svg10"/>
      </div>
      <div className="presentacion-page-color">
        <h1>Uso del color en la web</h1>
        <p>El daltonismo es una deficiencia de la visión que afecta a un gran numero de personas en todo el mundo. Ya sea que lo sepamos o no, nosotros como diseñadores tenemos un gran impaacto en sus vidad diarias a través del trabajo que creamos y desarrollamos a nuestro alrededor.</p>
      </div>
    </div>

    <div className="container-color-pages">
        
        <div>
          <h1>El Color</h1>
          <p>El color influye en el espacio, afecta nuestras decisiones de compra, la forma en que nos relacionamos con los demás y nuestra propia energía y lo que transmitimos con la ropa que utilizamos</p> 
          <br/>
          <p>Muchos diseñadores, desarrolladores, creador de contenido, creador de proyectos y otras personas se involucran en el diseño de la página y toman la percepción del color a la ligera, pero es importante recordar que existe un gran porcentaje de la población que tiene problemas visuales relacionados con la percepción del color, como daltonismo.</p>
        </div>
          
        <div className="box-rueda-cromatica">
          <img src={ruedaCromatica} alt="" />
        </div>
    </div>


    <div className="container-color-pages-2">
      <div className="combinaciones-section-one">
        <div className="combinaciones-content">
          <h1>Malas Combinaciones</h1>
          <p>Estas son algunas de las combinaciones que se debe de evitar porque dependiendo del tipo de daltonismo, no podran diferenciar poco o casi nada.</p>
          <h3>Habitualmente, la combinación de colores más crítica es la roja y verde. </h3>
        </div>


        <div className="combinaciones-colores">
          <h3>Normal</h3>
          <div className="b-c">
            <div className="b-green"></div>
            <div className="b-red"></div>
          </div>
          <h3>Protanopía</h3>
          <div className="b-c">
            <div className="b-green-prota"></div>
            <div className="b-red-prota"></div>
          </div>
        </div>
      </div>


      <div className="combinaciones-section-two">
        <div className="box-level-uno">
        
          <div className="box-level-two-1">
            <div className="box-level-three-1">
              <div className="box-level-four">
                <img src={rueda1} />
                <h3>A</h3>
                <p>A. Diseño Original</p>
              </div>
              <div className="box-level-four">
                <img src={rueda2} />
                <h3>B</h3>
                <p>B. Visualzación para un daltónico</p>
              </div>
              <div className="box-level-four">
                <img src={rueda3} />
                <h3>C</h3>
                <p>C. Diseño optimizado</p>
              </div>
            </div>
            <div className="box-level-three-2">
              <p>El color juega un papel integral en el diseño de la interfaz de usuario. Cuando se hace bien, mejora la experiencia del usuario, este aspecto influye en las decisiones de compra y repercute en la imagen de la marca.</p>
            </div>
          </div>
        
          <div className="box-level-two-2">
            <p>Si bien alguna de las siguientes mezclas es parte de tu marca y tu línea gráfica no quiere decir que lo deseches, pero simplemente puedes optar por usar solo uno de esos colores sobre un fondo de otro color como blanco o negro para el contenido en texto.</p>
          </div>
        </div>
      </div>



      <div className="combinaciones-section-three">
        <div className="section-three-content">
          <p>Cuando diseñas cualquier tipo de material de comunicación, debes considerar el hecho de que no todas las personas serán capaces de procesar la información del mismo modo</p>
        </div>

        <div className="section-three-combinations">
          <div>
            <CombinationsColor
              backgroundUno='#54A8F6'
              backgroundDos='#8A00BA'
            />
          </div>
          <div>
            <CombinationsColor
              backgroundUno='#8B69F9'
              backgroundDos='#FFEF62'
            />            
          </div>
          <div>
            <CombinationsColor
              backgroundUno='#63AA30'
              backgroundDos='#891523'
            />
          </div>
        </div>
      </div>
    </div>

    <div className="proceso2">

    <h1 className="proceso-construcción2">En proceso de construcción....</h1>
    <img src={paleta}/>
    </div>
    </>
  );
}
