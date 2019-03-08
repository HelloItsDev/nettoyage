import React from 'react';
import { Input } from '../FormFields'
import { Field } from 'formik';

const PagePhone = props => (
	<div className={`page page${props.pageIndex}`}>
		<p className="question"> Recevez des réponses encore plus vite avec votre numéro de télephone. </p>
		<div>
      <Field
        component={Input}
        name="phone"
        id="phone"
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
			type="submit"
			className="button is-primary"
		>
			Envoyer
		</button>
		</div>
		
	</div>
);

export default PagePhone;
