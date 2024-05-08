import React, { useContext } from 'react'
import Rating from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const Product = ({ product }) => {

  const { addToCart } = useContext(DataContext)

  return (
    <div className="col-12 product-border border-1 rounded-3 p-2"
      style={{ maxWidth: "70%", Height: "250px", margin: "5px auto 5px auto" }}>
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <img src={product.thumbnail} className="card-img-top w-100" alt={product.title} />
        </div>
        <div className="col-lg-7 col-sm-12 d-flex justify-content-start align-items-center">
          <div>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {
                product.description
              }
            </p>
            <p>Brand : {product.brand}</p>
            <Rating
              count={5}
              size={24}
              activeColor="rgb(243 195 25)"
              value={parseInt(product.rating)}
            />
            <p className='fw-bold'>&#8377; {(product.price).toLocaleString()}.00
              <span className='ps-2'>({parseInt(product.discountPercentage)}% off)</span>
            </p>

          </div>
        </div>
        {
          (product.cart) ? (
            <div className="col-lg-2 col-sm-12 d-flex justify-content-center align-items-center">
              <Link to={"/cart"}>
                <button className='btn btn-danger'>Go to Cart</button>
              </Link>
            </div>
          ) : (
            <div className="col-lg-2 col-sm-12 d-flex justify-content-center align-items-center">
              <Link to={"/cart"} onClick={() => addToCart(product.id)}>
                <button className='btn btn-primary'>Add to Cart</button>
              </Link>
            </div>
          )
        }

      </div>

    </div>
  )
}

export default Product