
import { FormInput } from "./Subcomponents/FormInput";

export const PersonalInfo2 = (props) => {


  const input= [
    {
        id:1,
        name:"name",
        type:"text",
        placeholder:"Example Examplerson",
        label:"Name",
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
        label:"Email",
        errorMessage:"Please enter valid email" ,
        className:"email input",
        required:true,
      
      
    },
    {
        id:3,
        name:"phoneNumber",
        type:"text",
        placeholder:"(+)123456789",
        label:"Phone Number",
        errorMessage: "Please enter a valid phone number",
        className:"phone-number input",
        pattern: "^[+]?[0-9]{6,15}$",
        required:true
    }
  ]
  const handleSubmit = (e) =>{
     e.preventDefault();
  }

  return (
   
    <div className="right-container">
      
        <h1>Personal Info</h1>
         <p className="graytext">Please provide your name, email address and phone number</p>
        <div className="input-container">
        {input.map((input)=>(
         <FormInput  
         key={input.id} {...input} 
         value={props.formData[input.name]} 
         onChange={props.handleChange}/>
        ))}
    
     
    
    </div>
    
    </div>
 
  )
} 