import React from 'react';
import { Input } from '../FormFields'
import { Field } from 'formik';

const PageFour = props => (
	<div className={`page page${props.pageIndex}`}>
		<p className="question"> Code postal du lieu où le travail doit être effectué </p>
		<div>
      <Field
        component={Input}
        name="postalCode"
        id="postalCode"
        label="Code postal du lieu où le travail doit être effectué"
        placeholder="Entrer le code postal"
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
      onClick={props.navigateNext}
      disabled={!(props.values.postalCode)|| props.errors["postalCode"]}
			className="button is-primary"
		>
			Continuer
		</button>
		</div>
		
	</div>
);

export default PageFour;
