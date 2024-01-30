import React from 'react'

function Inputs(props) {
  return (
    <div>
        <input 
        placeholder={props.placeholder} 
        type={props.type} 
        value={props.value}
        onChange={props.onChange}/>
    </div>
  )
}

export default Inputs