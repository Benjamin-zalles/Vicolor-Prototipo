import { NavLink } from "react-router-dom";
import "../stylesheets/navVicolor.css";

export default function NavVicolor(props) {
  return (
    <div className="navUl">
      <div className="navUl-child">
        <h3>{props.linkName}</h3>
      </div>
    </div>
  );
}
