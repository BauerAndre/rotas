import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <h2>Sujeito Dev</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
