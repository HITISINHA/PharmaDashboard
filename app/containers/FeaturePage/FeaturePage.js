/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

export default class FeaturePage extends React.Component {
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
          <title>{companyName.FEATUREPAGETITLE}</title>
          <meta
            name="description"
            content={companyName.FEATUREPAGEHEADER}
          />
        </Helmet>
        <h1>{companyName.FEATUREMESSAGE}</h1>       
      </div>
    );
  }
}
