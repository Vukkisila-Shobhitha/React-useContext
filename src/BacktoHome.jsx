import React from 'react'
import { Link } from 'react-router-dom'
import backbtn from './assets/backbtn.png'


const BacktoHome = () => {
  return (
    <>
      <Link to={"/"} className='BacktoHome'>
        <h5 className='BacktoHome card-subtitle mb-2 mt-2 text-body-secondary'>
          <img src={backbtn} alt="" />
          Back to Home
        </h5>
      </Link>
    </>
  )
}

export default BacktoHome