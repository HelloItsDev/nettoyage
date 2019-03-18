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
  phone:"06"
};

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Wizard extends Component {
  state = {
    pageIndex: 0,
    pages: [PageOne, PageTwo, PageThree, PageFour, PageEmail, PagePhone]
  };

    _navigateBack = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex - 1 
        }));
    };

    _navigateNext = (values) => {
        this.setState(prevState => {
          {
            if (window && window.dataLayer) {
              window.dataLayer.push({
                event: 'eec.checkout',
                ecommerce: {
                  actionField: {
                    step: prevState.pageIndex + 1
                  },/* 
                  products: [{
                    id: 'devis',
                    dimension1: values.type,
                    dimension2: values.frequence,
                    dimension3: values.surface,
                    dimension4: values.postalCode,
                    dimension5: values.email,
                    dimension6: values.phone,
                  }] */
                }
              });
            }
          }
          return ({
            pageIndex: prevState.pageIndex + 1
        })
      });
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
                phone: Yup.number().test('len', 'Numéro de télephone incorrect.', val => val.toString().length === 9).required("Le numéro de téléphone est requis."),
              })}
              onSubmit={(values, { setSubmitting }) => {
                
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: encode({ "form-name": "devis", ...values })
                })
                  .then(() => {
                    {
                      window.dataLayer.push({
                        event: 'newQuote',
                        ecommerce: {
                          products: [{
                            id: 'devis',
                            dimension1: values.type,
                            dimension2: values.frequence,
                            dimension3: values.surface,
                            dimension4: values.postalCode,
                            dimension5: values.email,
                            dimension6: values.phone,
                          }]
                        }
                      });
                    }
                    alert("Success!")
                  })
                  .catch(error => alert(error))

              }}
            >
              {props => {
                const { handleSubmit } = props;
                return (
                  <form name="devis" data-netlify="true" netlify-honeypot="hello" onSubmit={handleSubmit}>
                    <input type="hidden" name="email" />
                    <input type="hidden" name="postalCode" />
                    <input type="hidden" name="type" />
                    <input type="hidden" name="phone" />
                    <input type="hidden" name="surface" />
                    <input type="hidden" name="frequence" />
                    <input type="hidden" name="hello" />
                    {this._renderPage(props)}
                  </form>
                );
              }}
            </Formik>
    );
  }
}

export default Wizard;
