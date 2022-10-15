import React from "react";
import { useState, useEffect } from "react";
// import phone from '../images/phone.png'

const Contact = () => {
  const [user, setUser]=useState({});
console.log(user)

useEffect(()=>{
  const fetchData= async()=>{
   const response = await fetch('/contact')
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
            <div className="col-md-8 col-12 mx-auto mt-2 d-flex justify-content-between mt-5">
              {/* phone */}
              <div className="col-md-3 col-12">
                <div className="contact_phone">

                  <div className="contact_info_title">phone</div>
                  <div className="contact_info_text">9458925957</div>
                </div>
              </div>
              {/* email */}
              <div className="col-md-3 col-12">
                <div className="contact_phone">
                  <div className="contact_info_title">email</div>
                  <div className="contact_info_text">9458925957</div>
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
          <div className="col-md-6 col-12 mx-auto">
            <div className="section">
            <div className="row">             

              {/* {{!-- rightside --}} */}
              <div className="container-main">
                <form className='contact-form my-5 ' id="contact_form">
                  <h3>Get In Touch</h3>
                  <div className="contact_info_form d-flex justify-content-between">
                  
                  <div className="form-group2">
                    <input
                      type="phone"
                      className="form-control"
                      id="contact_form_name"
                      aria-describedby="emailHelp"
                      placeholder="your name"
                      value={user.name}
                    />
                  </div>
                  
                  
                  <div className="form-group2">
                    <input
                      type="contact_form_email"
                      className="form-control"
                      id="email"
                      placeholder="email"
                      value={user.email}

                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      className="form-control"
                      id="contact_form_phone"
                      placeholder="phone"
                      value={user.phone}
                    />
                  </div>
                  </div>
                  
                  <div className="form-group2">
                    <textarea className="message" id="message" placeholder="message"></textarea>
                  </div>
                
                  <div className="submit mt-3">
                    <input type="submit" id="submit"  value="sendMessage" className="send-message"/>
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

export default Contact;
