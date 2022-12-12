import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/contatos">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};
