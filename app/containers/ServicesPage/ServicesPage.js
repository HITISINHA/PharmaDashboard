/*
 * ServicesPage
 *
 * List all the features
 */
import React from 'react';
import PaperProduct from './PaperServices';
import { Helmet } from 'react-helmet';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

export default class ServicesPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const companyName = BUSINESSCONFIG.COMPANY;
    return (
      <div className="feature-page">
        <Helmet>
          <title>{companyName.SERVICESPAGETITLE}</title>
          <meta
            name="description"
            content={companyName.SERVICESPAGEHEADER}
          />
        </Helmet>
        <h1 className="heading-page">{companyName.SERVICESSQUOTE}</h1>
        <PaperProduct companyProducts={companyName.SERVICES} />        
      </div>
    );
  }
}
