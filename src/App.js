import React from 'react'
import Navbar from './conmponents/Navbar'
import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";

// import Contact from './conmponents/Contact';
import Home from './conmponents/Home';
import Signup from './conmponents/Signup';
import Login from './conmponents/Login'
import About from './conmponents/About';
import Signout from './conmponents/Signout';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <>
    <Navbar/>
     <Routes>
     <Route path='/' element={ <Home/>}/>

     {/* <Route path='/contact' element={ <Contact/>}/> */}
     <Route path='/signup' element={ <Signup/>}/>
     <Route path='/about' element={ <About/>}/>
     <Route path='/login' element={ <Login/>}/>
     <Route path='/signout' element={ <Signout/>}/>






     </Routes>
    </>
  )
}

