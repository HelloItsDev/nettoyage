import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Wizard from '../components/Form/Wizard'
import {Aux} from '../components/utility'

import logoGratuit from '../img/gratuit.png'
import logoExpertise from '../img/expertise.png'
import logoNettoyage from '../img/nettoyage.png'
import logoForm from '../img/formulaire.png'
import logoPhone from '../img/phone.png'
import logovalidation from '../img/validation.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
    <Aux>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
    >
  <div className="intro" >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow: 'white 0.5rem 0px 0px, white -0.5rem 0px 0px',
          backgroundColor: 'white',
          color: 'black',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {title}
      </h1>
      <h2 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: 'white 0.5rem 0px 0px, white -0.5rem 0px 0px',
            backgroundColor: 'white',
            color: 'black',
            lineHeight: '1',
            padding: '0.25em'
          }}
      >
        {subheading}
      </h2>
      <div className="lp-input "> 
        <Wizard />
      </div>
      </div>
    </div>
    <div className="section-services container">
      <div className="titre"><p>POURQUOI FAIRE APPEL À NOS <span>SERVICES</span> ?</p></div>
      <div className="text">
        <p>Trouvez une entreprise de nettoyage peut s'avérer compliqué. En passant par nous, vous vous assurez de trouver des sociétés de confiance au meilleur prix tout en gagnant du temps.</p>
      </div>
      <div className="services">
        <div className="service">
          <img src={logoGratuit} alt="gratuit"/>
          <h3>Service 100% Gratuit</h3>
          <p> Notre service est gratuit et sans engagement. La transparence fait partie intégrante de nos valeurs et de notre philosophie. </p>
        </div>
        <div className="service">
          <img src={logoExpertise} alt="expertise"/>
          <h3>Expertise sans engagement</h3>
          <p> Vous profitez de l’expertise de nos partenaires sans engagement. Choisissez l’offre qui vous convient. </p>
        </div>
        <div className="service">
            <img src={logoNettoyage} alt="partenaires qualifiés en nettoyage"/>
          <h3>Partenaires de confiance</h3>
          <p> Nous vous permetons d'entrer en contact avec des professionnels recommandé par nos utilisateurs. </p>
        </div>
      </div>
    </div>
    <div className="section-fonctionnement">
      <div className="titre"><h2>COMPAREZ LES MEILLEURS <span>SOCIÉTÉS DE NETTOYAGES</span></h2></div>
      <div className="text container">
        <p>
          Nos <span>experts en nettoyage</span> prennent contact avec vous pour vous proposer une offre adaptées à vos besoins. 
          Vous n’avez ensuite plus qu’à choisir l’offre qui vous convient le mieux pour un <span>nettoyage efficace</span> au <span>meilleur prix</span>.
        </p>
        <br />
        <p>
          Nos partenaires sont selectionnés selon plusieurs critères, les plus importants étants,
           leurs <span>professionalismes</span>, leurs <span>réputations</span>, leurs <span>proximités</span> et leurs <span>prix</span>.
        </p>
        <br />
        <br />
        <Link to="/guide">Consultez notre guide pour bien choisir votre société de nettoyage.</Link>
        <br />
        <br />

        <Link to="/demande-de-devis" className="button is-primary">Faire une demande de devis</Link>
              
      </div>
    </div>
    <div className="section-resume container" >
    <div className="titre"><h2>COMMENT ÇA MARCHE ?</h2></div>
    <div className="actions" >
    <div className="action">
        <img src={logoForm} alt="définission les besoins"/>
        <h3>Je définis mon besoin</h3>
        <p>en remplissant le formulaire</p>
      </div>
      <p> > </p>
      <div className="action">
        <img src={logoPhone} alt="reception des devis"/>
        <h3>Je reçois des devis</h3>
        <p>des meilleurs entreprises de nettoyages</p>
      </div>
      <p> > </p>
      <div className="action">
        <img src={logovalidation} style={{maxHeight: '50px'}} alt="Choix du prestataire"/>
        <h3>Je souscris</h3>
        <p>à la meilleure offre</p>
      </div>
    </div>
      
    </div>
  </Aux>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
