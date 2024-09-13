import {  useState } from "react";
import "./Styles.scss";
import {MultiStepForm} from "./Components/MultiStepForm"  
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

export const App = () => {
  const [step, setStep] = useState(1);
const nextStep = () => {step < 5 ? setStep(step + 1) : null};
;
const prevStep = () => {step > 1 ? setStep(step - 1): null};

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNumber: "",
  plan:"",
  interval: "",
  addOns:"",
})

const step1 = ({})
  return (
    
    <div className="full-container">
     <MultiStepForm/>
    </div>
    
  )
}