import React from 'react'

export const FormInput = (props) => {
    const {label,errorMessage,onChange, id, ...inputProps} = props;
  return (
    <div className='formInput'>
        <p>{label}
        <span className='errorMessage'>{errorMessage}</span>
        </p>
        <input {...inputProps} onChange={onChange} required/>
        


    </div>
  )
}
