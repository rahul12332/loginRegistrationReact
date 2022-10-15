import React from "react";
import logo from "../images/signup.svg";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser]= useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  })

  let name, value
  const handleInputs=(e)=>{
         console.log(e)
         name= e.target.name
         value= e.target.value


         setUser({...user, [name]:value});
  }
  const PostData = async (e)=>{
    e.preventDefault();

    const {name, email, phone, work, password, cpassword}=user;
    const res = await fetch('/register', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
   const data = await res.json();
   if(data.status===422 || !data){
    window.alert("invalid registration")
    console.log("invalid registration")

   }
   else{
    window.alert("successful registration")
    navigate("/login")
   }
  }
 
  
  return (
    <>
      <div className="continer-fluid mt-5 about-style" id="aboutid">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto ">
            <div className="section">
            <h2 className="text-center main-heading">Signup</h2>
            <div className="row">
              {/* {{!-- leftside --}} */}
              <div className="col-md-5 md-12 hero-image  align-items-center flex-column">
                <figure id="image">
                  <img src={logo} width="100%" alt="" />
                </figure>
                <Link to="/login"><h4 className="already-account mt-5"> I Have already an account</h4></Link>
              </div>

              {/* {{!-- rightside --}} */}
              <div className="col-md-7 md-12 hero-text align-items-center flex-column">
                <form className="signup-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                    <input
                      type="name"
                      className="form-control"
                      required="fill name"
                      id="name"
                      aria-describedby="emailHelp"
                      name="name"
                      placeholder="Enter name"
                      value={user.name}
                      onChange={handleInputs}
                    />
                    
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={user.email}
                      onChange={handleInputs}

                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone"><i className="zmdi zmdi-phone"></i></label>
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      aria-describedby="emailHelp"
                      name="phone"
                      placeholder="Enter phoneNumber"
                      value={user.phone}
                      onChange={handleInputs}

                    />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="work"><i className="zmdi zmdi-labels"></i></label>
                    <input
                      type="work"
                      className="form-control"
                      id="work"
                      aria-describedby="emailHelp"
                      name="work"
                      placeholder="Enter your profession"
                      value={user.work}
                      onChange={handleInputs}

                    />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleInputs}

                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword"><i className="zmdi zmdi-lock"></i></label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      name="cpassword"
                      placeholder="confirm Password"
                      value={user.cpassword}
                      onChange={handleInputs}

                    />
                  </div>
                  <div className="submit mt-3" id="submit">
                    <input type="submit" id="register"  value="register"
                    onClick={PostData}/>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Signup;
