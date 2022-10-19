import "../stylesheets/navbar.css";
//Icon no active
import homeNoActive from "../assets/home-noactive.svg";
import colorNoActive from "../assets/color-noactive.svg";
import typeNoActive from "../assets/tipografia-noactive.svg";
import aboutNoActive from "../assets/nosotros-noactive.svg";
import bxColor from "../assets/bx-color.svg";
import bxsColorFill from "../assets/bxs-color-fill.svg";
import helpNoActive from "../assets/ayuda-noactive.svg";
import vicolorIcon from '../assets/Vicolor-icon.svg';
import burger from '../assets/burger.svg';
import NavComponentLi from "../components/NavComponentLi";
import NavVicolor from '../components/NavVicolor'
import NavHelp from '../components/NavHelp'
import homeActive from '../assets/home-active.svg';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [nameLink, setNameLink] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen)
    setNameLink(!nameLink)
  };
  


  return (
    <nav className={isOpen ? 'sidebar' : 'sidebarClose'}>
        
      
        <img src={burger} className={isOpen ? 'burger' : 'burgerPosition'} 
        onClick={toggle}
          />
        
        <div className={isOpen ? 'caja' : 'cajaClose'}></div>

        <NavVicolor
        linkName='ViColor'
        />
      
      <div className="menu-principal">
        <ul className="list-nav">
          <NavComponentLi 
            direction="/" 
            iconUno={homeNoActive}
            linkName='Home'
            />

          <NavComponentLi
            direction="/color"
            iconUno={colorNoActive}
            linkName='Color'
          />

          <NavComponentLi
            direction="/contrastRatio"
            iconUno={bxsColorFill}
            linkName='Contraste'
          />
          
          <NavComponentLi
            direction="/colorChecker"
            iconUno={bxColor}
            linkName='Consulta'
          />
          
          <NavComponentLi
            direction="/tipografia"
            iconUno={typeNoActive}
            linkName='Tipografia'
          />

          {/* <NavComponentLi
            direction="/nosotros"
            iconUno={aboutNoActive}
            linkName='Nosotros'
          /> */}

        </ul>
      </div>
    </nav>
  );
}
