import React, { useEffect, useState } from "react";
// import amitImg from "../images/logo.jpg";
// import {useNavigate} from 'react-router-dom'
import './about.css'



const About = () => {
 
// const navigate = useNavigate();
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
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="userInfo col-md-8 col-12 mx-auto mt-2 d-flex justify-content-between mt-5">
              {/* phone */}
              <div className="col-md-3 col-12">
                <div className="contact_phone">

                  <div className="contact_info_title">phone</div>
                  <div className="contact_info_text">{user.phone}</div>
                </div>
              </div>
              {/* email */}
              <div className="col-md-3 col-12">
                <div className="contact_phone">
                  <div className="contact_info_title">email</div>
                  <div className="contact_info_text">{user.email}</div>
                </div>
              </div>
              {/* address */}
              <div className="col-md-3 col-12">
                <div className="contact_phone">
                  <div className="contact_info_title">work</div>
                  <div className="contact_info_text">{user.work}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="continer-fluid mt-5 about-style" id="aboutid">
        <div className="row">
          <div className="col-md-4 col-12 mx-auto">
            <div className="section">
            <div className="row">             

              {/* {{!-- rightside --}} */}
              <div className="container-main">
                <form className='contact-form my-5 ' id="contact_form">
                <div className="form-group2 d-flex justify-content-center">
                <h3 className="DeveloperName">DeveloperName   {user.name}</h3>

                    
                  </div>
                 
                  
                  <div className="form-group2 d-flex justify-content-between">
                    <p>DeveloperWork</p>
                    <p>{user.work}</p>
                    
                  </div>
                  <div className="form-group2 d-flex justify-content-between">
                    <p>Email</p>
                    <p>{user.email}</p>
                  
                  </div>

                  <div className="form-group2 d-flex justify-content-between">
                    <p>Date</p>
                    <p>{user.email}</p>
                  
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

export default About;
