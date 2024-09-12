import {  useState } from "react";
import {step1} from './Step1'
const multiStepForm = () =>{
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
  
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setStep((prev) => {
      return{...prev, [name]: value}
   })
    console.log(name, value);
  };
  /*
  const nextStep = () => setStep(step + 1);
  ;
  const prevStep = () => setStep(step - 1);
  
  
  const step1 = ({})
  return(
    <div>
        {step === 1 && <step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />}
    </div>
  );*/
export default multiStepForm 