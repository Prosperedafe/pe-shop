import PRODUCTS from "../../products";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <div className="shop-title">
        <h1>p-Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
