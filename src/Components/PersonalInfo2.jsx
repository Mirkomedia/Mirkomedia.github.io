import {  useState } from "react";
import { FormInput } from "./Subcomponents/FormInput";

export const PersonalInfo2 = ({formData, handleChange,setFormData}) => {

/*
    const onChange = (e) =>{
     setFormData({...formData,[e.target.name]: e.target.value});
}
const [values, setValues] = useState({

    name: "",
    email:"",
    phoneNumber: "",
})*/
  const input= [
    {
        id:1,
        name:"name",
        type:"text",
        placeholder:"known computer legend Elmeri",
        label:"name",
        errorMessage:"This field is required" ,
        className: "Name-field input",
        required:true,
        pattern: "^[A-Za-z]{3,16}$"
     
    },
    {
        id:2,
        name:"email",
        type:"email",
        placeholder:"example@email.com",
        label:"email",
        errorMessage:"This field is required" ,
        className:"email input",
        required:true
      
    },
    {
        id:3,
        name:"phoneNumber",
        type:"text",
        placeholder:"35812345678",
        label:"phoneNumber",
        errorMessage: "This field is required",
        className:"phone-number input",
        pattern: "^[0-9]{1,15}$",
        required:true
    }
  ]
  const handleSubmit = (e) =>{
     e.preventDefault();
  }

console.log(formData)
  return (
    <form onSubmit={handleSubmit}>
    <div className="right-container">
        <h1>Personal Info</h1>
         <p className="graytext">Please provide your name, email address and phone number</p>
        
        {input.map((input)=>(
         <FormInput  
         key={input.id} {...input} 
         value={formData[input.name]} 
         onChange={handleChange}/>
        ))}
    
     
    
   
    </div>
    </form>
  )
} 