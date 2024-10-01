import {  useState } from "react";

export const PersonalInfo = ({formData, handleChange,step}) => {

console.log(step)

  return (
    <form action="" method="get">
    <div className="right-container">
        <h1>Personal Info</h1>
        <p className="graytext">Please provide your name, email address and phone number</p>
        <p>Name</p>
    <input className="Name-field input" type="text" placeholder="Known computer legend Elmeri" onChange={handleChange} name="name" value={formData.name}/>
    <p>Email Address</p>
    <input className="email input" type="email" placeholder="e.g. stephenking@lorem.com"  onChange={handleChange} name="email" value={formData.email}/>
    <p>Phone Number</p>
    <input className="phone-number input" type="text" placeholder="e.g. +123456789"  onChange={handleChange} name="phoneNumber" value={formData.phoneNumber}/>

    
    
   
    </div>
    </form>
  )
}