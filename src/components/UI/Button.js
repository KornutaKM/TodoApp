import React from 'react'
import s from './Button.module.css'
const Button = ({onClick, children, title, disabled = true}) => {
  return (
   <button className={s.button} onClick={onClick} title={title} disabled={disabled}>{children}</button>  
  )
}

export default Button