import { useState } from "react"

export const Sidebar = () => {
    const [isActive] = useState(2);

   
    const [step] = useState(1);
   
  return (
  

    <div className="outer-container"> 
        <div className="select-step">
        
     <button className={step === 1 ?"round-button active" : 
     "round-button inactive"} >1</button>
    <span>Step 1</span>
     <p className="step-name">YOUR INFO</p>
       </div>
    
      <div className="select-step">
      <button className={step === 2?"round-button active" : 
     "round-button inactive"} >2</button>
       <span>Step 2</span>
       <p className="step-name">SELECT PLAN</p>
     
     </div>

     <div className="select-step">
     <button className={step === 3 ?"round-button active" : 
     "round-button inactive"}>3</button>
      <span>Step 3</span>
       <p className="step-name">ADD-ONS</p>
     </div>

       <div className="select-step">
       <button className={step === 4 ?"round-button active" : 
     "round-button inactive"} >4</button>
        <span>Step 4</span>
      <p className="step-name">SUMMARY</p>
      </div>
      
  </div>
  )
}
