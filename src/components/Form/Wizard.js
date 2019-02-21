import React, { Component } from "react";
import { navigate } from 'gatsby-link'
import { Formik } from "formik";
import * as Yup from "yup";
import PageOne from "./steps/PageOne";
import PageTwo from "./steps/PageTwo";
import PageThree from "./steps/PageThree";
import PageFour from "./steps/PageFour";
import PagePhone from "./steps/PagePhone";
import PageEmail from "./steps/PageEmail";

const initialValues = {
  type:"bureau",
  frequence :"Juste une fois",
  surface :"100 - 200 m²",
  postalCode: "",
  email:"",
  phone:"06",
  'form-name': "Devis"
};

class Wizard extends Component {
  state = {
    pageIndex: 0,
    pages: [PageOne, PageTwo, PageThree, PageFour, PageEmail, PagePhone,]
  };

    _navigateBack = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex - 1 
        }));
    };

    _navigateNext = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex + 1
        }));
    };

    _renderPage = formProps => {
        const Page = this.state.pages[this.state.pageIndex];

        return (
            <Page
                {...formProps}
                navigateBack={this._navigateBack}
                navigateNext={this._navigateNext}
                pageIndex={this.state.pageIndex}
            />
        );
    };
  render() {
    return (
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("L'email est incorrect."),
                postalCode: Yup.number().test('len', 'Code postal incorrect.', val => val.toString().length === 5).required("Le code postal est requis."),
                // phone: Yup.number().test('len', 'Télephone incorrect.', val => val.toString().length === 10).required("Le numéro de téléphone est requis."),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 1000);
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: JSON.stringify(values, null, 2),
                })
                  .then(() => navigate('/thank you'))
                  .catch(error => alert(error))

              }}
              name="devis"
              data-netlify="true"
            >
              {props => {
                const { handleSubmit } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    {this._renderPage(props)}
                  </form>
                );
              }}
            </Formik>
    );
  }
}

export default Wizard;
