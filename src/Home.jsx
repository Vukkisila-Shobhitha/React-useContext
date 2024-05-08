
import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Product from './Product'
import Footer from './Footer'

const Home = () => {

  const { products } = useContext(DataContext)

  return (
    <>
   
      <div className="container">
        <div className='row row-gap-3 pt-3 pb-3'>
          {
            products.map((product) => <Product product={product} key={product.id} />)
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home