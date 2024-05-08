import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import CartItem from './CartItem';
import BacktoHome from './BacktoHome';
import CartSummary from './CartSummary';

const Cart = () => {

  const { cartLists } = useContext(DataContext);

  return (
    <>
      <div className="container">
        {
          cartLists.length ? (
            <>
              <BacktoHome />
              <div className='row pt-3 pb-3'>
                <div className="col-lg-8 col-md-12 overflow-y-auto" style={{ height: "100vh" }}>
                  <ul className="list-group list-group-numbered cart-list">
                    {
                      cartLists.map((product) => <CartItem product={product} key={product.id} />)
                    }
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <CartSummary />
                </div>

              </div>
            </>
          ) : (
            <>
              <BacktoHome />
              <h2 className='text-center p-5'>Your Cart is Empty...</h2>
            </>
          )
        }

      </div>
    </>
  )

}

export default Cart