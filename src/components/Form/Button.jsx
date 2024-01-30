import React from 'react'
import { SUBMIT_BUTTON_LABEL } from '../../data/Constants'

function Button(props) {
  return (
    <div>
        <button 
        onClick={props.onClick}
        > {props.label || SUBMIT_BUTTON_LABEL}</button>
    </div>
  )
}

export default Button