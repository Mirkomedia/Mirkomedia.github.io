import "./MobileStyles.scss"
import { FormInput } from "./Subcomponents/FormInput";

export const PersonalInfo2 = (props) => {


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
        errorMessage:"Please enter valid email" ,
        className:"email input",
        required:true,
      
      
    },
    {
        id:3,
        name:"phoneNumber",
        type:"text",
        placeholder:"35812345678",
        label:"phoneNumber",
        errorMessage: "Please enter a valid phone number",
        className:"phone-number input",
        pattern: "^[+]?[0-9]{6,15}$",
        required:true
    }
  ]

  

  return (
   <form >
    <div>
      
        <h3>Personal Info</h3>
         <p id="please-provide" className="graytext">Please provide your name, email address and phone number</p>
        <div className="input-container">
        {input.map((input)=>(
         <FormInput  
         key={input.id} {...input} 
         value={props.formData[input.name]} 
         onChange={props.handleChange}/>
        ))}
    
     
   
    </div>

    </div>
    </form>
  )
        }