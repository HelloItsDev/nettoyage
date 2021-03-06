import React from 'react';
import { Input } from '../FormFields'
import { Field } from 'formik';

const PageEmail = props => (
	<div className={`page page${props.pageIndex}`}>
		<p className="question"> Nous ne partagerons pas votre email avec les Pros </p>
		<div>
      <Field
        component={Input}
        name="email"
				id="email"
				placeholder="Adresse email"
				type="email"
      />
    </div>
            
		<div className="page-footer">
		<button
			type="button"
			onClick={props.navigateBack}
			className="button"
		>
			Retour
		</button>
		<button
			type="button"
			onClick={() => props.navigateNext(props.values)}
			disabled={!(props.values.email)}
			className="button is-primary"
		>
			Continuer
		</button>
		</div>
		
	</div>
);

export default PageEmail;
