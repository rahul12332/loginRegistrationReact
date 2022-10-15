import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
export default function Navbar() {
  const [user, setUser]=useState({});
console.log(user)

useEffect(()=>{
  const fetchData= async()=>{
   const response = await fetch('/about')
   const jsonData = await response.json()

   if(response.ok){
       setUser(jsonData)
   }
  }
  fetchData();
},[])

  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signout">logout</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    
    </>
  )
}
