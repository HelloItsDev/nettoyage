import React from 'react';
import { RadioButton, RadioButtonGroup} from '../FormFields'
import { Field } from 'formik';

const PageOne = props => (
	<div className={`page page${props.pageIndex}`}>
		<p className="question"> Quel type de propriété avez-vous besoin de nettoyer ? </p>
		<RadioButtonGroup
            id="type"
            value={props.values.type}
            error={props.errors.type}
            touched={props.touched.type}
          >
            <Field
              component={RadioButton}
              name="type"
              id="bureau"
							label="Bureau"
							
            />
            <Field
              component={RadioButton}
              name="type"
              id="immeuble"
              label="Immeuble"
            />
            <Field
              component={RadioButton}
              name="type"
              id="commerce"
              label="Commerce"
            />
          </RadioButtonGroup>

		<div className="page-footer">
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

export default PageOne;
