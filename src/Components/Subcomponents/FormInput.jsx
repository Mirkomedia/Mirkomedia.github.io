import React from 'react'
//import "./formInput.css"
/*export const FormInput = (props) => {
    const {label,errorMessage,onChange, id, ...inputProps} = props;
  return (
    <div className='formInput'>
        <p>{label}
        <span className='errorMessage'>{errorMessage}</span>
        </p>
        <input {...inputProps} onChange={onChange} required/>
        


    </div>
  )
}*/
import { useState } from "react";
//import "./FormInput.css";

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
       
        focused={focused.toString()}
      />
  <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
};

