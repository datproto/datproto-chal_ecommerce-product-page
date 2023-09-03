import React from 'react'

interface IButton {
  type?: 'button' | 'submit'
  rounded?: boolean
  disabled?: boolean
  customClass?: string
  buttonHandler: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({type, rounded, disabled, customClass, buttonHandler, children}: IButton) => {
  return (
    <button onClick={buttonHandler} type={type || 'button'} className={customClass} disabled={disabled || false}>
      {children}
    </button>
  )
}

export default Button