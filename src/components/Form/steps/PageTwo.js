import React from 'react';
import { RadioButton, RadioButtonGroup} from '../FormFields'
import { Field } from 'formik';

const PageTwo = props => (
	<div className={`page page${props.pageIndex}`}>
		<p className="question"> À quelle fréquence souhaitez-vous bénéficier du service de nettoyage ? </p>
		<RadioButtonGroup
            id="frequence"
            value={props.values.frequence}
            error={props.errors.frequence}
            touched={props.touched.frequence}
          >
            <Field
              component={RadioButton}
              name="frequence"
              id="Juste une fois"
			  label="Juste une fois"
							
            />
            <Field
              component={RadioButton}
              name="frequence"
              id="Plus d'une fois par semaine"
              label="Plus d'une fois par semaine"
            />
            <Field
              component={RadioButton}
              name="frequence"
              id="Une fois par semaine"
              label="Une fois par semaine"
            />
            <Field
              component={RadioButton}
              name="frequence"
              id="Une à deux fois par mois"
              label="Une à deux fois par mois"
            />
            <Field
              component={RadioButton}
              name="frequence"
              id="Moins d'une fois par mois"
              label="Moins d'une fois par mois"
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
			onClick={() => props.navigateNext(props.values)}
			className="button is-primary"
		>
			Continuer
		</button>
		</div>
		
	</div>
);

export default PageTwo;
