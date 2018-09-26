/*
 * ServicesPage
 *
 * List all the features
 */
import React from 'react';
import PaperProduct from './PaperServices';
import { Helmet } from 'react-helmet';
import Solares from 'images/logos/solares.png';
import './style.scss';

const companyList =[
  ['Sun Solares', Solares,'This is My Fav Brand. It earns me the maximum business.']
  ];

export default class ServicesPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Services Page</title>
          <meta
            name="description"
            content="Services Page of Gulati Pharma application"
          />
        </Helmet>
        <h1 className="heading-page">Services we offer...</h1>
        <PaperProduct companyProducts={companyList}/>        
      </div>
    );
  }
}
