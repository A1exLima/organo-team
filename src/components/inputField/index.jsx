import { forwardRef } from 'react'
import { InputContainer } from './style'

export const InputField = forwardRef(({ label, type, ...rest }, ref) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} {...rest} ref={ref} />
    </InputContainer>
  )
})

InputField.displayName = 'InputField'
