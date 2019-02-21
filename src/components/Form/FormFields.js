import React from 'react';


export const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback" >{error}</div>
	) : null;
	
export const Input = ({
		field, // { name, value, onChange, onBlur }
		form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
		...props
	}) => (
		<div className="control-y">
			<div className="control-x">
				<input className="input is-medium" {...field} {...props} />
			</div>
			{touched[field.name] &&
				errors[field.name] && <div className="help is-danger">{errors[field.name]}</div>}
		</div>
	);

export const RadioButton = ({
	field: { name, value, onChange, onBlur },
	id,
	label,
	className,
	...props
  }) => {
	return (
	  <label htmlFor={id} className="radio">
		<input
		  name={name}
		  id={id}
		  type="radio"
		  value={id} // could be something else for output?
		  checked={id === value}
		  onChange={onChange}
		  onBlur={onBlur}
		  {...props}
		/>
		
		  {label}
		</label>
	);
  };

   export const RadioButtonGroup = ({
	value,
	error,
	touched,
	id,
	label,
	className,
	children
  }) => {
  
	return (
	  <div className="control-y">
		  {children}
		  {touched &&
			<InputFeedback error={error} />
		  }
	  </div>
	);
  };


