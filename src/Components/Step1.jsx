import React from 'react'


const handleChange = (e) =>{
    const {name, value} = e.target;
  
   // setDetails((prev) => {
   //   return{...prev, [name]: value}
   // })
    console.log(name, value);
  };
  
  export const step1 = () => {
    return (
      <div>
      <div className="right-container">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number</p>
          <p>Name</p>
      <input className="Name-field input" type="text" placeholder="Known computer legend Elmeri" onChange={handleChange} name="name"/>
      <p>Email Address</p>
      <input className="email input" type="email" placeholder="e.g. stephenking@lorem.com" onChange={handleChange} name="email"/>
      <p>Phone Number</p>
      <input className="phone-number input" type="text" placeholder="e.g. +123456789"  required onChange={handleChange} name="phoneNumber"/>
  
      
      </div>
     
      </div>
    )
  }
  