import {  useState } from "react";
import {PersonalInfo} from "./PersonalInfo";
import { SelectYourPlan } from "./SelectYourPlan";
import {PickAddOns} from "./PickAddOns"
import {FinishingUp} from "./FinishingUp"
import {ThankYou} from "./ThankYou"
import { Sidebar } from "./Sidebar";
import {PersonalInfo2} from "./PersonalInfo2"

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
    interval: "monthly",
    onlineService:"",
    largerStorage: "",
    customizableProfile: ""
  })
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev) =>{
        return {...prev,[name]:value}
    })
  };
  
  const step1 = ({})
    return (
      
      <div className="full-container">
     
  
      
         <Sidebar step={step} nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData} setStep={{setStep}}/>
        <footer>
        {step < 4 && <button className="next-step" onClick={nextStep}>Next Step</button>}
        {step >1 && step <5 &&  <button  className="prev-step" onClick={prevStep}>Go Back</button>}
        {step === 4 && <button type="submit" className="confirm" onClick={nextStep} >Confirm</button>}
        </footer>
        
        {step === 1 && <PersonalInfo2 nextStep={nextStep} formData={formData} handleChange={handleChange} onChange={handleChange}setFormData={setFormData} />} 
   {/*     {step === 1 && <PersonalInfo nextStep={nextStep} formData={formData} handleChange={handleChange}/>}*/}
        {step === 2 && <SelectYourPlan nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData} />}
        {step === 3 && <PickAddOns nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData}/>}
        {step === 4 && <FinishingUp nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange}setFormData={setFormData} />}
        {step === 5 && <ThankYou nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange}setFormData={setFormData} />}
       
       
       
      </div>
      
    )
  }