import {  useState } from "react";
import { Sidebar } from "./Components/Sidebar";
import "./Styles.scss";
import { PersonalInfo } from "./Components/PersonalInfo";
export const App = () => {
  
/*const  multiStepForm = () =>{
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan:"",
    interval: "",
    addOns:"",
  })

}
*/
const handleChange = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  setStep((prev) => {
    return{...prev, [name]: value}
 })
  console.log(name, value);
};

const nextStep = () => setStep(step + 1);
;
const prevStep = () => setStep(step - 1);


const step1 = ({})
  return (
    
    <div className="full-container">
   

  
      <Sidebar/>
      <footer>
      <button className="next-step" onClick={nextStep}>Next Step</button>
      <button  className="prev-step" onClick={prevStep}>Go Back</button>
      </footer>
      <PersonalInfo/>
     
     
     
    </div>
    
  )
}


