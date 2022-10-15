import React from 'react'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="background-image">
    <div className="col-md-6 col-6  mx-auto ">
     <div className="overlay ">
     <h1 className='mernStack1'>Welcome to Developer Site</h1>
     <h2 className='mernStack'>I am Mern Stack developer</h2>
     <Link to="/login"> <button className='explore'>Explore</button> </Link>
     </div>
    </div>
    </div>
    </>
  )
}

export default Home
