import React from 'react'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

const Signout = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData= async()=>{
          await fetch('/logout',{
          method : 'GET',
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
            
          }
          

         }).then((res)=>{
          navigate('/login')
          
         })
      
        
        }
        fetchData();
      },[])
  return (
    <div>
      
    </div>
  )
}

export default Signout
