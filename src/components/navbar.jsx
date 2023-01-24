import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
