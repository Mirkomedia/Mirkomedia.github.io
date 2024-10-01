import {  useState } from "react";
import "./Styles.scss";
import "./MobileStyles.scss"
import {MultiStepForm} from "./Components/MultiStepForm"  


export const App = () => {
  const [step, setStep] = useState(1);



  return (
    
    <div>
     <MultiStepForm/>
    </div>
    
  )
}