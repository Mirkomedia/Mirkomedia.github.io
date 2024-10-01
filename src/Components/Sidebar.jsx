export const Sidebar = ({step}) => {

  

  return (
  

    <div className="outer-container"> 
        <div className="select-step">
        
     <button className={step === 1 ?"round-button active" : 
     "round-button inactive"} >1</button>
    <span className="step">Step 1</span>
     <p className="step-name">YOUR INFO</p>
       </div>
    
      <div className="select-step">
      <button className={step === 2?"round-button active" : 
     "round-button inactive"} >2</button>
       <span  className="step">Step 2</span>
       <p className="step-name">SELECT PLAN</p>
     
     </div>

     <div className="select-step">
     <button className={step === 3 ?"round-button active" : 
     "round-button inactive"}>3</button>
      <span  className="step">Step 3</span>
       <p className="step-name">ADD-ONS</p>
     </div>

       <div className="select-step">
       <button className={step >= 4 ?"round-button active" : 
     "round-button inactive"} >4</button>
        <span  className="step">Step 4</span>
      <p className="step-name">SUMMARY</p>
      </div>
      
  </div>
  )
}
