import { useState } from "react"

export const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () =>{
        setActive(!isActive);
    }
  return (
  

    <div className="outer-container"> 
        <div className="select-step">
     <button className={isActive ?"round-button active" : 
     "round-button inactive"} onClick={handleToggle}>1</button>
    <span>Step 1</span>
     <p className="step-name">YOUR INFO</p>
       </div>
    
      <div className="select-step">
      <button className={isActive ?"round-button active" : 
     "round-button inactive"} onClick={handleToggle}>2</button>
       <span>Step 2</span>
       <p className="step-name">SELECT PLAN</p>
     
     </div>

     <div className="select-step">
     <button className={isActive ?"round-button active" : 
     "round-button inactive"} onClick={handleToggle}>3</button>
      <span>Step 3</span>
       <p className="step-name">ADD-ONS</p>
     </div>

       <div className="select-step">
       <button className={isActive ?"round-button active" : 
     "round-button inactive"} onClick={handleToggle}>4</button>
        <span>Step 4</span>
      <p className="step-name">SUMMARY</p>
      </div>
      
  </div>
  )
}
