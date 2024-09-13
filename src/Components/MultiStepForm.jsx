import {  useState } from "react";
import {PersonalInfo} from "./PersonalInfo";
import { SelectYourPlan } from "./SelectYourPlan";
import {PickAddOns} from "./PickAddOns"
import {FinishingUp} from "./FinishingUp"
import {ThankYou} from "./ThankYou"
import { Sidebar } from "./Sidebar";
export const MultiStepForm = () => {
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
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setFormData((prev) =>{
        return {...prev,[name]:value}
    })
  };
  const step1 = ({})
    return (
      
      <div className="full-container">
     
  
      
         <Sidebar/>
        <footer>
        <button className="next-step" onClick={nextStep}>Next Step</button>
        <button  className="prev-step" onClick={prevStep}>Go Back</button>
        </footer>
        
        {step === 1 && <PersonalInfo nextStep={nextStep} />}
        {step === 2 && <SelectYourPlan nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <PickAddOns nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <FinishingUp nextStep={nextStep} prevStep={prevStep}  />}
        {step === 5 && <ThankYou nextStep={nextStep} prevStep={prevStep}  />}
       
       
       
      </div>
      
    )
  }