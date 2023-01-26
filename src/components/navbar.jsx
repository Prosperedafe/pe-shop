import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link className="logo">
          Art
          <br />
          Museum
        </Link>
        <ul className={open ? "links open-nav" : "links"}>
          <li onClick={() => setOpen(!open)}>
            <Link to="/shop">Shop</Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to="/exhibition">Exhibition</Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link className="cart-route" to="/cart">
              Cart
              <ShoppingCart size={25} />
            </Link>
          </li>
        </ul>
        <div onClick={() => setOpen(!open)} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
