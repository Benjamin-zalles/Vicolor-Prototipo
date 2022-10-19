import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/styleCard-home/principales.css'

export default function Principales(props) {
  return (
    <div className="card-principal">
      <div className="part-one">
        {/* <img src={props.img} alt={props.altName} /> */}
        <p>{props.section}</p>
      </div>

      <div className="part-two">
        <h5>{props.linkName}</h5>
        <p>{props.contenido}</p>
      </div>

      <div className="part-three">
        <Link to={props.linkPage}>Ver mas</Link>
      </div>
    </div>
  )
}
