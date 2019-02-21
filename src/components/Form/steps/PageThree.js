import React from 'react';
import { RadioButton, RadioButtonGroup} from '../FormFields'
import { Field } from 'formik';

const PageThree = props => (
	<div className="page">
		<p className="question"> Quelle est la superficie approximative de la zone à nettoyer ? </p>
		<RadioButtonGroup
            id="surface"
            value={props.values.surface}
            error={props.errors.surface}
            touched={props.touched.surface}
          >
            <Field
              component={RadioButton}
              name="surface"
              id="100 - 200 m²"
			        label="100 - 200 m²"
							
            />
            <Field
              component={RadioButton}
              name="surface"
              id="200 - 300 m²"
              label="200 - 300 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="300 - 400 m²"
              label="300 - 400 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="400 - 450 m²"
              label="400 - 450 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="500 - 600 m²"
              label="500 - 600 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="600 - 700 m²"
              label="600 -700 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="700 - 800 m²"
              label="700 - 800 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="800 - 900 m²"
              label="800 - 900 m²"
            />
            <Field
              component={RadioButton}
              name="surface"
              id="900 - 1000 m²"
              label="900 - 1000 m²"
            />
            
            
      </RadioButtonGroup>
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
			className="button is-primary"
		>
			Continuer
		</button>
		</div>
		
	</div>
);

export default PageThree;
