import { NavLink } from 'react-router-dom'
import '../stylesheets/navhelp.css';

export default function NavHelp(props) {
  return (
    <ul className="navUlHelp">
      <li>
        <NavLink
          to={props.direction}
          end
          className="navHelp"
        >
          <img src={`${props.icon}`} />
          {props.linkName}
        </NavLink>
      </li>
    </ul>
  )
}
