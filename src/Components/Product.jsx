/* eslint-disable react/prop-types */
import { cartContext } from "../App";
import "./Product.css";
import { useContext } from "react";

 const Product = ({ product }) => {
const {cart, setCart}= useContext(cartContext);

    const addCart =()=>{
        const newCart = [...cart, product];
        setCart(newCart);
       
    };
   

    const removeCart =()=>{
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };
  return (
    <div>
      <div className="product">
        <div className="img">
          <img src={product.images} alt={product.title} />
        </div>
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price"><b>Price: </b>${product.price}</p>
          {cart.includes(product) ? <button className="btnRemove" onClick={removeCart}>Remove Cart</button>:<button className="btnAdd" onClick={addCart}>Add to Cart</button>}
          
        </div>
      </div>
    </div>
  );
};
export default Product;