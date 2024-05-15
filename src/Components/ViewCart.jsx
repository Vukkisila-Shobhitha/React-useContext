/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ViewCart.css";
import { useContext } from "react";
import { cartContext } from "../App";

const ViewCart = () => {
  const {cart, setCart}= useContext(cartContext);
  const [total, setTotal] = useState(0);
 

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  const removeCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, quantity: parseInt(quantity) } : product
      )
    );
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.images} alt={product.title} />
            </div>
            <div className="cart-product-details">
              <h3>{product.title}</h3>
            </div>
            <div className="cart-quantity">
              <select
                className="quantity"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button onClick={() => removeCart(product.id)}>Remove</button>
              <div className="price">
                <p>Price: ${cart.includes(product.quantity === 1) ?product.price : product.price * product.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h1>Total Amount: ${total}</h1>
      </div>
    </>
  );
};

export default ViewCart;