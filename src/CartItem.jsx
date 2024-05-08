import React, { useContext } from 'react'
import DataContext from './context/DataContext';
import { MdDelete } from "react-icons/md";

const CartItem = ({ product }) => {

  const { removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useContext(DataContext)
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start mb-4 mt-2 product-border">
        <div className="cart-item">
          <img src={product.thumbnail} alt="" />
        </div>
        <div>
          <p className="fw-bold">{product.title}</p>
          <p>{
            product.description <= 25 ? product.description : `${(product.description).slice(0, 25)}...`
          }</p>
        </div>

        <div className='d-flex'>
          <a href="#">
            <span className="badge text-bg-primary rounded-pill me-3 mt-4 fw-bold"
              onClick={() => decreaseItemQuantity(`${product.id},${product.quantity},${product.price}`)}>
              -
            </span>
          </a>
          <p className='me-3 mt-4 fw-bold'>{(product.quantity).toLocaleString()}</p>
          <a href="#">
            <span className="badge text-bg-primary rounded-pill me-3 mt-4"
              onClick={() => increaseItemQuantity(`${product.id},${product.quantity},${product.price}`)}>
              +
            </span>
          </a>
        </div>

        <p className='me-3 mt-4 fw-bold'>&#8377;{(product.price).toLocaleString()}.00</p>
        <MdDelete className='delete_button mt-4 fw-bold' onClick={() => {
          removeFromCart(product.id)
        }} />
      </li>
    </>

  )
}

export default CartItem