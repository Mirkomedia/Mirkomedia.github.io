export const SelectYourPlan = () => {
  const setActive = (el) => {console.log(el)}
  return (

    <div className="right-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      <div className="plan-container">
        <div className="plan-box arcade" onClick={({target}) =>setActive(target)}>
        <img src="./src/images/icon-arcade.svg" alt="arcade"/>
        <p>Arcade</p>
        <p>$9/mo</p>
        </div>
        <div className="plan-box advanced" onClick={({target}) =>setActive(target)}>
        <img src="./src/images/icon-advanced.svg" alt="advanced"/>
         <p>Advanced</p>
         <p>$12/mo</p>  
        </div>
        <div className="plan-box pro" onClick={({target}) =>setActive(target)}>
        <img src="./src/images/icon-pro.svg" alt="pro"/>
         <p>Pro</p>
         <p>$15/mo</p>
        </div>
      </div>
      <footer>
     monthly
        <label className="switch">
          <input type="checkbox"/>
           <span className="slider round"></span>
        </label>
     yearly
    </footer>
    </div>
  )
}
