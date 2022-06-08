import React from 'react'

function Input(props) {
  return (
    
      <input className="w3-input w3-border w3-section" type={props.type} placeholder={props.placeholder} required name={props.name} />
    
  )
}

export default Input
