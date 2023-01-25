import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link className="logo">
          Art
          <br />
          Museum
        </Link>
        <ul className="links">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/exhibition">Exhibition</Link>
          </li>
          <li>
            <Link className="cart-route" to="/cart">
              Cart
              <ShoppingCart size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
