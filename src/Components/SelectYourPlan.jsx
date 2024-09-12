
export const SelectYourPlan = () => {
  return (

    <div className="right-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      <div className="plan-container">
        <div className="plan-box arcade">Arcade
        <p>$9/mo</p>
        </div>
        <div className="plan-box advanced">Advanced
        <p>$12/mo</p>  
        </div>
        <div className="plan-box pro">Pro
        <p>$15/mo</p>
        </div>
      </div>
    <input type="checkbox monthly-yearly" />
    </div>
  )
}
