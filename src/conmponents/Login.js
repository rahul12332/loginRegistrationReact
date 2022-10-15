import React from 'react'
import { useState } from 'react';
import login from "../images/login.svg";
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const loginUser= async (e)=>{  // in this part we fetch or post data into data base remember pxory api add in json and cors add in backend
          e.preventDefault();
          const res = await  fetch('/signin', {
        method:"POST",
        headers:{
          "Content-Type": "application/json" },
       body:JSON.stringify({       // convert the json object into string the database can not be understand json file
           email, password               //  here we can field and value one one email is data base one is user register email
        })
       }) ;
       const data = await res.json();
       console.log(data)
       // now we can the fucncion in main function

       if(res.ok){
        
        console.log("password is match")
            window.alert("successfull ")
            navigate('/about')
          }
          else{
            window.alert("invalid credentails")
          }
            
      
            
  }
  return (
    <>
          <div className="continer-fluid mt-5 about-style" id="aboutid">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto ">
            <div className="section">
            <h2 className="text-center ">Login</h2>
            <div className="row">
              {/* {{!-- leftside --}} */}
              <div className="col-md-5 md-12 hero-image  align-items-center flex-column ">
                <figure id="image">
                  <img src={login} width="90%" alt="" />
                </figure>
                <Link to="/Signup"><h4 className="already-account mt-5"> Create Account</h4></Link>
              </div>

              {/* {{!-- rightside --}} */}
              <div className="col-md-7 md-12 hero-text   align-items-center flex-column mt-5">
                <form className='login-form' method='POST'>
                  
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                    <div className="col-md-10 ">
                    <input
                      type="email"
                      className ="form-control"
                      id="email"
                      name='email'
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    </div>
                  </div>
                  
                  
                  <div className="form-group">
                    <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                    <div className="col-md-10 ">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name='password'
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    </div>
                  </div>
                
                  <div className="submit mt-3" id="submit">
                    <input type="submit" id="signin"  value="signin" name='signin'
                    onClick={loginUser}/>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
