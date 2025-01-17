import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink> <span> | </span>
      <NavLink to="/movies">Movies</NavLink> <span> | </span>
      <NavLink to="/directors">Directors</NavLink> <span> | </span>
      <NavLink to="/actors">Actors</NavLink> <span> | </span>
    </div>
  );
};

export default NavBar;
