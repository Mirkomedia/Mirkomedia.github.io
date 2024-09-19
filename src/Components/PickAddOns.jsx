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
      <h1>Pick addOns</h1>
      <p>Add-ons help encance your gaming experience.</p>
     <div className='add-ons-container'>
      <div
       className={`add-on ${formData.onlineService === 'online service' ? 'active' : ''}`}>
      <input type="checkbox"   id='online-service-checkbox'className='add-on-checkbox'
        onClick={()=>handleOnlineService()}
       
        checked={formData.onlineService === 'online service' ? true : false} />Online Service
        <p className='graytext'>Acces to multiplayer games <span className='price'
        >{formData.interval === 'monthly' ? '+2$/mo' : '+10$/yr'}</span></p>
      </div>
      <div className={`add-on ${formData.largerStorage === 'largerStorage' ? 'active' : ''}`}>
      <input type="checkbox" className='add-on-checkbox' id='larger-storage-checkbox'
       onClick={()=>handleLargerStorage()} 
  
       checked={formData.largerStorage === 'largerStorage' ? true : false}/>Larger Storage
      <p className='graytext'>Extra 1TB of cloud save <span className='price'>
      {formData.interval === 'monthly' ? '+12$/mo' : '+20$/yr'}</span></p>
      </div>
      <div className={`add-on ${formData.customizableProfile === 'customProfile' ? 'active' : ''}`}>
      <input type="checkbox" className='add-on-checkbox' id='custom-profile-checkbox'
       onClick={()=>handleCustomProfile()}
        checked={formData.customizableProfile === 'customProfile' ? true : false} />Customizable profile
      <p className='graytext'>Extra 1TB of cloud save <span className='price'>
      {formData.interval === 'monthly' ? '+2$/mo' : '+20$/yr'}</span></p>
      </div>
     </div>

    </div>
  )
}
