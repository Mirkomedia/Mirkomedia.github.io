import React from 'react'

export const PickAddOns = ({formData,setFormData, handleChange}) => {
const handleOnlineService = () =>{
  const onlineCheckbox = document.getElementById('online-service-checkbox')
   const isChecked  = onlineCheckbox.checked ? 'online service' : '' ;
    setFormData({
      ...formData,onlineService : isChecked ? 'online service' : ''
    })
  }
  const handleLargerStorage = () =>{
    const largerStorageCheckbox = document.getElementById('larger-storage-checkbox')
     const isChecked  = largerStorageCheckbox.checked ? 'largerStorage' : '' ;
     console.log('click')
     setFormData({
        ...formData,largerStorage : isChecked ? 'largerStorage' : ''
      })
    }
    const handleCustomProfile = () =>{
      const customizableProfileCheckbox = document.getElementById('custom-profile-checkbox')
       const isChecked  = customizableProfileCheckbox.checked ? 'customProfile' : '' ;
       console.log('click')
       setFormData({
          ...formData,customizableProfile : isChecked ? 'customProfile' : ''
        })
      }
  
 console.log(formData)
  return (
    <div className='right-container'>
      <h1>Pick add-ons</h1>
      <p className='graytext'>Add-ons help enhance your gaming experience.</p>
   
     <div className='add-ons-container'>
    
      <div className={`add-on ${formData.onlineService === 'online service' ? 'active' : ''}`}>
       <div>
        <input type="checkbox"   id='online-service-checkbox'className='add-on-checkbox'
        onClick={()=>handleOnlineService()} checked={formData.onlineService === 'online service' ? true : false} />
       </div>
       <div>
          <span>Online Service</span>
            <p className='graytext add-on-text'>Access to multiplayer games </p>
        </div>
        <div>
        <span className='price online-service'>{formData.interval === 'monthly' ? '+1$/mo' : '+10$/yr'}</span>
        </div>
      </div>
     
      <div className={`add-on ${formData.largerStorage === 'largerStorage' ? 'active' : ''}`}>
       <div>
        <input type="checkbox" className='add-on-checkbox' id='larger-storage-checkbox'
       onClick={()=>handleLargerStorage()}  checked={formData.largerStorage === 'largerStorage' ? true : false}/>
       </div>
         <div>
          <span>Larger Storage</span>
            <p className='graytext add-on-text'>Extra 1TB of cloud save </p>
        </div>
        <div>
        <span className='price larger-storage'>{formData.interval === 'monthly' ? '+2$/mo' : '+20$/yr'}</span>
        </div>
      </div>
     
      <div className={`add-on ${formData.customizableProfile === 'customProfile' ? 'active' : ''}`}>
        <div>
      <input type="checkbox" className='add-on-checkbox' id='custom-profile-checkbox'
       onClick={()=>handleCustomProfile()}  checked={formData.customizableProfile === 'customProfile' ? true : false} />
       </div>
       <div>
        <span>Customizable profile</span>      
      <p className='graytext add-on-text'>Custom theme on your profile </p>
      </div>
       <div >
        <div className='price custom-profile'>{formData.interval === 'monthly' ? '+2$/mo' : '+20$/yr'}</div>
       </div>
      </div>
     </div>

    </div>
  )
}
