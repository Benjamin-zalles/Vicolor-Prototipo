import "../stylesheets/home.css";
import eye from "../img/eye.png";
import Principales from "../components/componentesHome/Principales";
import imgC from "../img/c.svg";
import TypeDalto from '../components/componentesHome/TypeDalto'
import Prota from "../img/protanopia.svg"
import Deuta from '../img/deuteranopia.svg';
import Trita from '../img/tritanopia.svg';
import Acro from '../img/acromatico.svg';

// import formas
import circleFill from '../img/formas-home/circle-fill.svg'
import circlePoints from '../img/formas-home/circle-points.svg'
import circleStroke from '../img/formas-home/circle-stroke.svg'
import circle from '../img/formas-home/circle.svg'
import circlesStroke from '../img/formas-home/circles-stroke.svg'
import curve from '../img/formas-home/curve.svg'
import mediaLuna from '../img/formas-home/media-luna.svg'
import next from '../img/formas-home/next.svg'
import trianguloContorno from '../img/formas-home/triangulo-contorno.svg'
import trianguloLineas from '../img/formas-home/triangulo-lineas.svg'

import circle001 from '../img/formas-home/circle001.svg'
import circle002 from '../img/formas-home/circle002.svg'
import circle003 from '../img/formas-home/circle003.svg'
import circle004 from '../img/formas-home/circle004.svg'


import trabajo from '../img/lugar-de-trabajo.gif';

export default function Home() {
  return (
    <>

    <div className="box-primary">
      <div className="text-home">
        <h1 className="vicolor-h1">
          <span>Vi</span>Color
        </h1>
        <h4>
          ViColor es un sitio creado para brindar información acerca del uso
          correcto del color para la deficiencia visual.
        </h4>
        <p>
          Para el sector de personas con discromatopsia (Incapaz de distinguir
          toda la gama cromatica). Para que el diseño tome encuenta a este
          sector y se conozca como implementar estos métodos.
        </p>

        {/* <h2>
          <span className="numero">350</span>{" "}
          <span className="millones">MILLONES DE</span>{" "}
          <span className="daltonicos">DALTÓNICOS</span>{" "}
          <span className="en">EN</span>{" "}
          <span className="mundo">TODO EL MUNDO</span>
        </h2> */}
      </div>

      <div className="box-img">
        <img src={circleFill} className="form-1"/>
        <img src={circlePoints} className="form-2"/>
        <img src={circleStroke} className="form-3"/>
        <img src={circle} className="form-4"/>
        <img src={circlesStroke} className="form-5"/>
        <img src={curve} className="form-6"/>
        <img src={mediaLuna} className="form-7"/>
        <img src={next} className="form-8"/>
        <img src={trianguloContorno} className="form-9"/>
        <img src={trianguloLineas} className="form-10"/>
      </div>
    </div>
    

    <h2 className="temas-principales">Temas principales</h2>
    


    {/* Box secundary */}
    <div className="box-secundary">
        <Principales
          img={imgC}
          altName='imagen'
          section='Color'
          linkName='Manejo de color'
          contenido='Consejos generales del uso del color.'
          linkPage='/color'
        />

        <Principales
          img={imgC}
          altName='imagen'
          section='Color'
          linkName='Consulta de colores'
          contenido='Mezclas incorrectas de colores para daltonicos.'
          linkPage='/colorChecker'
        />

        <Principales
          img={imgC}
          altName='imagen'
          section='Color'
          linkName='Relacion de contraste'
          contenido='Constraste del color para mejor accesibilidad.'
          linkPage='/contrastRatio'
        />

        <Principales
          img={imgC}
          altName='imagen'
          section='Tipografía'
          linkName='Reglas Tipograficas'
          contenido='Reglar para manejar correctamente la tipografía.'
          linkPage='/tipografia'
        />

        <Principales
          img={imgC}
          altName='imagen'
          section='Color'
          linkName='Manejo de color'
          contenido='Consejos generales del uso del color.'
          linkPage='/tipografia'
        />
    </div>




    {/* Box tertiary */}
    <div className="box-tirtiary">
      <div className="info-daltonismo">
      <h2>¿Qué es el Daltonismo?</h2>
      <p>El daltonismo es una insuficiencia visual que inhabilita la capacidad de distinguir varios colores. Como resultado de la transmisión hereditaria, el daltonismo deriva de una deficiencia genética asociada con el cromosoma X.
      </p>
      <p>La condición a menudo se denomina daltonismo, en honor a John Dalton, el científico que, en el siglo XVIII, describió por primera vez la patología y que era daltónico.</p>
      </div>
    </div>



    {/* Box fourth */}
    <div className="box-fourth">
      <div className="fourth-one">
      <h3><span className="el">El </span> 
      <span className="dalto">daltonismo </span> 
      <span className="origen">tiene un origen </span> 
      <span className="genetico">genético </span> 
      <span className="relacionado">relacionado con el </span> <span className="cromosoma">cromosoma </span> 
      <span className="x">X.</span></h3>
      </div>

      <div className="fourth-two">
      <h3>afecta aproximadamente a 1 de cada 12 hombres y 1 de cada 200 mujeres.</h3>
      </div>
    </div>



    {/* Box fifth */}
    <div className="box-fifth">
      <div className="type-daltonismo">
        <h2>Tipos de daltonismo</h2>
        <p>Afecta a la discriminación de tonos de manera similar a la protanopia, pero sin el efecto de atenuación. Una vez más, se encuentra en aproximadamente el 10% de la población masculina.
        </p>
      </div>
      <div className="img-circles">
        <img src={circle001} className="circle001"/>
        <img src={circle002} className="circle002"/>
        <img src={circle003} className="circle003"/>
        <img src={circle004} className="circle004"/>
      </div>
    </div>



    {/* Box type blinders */}
    <h2 className="types-comunes">Existen algunos tipos mas comunes de daltonismo</h2>
    
    <div className="box-sixth">
      <TypeDalto
        titleDalto='Protanopia'
        imgDalto={Prota}
      />
      <TypeDalto
        titleDalto='Deuteranopia'
        imgDalto={Deuta}
      />
      <TypeDalto
        titleDalto='Tritanopia'
        imgDalto={Trita}
      />
      <TypeDalto
        titleDalto='Acromatico'
        imgDalto={Acro}
      />
    </div>

    <div className="proceso">

    <h1 className="proceso-construcción">En proceso de construcción....</h1>
    <img src={trabajo}/>
    </div>
    </>
    
  );
}
