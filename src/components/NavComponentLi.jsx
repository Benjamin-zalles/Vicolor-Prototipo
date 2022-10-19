import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '../stylesheets/navLi.css'

export default function NavComponentLi(props) {
  return (



    <li className="navli" >
        <NavLink
        to={props.direction}
        end
        className= {({ isActive }) => (isActive ? "active" : "noactive")} id="hola"
        >

        <img src={`${props.iconUno}`} />
        
        {props.linkName} 
        
        </NavLink>
    </li>
  )
}
