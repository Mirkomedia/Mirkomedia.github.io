import {  useEffect, useState } from "react";
import {PersonalInfo} from "./PersonalInfo";
import { SelectYourPlan } from "./SelectYourPlan";
import {PickAddOns} from "./PickAddOns"
import {FinishingUp} from "./FinishingUp"
import {ThankYou} from "./ThankYou"
import { Sidebar } from "./Sidebar";
import {PersonalInfo2} from "./PersonalInfo2"
import { SidebarMobile } from "./SidebarMobile";

export const MultiStepForm = () => {
    const [step, setStep] = useState(1);
  const nextStep = () => {step < 5 ? setStep(step + 1) : null};
  ;
  const prevStep = () => {step > 1 ? setStep(step - 1): null};
 
  window.addEventListener('resize', handleResize);
 
  const handleResize = () =>{
     const newWidth = window.innerWidth
     const newHeight = window.innerHeight
     console.log(newHeight + newWidth)

}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan:"",
    interval: "monthly",
    onlineService:"" ,
    largerStorage: "",
    customizableProfile: ""
  })

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validatePhoneNumber(phone) {
     const phoneRegex = /^[+]?[0-9]{6,15}$/;
     return phoneRegex.test(phone);
  }
  const handleChange = (e) =>{
    const {name, value,price} = e.target;
    setFormData((prev) =>{
        return {...prev,[name]:value, [price]:value}
    })
  };
  const formDataIsValid = formData.name != '' && validateEmail(formData.email) != false && validatePhoneNumber(formData.phoneNumber) != ''
    return (
      
      <div className="full-container">
     
  
     {window.innerWidth< 1000 && <SidebarMobile step={step} nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData} setStep={{setStep}}/>}
          {window.innerWidth> 1000 && <Sidebar step={step} nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData} setStep={{setStep}}/>}
       
      
        
        {step === 1 && <PersonalInfo2 nextStep={nextStep} formData={formData} handleChange={handleChange} onChange={handleChange}setFormData={setFormData} />} 
   {/*     {step === 1 && <PersonalInfo nextStep={nextStep} formData={formData} handleChange={handleChange}/>}*/}
        {step === 2 && <SelectYourPlan nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData} />}
        {step === 3 && <PickAddOns nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} setFormData={setFormData}/>}
        {step === 4 && <FinishingUp step={step}setStep={setStep} nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange}setFormData={setFormData} />}
        {step === 5 && <ThankYou nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange}setFormData={setFormData} />}
        <footer>
        {step >1 && step <5 &&  <button  className="prev-step" onClick={prevStep}>Go Back</button>}
        {step === 1 && formDataIsValid && <button className="next-step" onClick={nextStep} >Next Step</button>}
        {step === 2 && formData.plan != '' && <button className="next-step" onClick={nextStep}>Next Step</button>}
        {step  === 3  && <button className="next-step" onClick={nextStep}>Next Step</button>}
        {step === 4 && formDataIsValid && formData.plan != '' && <button type="submit" className="confirm" onClick={nextStep} >Confirm</button>}
        </footer>
       
       
      </div>
      
    )
  }