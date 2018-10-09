/*
 * LocateUsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardLocateUs from './CardLocateUs';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

export default class LocateUsPage extends React.Component {
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
          <title>{companyName.LOCATEMESSAGE}</title>
          <meta
            name="description"
            content={companyName.LOCATEPAGEHEADER}
          />
        </Helmet>
        <h1 className="heading-page">{companyName.LOCATEQUOTE}</h1>
        <CardLocateUs />
      </div>
    );
  }
}
