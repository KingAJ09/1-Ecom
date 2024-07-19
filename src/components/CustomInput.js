import React from 'react'

const CustomInput = (props) => {
    const { type, name, placeholder, className, id } = props
  return (
    <div>
                  
        <input 
            type={type} 
            className={`form-control ${className}`}
            name={name} 
            placeholder={placeholder} 
            id={id}
        />

    </div>
  )
}

export default CustomInput