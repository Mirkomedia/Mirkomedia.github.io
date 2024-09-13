import {  useState } from "react";

export const PersonalInfo = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan:"",
    interval: "",
    addOns:""
 
  })
 
const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData((prev) =>{
      return {...prev,[name]:value}
  })
};
console.log(formData)
  return (
    <div>
    <div className="right-container">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number</p>
        <p>Name</p>
    <input className="Name-field input" type="text" placeholder="Known computer legend Elmeri" onChange={handleChange} name="name"/>
    <p>Email Address</p>
    <input className="email input" type="email" placeholder="e.g. stephenking@lorem.com" required onChange={handleChange} name="email"/>
    <p>Phone Number</p>
    <input className="phone-number input" type="text" placeholder="e.g. +123456789"  required onChange={handleChange} name="phoneNumber"/>

    
    </div>
   
    </div>
  )
}