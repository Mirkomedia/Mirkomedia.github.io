export const SidebarMobile = ({step}) => {

  

  return (
  

    <div className="mobile-container"> 
      
        <div className="mob-button-container">
     <button id="mobile-button" className={step === 1 ?"round-button-mobile active" : 
     "round-button inactive"} >1</button>
 
  
     
      <button id="mobile-button" className={step === 2?"round-button-mobile active" : 
     "round-button inactive"} >2</button>


     <button id="mobile-button" className={step === 3 ?"round-button-mobile active" : 
     "round-button inactive"}>3</button>
   
     


    
       <button id="mobile-button" className={step >= 4 ?"round-button-mobile active" : 
     "round-button inactive"} >4</button>
     </div>

      </div>
      
  
  )
}
