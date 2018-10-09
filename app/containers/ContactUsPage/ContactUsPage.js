/*
 * ContactUsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardContactUs from './CardContactUs';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

export default class ContactUsPage extends React.Component {
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
          <title>{companyName.CONTACTPAGETITLE}</title>
          <meta
            name="description"
            content={companyName.CONTACTPAGEHEADER}
          />
        </Helmet>
        <h1 className="heading-page">{companyName.CONTACTMOTTO}</h1>
        <CardContactUs />
      </div>
    );
  }
}
