import React from 'react';
import './contact.css';

export default function contact() {
  return (
    
    <div className='register'>
      <span className="registerTitle" style={{color:'red'}}><br/><hr/></span>


      <img 
        className='writeImg'
        src="https://th.bing.com/th/id/R.13ed6a7a69c644dd30ae455f754f2ca6?rik=k1u0XW9wCrHwng&riu=http%3a%2f%2fwww.djservices.ca%2fimages%2fContact-Us-blocks.jpg&ehk=xpCkDrOAqabVLLi0OLuobt7ptLiaJEe%2bmP%2b3vUeYqZI%3d&risl=&pid=ImgRaw&r=0 "
         alt="" />
  
      <hr/>
        <span className="registerTitle"></span>
        <form className="registerForm">
        <label >FullName</label>
            <input type="text" className='registerInput' placeholder='Enter Your Fullname...'/>
            <label >Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your Email...'/>
            <label >Location</label>
            <input type="text" className='registerInput' placeholder='Enter Your Location...'/>
            <label >Message</label>
          <textarea placeholder='Let us know how we can help...' type='text' className='registerInput'></textarea>
        
            <button className='registerButton'>Send</button>
            <h5 >We re always opened for Bussiness ,Just give us a DM and we'll be there for you.</h5>
        </form>
        
       
        
        </div>
  )
}
