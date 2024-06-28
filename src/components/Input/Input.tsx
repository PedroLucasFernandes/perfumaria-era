import React, { InputHTMLAttributes, forwardRef } from 'react';
import './Input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ ...rest }, ref) => {
  return <input className="custom-input" ref={ref} {...rest} />;
};

export default forwardRef(Input);