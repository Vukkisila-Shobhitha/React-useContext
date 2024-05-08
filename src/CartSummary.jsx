import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const CartSummary = () => {
  const { totalQuantity, totalPrice, shippingFee } = useContext(DataContext);

  return (
    <>
      <div className="card product-border mt-2" >
        <div className="card-body">
          <h5 className="card-title mb-5 text-body-secondary">Cart Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Total Quantity</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>{(totalQuantity).toLocaleString()}</h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Sub-Total</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>&#8377; {(totalPrice).toLocaleString()}.00</h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <h6 className='card-subtitle mb-2 text-body-secondary'>Shipping</h6>
            {
              totalPrice < 500 ?
                <h6 className='card-subtitle mb-2 text-body-secondary'>Free</h6> :
                <h6 className='card-subtitle mb-2 text-body-secondary'>&#8377; {shippingFee}.00</h6>
            }
          </div>

          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Total Price</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>&#8377; {(totalPrice + shippingFee).toLocaleString()}.00</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSummary