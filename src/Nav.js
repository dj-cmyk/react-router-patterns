import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({dogs}) => {
    const dogLink = dogs.map((d) => (<NavLink exact to={`/dogs/${d.name}`} className="Nav" key={uuidv4()}>{d.name}</NavLink>))
    
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs" className="Nav">
        Home
      </NavLink>
      {dogLink}
    </nav>
  );
}

export default Nav;