export const FinishingUp = ({formData, step, setStep,}) => {
  const selectedPlan = formData.plan
  const interval = formData.interval
  const name = formData.name
  const email = formData.email
  const phoneNumber = formData.phoneNumber
  let planPrice 
console.log(step)
  if(formData.plan === 'Arcade'){
    {formData.interval === 'monthly'?  planPrice = '$9/mo':planPrice = '$90/yr'}
 }else if(formData.plan === 'Advanced'){
   {formData.interval === 'monthly' ?  planPrice ='$12/mo':planPrice = '$120/yr'}
 }else if(formData.plan === 'Pro'){
   {formData.interval === 'monthly' ?  planPrice ='$15/mo': planPrice ='$150/yr'}
 }

  const onlineService = "Online Service"
  let onlineServicePrice 
  if (formData.onlineService === 'online service'){
    {formData.interval === 'monthly' ? onlineServicePrice = '$1/mo': onlineServicePrice = '$10/yr' }
  } else{
    onlineServicePrice= ''
  }

  const largerStorage = "Larger Storage"
  let largerStoragePrice
  if(formData.largerStorage === 'largerStorage'){
    {formData.interval === 'monthly' ? largerStoragePrice = '$2/mo' : largerStoragePrice= '$20/yr'}
  }
  else{
    largerStoragePrice = ''
  }

  const customizableProfile = "Customizable Profile"
  let customizableProfilsePrice
  if (formData.customizableProfile === 'customProfile') {
    {formData.interval === 'monthly' ? customizableProfilsePrice = '$'+2+'/mo' : customizableProfilsePrice= '$20/yr'}
   }else{
    customizableProfilsePrice = ''
   }

  function extractNumber(string) {
    const regex = /(\d+)/;
    const match = string.match(regex);
    return match ? parseInt(match[1], 10) : 0;

  }
  
  const setStep2 = () => {
    if (step === 4) {
      setStep(step = 2);

    }}

   

const totalPrice = extractNumber(customizableProfilsePrice) + extractNumber(largerStoragePrice) + extractNumber(planPrice) + extractNumber(onlineServicePrice)


//  const planPriceFr = parseFloat(planPrice.slice(1,-1))
  //console.log(planPriceFr)
  return (

      <div className='right-container'>
       <h1>Finishing-up</h1>
        <p className='graytext'>Double-check everything looks OK before confirming.</p>
       <table className='doublecheck-container'>
        <tbody>
        <tr id='name'>
          <th>{name}</th>
        </tr>
        <tr id='email'>
          <th>{email}</th>
        </tr>
        <tr id='phonenumber'>
          <th>{phoneNumber}</th>
        </tr>
        <tr className='selected-plan' >
          <th >
        {selectedPlan}({interval})
          </th>
        <th className='' >{planPrice}</th>
        </tr>
        <tr className="change graytext" onClick={setStep2}>Change</tr>
        <tr id='online-service'>
         <th>{onlineService}</th> 
         <th className='smallPrice onServicePrice' >{onlineServicePrice}</th>
        </tr>
        <tr id='larger-storage'>
         <th>{largerStorage}</th> 
         <th className='smallPrice' >{largerStoragePrice}</th>
        </tr>
        <tr id="customizable-profile">
          <th>{customizableProfile}</th>
          <th className='smallPrice' >{customizableProfilsePrice}</th>
        </tr>
         </tbody>
       </table>
       <p>Total ({interval}) <span className='price total'>${totalPrice}{formData.interval === 'monthly' ? '/mo' : '/yr'}</span> </p>
      </div>

  )
}
