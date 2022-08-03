import { NavLink } from "react-router-dom";
import "./css/navbar.css";
const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </div>
  );
};

export default Navbar;
