import React from 'react'

export const PickAddOns = () => {
  return (
    <div className='right-container'>
      <h1>Pick addOns</h1>
      <p>Add-ons help encance your gaming experience.</p>
     <div className='add-ons-container'>
      <div className='add-on online-service'>
         <input type="checkbox" className='add-on-checkbox' />Online Service
        <p className='graytext'>Acces to multiplayer games <span className='price'>+1$/mo</span></p>
      </div>
      <div className='add-on larger storage'>
      <input type="checkbox" className='add-on-checkbox' />Larger Storage
      <p className='graytext'>Extra 1TB of cloud save <span className='price'>+2$/mo</span></p>
      </div>
      <div className='add-on customizable-profile'>
      <input type="checkbox" className='add-on-checkbox' />Customizable Profile
        <p className='graytext'>Custom theme on your profile<span className='price'>+2$/mo</span></p>
      </div>
     </div>

    </div>
  )
}
